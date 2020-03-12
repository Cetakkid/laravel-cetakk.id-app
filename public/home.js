(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/homepage/Home.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/homepage/Home.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-loading-overlay */ "./node_modules/vue-loading-overlay/dist/vue-loading.min.js");
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_loading_overlay__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-loading-overlay/dist/vue-loading.css */ "./node_modules/vue-loading-overlay/dist/vue-loading.css");
/* harmony import */ var vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_typed_typed_min_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/typed/typed.min.js */ "./resources/js/assets/typed/typed.min.js");
/* harmony import */ var _assets_typed_typed_min_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_typed_typed_min_js__WEBPACK_IMPORTED_MODULE_3__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'Home',
  components: {
    Loading: vue_loading_overlay__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  data: function data() {
    return {
      isLoading: false,
      fullPage: true
    };
  },
  methods: {
    getStarted: function getStarted() {
      return 0;
    }
  },
  mounted: function mounted() {
    var _this = this;

    var $ = jquery__WEBPACK_IMPORTED_MODULE_0___default.a;
    this.isLoading = true;
    setTimeout(function () {
      _this.isLoading = false;
    }, 3000);

    if ($('.text-slider').length == 1) {
      var typed_strings = $('.text-slider-items').text();
      var typed = new _assets_typed_typed_min_js__WEBPACK_IMPORTED_MODULE_3___default.a('.text-slider', {
        strings: typed_strings.split(','),
        typeSpeed: 80,
        loop: true,
        backDelay: 1100,
        backSpeed: 30
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/homepage/Home.vue?vue&type=style&index=0&id=b7b76b76&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/homepage/Home.vue?vue&type=style&index=0&id=b7b76b76&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.font-hero[data-v-b7b76b76]{\n    font-weight: 700 !important;\n    font-size: 50px;\n}\nstrong[data-v-b7b76b76]{\n\tfont-weight: 700 !important\n}\n.font-subhero[data-v-b7b76b76]{\n    font-weight: 900 !important;\n    font-size: 25px;\n}\n.font-title[data-v-b7b76b76]{\n    font-size: 30px;\n}\n.text-desc[data-v-b7b76b76]{\n\tfont-size: 12px;\n}\n.text-slider-items[data-v-b7b76b76]{\n\tdisplay: none\n}\n.font-secondary[data-v-b7b76b76]{\n    font-weight: 500;\n    font-size: 18px;\n    color: #ffc502\n}\n.font-primary[data-v-b7b76b76]{\n    font-size: 14px;\n}\n.hero[data-v-b7b76b76] {\n    /* background:url('../../assets/img/vectorBg.png') no-repeat center; */\n    background-size: cover;\n    min-height: 50rem;\n\tbackground-color: #0D7BE5;\n\t/* background-position-y: -10vh; */\n\tpadding: 11em 5em 0 5em;\n}\n.hero-part[data-v-b7b76b76]{\n\tanimation: fadein-data-v-b7b76b76 2s;\n    -moz-animation: fadein-data-v-b7b76b76 2s; /* Firefox */\n    -webkit-animation: fadein-data-v-b7b76b76 2s; /* Safari and Chrome */\n    -o-animation: fadein-data-v-b7b76b76 2s; /* Opera */\n}\n@keyframes fadein-data-v-b7b76b76 {\nfrom {\n        opacity:0;\n}\nto {\n        opacity:1;\n}\n}\n@-webkit-keyframes fadein-data-v-b7b76b76 { /* Safari and Chrome */\nfrom {\n        opacity:0;\n}\nto {\n        opacity:1;\n}\n}\n.hero-paid img[data-v-b7b76b76]{\n\twidth: 100%;\n}\n.home-image[data-v-b7b76b76]{\n    min-width: 70%\n}\n.use-part[data-v-b7b76b76] {\n    background:url(" + escape(__webpack_require__(/*! ../../assets/img/bg-usefull.svg */ "./resources/js/assets/img/bg-usefull.svg")) + ") no-repeat center;\n    background-size: cover;\n    height: 40rem;\n\tbackground-color: #ffffff;\n\tpadding: 100px 5rem 0 5rem;\n\tbackground-position-y: -20rem;\n}\n.use-part-title[data-v-b7b76b76]{\n\tmargin-bottom: 30px;\n}\n.cardList[data-v-b7b76b76]{\n\tmargin-bottom: 150px;\n}\n.carder[data-v-b7b76b76]{\n\tpadding: 0 30px 0 30px;\n}\n.ease[data-v-b7b76b76]{\n\theight: 40rem;\n\tpadding: 50px 5rem 0 5rem;\n}\n.ease-title[data-v-b7b76b76]{\n\theight: 5rem;\n}\n.ease img[data-v-b7b76b76]{\n\twidth: 80%;\n}\n.btn-start[data-v-b7b76b76]{\n\tmargin-top: 20px;\n}\nhr[data-v-b7b76b76]{\n\theight: 5px;\n\twidth: 100px;\n\tbackground: #F4BE0B;\n\tborder-radius: 50px;\n}\n.btn-outline-warning[data-v-b7b76b76]{\n\tborder: 2px solid #F4BE0B;\n}\n.text-white[data-v-b7b76b76]{\n\tcolor: #fff !important;\n}\n.text-white[data-v-b7b76b76]:hover{\n\tcolor: #222 !important;\n}\n.gmbr[data-v-b7b76b76]{\n\tmin-height: 150px;\n\tmax-height: 150px;\n\tmax-width: 100%;\n\tpadding: 20px\n}\n.card[data-v-b7b76b76]{\n\tbackground-color: #0D7BE5;\n\tborder-radius: 10px;\n\tmin-height: 310px;\n}\n.card[data-v-b7b76b76]:hover{\n\ttransition: transform .6s !important;\n\ttransform: scale(1.01) !important;\n}\n.font-smaller[data-v-b7b76b76]:hover{\n    color: #F4BE0B !important;\n    text-decoration: none;\n    transform: scale(1.02) !important;\n}\n.footer[data-v-b7b76b76]{\n    background: url(" + escape(__webpack_require__(/*! ../../assets/img/footer.svg */ "./resources/js/assets/img/footer.svg")) + ") no-repeat center;\n    background-size: cover;\n    min-height: 30rem;\n\tbackground-position-y: 10px;\n}\n.part-foot[data-v-b7b76b76]{\n    padding-top: 200px;\n}\n@media (max-width: 900px) {\n.font-hero[data-v-b7b76b76]{\n\t\tfont-weight: 700;\n\t\tfont-size: 30px;\n}\n.font-title[data-v-b7b76b76]{\n\t\tfont-size: 20px;\n}\n.hero[data-v-b7b76b76] {\n\t\tmin-height: 30rem;\n\t\tbackground-color: #0D7BE5;\n\t\tpadding: 5em 0 0 0;\n}\n.hero-part[data-v-b7b76b76]{\n    \tpadding: 30px;\n}\n.hero-paid[data-v-b7b76b76]{\n\t\tdisplay: none;\n}\n.use-part[data-v-b7b76b76] {\n\t\theight: 90rem;\n\t\tpadding: 30px 0rem 0 0rem;\n\t\tbackground-position-y: 0rem;\n}\n.use-part-title[data-v-b7b76b76]{\n\t\tmargin-bottom: 0px;\n}\n.cardList[data-v-b7b76b76]{\n\t\tmargin-bottom: 150px;\n}\n.carder[data-v-b7b76b76]{\n\t\tpadding: 0 50px 0 50px;\n}\n.ease[data-v-b7b76b76]{\n\t\theight: 25rem;\n\t\tpadding: 1rem;\n\t\tmargin-bottom: 5rem;\n}\n.ease-title[data-v-b7b76b76]{\n\t\theight: 5rem;\n}\n.ease img[data-v-b7b76b76]{\n\t\tdisplay: none;\n}\nhr[data-v-b7b76b76]{\n\t\theight: 5px;\n\t\twidth: 100px;\n\t\tbackground: #F4BE0B;\n\t\tborder-radius: 50px;\n}\n.btn-outline-warning[data-v-b7b76b76]{\n\t\tborder: 2px solid #F4BE0B;\n}\n.text-white[data-v-b7b76b76]{\n\t\tcolor: #fff !important;\n}\n.text-white[data-v-b7b76b76]:hover{\n\t\tcolor: #222 !important;\n}\n.card[data-v-b7b76b76]{\n\t\tbackground-color: #0D7BE5;\n\t\tborder-radius: 10px;\n\t\tmin-height: 50px;\n}\n.card[data-v-b7b76b76]:hover{\n\t\ttransition: transform .6s !important;\n\t\ttransform: scale(1.01) !important;\n}\n.font-smaller[data-v-b7b76b76]:hover{\n\t\tcolor: #F4BE0B !important;\n\t\ttext-decoration: none;\n\t\ttransform: scale(1.02) !important;\n}\n.footer[data-v-b7b76b76]{\n\t\tbackground-size: cover;\n\t\tmin-height: 20rem;\n}\n.part-foot[data-v-b7b76b76]{\n    \tpadding-top: 100px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/homepage/Home.vue?vue&type=style&index=0&id=b7b76b76&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/homepage/Home.vue?vue&type=style&index=0&id=b7b76b76&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=style&index=0&id=b7b76b76&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/homepage/Home.vue?vue&type=style&index=0&id=b7b76b76&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/homepage/Home.vue?vue&type=template&id=b7b76b76&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/homepage/Home.vue?vue&type=template&id=b7b76b76&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container-fluid" }, [
    _c("div", { staticClass: "hero cover row justify-content-md-center" }, [
      _c("div", { staticClass: "hero-part col-md-6 text-left" }, [
        _c("p", { staticClass: "font-hero text-light mb-0" }, [
          _vm._v("Cetak dokumen kamu,")
        ]),
        _vm._v(" "),
        _vm._m(0),
        _vm._v(" "),
        _vm._m(1),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "rounded-pill btn btn-warning mt-3",
            on: { click: _vm.getStarted }
          },
          [
            _c(
              "router-link",
              {
                staticClass: "btn-based btn font-weight-bold text-dark",
                attrs: { to: "/dashboard-customer" }
              },
              [_vm._v("Cetak Sekarang")]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _vm._m(2)
    ]),
    _vm._v(" "),
    _vm._m(3),
    _vm._v(" "),
    _c("div", { staticClass: "ease row justify-content-md-center" }, [
      _vm._m(4),
      _vm._v(" "),
      _c("div", { staticClass: "row justify-content-md-center ease-part" }, [
        _vm._m(5),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-6 text-left" }, [
          _vm._m(6),
          _vm._v(" "),
          _vm._m(7),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-10 btn-start" }, [
            _c(
              "a",
              {
                staticClass: "rounded-pill btn-warning btn",
                on: { click: _vm.getStarted }
              },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "btn text-button font-weight-bold",
                    attrs: { to: "/dashboard-customer" }
                  },
                  [_vm._v("Cetak Sekarang")]
                )
              ],
              1
            )
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _vm._m(8)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "font-hero text-light mb-3" }, [
      _c("span", { staticClass: "text-slider-items" }, [
        _vm._v("lebih cepat, lebih mudah,bisa dimana saja")
      ]),
      _vm._v(" "),
      _c("strong", { staticClass: "text-slider" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "text-light mb-2" }, [
      _vm._v(
        "Cetakk.id menawarkan kemudahan dalam mencetak dokumen Anda sendiri ! "
      ),
      _c("br"),
      _vm._v(" Saat ini kami hadir di Yogyakarta. "),
      _c("br"),
      _vm._v("\n\t\t\t\tDikejar "),
      _c("span", { staticClass: "font-weight-bold" }, [_vm._v("Deadline?")]),
      _vm._v("\n\t\t\t\tTenang, ada "),
      _c("span", { staticClass: "font-weight-bold" }, [_vm._v("Cetakk.id")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "hero-paid col-md-6" }, [
      _c("img", {
        attrs: { src: __webpack_require__(/*! ../../assets/img/homePaid.svg */ "./resources/js/assets/img/homePaid.svg"), alt: "" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "use-part row justify-content-md-center" },
      [
        _c("div", { staticClass: "col-md-12 text-center use-part-title" }, [
          _c("p", { staticClass: "font-title font-weight-bold" }, [
            _vm._v("Proses Dokumen Anda Sendiri")
          ]),
          _vm._v(" "),
          _c("hr")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row justify-content-md-center cardList" }, [
          _c("div", { staticClass: "col-md-3 col-sm-6 carder" }, [
            _c("div", { staticClass: "card shadow m-2" }, [
              _c("div", { staticClass: "card-body text-light p-4" }, [
                _c("img", {
                  staticClass: "gmbr",
                  attrs: {
                    src: __webpack_require__(/*! ../../assets/img/benefit1.svg */ "./resources/js/assets/img/benefit1.svg"),
                    alt: "Upload Dokumen di Cetakk.id"
                  }
                }),
                _vm._v(" "),
                _c("p", { staticClass: "font-weight-bold" }, [
                  _vm._v("PILIH VENDOR")
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "text-desc" }, [
                  _vm._v("Pilih salah satu vendor yang tersedia")
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-3 col-sm-6 carder" }, [
            _c("div", { staticClass: "card shadow m-2" }, [
              _c("div", { staticClass: "card-body text-light p-4" }, [
                _c("img", {
                  staticClass: "gmbr",
                  attrs: {
                    src: __webpack_require__(/*! ../../assets/img/benefit1.svg */ "./resources/js/assets/img/benefit1.svg"),
                    alt: "Upload Dokumen di Cetakk.id"
                  }
                }),
                _vm._v(" "),
                _c("p", { staticClass: "font-weight-bold" }, [
                  _vm._v("CEK HARGA")
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "text-desc" }, [
                  _vm._v(
                    "Gunakan fitur cek harga untuk memastikan estimasi harga"
                  )
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-3 col-sm-6 carder" }, [
            _c("div", { staticClass: "card shadow m-2" }, [
              _c("div", { staticClass: "card-body text-light p-4" }, [
                _c("img", {
                  staticClass: "gmbr",
                  attrs: {
                    src: __webpack_require__(/*! ../../assets/img/benefit2.svg */ "./resources/js/assets/img/benefit2.svg"),
                    alt: "Upload Dokumen di Cetakk.id"
                  }
                }),
                _vm._v(" "),
                _c("p", { staticClass: "font-weight-bold" }, [
                  _vm._v("KIRIM FILE")
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "text-desc" }, [
                  _vm._v(
                    "Dokumen pesanan Anda akan dicetak oleh vendor pilihan Anda"
                  )
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-3 col-sm-6 carder" }, [
            _c("div", { staticClass: "card shadow m-2" }, [
              _c("div", { staticClass: "card-body text-light p-4" }, [
                _c("img", {
                  staticClass: "gmbr",
                  attrs: {
                    src: __webpack_require__(/*! ../../assets/img/benefit3.svg */ "./resources/js/assets/img/benefit3.svg"),
                    alt: "Upload Dokumen di Cetakk.id"
                  }
                }),
                _vm._v(" "),
                _c("p", { staticClass: "font-weight-bold" }, [
                  _vm._v("AMBIL PESANAN")
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "text-desc" }, [
                  _vm._v(
                    "Ambil hasil dokumen di lokasi vendor dan lakukan pembayaran"
                  )
                ])
              ])
            ])
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-12 text-center ease-title" }, [
      _c("p", { staticClass: "font-title font-weight-bold" }, [
        _vm._v("Hemat Waktu dan Tenaga")
      ]),
      _vm._v(" "),
      _c("hr")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-6" }, [
      _c("img", {
        attrs: { src: __webpack_require__(/*! ../../assets/img/bg-ease.svg */ "./resources/js/assets/img/bg-ease.svg"), alt: "" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-12" }, [
      _c("p", [
        _vm._v(
          "Kamu dapat mencetak seluruh dokumenmu menggunakan platform kami. \n\t\t\t\t\t\tDengan segala kemudahan yang diberikan, Anda dapat menyelesaikan aktifitas lainnya ! "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-10" }, [
      _c("p", { staticClass: "m-0" }, [
        _c("i", { staticClass: "fas fa-check-circle mr-2 text-success" }),
        _vm._v(" Pilihan vendor yang beragam")
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "m-0" }, [
        _c("i", { staticClass: "fas fa-check-circle mr-2 text-success" }),
        _vm._v(" Biaya antar yang terjangkau")
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "m-0" }, [
        _c("i", { staticClass: "fas fa-check-circle mr-2 text-success" }),
        _vm._v(" Kemudahan Pemesanan")
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "m-0" }, [
        _c("i", { staticClass: "fas fa-check-circle mr-2 text-success" }),
        _vm._v(" Kemudahan Transaksi")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "footer row justify-content-md-center " }, [
      _c("div", { staticClass: "col-sm-12 part-foot" }, [
        _c("h1", { staticClass: "font-hero text-warning mb-3" }, [
          _vm._v("300+ Dokumen")
        ]),
        _vm._v(" "),
        _c("h2", { staticClass: "font-subhero text-light mb-3" }, [
          _vm._v("Sudah berhasil dicetak")
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "font-primary text-light mb-4 font-italic" }, [
          _vm._v("Banyak pengguna semakin mudah dan cepat"),
          _c("br"),
          _vm._v(
            "\n\t\t\t\t\tmencetak dokumen setelah menggunakan Cetakk.id\n\t\t\t"
          )
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/assets/img/benefit1.svg":
/*!**********************************************!*\
  !*** ./resources/js/assets/img/benefit1.svg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/benefit1.svg?da174f9d7c0a7d379de1766b011f4e6d";

/***/ }),

/***/ "./resources/js/assets/img/benefit2.svg":
/*!**********************************************!*\
  !*** ./resources/js/assets/img/benefit2.svg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/benefit2.svg?8b3931cd2f5a5f123763bde23940fe64";

/***/ }),

/***/ "./resources/js/assets/img/benefit3.svg":
/*!**********************************************!*\
  !*** ./resources/js/assets/img/benefit3.svg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/benefit3.svg?9c04528a20a3a56dcd430f3375a9f0e8";

/***/ }),

/***/ "./resources/js/assets/img/bg-ease.svg":
/*!*********************************************!*\
  !*** ./resources/js/assets/img/bg-ease.svg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/bg-ease.svg?98b13b4942cc6082cadb9934dfcebbbd";

/***/ }),

/***/ "./resources/js/assets/img/bg-usefull.svg":
/*!************************************************!*\
  !*** ./resources/js/assets/img/bg-usefull.svg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/bg-usefull.svg?c95aa544da0ea2a1f557172fa1a4b1db";

/***/ }),

/***/ "./resources/js/assets/img/footer.svg":
/*!********************************************!*\
  !*** ./resources/js/assets/img/footer.svg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/footer.svg?23549d75980f5032fe7e19dcb8c6682a";

/***/ }),

/***/ "./resources/js/assets/img/homePaid.svg":
/*!**********************************************!*\
  !*** ./resources/js/assets/img/homePaid.svg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/homePaid.svg?0ec6948b4d95cd5f716cd1a26ff53883";

/***/ }),

/***/ "./resources/js/assets/typed/typed.min.js":
/*!************************************************!*\
  !*** ./resources/js/assets/typed/typed.min.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * 
 *   typed.js - A JavaScript Typing Animation Library
 *   Author: Matt Boldt <me@mattboldt.com>
 *   Version: v2.0.6
 *   Url: https://github.com/mattboldt/typed.js
 *   License(s): MIT
 * 
 */
(function (t, e) {
  "object" == ( false ? undefined : _typeof(exports)) && "object" == ( false ? undefined : _typeof(module)) ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function () {
  return function (t) {
    function e(n) {
      if (s[n]) return s[n].exports;
      var i = s[n] = {
        exports: {},
        id: n,
        loaded: !1
      };
      return t[n].call(i.exports, i, i.exports, e), i.loaded = !0, i.exports;
    }

    var s = {};
    return e.m = t, e.c = s, e.p = "", e(0);
  }([function (t, e, s) {
    "use strict";

    function n(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }

    Object.defineProperty(e, "__esModule", {
      value: !0
    });

    var i = function () {
      function t(t, e) {
        for (var s = 0; s < e.length; s++) {
          var n = e[s];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
        }
      }

      return function (e, s, n) {
        return s && t(e.prototype, s), n && t(e, n), e;
      };
    }(),
        r = s(1),
        o = s(3),
        a = function () {
      function t(e, s) {
        n(this, t), r.initializer.load(this, s, e), this.begin();
      }

      return i(t, [{
        key: "toggle",
        value: function value() {
          this.pause.status ? this.start() : this.stop();
        }
      }, {
        key: "stop",
        value: function value() {
          this.typingComplete || this.pause.status || (this.toggleBlinking(!0), this.pause.status = !0, this.options.onStop(this.arrayPos, this));
        }
      }, {
        key: "start",
        value: function value() {
          this.typingComplete || this.pause.status && (this.pause.status = !1, this.pause.typewrite ? this.typewrite(this.pause.curString, this.pause.curStrPos) : this.backspace(this.pause.curString, this.pause.curStrPos), this.options.onStart(this.arrayPos, this));
        }
      }, {
        key: "destroy",
        value: function value() {
          this.reset(!1), this.options.onDestroy(this);
        }
      }, {
        key: "reset",
        value: function value() {
          var t = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
          clearInterval(this.timeout), this.replaceText(""), this.cursor && this.cursor.parentNode && (this.cursor.parentNode.removeChild(this.cursor), this.cursor = null), this.strPos = 0, this.arrayPos = 0, this.curLoop = 0, t && (this.insertCursor(), this.options.onReset(this), this.begin());
        }
      }, {
        key: "begin",
        value: function value() {
          var t = this;
          this.typingComplete = !1, this.shuffleStringsIfNeeded(this), this.insertCursor(), this.bindInputFocusEvents && this.bindFocusEvents(), this.timeout = setTimeout(function () {
            t.currentElContent && 0 !== t.currentElContent.length ? t.backspace(t.currentElContent, t.currentElContent.length) : t.typewrite(t.strings[t.sequence[t.arrayPos]], t.strPos);
          }, this.startDelay);
        }
      }, {
        key: "typewrite",
        value: function value(t, e) {
          var s = this;
          this.fadeOut && this.el.classList.contains(this.fadeOutClass) && (this.el.classList.remove(this.fadeOutClass), this.cursor && this.cursor.classList.remove(this.fadeOutClass));
          var n = this.humanizer(this.typeSpeed),
              i = 1;
          return this.pause.status === !0 ? void this.setPauseStatus(t, e, !0) : void (this.timeout = setTimeout(function () {
            e = o.htmlParser.typeHtmlChars(t, e, s);
            var n = 0,
                r = t.substr(e);

            if ("^" === r.charAt(0) && /^\^\d+/.test(r)) {
              var a = 1;
              r = /\d+/.exec(r)[0], a += r.length, n = parseInt(r), s.temporaryPause = !0, s.options.onTypingPaused(s.arrayPos, s), t = t.substring(0, e) + t.substring(e + a), s.toggleBlinking(!0);
            }

            if ("`" === r.charAt(0)) {
              for (; "`" !== t.substr(e + i).charAt(0) && (i++, !(e + i > t.length));) {
                ;
              }

              var u = t.substring(0, e),
                  l = t.substring(u.length + 1, e + i),
                  c = t.substring(e + i + 1);
              t = u + l + c, i--;
            }

            s.timeout = setTimeout(function () {
              s.toggleBlinking(!1), e === t.length ? s.doneTyping(t, e) : s.keepTyping(t, e, i), s.temporaryPause && (s.temporaryPause = !1, s.options.onTypingResumed(s.arrayPos, s));
            }, n);
          }, n));
        }
      }, {
        key: "keepTyping",
        value: function value(t, e, s) {
          0 === e && (this.toggleBlinking(!1), this.options.preStringTyped(this.arrayPos, this)), e += s;
          var n = t.substr(0, e);
          this.replaceText(n), this.typewrite(t, e);
        }
      }, {
        key: "doneTyping",
        value: function value(t, e) {
          var s = this;
          this.options.onStringTyped(this.arrayPos, this), this.toggleBlinking(!0), this.arrayPos === this.strings.length - 1 && (this.complete(), this.loop === !1 || this.curLoop === this.loopCount) || (this.timeout = setTimeout(function () {
            s.backspace(t, e);
          }, this.backDelay));
        }
      }, {
        key: "backspace",
        value: function value(t, e) {
          var s = this;
          if (this.pause.status === !0) return void this.setPauseStatus(t, e, !0);
          if (this.fadeOut) return this.initFadeOut();
          this.toggleBlinking(!1);
          var n = this.humanizer(this.backSpeed);
          this.timeout = setTimeout(function () {
            e = o.htmlParser.backSpaceHtmlChars(t, e, s);
            var n = t.substr(0, e);

            if (s.replaceText(n), s.smartBackspace) {
              var i = s.strings[s.arrayPos + 1];
              i && n === i.substr(0, e) ? s.stopNum = e : s.stopNum = 0;
            }

            e > s.stopNum ? (e--, s.backspace(t, e)) : e <= s.stopNum && (s.arrayPos++, s.arrayPos === s.strings.length ? (s.arrayPos = 0, s.options.onLastStringBackspaced(), s.shuffleStringsIfNeeded(), s.begin()) : s.typewrite(s.strings[s.sequence[s.arrayPos]], e));
          }, n);
        }
      }, {
        key: "complete",
        value: function value() {
          this.options.onComplete(this), this.loop ? this.curLoop++ : this.typingComplete = !0;
        }
      }, {
        key: "setPauseStatus",
        value: function value(t, e, s) {
          this.pause.typewrite = s, this.pause.curString = t, this.pause.curStrPos = e;
        }
      }, {
        key: "toggleBlinking",
        value: function value(t) {
          if (this.cursor && !this.pause.status && this.cursorBlinking !== t) {
            this.cursorBlinking = t;
            var e = t ? "infinite" : 0;
            this.cursor.style.animationIterationCount = e;
          }
        }
      }, {
        key: "humanizer",
        value: function value(t) {
          return Math.round(Math.random() * t / 2) + t;
        }
      }, {
        key: "shuffleStringsIfNeeded",
        value: function value() {
          this.shuffle && (this.sequence = this.sequence.sort(function () {
            return Math.random() - .5;
          }));
        }
      }, {
        key: "initFadeOut",
        value: function value() {
          var t = this;
          return this.el.className += " " + this.fadeOutClass, this.cursor && (this.cursor.className += " " + this.fadeOutClass), setTimeout(function () {
            t.arrayPos++, t.replaceText(""), t.strings.length > t.arrayPos ? t.typewrite(t.strings[t.sequence[t.arrayPos]], 0) : (t.typewrite(t.strings[0], 0), t.arrayPos = 0);
          }, this.fadeOutDelay);
        }
      }, {
        key: "replaceText",
        value: function value(t) {
          this.attr ? this.el.setAttribute(this.attr, t) : this.isInput ? this.el.value = t : "html" === this.contentType ? this.el.innerHTML = t : this.el.textContent = t;
        }
      }, {
        key: "bindFocusEvents",
        value: function value() {
          var t = this;
          this.isInput && (this.el.addEventListener("focus", function (e) {
            t.stop();
          }), this.el.addEventListener("blur", function (e) {
            t.el.value && 0 !== t.el.value.length || t.start();
          }));
        }
      }, {
        key: "insertCursor",
        value: function value() {
          this.showCursor && (this.cursor || (this.cursor = document.createElement("span"), this.cursor.className = "typed-cursor", this.cursor.innerHTML = this.cursorChar, this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling)));
        }
      }]), t;
    }();

    e["default"] = a, t.exports = e["default"];
  }, function (t, e, s) {
    "use strict";

    function n(t) {
      return t && t.__esModule ? t : {
        "default": t
      };
    }

    function i(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }

    Object.defineProperty(e, "__esModule", {
      value: !0
    });

    var r = Object.assign || function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = arguments[e];

        for (var n in s) {
          Object.prototype.hasOwnProperty.call(s, n) && (t[n] = s[n]);
        }
      }

      return t;
    },
        o = function () {
      function t(t, e) {
        for (var s = 0; s < e.length; s++) {
          var n = e[s];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
        }
      }

      return function (e, s, n) {
        return s && t(e.prototype, s), n && t(e, n), e;
      };
    }(),
        a = s(2),
        u = n(a),
        l = function () {
      function t() {
        i(this, t);
      }

      return o(t, [{
        key: "load",
        value: function value(t, e, s) {
          if ("string" == typeof s ? t.el = document.querySelector(s) : t.el = s, t.options = r({}, u["default"], e), t.isInput = "input" === t.el.tagName.toLowerCase(), t.attr = t.options.attr, t.bindInputFocusEvents = t.options.bindInputFocusEvents, t.showCursor = !t.isInput && t.options.showCursor, t.cursorChar = t.options.cursorChar, t.cursorBlinking = !0, t.elContent = t.attr ? t.el.getAttribute(t.attr) : t.el.textContent, t.contentType = t.options.contentType, t.typeSpeed = t.options.typeSpeed, t.startDelay = t.options.startDelay, t.backSpeed = t.options.backSpeed, t.smartBackspace = t.options.smartBackspace, t.backDelay = t.options.backDelay, t.fadeOut = t.options.fadeOut, t.fadeOutClass = t.options.fadeOutClass, t.fadeOutDelay = t.options.fadeOutDelay, t.isPaused = !1, t.strings = t.options.strings.map(function (t) {
            return t.trim();
          }), "string" == typeof t.options.stringsElement ? t.stringsElement = document.querySelector(t.options.stringsElement) : t.stringsElement = t.options.stringsElement, t.stringsElement) {
            t.strings = [], t.stringsElement.style.display = "none";
            var n = Array.prototype.slice.apply(t.stringsElement.children),
                i = n.length;
            if (i) for (var o = 0; o < i; o += 1) {
              var a = n[o];
              t.strings.push(a.innerHTML.trim());
            }
          }

          t.strPos = 0, t.arrayPos = 0, t.stopNum = 0, t.loop = t.options.loop, t.loopCount = t.options.loopCount, t.curLoop = 0, t.shuffle = t.options.shuffle, t.sequence = [], t.pause = {
            status: !1,
            typewrite: !0,
            curString: "",
            curStrPos: 0
          }, t.typingComplete = !1;

          for (var o in t.strings) {
            t.sequence[o] = o;
          }

          t.currentElContent = this.getCurrentElContent(t), t.autoInsertCss = t.options.autoInsertCss, this.appendAnimationCss(t);
        }
      }, {
        key: "getCurrentElContent",
        value: function value(t) {
          var e = "";
          return e = t.attr ? t.el.getAttribute(t.attr) : t.isInput ? t.el.value : "html" === t.contentType ? t.el.innerHTML : t.el.textContent;
        }
      }, {
        key: "appendAnimationCss",
        value: function value(t) {
          if (t.autoInsertCss && t.showCursor && t.fadeOut) {
            var e = document.createElement("style");
            e.type = "text/css";
            var s = "";
            t.showCursor && (s += "\n        .typed-cursor{\n          opacity: 1;\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "), t.fadeOut && (s += "\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n          -webkit-animation: 0;\n                  animation: 0;\n        }\n      "), 0 !== e.length && (e.innerHTML = s, document.head.appendChild(e));
          }
        }
      }]), t;
    }();

    e["default"] = l;
    var c = new l();
    e.initializer = c;
  }, function (t, e) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var s = {
      strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
      stringsElement: null,
      typeSpeed: 0,
      startDelay: 0,
      backSpeed: 0,
      smartBackspace: !0,
      shuffle: !1,
      backDelay: 700,
      fadeOut: !1,
      fadeOutClass: "typed-fade-out",
      fadeOutDelay: 500,
      loop: !1,
      loopCount: 1 / 0,
      showCursor: !0,
      cursorChar: "|",
      autoInsertCss: !0,
      attr: null,
      bindInputFocusEvents: !1,
      contentType: "html",
      onComplete: function onComplete(t) {},
      preStringTyped: function preStringTyped(t, e) {},
      onStringTyped: function onStringTyped(t, e) {},
      onLastStringBackspaced: function onLastStringBackspaced(t) {},
      onTypingPaused: function onTypingPaused(t, e) {},
      onTypingResumed: function onTypingResumed(t, e) {},
      onReset: function onReset(t) {},
      onStop: function onStop(t, e) {},
      onStart: function onStart(t, e) {},
      onDestroy: function onDestroy(t) {}
    };
    e["default"] = s, t.exports = e["default"];
  }, function (t, e) {
    "use strict";

    function s(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }

    Object.defineProperty(e, "__esModule", {
      value: !0
    });

    var n = function () {
      function t(t, e) {
        for (var s = 0; s < e.length; s++) {
          var n = e[s];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
        }
      }

      return function (e, s, n) {
        return s && t(e.prototype, s), n && t(e, n), e;
      };
    }(),
        i = function () {
      function t() {
        s(this, t);
      }

      return n(t, [{
        key: "typeHtmlChars",
        value: function value(t, e, s) {
          if ("html" !== s.contentType) return e;
          var n = t.substr(e).charAt(0);

          if ("<" === n || "&" === n) {
            var i = "";

            for (i = "<" === n ? ">" : ";"; t.substr(e + 1).charAt(0) !== i && (e++, !(e + 1 > t.length));) {
              ;
            }

            e++;
          }

          return e;
        }
      }, {
        key: "backSpaceHtmlChars",
        value: function value(t, e, s) {
          if ("html" !== s.contentType) return e;
          var n = t.substr(e).charAt(0);

          if (">" === n || ";" === n) {
            var i = "";

            for (i = ">" === n ? "<" : "&"; t.substr(e - 1).charAt(0) !== i && (e--, !(e < 0));) {
              ;
            }

            e--;
          }

          return e;
        }
      }]), t;
    }();

    e["default"] = i;
    var r = new i();
    e.htmlParser = r;
  }]);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./resources/js/components/homepage/Home.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/homepage/Home.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_b7b76b76_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=b7b76b76&scoped=true& */ "./resources/js/components/homepage/Home.vue?vue&type=template&id=b7b76b76&scoped=true&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/components/homepage/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Home_vue_vue_type_style_index_0_id_b7b76b76_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.vue?vue&type=style&index=0&id=b7b76b76&scoped=true&lang=css& */ "./resources/js/components/homepage/Home.vue?vue&type=style&index=0&id=b7b76b76&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_b7b76b76_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_b7b76b76_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "b7b76b76",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/homepage/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/homepage/Home.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/homepage/Home.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/homepage/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/homepage/Home.vue?vue&type=style&index=0&id=b7b76b76&scoped=true&lang=css&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/homepage/Home.vue?vue&type=style&index=0&id=b7b76b76&scoped=true&lang=css& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_b7b76b76_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=style&index=0&id=b7b76b76&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/homepage/Home.vue?vue&type=style&index=0&id=b7b76b76&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_b7b76b76_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_b7b76b76_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_b7b76b76_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_b7b76b76_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_b7b76b76_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/homepage/Home.vue?vue&type=template&id=b7b76b76&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/homepage/Home.vue?vue&type=template&id=b7b76b76&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_b7b76b76_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=b7b76b76&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/homepage/Home.vue?vue&type=template&id=b7b76b76&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_b7b76b76_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_b7b76b76_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);