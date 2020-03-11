(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pilih-vendor"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/customer/PilihVendor.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/customer/PilihVendor.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PriceList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PriceList */ "./resources/js/components/customer/PriceList.vue");
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'PilihVendor',
  components: {
    PriceList: _PriceList__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      search: '',
      vendors: [{
        id: 1,
        name: 'Keylacopier • Owner',
        address: 'Jl. Kaliurang KM.13 Besi, Sukoharjo, Ngaglik, Sleman',
        openOrder: '07.00 - 23.00 WIB',
        orderLink: 'https://s.id/vendor1'
      }, {
        id: 2,
        name: 'Dummy Data • Owner',
        address: 'Jl. Kaliurang KM.13 Besi, Sukoharjo, Ngaglik, Sleman',
        openOrder: '07.00 - 23.00 WIB',
        orderLink: 'https://s.id/vendor1'
      }],
      Coming_soons: [{
        name: 'Coming Soon'
      }, {
        name: 'Coming Soon'
      }, {
        name: 'Coming Soon'
      }]
    };
  },
  computed: {
    /*
    filteredList(){
    return this.vendors.filter((vendor) => {
        //vendor.name.toLowerCase().includes(input.value.toLowerCase())
        return vendor.name.match(this.search)
    })
    }
    */
    filteredList: function filteredList() {
      var _this = this;

      return this.vendors.filter(function (vendor) {
        return vendor.name.toLowerCase().includes(_this.search.toLowerCase());
        /* return vendor.name.startsWith(this.search) */
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/customer/PriceList.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/customer/PriceList.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'PriceList',
  computed: {
    totalPrint: function totalPrint() {
      return this.prints.reduce(function (total, item) {
        return total += item.order * item.harga;
      }, 0);
    },
    totalJilid: function totalJilid() {
      return this.jilids.reduce(function (total, item) {
        return total += item.order * item.harga;
      }, 0);
    },
    totalHvs_blackwhite: function totalHvs_blackwhite() {
      return this.hvs_blackwhites.reduce(function (total, item) {
        return total += item.order * item.harga;
      }, 0);
    },
    totalHvs_color: function totalHvs_color() {
      return this.hvs_colors.reduce(function (total, item) {
        return total += item.order * item.harga;
      }, 0);
    },
    totalHvs_fullcolor: function totalHvs_fullcolor() {
      return this.hvs_fullcolors.reduce(function (total, item) {
        return total += item.order * item.harga;
      }, 0);
    },
    totalIvory: function totalIvory() {
      return this.ivorys.reduce(function (total, item) {
        return total += item.order * item.harga;
      }, 0);
    },
    totalArt_paper: function totalArt_paper() {
      return this.art_papers.reduce(function (total, item) {
        return total += item.order * item.harga;
      }, 0);
    },
    totalMica: function totalMica() {
      return this.micas.reduce(function (total, item) {
        return total += item.order * item.harga;
      }, 0);
    },
    totalHard_cover: function totalHard_cover() {
      return this.hard_covers.reduce(function (total, item) {
        return total += item.order * item.harga;
      }, 0);
    },
    totalDelivery: function totalDelivery() {
      return this.deliveries.reduce(function (total, item) {
        return total += item.order * item.harga;
      }, 0);
    }
  },
  methods: {
    orderNow: function orderNow() {
      window.open('https://s.id/vendor1');
    }
  },
  data: function data() {
    return {
      hvs_blackwhites: [{
        etalase: 'HVS Hitam Putih A4',
        harga: 200,
        order: ''
      }, {
        etalase: 'HVS Hitam Putih F4',
        harga: 250,
        order: ''
      }, {
        etalase: 'HVS Hitam Putih A3',
        harga: 1200,
        order: ''
      }],
      hvs_colors: [{
        etalase: 'HVS Warna A4',
        harga: 500,
        order: ''
      }, {
        etalase: 'HVS Warna F4',
        harga: 750,
        order: ''
      }, {
        etalase: 'HVS Warna A3',
        harga: 1200,
        order: ''
      }],
      hvs_fullcolors: [{
        etalase: 'HVS Full Warna A4',
        harga: 1500,
        order: ''
      }, {
        etalase: 'HVS Full WarnaF4',
        harga: 2000,
        order: ''
      }, {
        etalase: 'HVS Full Warna A3',
        harga: 2700,
        order: ''
      }],
      ivorys: [{
        etalase: 'Ivory A4',
        harga: 2500,
        order: ''
      }, {
        etalase: 'Ivory A3',
        harga: 4500,
        order: ''
      }],
      art_papers: [{
        etalase: 'Art Paper A3',
        harga: 2500,
        order: ''
      }],
      micas: [{
        etalase: '1 inch (40 lembar)',
        harga: 3000,
        order: ''
      }, {
        etalase: '1,5 inch (-+100 lembar)',
        harga: 4000,
        order: ''
      }, {
        etalase: '2 inch (-+200 lembar)',
        harga: 5000,
        order: ''
      }],
      hard_covers: [{
        etalase: 'Hard Cover',
        harga: 35000,
        order: ''
      }],
      prints: [{
        etalase: "Kertas A4 Print Hitam/Putih",
        harga: 200,
        order: ''
      }, {
        etalase: "Kertas A4 Print Warna",
        harga: 500,
        order: ''
      }, {
        etalase: "Kertas A4 Print Full Warna",
        harga: 1500,
        order: ''
      }, {
        etalase: "Kertas F4 Print Hitam/Putih",
        harga: 250,
        order: ''
      }, {
        etalase: "Kertas F4 Print Warna",
        harga: 750,
        order: ''
      }, {
        etalase: "Kertas F4 Print Full Warna",
        harga: 2000,
        order: ''
      }],
      jilids: [{
        etalase: "Jilid Mika",
        harga: 3000,
        order: ''
      }, {
        etalase: "Jilid Hardcover",
        harga: 4000,
        order: ''
      }],
      deliveries: [{
        etalase: 'Jl. Kaliurang KM 12 s/d KM 14,5 (2,5 Km)',
        harga: 5000,
        order: ''
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/customer/PilihVendor.vue?vue&type=style&index=0&id=0c007d58&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/customer/PilihVendor.vue?vue&type=style&index=0&id=0c007d58&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.pilihVendor[data-v-0c007d58]{\n  padding-top: 10vh\n}\n*[data-v-0c007d58]{\n  font-size: 14px ;\n}\n.card-Coming-soon[data-v-0c007d58] {\n  position: relative;\n  text-align: center;\n  color: #7e7e7e;\n  height: 100%;\n}\n.caption-Coming-soon[data-v-0c007d58] {\n  position: absolute;\n  bottom: 45%;\n  left: 15%;\n  font-size: 24px;\n}\n.linked[data-v-0c007d58]{\n  text-decoration: none;\n}\n.fade[data-v-0c007d58] {\n  background-color: #080808ad !important;\n}\n.card[data-v-0c007d58]:hover{\n  transform: scale(1.001);\n  transition:0.3s;\n  box-shadow: 2px 2px 5px rgba(54, 54, 54, 0.3);\n}\n.card img[data-v-0c007d58]{\n  width:100%;\n}\n.searchbar[data-v-0c007d58] {\n  border: 2px solid #ddd;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/customer/PriceList.vue?vue&type=style&index=0&id=718c79fe&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/customer/PriceList.vue?vue&type=style&index=0&id=718c79fe&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n*[data-v-718c79fe] {\n  font-family: 'Open Sans';\n}\n.col1[data-v-718c79fe]{width: 70%}\n.col2[data-v-718c79fe]{width: 20%}\n.col3[data-v-718c79fe]{width: 10%}\n.modplus[data-v-718c79fe]{\n  font-weight: 700;\n  font-size: 16px;\n}\n.bg-total[data-v-718c79fe]{\n  border-top:0.5px solid #333;\n  margin-top: 50px;\n}\ninput[data-v-718c79fe] {\n  margin-top: 20px;\n  border: none;\n}\n.modal-badge[data-v-718c79fe] {\n  margin-top: 0 !important;\n  height: 25px !important;\n}\n.modal-content[data-v-718c79fe]{\n  background-color: #f0f0f0 !important;\n  z-index: 9999999;\n}\n.button-order[data-v-718c79fe] {\n  background-color: #0065C2;\n  color: #fff;\n  font-weight: bold;\n  margin-bottom: 10px;\n}\n.button-order[data-v-718c79fe]:hover {\n  opacity: 0.5;\n}\n.logo[data-v-718c79fe] {\n  width: 30%;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/customer/PilihVendor.vue?vue&type=style&index=0&id=0c007d58&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/customer/PilihVendor.vue?vue&type=style&index=0&id=0c007d58&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./PilihVendor.vue?vue&type=style&index=0&id=0c007d58&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/customer/PilihVendor.vue?vue&type=style&index=0&id=0c007d58&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/customer/PriceList.vue?vue&type=style&index=0&id=718c79fe&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/customer/PriceList.vue?vue&type=style&index=0&id=718c79fe&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./PriceList.vue?vue&type=style&index=0&id=718c79fe&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/customer/PriceList.vue?vue&type=style&index=0&id=718c79fe&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/customer/PilihVendor.vue?vue&type=template&id=0c007d58&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/customer/PilihVendor.vue?vue&type=template&id=0c007d58&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "pilihVendor" },
    [
      _c("div", { staticClass: "row p-5" }, [
        _c("div", { staticClass: "col-md-12" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.search,
                expression: "search"
              }
            ],
            staticClass: "d-block form-control searchbar rounded-pill",
            attrs: {
              type: "text",
              placeholder: "Cari Vendor ...",
              id: "search"
            },
            domProps: { value: _vm.search },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.search = $event.target.value
              }
            }
          })
        ])
      ]),
      _vm._v(" "),
      _vm._l(_vm.vendors, function(vendor) {
        return _c(
          "div",
          { key: vendor.id, staticClass: "col-md-3 col-sm-6 mb-2" },
          [
            _c("div", { staticClass: "card card-block" }, [
              _vm._m(0, true),
              _vm._v(" "),
              _c("div", { staticClass: "card-body p-2" }, [
                _c("h3", { staticClass: "font-weight-bold" }, [
                  _vm._v(_vm._s(vendor.name))
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "describer" }, [
                  _vm._v(_vm._s(vendor.address))
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v("Buka pukul "),
                  _c("span", { staticClass: "text-info" }, [
                    _vm._v(_vm._s(vendor.openOrder))
                  ])
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "card-footer p-2" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "btn btn-primary btn-sm mr-2",
                      attrs: { to: "/order/:id" }
                    },
                    [_vm._v("Cetakk")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-warning btn-sm text-light linked",
                      attrs: { "data-toggle": "modal", "data-target": "#pesan" }
                    },
                    [_vm._v("Cek Harga")]
                  )
                ],
                1
              )
            ])
          ]
        )
      }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "modal fade",
          attrs: {
            id: "pesan",
            tabindex: "-1",
            role: "dialog",
            "aria-labelledby": "exampleModalLabel",
            "aria-hidden": "true"
          }
        },
        [true ? _c("PriceList") : undefined],
        1
      )
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-body p-2" }, [
      _c("img", {
        attrs: {
          src: __webpack_require__(/*! ../../assets/keylacopier.jpeg */ "./resources/js/assets/keylacopier.jpeg"),
          alt: "Photo of sunset"
        }
      })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/customer/PriceList.vue?vue&type=template&id=718c79fe&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/customer/PriceList.vue?vue&type=template&id=718c79fe&scoped=true& ***!
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
  return _c(
    "div",
    {
      staticClass: "modal-dialog modal-lg modal-dialog-centered",
      attrs: { role: "document" }
    },
    [
      _c("div", { staticClass: "modal-content" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "modal-body" }, [
          _c("p", { staticClass: "modal-title modplus text-left mb-3" }, [
            _vm._v("Cek Estimasi Harga")
          ]),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass:
                "btn btn-primary text-center mx-auto d-block w-25 mx-auto my-2",
              attrs: {
                href: "#print",
                "data-toggle": "collapse",
                "aria-expanded": "false",
                "aria-controls": "print"
              }
            },
            [_vm._v("Cek Harga Print")]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "collapse multi-collapse text-center",
              attrs: { id: "print" }
            },
            [
              _c(
                "span",
                { staticClass: "font-weight-bold text-center d-block m-2" },
                [_vm._v("Jenis Kertas")]
              ),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "btn btn-primary d-block mx-auto w-25 my-2",
                  attrs: {
                    href: "#hvs",
                    "data-toggle": "collapse",
                    "aria-expanded": "false",
                    "aria-controls": "hvs"
                  }
                },
                [_vm._v("HVS")]
              ),
              _vm._v(" "),
              _c(
                "table",
                {
                  staticClass:
                    "table table-hover table-bordered table-sm text-left collapse multi-collapse",
                  attrs: { id: "hvs" }
                },
                [
                  _vm._m(1),
                  _vm._v(" "),
                  _vm._l(_vm.hvs_blackwhites, function(item) {
                    return _c("tbody", { key: item.id }, [
                      _c("tr", [
                        _c("td", { staticClass: "align-baseline" }, [
                          _vm._v(_vm._s(item.etalase))
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "align-baseline" }, [
                          _vm._v("Rp. " + _vm._s(item.harga))
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "align-baseline" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: item.order,
                                expression: "item.order"
                              }
                            ],
                            staticClass: "form-control modal-badge",
                            attrs: {
                              type: "number",
                              min: "0",
                              placeholder: "0"
                            },
                            domProps: { value: item.order },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(item, "order", $event.target.value)
                              }
                            }
                          })
                        ])
                      ])
                    ])
                  }),
                  _vm._v(" "),
                  _vm._l(_vm.hvs_colors, function(item) {
                    return _c("tbody", { key: item.id }, [
                      _c("tr", [
                        _c("td", { staticClass: "align-baseline" }, [
                          _vm._v(_vm._s(item.etalase))
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "align-baseline" }, [
                          _vm._v("Rp. " + _vm._s(item.harga))
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "align-baseline" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: item.order,
                                expression: "item.order"
                              }
                            ],
                            staticClass: "form-control modal-badge",
                            attrs: {
                              type: "number",
                              min: "0",
                              placeholder: "0"
                            },
                            domProps: { value: item.order },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(item, "order", $event.target.value)
                              }
                            }
                          })
                        ])
                      ])
                    ])
                  }),
                  _vm._v(" "),
                  _vm._l(_vm.hvs_fullcolors, function(item) {
                    return _c("tbody", { key: item.id }, [
                      _c("tr", [
                        _c("td", { staticClass: "align-baseline" }, [
                          _vm._v(_vm._s(item.etalase))
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "align-baseline" }, [
                          _vm._v("Rp. " + _vm._s(item.harga))
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "align-baseline" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: item.order,
                                expression: "item.order"
                              }
                            ],
                            staticClass: "form-control modal-badge",
                            attrs: {
                              type: "number",
                              min: "0",
                              placeholder: "0"
                            },
                            domProps: { value: item.order },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(item, "order", $event.target.value)
                              }
                            }
                          })
                        ])
                      ])
                    ])
                  })
                ],
                2
              ),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "btn btn-primary d-block w-25 mx-auto my-2",
                  attrs: {
                    href: "#ivory",
                    "data-toggle": "collapse",
                    "aria-expanded": "false",
                    "aria-controls": "ivory"
                  }
                },
                [_vm._v("Ivory")]
              ),
              _vm._v(" "),
              _c(
                "table",
                {
                  staticClass:
                    "table table-hover table-bordered table-sm text-left collapse multi-collapse",
                  attrs: { id: "ivory" }
                },
                [
                  _vm._m(2),
                  _vm._v(" "),
                  _vm._l(_vm.ivorys, function(item) {
                    return _c("tbody", { key: item.id }, [
                      _c("tr", [
                        _c("td", { staticClass: "align-baseline" }, [
                          _vm._v(_vm._s(item.etalase))
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "align-baseline" }, [
                          _vm._v("Rp. " + _vm._s(item.harga))
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "align-baseline" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: item.order,
                                expression: "item.order"
                              }
                            ],
                            staticClass: "form-control modal-badge",
                            attrs: {
                              type: "number",
                              min: "0",
                              placeholder: "0"
                            },
                            domProps: { value: item.order },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(item, "order", $event.target.value)
                              }
                            }
                          })
                        ])
                      ])
                    ])
                  })
                ],
                2
              ),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "btn btn-primary d-block w-25 mx-auto my-2",
                  attrs: {
                    "data-toggle": "collapse",
                    href: "#art_paper",
                    "aria-expanded": "false",
                    "aria-controls": "art_paper"
                  }
                },
                [_vm._v("Art Paper")]
              ),
              _vm._v(" "),
              _c(
                "table",
                {
                  staticClass:
                    "table table-hover table-bordered table-sm text-left collapse multi-collapse",
                  attrs: { id: "art_paper" }
                },
                [
                  _vm._m(3),
                  _vm._v(" "),
                  _vm._l(_vm.art_papers, function(item) {
                    return _c("tbody", { key: item.id }, [
                      _c("tr", [
                        _c("td", { staticClass: "align-baseline" }, [
                          _vm._v(_vm._s(item.etalase))
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "align-baseline" }, [
                          _vm._v("Rp. " + _vm._s(item.harga))
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "align-baseline" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: item.order,
                                expression: "item.order"
                              }
                            ],
                            staticClass: "form-control modal-badge",
                            attrs: {
                              type: "number",
                              min: "0",
                              placeholder: "0"
                            },
                            domProps: { value: item.order },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(item, "order", $event.target.value)
                              }
                            }
                          })
                        ])
                      ])
                    ])
                  })
                ],
                2
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass:
                "btn btn-primary text-center mx-auto my-2 d-block w-25",
              attrs: {
                href: "#jilid",
                "data-toggle": "collapse",
                "aria-expanded": "false",
                "aria-controls": "jilid"
              }
            },
            [_vm._v("Cek Harga Jilid")]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "collapse multi-collapse text-center",
              attrs: { id: "jilid" }
            },
            [
              _c(
                "span",
                { staticClass: "font-weight-bold text-center d-block m-2" },
                [_vm._v("Jenis Jilid")]
              ),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "btn btn-primary mx-auto my-2 d-block w-25",
                  attrs: {
                    "data-toggle": "collapse",
                    href: "#mica",
                    "aria-expanded": "false",
                    "aria-controls": "mica"
                  }
                },
                [_vm._v("Mika")]
              ),
              _vm._v(" "),
              _c(
                "table",
                {
                  staticClass:
                    "table table-hover table-bordered table-sm text-left collapse multi-collapse",
                  attrs: { id: "mica" }
                },
                [
                  _vm._m(4),
                  _vm._v(" "),
                  _vm._l(_vm.micas, function(jilid) {
                    return _c("tbody", { key: jilid.id }, [
                      _c("tr", [
                        _c("td", { staticClass: "align-baseline" }, [
                          _vm._v(_vm._s(jilid.etalase))
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "align-baseline" }, [
                          _vm._v("Rp. " + _vm._s(jilid.harga))
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "align-baseline" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: jilid.order,
                                expression: "jilid.order"
                              }
                            ],
                            staticClass: "form-control modal-badge",
                            attrs: {
                              type: "number",
                              min: "0",
                              placeholder: "0"
                            },
                            domProps: { value: jilid.order },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(jilid, "order", $event.target.value)
                              }
                            }
                          })
                        ])
                      ])
                    ])
                  })
                ],
                2
              ),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "btn btn-primary mx-auto my-2 d-block w-25",
                  attrs: {
                    "data-toggle": "collapse",
                    href: "#hard_cover",
                    "aria-expanded": "false",
                    "aria-controls": "hard_cover"
                  }
                },
                [_vm._v("Hard Cover")]
              ),
              _vm._v(" "),
              _c(
                "table",
                {
                  staticClass:
                    "table table-hover table-bordered table-sm text-left collapse multi-collapse",
                  attrs: { id: "hard_cover" }
                },
                [
                  _vm._m(5),
                  _vm._v(" "),
                  _vm._l(_vm.hard_covers, function(jilid) {
                    return _c("tbody", { key: jilid.id }, [
                      _c("tr", [
                        _c("td", { staticClass: "align-baseline" }, [
                          _vm._v(_vm._s(jilid.etalase))
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "align-baseline" }, [
                          _vm._v("Rp. " + _vm._s(jilid.harga))
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "align-baseline" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: jilid.order,
                                expression: "jilid.order"
                              }
                            ],
                            staticClass: "form-control modal-badge",
                            attrs: {
                              type: "number",
                              min: "0",
                              placeholder: "0"
                            },
                            domProps: { value: jilid.order },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(jilid, "order", $event.target.value)
                              }
                            }
                          })
                        ])
                      ])
                    ])
                  })
                ],
                2
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass:
                "btn btn-primary text-center mx-auto my-2 d-block w-25",
              attrs: {
                href: "#delivery",
                "data-toggle": "collapse",
                "aria-expanded": "false",
                "aria-controls": "delivery"
              }
            },
            [_vm._v("Cek Harga Jasa Antar")]
          ),
          _vm._v(" "),
          _c(
            "table",
            {
              staticClass:
                "table table-hover table-bordered table-sm text-left collapse multi-collapse",
              attrs: { id: "delivery" }
            },
            [
              _vm._m(6),
              _vm._v(" "),
              _vm._l(_vm.deliveries, function(item) {
                return _c("tbody", { key: item.id }, [
                  _c("tr", [
                    _c("td", { staticClass: "align-baseline" }, [
                      _vm._v(_vm._s(item.etalase))
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "align-baseline" }, [
                      _vm._v("Rp. " + _vm._s(item.harga))
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "align-baseline" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: item.order,
                            expression: "item.order"
                          }
                        ],
                        staticClass: "form-control modal-badge",
                        attrs: {
                          type: "number",
                          min: "0",
                          max: "1",
                          placeholder: "0"
                        },
                        domProps: { value: item.order },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(item, "order", $event.target.value)
                          }
                        }
                      })
                    ])
                  ])
                ])
              })
            ],
            2
          ),
          _vm._v(" "),
          _c("span", { staticClass: "font-italic text-danger text-left" }, [
            _vm._v("*Hasil print dapat diambil 1x24 jam")
          ]),
          _vm._v(" "),
          _c(
            "table",
            {
              staticClass: "table table-hover table-bordered table-sm text-left"
            },
            [
              _c("tr", { staticClass: "bg-total" }, [
                _c(
                  "td",
                  {
                    staticClass: "align-baseline font-weight-bold",
                    attrs: { colspan: "2" }
                  },
                  [_vm._v("Total Harga")]
                ),
                _vm._v(" "),
                _c("td", { staticClass: "align-baseline" }, [
                  _vm._v(
                    "Rp " +
                      _vm._s(
                        _vm.totalHvs_blackwhite +
                          _vm.totalHvs_color +
                          _vm.totalHvs_fullcolor +
                          _vm.totalIvory +
                          _vm.totalMica +
                          _vm.totalArt_paper +
                          _vm.totalHard_cover +
                          _vm.totalDelivery
                      )
                  )
                ])
              ])
            ]
          ),
          _vm._v(" "),
          _c("input", {
            staticClass: "form-control button-order",
            attrs: {
              type: "button",
              id: "order",
              "data-toggle": "modal",
              "data-target": "#orderModal",
              value: "Pesan Sekarang"
            },
            on: { click: _vm.orderNow }
          })
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header mb-2" }, [
      _c("h2", { staticClass: "modal-title text-left" }, [
        _c("img", {
          staticClass: "img-fluid logo",
          attrs: { src: __webpack_require__(/*! ../../assets/Logo.png */ "./resources/js/assets/Logo.png"), alt: "Logo Cetak" }
        })
      ]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "align-center close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", {}, [
      _c("th", { staticClass: "col1" }, [_vm._v("Barang")]),
      _vm._v(" "),
      _c("th", { staticClass: "col2" }, [_vm._v("Harga/qtc")]),
      _vm._v(" "),
      _c("th", { staticClass: "col3" }, [_vm._v("Pesanan")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", {}, [
      _c("th", { staticClass: "col1" }, [_vm._v("Barang")]),
      _vm._v(" "),
      _c("th", { staticClass: "col2" }, [_vm._v("Harga/qtc")]),
      _vm._v(" "),
      _c("th", { staticClass: "col3" }, [_vm._v("Pesanan")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", {}, [
      _c("th", { staticClass: "col1" }, [_vm._v("Barang")]),
      _vm._v(" "),
      _c("th", { staticClass: "col2" }, [_vm._v("Harga/qtc")]),
      _vm._v(" "),
      _c("th", { staticClass: "col3" }, [_vm._v("Pesanan")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", {}, [
      _c("th", { staticClass: "col1" }, [_vm._v("Barang")]),
      _vm._v(" "),
      _c("th", { staticClass: "col2" }, [_vm._v("Harga/qtc")]),
      _vm._v(" "),
      _c("th", { staticClass: "col3" }, [_vm._v("Pesanan")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", {}, [
      _c("th", { staticClass: "col1" }, [_vm._v("Barang")]),
      _vm._v(" "),
      _c("th", { staticClass: "col2" }, [_vm._v("Harga/qtc")]),
      _vm._v(" "),
      _c("th", { staticClass: "col3" }, [_vm._v("Pesanan")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", {}, [
      _c("th", { staticClass: "col1" }, [_vm._v("Barang")]),
      _vm._v(" "),
      _c("th", { staticClass: "col2" }, [_vm._v("Harga/qtc")]),
      _vm._v(" "),
      _c("th", { staticClass: "col3" }, [_vm._v("Pesanan")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/assets/Logo.png":
/*!**************************************!*\
  !*** ./resources/js/assets/Logo.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/Logo.png?841f71ae16dd4dba910dfb39435858fc";

/***/ }),

/***/ "./resources/js/assets/keylacopier.jpeg":
/*!**********************************************!*\
  !*** ./resources/js/assets/keylacopier.jpeg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/keylacopier.jpeg?fc20b2afb5afa37b65b0df15bb43ffdc";

/***/ }),

/***/ "./resources/js/components/customer/PilihVendor.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/customer/PilihVendor.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PilihVendor_vue_vue_type_template_id_0c007d58_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PilihVendor.vue?vue&type=template&id=0c007d58&scoped=true& */ "./resources/js/components/customer/PilihVendor.vue?vue&type=template&id=0c007d58&scoped=true&");
/* harmony import */ var _PilihVendor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PilihVendor.vue?vue&type=script&lang=js& */ "./resources/js/components/customer/PilihVendor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _PilihVendor_vue_vue_type_style_index_0_id_0c007d58_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PilihVendor.vue?vue&type=style&index=0&id=0c007d58&scoped=true&lang=css& */ "./resources/js/components/customer/PilihVendor.vue?vue&type=style&index=0&id=0c007d58&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PilihVendor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PilihVendor_vue_vue_type_template_id_0c007d58_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PilihVendor_vue_vue_type_template_id_0c007d58_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0c007d58",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/customer/PilihVendor.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/customer/PilihVendor.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/customer/PilihVendor.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PilihVendor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PilihVendor.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/customer/PilihVendor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PilihVendor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/customer/PilihVendor.vue?vue&type=style&index=0&id=0c007d58&scoped=true&lang=css&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/customer/PilihVendor.vue?vue&type=style&index=0&id=0c007d58&scoped=true&lang=css& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PilihVendor_vue_vue_type_style_index_0_id_0c007d58_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./PilihVendor.vue?vue&type=style&index=0&id=0c007d58&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/customer/PilihVendor.vue?vue&type=style&index=0&id=0c007d58&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PilihVendor_vue_vue_type_style_index_0_id_0c007d58_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PilihVendor_vue_vue_type_style_index_0_id_0c007d58_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PilihVendor_vue_vue_type_style_index_0_id_0c007d58_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PilihVendor_vue_vue_type_style_index_0_id_0c007d58_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PilihVendor_vue_vue_type_style_index_0_id_0c007d58_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/customer/PilihVendor.vue?vue&type=template&id=0c007d58&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/customer/PilihVendor.vue?vue&type=template&id=0c007d58&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PilihVendor_vue_vue_type_template_id_0c007d58_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PilihVendor.vue?vue&type=template&id=0c007d58&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/customer/PilihVendor.vue?vue&type=template&id=0c007d58&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PilihVendor_vue_vue_type_template_id_0c007d58_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PilihVendor_vue_vue_type_template_id_0c007d58_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/customer/PriceList.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/customer/PriceList.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PriceList_vue_vue_type_template_id_718c79fe_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PriceList.vue?vue&type=template&id=718c79fe&scoped=true& */ "./resources/js/components/customer/PriceList.vue?vue&type=template&id=718c79fe&scoped=true&");
/* harmony import */ var _PriceList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PriceList.vue?vue&type=script&lang=js& */ "./resources/js/components/customer/PriceList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _PriceList_vue_vue_type_style_index_0_id_718c79fe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PriceList.vue?vue&type=style&index=0&id=718c79fe&scoped=true&lang=css& */ "./resources/js/components/customer/PriceList.vue?vue&type=style&index=0&id=718c79fe&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PriceList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PriceList_vue_vue_type_template_id_718c79fe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PriceList_vue_vue_type_template_id_718c79fe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "718c79fe",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/customer/PriceList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/customer/PriceList.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/customer/PriceList.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PriceList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PriceList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/customer/PriceList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PriceList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/customer/PriceList.vue?vue&type=style&index=0&id=718c79fe&scoped=true&lang=css&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/customer/PriceList.vue?vue&type=style&index=0&id=718c79fe&scoped=true&lang=css& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PriceList_vue_vue_type_style_index_0_id_718c79fe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./PriceList.vue?vue&type=style&index=0&id=718c79fe&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/customer/PriceList.vue?vue&type=style&index=0&id=718c79fe&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PriceList_vue_vue_type_style_index_0_id_718c79fe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PriceList_vue_vue_type_style_index_0_id_718c79fe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PriceList_vue_vue_type_style_index_0_id_718c79fe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PriceList_vue_vue_type_style_index_0_id_718c79fe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PriceList_vue_vue_type_style_index_0_id_718c79fe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/customer/PriceList.vue?vue&type=template&id=718c79fe&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/customer/PriceList.vue?vue&type=template&id=718c79fe&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PriceList_vue_vue_type_template_id_718c79fe_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PriceList.vue?vue&type=template&id=718c79fe&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/customer/PriceList.vue?vue&type=template&id=718c79fe&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PriceList_vue_vue_type_template_id_718c79fe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PriceList_vue_vue_type_template_id_718c79fe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);