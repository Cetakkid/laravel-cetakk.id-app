(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["order"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/customer/OrderForm.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/customer/OrderForm.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var form_serializer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! form-serializer */ "./node_modules/form-serializer/jquery.serialize-object.js");
/* harmony import */ var form_serializer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(form_serializer__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* eslint-disable */



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'OrderForm',
  data: function data() {
    return {
      name: '',
      no_telp: '',
      rangkap: '',
      deadline_time: '',
      jenis_kertas: '',
      pilih_jilid: '',
      pilih_tinta: '',
      jasa_antar: '',
      file: '',
      catatan: '',
      agreement: ''
    };
  },
  mounted: function mounted() {
    var formData = new FormData();
    formData.append('file', this.file);
    var result = formData.getAll('file');
    console.log(result);
  },
  methods: {
    handleDocument: function handleDocument() {
      //this.file = this.$refs.file.files[0]
      var file = this.$refs.file.files[0];
      var fr = new FileReader();
      fr.fileName = file.name;
      fr.readAsDataURL(file);
    },
    onSubmit: function onSubmit() {
      /*
      const $form = $('form#form-order')
      let formData = new FormData()
      const file = formData.append('file', this.file)
      */

      /*
      const payload = {
      	name: this.name,
      	no_telp: this.no_telp,
      	rangkap: this.rangkap,
      	jenis_kertas: this.jenis_kertas,
      	//deadline_time: this.deadline_time,
      	//file: file,
      	pilih_jilid: this.pilih_jilid,
      	pilih_tinta: this.pilih_tinta,
      	jasa_antar: this.jasa_antar,
      	catatan: this.catatan,
      	agreement: this.agreement,
      }
      */
      var form = document.forms['form-order'];
      var formdata = new FormData(form);
      var url = 'https://script.google.com/macros/s/AKfycbxiWfak4ph426U6VCBygZsW18hcdGLP-ySJQWIxyirhGCM8X7k/exec';
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(url, formdata).then(function (response) {
        console.log(response.data);
        alert('Pemesanan berhasil!' + response.status); //this.$router.push({path: '/'})
      })["catch"](function (error) {
        alert('Terdapat kesalahan : ' + error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/customer/OrderForm.vue?vue&type=style&index=0&id=2c529d2c&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/customer/OrderForm.vue?vue&type=style&index=0&id=2c529d2c&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.form-order[data-v-2c529d2c]{\n  padding-top: 15vh;\n}\n.form-group[data-v-2c529d2c] {\n\ttext-align: left;\n\tfont-size: 14px ;\n}\n.small-input[data-v-2c529d2c] {\n\twidth: 7%\n}\n.radio[data-v-2c529d2c] {\n\ttext-align: left;\n\tfont-size: 12px;\n}\n[data-v-2c529d2c]::-webkit-input-placeholder {\n\tfont-size: 12px;\n}\n[data-v-2c529d2c]::-moz-placeholder {\n\tfont-size: 12px;\n}\n[data-v-2c529d2c]:-ms-input-placeholder {\n\tfont-size: 12px;\n}\n[data-v-2c529d2c]::-ms-input-placeholder {\n\tfont-size: 12px;\n}\n[data-v-2c529d2c]::placeholder {\n\tfont-size: 12px;\n}\ninput[data-v-2c529d2c] {\n\tdisplay: inline-block;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/form-serializer/jquery.serialize-object.js":
/*!*****************************************************************!*\
  !*** ./node_modules/form-serializer/jquery.serialize-object.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * jQuery serializeObject
 * @copyright 2014, macek <paulmacek@gmail.com>
 * @link https://github.com/macek/jquery-serialize-object
 * @license BSD
 * @version 2.5.0
 */
(function(root, factory) {

  // AMD
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(exports, $) {
      return factory(exports, $);
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }

  // CommonJS
  else { var $; }

}(this, function(exports, $) {

  var patterns = {
    validate: /^[a-z_][a-z0-9_]*(?:\[(?:\d*|[a-z0-9_]+)\])*$/i,
    key:      /[a-z0-9_]+|(?=\[\])/gi,
    push:     /^$/,
    fixed:    /^\d+$/,
    named:    /^[a-z0-9_]+$/i
  };

  function FormSerializer(helper, $form) {

    // private variables
    var data     = {},
        pushes   = {};

    // private API
    function build(base, key, value) {
      base[key] = value;
      return base;
    }

    function makeObject(root, value) {

      var keys = root.match(patterns.key), k;

      // nest, nest, ..., nest
      while ((k = keys.pop()) !== undefined) {
        // foo[]
        if (patterns.push.test(k)) {
          var idx = incrementPush(root.replace(/\[\]$/, ''));
          value = build([], idx, value);
        }

        // foo[n]
        else if (patterns.fixed.test(k)) {
          value = build([], k, value);
        }

        // foo; foo[bar]
        else if (patterns.named.test(k)) {
          value = build({}, k, value);
        }
      }

      return value;
    }

    function incrementPush(key) {
      if (pushes[key] === undefined) {
        pushes[key] = 0;
      }
      return pushes[key]++;
    }

    function encode(pair) {
      switch ($('[name="' + pair.name + '"]', $form).attr("type")) {
        case "checkbox":
          return pair.value === "on" ? true : pair.value;
        default:
          return pair.value;
      }
    }

    function addPair(pair) {
      if (!patterns.validate.test(pair.name)) return this;
      var obj = makeObject(pair.name, encode(pair));
      data = helper.extend(true, data, obj);
      return this;
    }

    function addPairs(pairs) {
      if (!helper.isArray(pairs)) {
        throw new Error("formSerializer.addPairs expects an Array");
      }
      for (var i=0, len=pairs.length; i<len; i++) {
        this.addPair(pairs[i]);
      }
      return this;
    }

    function serialize() {
      return data;
    }

    function serializeJSON() {
      return JSON.stringify(serialize());
    }

    // public API
    this.addPair = addPair;
    this.addPairs = addPairs;
    this.serialize = serialize;
    this.serializeJSON = serializeJSON;
  }

  FormSerializer.patterns = patterns;

  FormSerializer.serializeObject = function serializeObject() {
    return new FormSerializer($, this).
      addPairs(this.serializeArray()).
      serialize();
  };

  FormSerializer.serializeJSON = function serializeJSON() {
    return new FormSerializer($, this).
      addPairs(this.serializeArray()).
      serializeJSON();
  };

  if (typeof $.fn !== "undefined") {
    $.fn.serializeObject = FormSerializer.serializeObject;
    $.fn.serializeJSON   = FormSerializer.serializeJSON;
  }

  exports.FormSerializer = FormSerializer;

  return FormSerializer;
}));


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/customer/OrderForm.vue?vue&type=style&index=0&id=2c529d2c&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/customer/OrderForm.vue?vue&type=style&index=0&id=2c529d2c&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./OrderForm.vue?vue&type=style&index=0&id=2c529d2c&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/customer/OrderForm.vue?vue&type=style&index=0&id=2c529d2c&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/customer/OrderForm.vue?vue&type=template&id=2c529d2c&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/customer/OrderForm.vue?vue&type=template&id=2c529d2c&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "form-order", attrs: { id: "form-order" } }, [
    _c(
      "form",
      {
        attrs: { name: "form-order" },
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.onSubmit($event)
          }
        }
      },
      [
        _c(
          "h3",
          { staticClass: "m-auto font-weight-bold text-left w-75 pb-3" },
          [_vm._v("Formulir Pemesanan Percetakan")]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "form-group w-75 m-auto pb-3" }, [
          _c("label", { attrs: { for: "name" } }, [_vm._v("Nama Kamu")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.name,
                expression: "name"
              }
            ],
            staticClass: "form-control",
            attrs: {
              type: "text",
              name: "name",
              id: "name",
              "aria-describedby": "nameHelp",
              placeholder: "Nama kamu siapa?",
              required: ""
            },
            domProps: { value: _vm.name },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.name = $event.target.value
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group w-75 m-auto pb-3" }, [
          _c("label", { attrs: { for: "no_telp" } }, [
            _vm._v("Nomor Telepon Whatsapp")
          ]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.no_telp,
                expression: "no_telp"
              }
            ],
            staticClass: "form-control",
            attrs: {
              type: "text",
              name: "no_telp",
              id: "no_telp",
              "aria-describedby": "no_telpHelp",
              placeholder: "Minta nomor kamu dong~",
              required: ""
            },
            domProps: { value: _vm.no_telp },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.no_telp = $event.target.value
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group w-75 m-auto pb-3" }, [
          _c("label", { attrs: { for: "jenis_kertas" } }, [
            _vm._v("Jenis Kertas")
          ]),
          _vm._v(" "),
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.jenis_kertas,
                  expression: "jenis_kertas"
                }
              ],
              staticClass: "form-control",
              attrs: { name: "jenis_kertas", id: "jenis_kertas", required: "" },
              on: {
                change: function($event) {
                  var $$selectedVal = Array.prototype.filter
                    .call($event.target.options, function(o) {
                      return o.selected
                    })
                    .map(function(o) {
                      var val = "_value" in o ? o._value : o.value
                      return val
                    })
                  _vm.jenis_kertas = $event.target.multiple
                    ? $$selectedVal
                    : $$selectedVal[0]
                }
              }
            },
            [
              _c("option", [_vm._v("HVS A4")]),
              _vm._v(" "),
              _c("option", [_vm._v("HVS F4")]),
              _vm._v(" "),
              _c("option", [_vm._v("HVS A3")]),
              _vm._v(" "),
              _c("option", [_vm._v("Ivory A4")]),
              _vm._v(" "),
              _c("option", [_vm._v("Ivory A3")]),
              _vm._v(" "),
              _c("option", [_vm._v("Art Paper")])
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group w-75 m-auto pb-3" }, [
          _c("label", { attrs: { for: "pilih_tinta" } }, [
            _vm._v("Pilih Tinta")
          ]),
          _vm._v(" "),
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.pilih_tinta,
                  expression: "pilih_tinta"
                }
              ],
              staticClass: "form-control",
              attrs: { name: "pilih_tinta", id: "pilih_tinta", required: "" },
              on: {
                change: function($event) {
                  var $$selectedVal = Array.prototype.filter
                    .call($event.target.options, function(o) {
                      return o.selected
                    })
                    .map(function(o) {
                      var val = "_value" in o ? o._value : o.value
                      return val
                    })
                  _vm.pilih_tinta = $event.target.multiple
                    ? $$selectedVal
                    : $$selectedVal[0]
                }
              }
            },
            [
              _c("option", [_vm._v("Hitam putih")]),
              _vm._v(" "),
              _c("option", [_vm._v("Warna")]),
              _vm._v(" "),
              _c("option", [_vm._v("Full warna")])
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group w-75 m-auto pb-3" }, [
          _c("label", { attrs: { for: "pilih_jilid" } }, [
            _vm._v("Pilih Jilid")
          ]),
          _vm._v(" "),
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.pilih_jilid,
                  expression: "pilih_jilid"
                }
              ],
              staticClass: "form-control",
              attrs: { name: "pilih_jilid", id: "pilih_jilid", required: "" },
              on: {
                change: function($event) {
                  var $$selectedVal = Array.prototype.filter
                    .call($event.target.options, function(o) {
                      return o.selected
                    })
                    .map(function(o) {
                      var val = "_value" in o ? o._value : o.value
                      return val
                    })
                  _vm.pilih_jilid = $event.target.multiple
                    ? $$selectedVal
                    : $$selectedVal[0]
                }
              }
            },
            [
              _c("option", [_vm._v("Mika")]),
              _vm._v(" "),
              _c("option", [_vm._v("Hard Cover")]),
              _vm._v(" "),
              _c("option", [_vm._v("Tanpa Jilid")])
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group w-75 m-auto pb-3" }, [
          _c("label", { attrs: { for: "rangkap" } }, [
            _vm._v("Jumlah Rangkap")
          ]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.rangkap,
                expression: "rangkap"
              }
            ],
            staticClass: "form-control d-block small-input",
            attrs: {
              type: "number",
              min: "1",
              name: "rangkap",
              id: "rangkap",
              "aria-describedby": "rangkapHelp",
              placeholder: "1",
              required: ""
            },
            domProps: { value: _vm.rangkap },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.rangkap = $event.target.value
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group m-auto w-75 pb-3" }, [
          _c("div", { staticClass: "custom-file" }, [
            _c(
              "label",
              { staticClass: "custom-file-label", attrs: { for: "file" } },
              [_vm._v("Upload dokumen yang ingin dicetak (PDF)")]
            ),
            _vm._v(" "),
            _c("input", {
              ref: "file",
              staticClass: "custom-file-input w-50 d-block",
              attrs: { type: "file", id: "file", name: "file" },
              on: {
                change: function($event) {
                  return _vm.handleDocument()
                }
              }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group w-75 m-auto pb-3 pt-3" }, [
          _c("label", { attrs: { for: "catatan" } }, [
            _vm._v("Tambahkan catatan untuk vendor")
          ]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.catatan,
                expression: "catatan"
              }
            ],
            staticClass: "form-control d-block",
            attrs: {
              type: "text",
              name: "catatan",
              id: "catatan",
              "aria-describedby": "catatanHelp",
              placeholder: "Misal: Print yang rapih ya"
            },
            domProps: { value: _vm.catatan },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.catatan = $event.target.value
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group pb-3 pt-3 w-75 m-auto" }, [
          _c("label", { staticClass: "w-75 m-auto pb-2" }, [
            _vm._v("Jasa Antar")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "custom-control custom-radio" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.jasa_antar,
                  expression: "jasa_antar"
                }
              ],
              staticClass: "custom-control-input",
              attrs: {
                type: "radio",
                id: "jasa_antar1",
                name: "jasa_antar",
                value: "Ya",
                required: ""
              },
              domProps: { checked: _vm._q(_vm.jasa_antar, "Ya") },
              on: {
                change: function($event) {
                  _vm.jasa_antar = "Ya"
                }
              }
            }),
            _vm._v(" "),
            _c(
              "label",
              {
                staticClass: "custom-control-label radio",
                attrs: { for: "jasa_antar1" }
              },
              [_vm._v("Ya")]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "custom-control custom-radio pb-3" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.jasa_antar,
                  expression: "jasa_antar"
                }
              ],
              staticClass: "custom-control-input",
              attrs: {
                type: "radio",
                id: "jasa_antar2",
                value: "Tidak",
                name: "jasa_antar",
                required: ""
              },
              domProps: { checked: _vm._q(_vm.jasa_antar, "Tidak") },
              on: {
                change: function($event) {
                  _vm.jasa_antar = "Tidak"
                }
              }
            }),
            _vm._v(" "),
            _c(
              "label",
              {
                staticClass: "custom-control-label radio",
                attrs: { for: "jasa_antar2" }
              },
              [_vm._v("Tidak")]
            )
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "custom-control custom-checkbox w-75 m-auto pb-3" },
          [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.agreement,
                  expression: "agreement"
                }
              ],
              staticClass: "custom-control-input",
              attrs: {
                type: "checkbox",
                name: "agreement",
                id: "customCheck1",
                required: ""
              },
              domProps: {
                checked: Array.isArray(_vm.agreement)
                  ? _vm._i(_vm.agreement, null) > -1
                  : _vm.agreement
              },
              on: {
                change: function($event) {
                  var $$a = _vm.agreement,
                    $$el = $event.target,
                    $$c = $$el.checked ? true : false
                  if (Array.isArray($$a)) {
                    var $$v = null,
                      $$i = _vm._i($$a, $$v)
                    if ($$el.checked) {
                      $$i < 0 && (_vm.agreement = $$a.concat([$$v]))
                    } else {
                      $$i > -1 &&
                        (_vm.agreement = $$a
                          .slice(0, $$i)
                          .concat($$a.slice($$i + 1)))
                    }
                  } else {
                    _vm.agreement = $$c
                  }
                }
              }
            }),
            _vm._v(" "),
            _c(
              "label",
              {
                staticClass: "custom-control-label radio",
                attrs: { for: "customCheck1" }
              },
              [
                _vm._v(
                  "Dengan ini saya telah mengirimkan data yang valid dan dapat dipertanggung jawabkan sebagaimana mestinya. Kami disini juga tidak akan menyalahgunakan data yang kamu kirim untuk kepentingan yang menyangkut privasi."
                )
              ]
            )
          ]
        ),
        _vm._v(" "),
        _vm._m(0)
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group w-75 m-auto pb-4" }, [
      _c(
        "button",
        { staticClass: "btn btn-primary", attrs: { type: "submit" } },
        [_vm._v("Submit")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/customer/OrderForm.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/customer/OrderForm.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OrderForm_vue_vue_type_template_id_2c529d2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OrderForm.vue?vue&type=template&id=2c529d2c&scoped=true& */ "./resources/js/components/customer/OrderForm.vue?vue&type=template&id=2c529d2c&scoped=true&");
/* harmony import */ var _OrderForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OrderForm.vue?vue&type=script&lang=js& */ "./resources/js/components/customer/OrderForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _OrderForm_vue_vue_type_style_index_0_id_2c529d2c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OrderForm.vue?vue&type=style&index=0&id=2c529d2c&scoped=true&lang=css& */ "./resources/js/components/customer/OrderForm.vue?vue&type=style&index=0&id=2c529d2c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _OrderForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OrderForm_vue_vue_type_template_id_2c529d2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _OrderForm_vue_vue_type_template_id_2c529d2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2c529d2c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/customer/OrderForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/customer/OrderForm.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/customer/OrderForm.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./OrderForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/customer/OrderForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/customer/OrderForm.vue?vue&type=style&index=0&id=2c529d2c&scoped=true&lang=css&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/customer/OrderForm.vue?vue&type=style&index=0&id=2c529d2c&scoped=true&lang=css& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderForm_vue_vue_type_style_index_0_id_2c529d2c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./OrderForm.vue?vue&type=style&index=0&id=2c529d2c&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/customer/OrderForm.vue?vue&type=style&index=0&id=2c529d2c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderForm_vue_vue_type_style_index_0_id_2c529d2c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderForm_vue_vue_type_style_index_0_id_2c529d2c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderForm_vue_vue_type_style_index_0_id_2c529d2c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderForm_vue_vue_type_style_index_0_id_2c529d2c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderForm_vue_vue_type_style_index_0_id_2c529d2c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/customer/OrderForm.vue?vue&type=template&id=2c529d2c&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/customer/OrderForm.vue?vue&type=template&id=2c529d2c&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderForm_vue_vue_type_template_id_2c529d2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./OrderForm.vue?vue&type=template&id=2c529d2c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/customer/OrderForm.vue?vue&type=template&id=2c529d2c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderForm_vue_vue_type_template_id_2c529d2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderForm_vue_vue_type_template_id_2c529d2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);