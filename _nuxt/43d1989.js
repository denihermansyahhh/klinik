(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{1348:function(e,t,n){"use strict";n.r(t);var o=n(642),l={layout:"administrator/dashboard",data:function(){return{items:[],form:{nama:"Paviliun\t",fasilitas:"4 Tempat Tidur, 4 Kipas Angin, 4 Meja, 8 Kursi",tipe:"BPJS"},tipe:o.a,show:!0}},methods:{onSubmit:function(e){e.preventDefault(),alert(JSON.stringify(this.form))},onReset:function(e){var t=this;e.preventDefault(),this.form.nama="",this.form.fasilitas="",this.show=!1,this.$nextTick((function(){t.show=!0}))}}},r=n(10),v=n(13),c=n.n(v),d=n(170),f=n(189),m=n(119),_=n(171),h=n(184),w=n(172),x=n(558),k=n(14),V=n(88),S=n(191),component=Object(r.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[n("v-btn",{attrs:{color:"warning","nuxt-link":"",to:".",outline:"",depressed:""}},[e._v("Kembali")]),e._v(" "),n("br"),e._v(" "),n("br"),e._v(" "),n("v-card",[n("v-toolbar",{attrs:{card:""}},[n("h3",[e._v("Edit Data Ruangan")])]),e._v(" "),n("v-card-text",[e.show?n("b-form",{on:{submit:e.onSubmit,reset:e.onReset}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{lg12:"",sm12:""}},[n("v-text-field",{attrs:{label:"Nama Ruangan:",name:"name",placeholder:"Masukan Nama Ruangan",required:""},model:{value:e.form.nama,callback:function(t){e.$set(e.form,"nama",t)},expression:"form.nama"}})],1),e._v(" "),n("v-flex",{attrs:{lg12:"",sm12:""}},[n("v-select",{attrs:{label:"Tipe Ruangan",items:e.tipe,autocomplete:"","item-text":"tipe_ruangan","item-value":"tipe_ruangan",required:""},model:{value:e.form.tipe,callback:function(t){e.$set(e.form,"tipe",t)},expression:"form.tipe"}})],1),e._v(" "),n("v-flex",{attrs:{lg12:"",sm12:""}},[n("v-text-field",{attrs:{label:"Tipe Ruangan",name:"fasilitas",placeholder:"Fasilitas Ruangan",required:""},model:{value:e.form.fasilitas,callback:function(t){e.$set(e.form,"fasilitas",t)},expression:"form.fasilitas"}})],1),e._v(" "),n("v-spacer"),e._v(" "),n("v-card-actions",{staticClass:"pb-4 pl-3"},[n("v-btn",{attrs:{type:"submit",color:"primary",depressed:""}},[e._v("Simpan")]),e._v(" "),n("v-btn",{attrs:{type:"reset",color:"pink",outline:"",depressed:""}},[e._v("Kosongkan")])],1)],1)],1):e._e()],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{VBtn:d.a,VCard:f.a,VCardActions:m.a,VCardText:m.b,VContainer:_.a,VFlex:h.a,VLayout:w.a,VSelect:x.a,VSpacer:k.a,VTextField:V.a,VToolbar:S.a})},558:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var o=n(560),l=(n(61),n(563),n(561).a),r=n(62),v=n(30),c=n(18),d=l.extend({name:"v-overflow-btn",props:{segmented:Boolean,editable:Boolean,transition:o.a.options.props.transition},computed:{classes:function(){return Object.assign(l.options.computed.classes.call(this),{"v-overflow-btn":!0,"v-overflow-btn--segmented":this.segmented,"v-overflow-btn--editable":this.editable})},isAnyValueAllowed:function(){return this.editable||l.options.computed.isAnyValueAllowed.call(this)},isSingle:function(){return!0},computedItems:function(){return this.segmented?this.allItems:this.filteredItems},$_menuProps:function(){var e=l.options.computed.$_menuProps.call(this);return e.transition=e.transition||"v-menu-transition",e}},methods:{genSelections:function(){return this.editable?l.options.methods.genSelections.call(this):o.a.options.methods.genSelections.call(this)},genCommaSelection:function(e,t,n){return this.segmented?this.genSegmentedBtn(e):o.a.options.methods.genCommaSelection.call(this,e,t,n)},genInput:function(){var input=r.a.options.methods.genInput.call(this);return input.data.domProps.value=this.editable?this.internalSearch:"",input.data.attrs.readonly=!this.isAnyValueAllowed,input},genLabel:function(){if(this.editable&&this.isFocused)return null;var label=r.a.options.methods.genLabel.call(this);return label?(label.data.style={},label):label},genSegmentedBtn:function(e){var t=this,n=this.getValue(e),o=this.computedItems.find((function(i){return t.getValue(i)===n}))||e;return o.text&&o.callback?this.$createElement(v.a,{props:{flat:!0},on:{click:function(e){e.stopPropagation(),o.callback(e)}}},[o.text]):(Object(c.c)("When using 'segmented' prop without a selection slot, items must contain both a text and callback property",this),null)}}}),f=n(559),m=n(197),_=n(196),h={functional:!0,$_wrapperFor:o.a,props:{autocomplete:Boolean,combobox:Boolean,multiple:Boolean,tags:Boolean,editable:Boolean,overflow:Boolean,segmented:Boolean},render:function(e,t){var n=t.props,data=t.data,r=t.slots,v=t.parent;Object(_.a)(data);var w=Object(m.a)(r(),e);return n.autocomplete&&Object(c.d)("<v-select autocomplete>","<v-autocomplete>",h,v),n.combobox&&Object(c.d)("<v-select combobox>","<v-combobox>",h,v),n.tags&&Object(c.d)("<v-select tags>","<v-combobox multiple>",h,v),n.overflow&&Object(c.d)("<v-select overflow>","<v-overflow-btn>",h,v),n.segmented&&Object(c.d)("<v-select segmented>","<v-overflow-btn segmented>",h,v),n.editable&&Object(c.d)("<v-select editable>","<v-overflow-btn editable>",h,v),data.attrs=data.attrs||{},n.combobox||n.tags?(data.attrs.multiple=n.tags,e(f.a,data,w)):n.autocomplete?(data.attrs.multiple=n.multiple,e(l,data,w)):n.overflow||n.segmented||n.editable?(data.attrs.segmented=n.segmented,data.attrs.editable=n.editable,e(d,data,w)):(data.attrs.multiple=n.multiple,e(o.a,data,w))}};t.b=h},559:function(e,t,n){"use strict";var o=n(562);t.a=o.a},563:function(e,t,n){var content=n(564);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(12).default)("50fa3656",content,!0,{sourceMap:!1})},564:function(e,t,n){var o=n(11)(!1);o.push([e.i,'.theme--light.v-overflow-btn .v-input__control:before,.theme--light.v-overflow-btn .v-input__slot:before{background-color:rgba(0,0,0,.12)!important}.theme--light.v-overflow-btn.v-text-field--outline .v-input__control:before,.theme--light.v-overflow-btn.v-text-field--outline .v-input__slot:before{background-color:transparent!important}.theme--light.v-overflow-btn--editable.v-input--is-focused .v-input__append-inner,.theme--light.v-overflow-btn--editable.v-select--is-menu-active .v-input__append-inner,.theme--light.v-overflow-btn--editable:hover .v-input__append-inner,.theme--light.v-overflow-btn--segmented .v-input__append-inner{border-left:1px solid rgba(0,0,0,.12)}.theme--light.v-overflow-btn.v-input--is-focused .v-input__slot,.theme--light.v-overflow-btn.v-select--is-menu-active .v-input__slot,.theme--light.v-overflow-btn:hover .v-input__slot{background:#fff}.theme--dark.v-overflow-btn .v-input__control:before,.theme--dark.v-overflow-btn .v-input__slot:before{background-color:hsla(0,0%,100%,.12)!important}.theme--dark.v-overflow-btn.v-text-field--outline .v-input__control:before,.theme--dark.v-overflow-btn.v-text-field--outline .v-input__slot:before{background-color:transparent!important}.theme--dark.v-overflow-btn--editable.v-input--is-focused .v-input__append-inner,.theme--dark.v-overflow-btn--editable.v-select--is-menu-active .v-input__append-inner,.theme--dark.v-overflow-btn--editable:hover .v-input__append-inner,.theme--dark.v-overflow-btn--segmented .v-input__append-inner{border-left:1px solid hsla(0,0%,100%,.12)}.theme--dark.v-overflow-btn.v-input--is-focused .v-input__slot,.theme--dark.v-overflow-btn.v-select--is-menu-active .v-input__slot,.theme--dark.v-overflow-btn:hover .v-input__slot{background:#424242}.v-overflow-btn{margin-top:12px;padding-top:0}.v-overflow-btn:not(.v-overflow-btn--editable)>.v-input__control>.v-input__slot{cursor:pointer}.v-overflow-btn .v-select__slot{height:48px}.v-overflow-btn .v-select__slot input{margin-left:16px;cursor:pointer}.v-overflow-btn .v-select__selection--comma:first-child{margin-left:16px}.v-overflow-btn .v-input__slot{transition:.3s cubic-bezier(.25,.8,.5,1)}.v-overflow-btn .v-input__slot:after{content:none}.v-overflow-btn .v-label{margin-left:16px;top:calc(50% - 10px)}.v-overflow-btn .v-input__append-inner{width:48px;height:48px;align-self:auto;align-items:center;margin-top:0;padding:0;flex-shrink:0}.v-overflow-btn .v-input__append-outer,.v-overflow-btn .v-input__prepend-outer{margin-top:12px;margin-bottom:12px}.v-overflow-btn .v-input__control:before{height:1px;top:-1px;content:"";left:0;position:absolute;transition:.3s cubic-bezier(.25,.8,.5,1);width:100%}.v-overflow-btn.v-input--is-focused .v-input__slot,.v-overflow-btn.v-select--is-menu-active .v-input__slot{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-overflow-btn .v-select__selections{width:0}.v-overflow-btn--segmented .v-select__selections{flex-wrap:nowrap}.v-overflow-btn--segmented .v-select__selections .v-btn{border-radius:0;margin:0 -16px 0 0;height:48px;width:100%}.v-overflow-btn--segmented .v-select__selections .v-btn__content{justify-content:start}.v-overflow-btn--segmented .v-select__selections .v-btn__content:before{background-color:transparent}.v-overflow-btn--editable .v-select__slot input{cursor:text}.v-overflow-btn--editable .v-input__append-inner,.v-overflow-btn--editable .v-input__append-inner *{cursor:pointer}',""]),e.exports=o},642:function(e,t,n){"use strict";t.a=[{tipe_ruangan:"BPJS"},{tipe_ruangan:"Umum"},{tipe_ruangan:"Bisnis"},{tipe_ruangan:"VIP"},{tipe_ruangan:"VVIP"}]}}]);