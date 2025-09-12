"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[4967],{

/***/ 29041:
/*!*****************************************************************!*\
  !*** ./node_modules/easebuzz-capacitorjs-sdk/dist/esm/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EasebuzzCheckout: () => (/* binding */ EasebuzzCheckout)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 15083);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 95199);

const EasebuzzCheckout = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('EasebuzzCheckout', {
  web: () => __webpack_require__.e(/*! import() */ 7203).then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 57203)).then(m => new m.EasebuzzCheckoutWeb())
});


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 33278:
/*!*******************************************************************!*\
  !*** ./src/app/payment-details/payment-details-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaymentDetailsPageRoutingModule: () => (/* binding */ PaymentDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 49870);
/* harmony import */ var _payment_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment-details.page */ 34400);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);
var _PaymentDetailsPageRoutingModule;




const routes = [{
  path: '',
  component: _payment_details_page__WEBPACK_IMPORTED_MODULE_0__.PaymentDetailsPage
}];
class PaymentDetailsPageRoutingModule {}
_PaymentDetailsPageRoutingModule = PaymentDetailsPageRoutingModule;
_PaymentDetailsPageRoutingModule.ɵfac = function PaymentDetailsPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PaymentDetailsPageRoutingModule)();
};
_PaymentDetailsPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _PaymentDetailsPageRoutingModule
});
_PaymentDetailsPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PaymentDetailsPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 34400:
/*!*********************************************************!*\
  !*** ./src/app/payment-details/payment-details.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaymentDetailsPage: () => (/* binding */ PaymentDetailsPage)
/* harmony export */ });
/* harmony import */ var _home_govindmane_Documents_ionic_customer_app_capacitor_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/common */ 96048);
/* harmony import */ var _modal_payment_modal_payment_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modal-payment/modal-payment.page */ 59140);
/* harmony import */ var _add_money_wallet_add_money_wallet_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../add-money-wallet/add-money-wallet.page */ 91598);
/* harmony import */ var _theme_price_breakup_modal_theme_price_breakup_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme-price-breakup-modal/theme-price-breakup-modal.component */ 50470);
/* harmony import */ var _theme_apply_coupon_modal_theme_apply_coupon_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme-apply-coupon-modal/theme-apply-coupon-modal.component */ 90426);
/* harmony import */ var _ease_buzz_page_ease_buzz_page_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ease-buzz-page/ease-buzz-page.page */ 17914);
/* harmony import */ var _modal_phonebooking_info_modal_phonebooking_info_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modal-phonebooking-info/modal-phonebooking-info.page */ 53244);
/* harmony import */ var capacitor_razorpay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! capacitor-razorpay */ 71602);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @capacitor/core */ 15083);
/* harmony import */ var easebuzz_capacitorjs_sdk__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! easebuzz-capacitorjs-sdk */ 29041);
/* harmony import */ var _upi_status_modal_upi_status_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../upi-status-modal/upi-status-modal.component */ 17216);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ionic/angular */ 70600);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _services_common_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/common-storage */ 96970);
/* harmony import */ var _services_api_factory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/api-factory */ 59348);
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/loader-service */ 65894);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../services/common-service */ 6036);
/* harmony import */ var _services_util_provider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../services/util-provider */ 81101);
/* harmony import */ var _services_appdata__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../services/appdata */ 40172);
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../services/theme-service */ 99692);
/* harmony import */ var _services_date_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../services/date-service */ 18149);
/* harmony import */ var _services_exception__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../services/exception */ 91502);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 51670);
/* harmony import */ var _services_authentication__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../services/authentication */ 82491);
/* harmony import */ var _services_global_data_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../services/global-data.service */ 7516);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/router */ 83087);
/* harmony import */ var _services_firebase_analytics_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../services/firebase-analytics.service */ 47402);
/* harmony import */ var _services_upi_check_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../services/upi-check.service */ 71915);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/common */ 32881);
/* harmony import */ var _pipes_filter_oculto_pipe__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../pipes/filter-oculto.pipe */ 43773);

var _PaymentDetailsPage;

































const _c0 = () => ({
  "padding-top": "50px"
});
const _c1 = () => ({});
const _c2 = a0 => [a0, "Clamp"];
const _c3 = () => ({
  "padding-bottom": "18px"
});
const _c4 = () => ({
  "padding-top": "18px",
  "padding-bottom": "18px"
});
const _c5 = () => ({
  "--checkbox-background-checked": "#181d64"
});
const _c6 = () => ({
  "--checkbox-background-checked": "var(--bottomBarColor)"
});
const _c7 = () => ({
  "--color-checked": "#181d64"
});
const _c8 = () => ({
  "--color-checked": "var(--bottomBarColor)"
});
const _c9 = () => ({
  standalone: true
});
const _c10 = () => ({
  "--color": "#ddd",
  "--color-checked": "var(--bottomBarColor)"
});
const _c11 = () => ({
  "color": "#000"
});
const _c12 = () => ({
  "color": "#191966"
});
const _c13 = () => ({
  "color": "var(--iconsAndButtonsColor)"
});
const _c14 = a0 => ({
  "open": a0
});
const _c15 = a0 => ({
  "full-height": a0
});
const _c16 = a0 => ({
  "payment-card-height": a0
});
const _c17 = a0 => ({
  "margin-top": a0
});
const _c18 = a0 => ({
  "border": a0
});
function PaymentDetailsPage_ng_container_0_ion_content_10__svg_svg_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "svg", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](1, "rect", 83)(2, "path", 84)(3, "path", 85)(4, "path", 86)(5, "path", 87)(6, "path", 88)(7, "path", 89)(8, "path", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
}
function PaymentDetailsPage_ng_container_0_ion_content_10_img_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](0, "img", 91);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("src", ctx_r2.roundedLogo, _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵsanitizeUrl"]);
  }
}
function PaymentDetailsPage_ng_container_0_ion_content_10_h2_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "h2", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipe"](2, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipeBind1"](2, 1, ctx_r2.globalData.SEARCH_DATA.originCity.name.substring(0, 3)), " ");
  }
}
function PaymentDetailsPage_ng_container_0_ion_content_10_h2_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "h2", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipe"](2, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipeBind1"](2, 1, ctx_r2.globalData.SEARCH_DATA.originCity.name.substring(0, 3)), " ");
  }
}
function PaymentDetailsPage_ng_container_0_ion_content_10_h2_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "h2", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipe"](2, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipeBind1"](2, 1, ctx_r2.globalData.SEARCH_DATA.destCity.name.substring(0, 3)));
  }
}
function PaymentDetailsPage_ng_container_0_ion_content_10_h2_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "h2", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipe"](2, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipeBind1"](2, 1, ctx_r2.globalData.SEARCH_DATA.destCity.name.substring(0, 3)));
  }
}
function PaymentDetailsPage_ng_container_0_ion_content_10__svg_svg_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "svg", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](1, "path", 96)(2, "path", 97)(3, "path", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
}
function PaymentDetailsPage_ng_container_0_ion_content_10_h3_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "h3", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.globalData.SELECTED_SERVICE.duration.split(":")[0] + "h " + ctx_r2.globalData.SELECTED_SERVICE.duration.split(":")[1] + "m");
  }
}
function PaymentDetailsPage_ng_container_0_ion_content_10_h3_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "h3", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate1"](" ", ctx_r2.globalData.SELECTED_SERVICE.duration.split(":")[0] + "h " + ctx_r2.globalData.SELECTED_SERVICE.duration.split(":")[1] + "m", " ");
  }
}
function PaymentDetailsPage_ng_container_0_ion_content_10_ion_icon_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](0, "ion-icon", 101);
  }
}
function PaymentDetailsPage_ng_container_0_ion_content_10_ion_icon_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](0, "ion-icon", 102);
  }
}
function PaymentDetailsPage_ng_container_0_ion_content_10_div_62_ion_row_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-row", 103)(1, "ion-col", 115)(2, "h4", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](3, "Passenger name");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](6, "ion-col", 115)(7, "h4", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](8, "Seat");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](9, "h3", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const p_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate2"]("", p_r4.name, " (", p_r4.sex === "Mr" ? "M" : "F", ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](p_r4.seat_number);
  }
}
function PaymentDetailsPage_ng_container_0_ion_content_10_div_62_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "span", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.reservationData.boardingStage.address);
  }
}
function PaymentDetailsPage_ng_container_0_ion_content_10_div_62_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "span", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.reservationData.boardingStage.landmark);
  }
}
function PaymentDetailsPage_ng_container_0_ion_content_10_div_62_span_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "span", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.reservationData.droppingStage.address);
  }
}
function PaymentDetailsPage_ng_container_0_ion_content_10_div_62_span_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "span", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.reservationData.droppingStage.landmark);
  }
}
function PaymentDetailsPage_ng_container_0_ion_content_10_div_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div")(1, "ion-row", 103)(2, "ion-col", 36)(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](5, PaymentDetailsPage_ng_container_0_ion_content_10_div_62_ion_row_5_Template, 11, 3, "ion-row", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](6, "ion-row", 105)(7, "ion-col", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](8, "ion-icon", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](9, "ion-col", 108)(10, "h4", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](11, "Pickup Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](12, "p")(13, "span", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](15, PaymentDetailsPage_ng_container_0_ion_content_10_div_62_span_15_Template, 2, 1, "span", 111)(16, PaymentDetailsPage_ng_container_0_ion_content_10_div_62_span_16_Template, 2, 1, "span", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](17, "ion-col", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](18, "ion-icon", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](19, "ion-col", 114)(20, "h4", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](21, "Drop Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](22, "p")(23, "span", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](25, PaymentDetailsPage_ng_container_0_ion_content_10_div_62_span_25_Template, 2, 1, "span", 111)(26, PaymentDetailsPage_ng_container_0_ion_content_10_div_62_span_26_Template, 2, 1, "span", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate1"]("Passenger Details (", ctx_r2.onwardSeatDetails.length, " Seats)");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngForOf", ctx_r2.onwardSeatDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate1"]("", ctx_r2.reservationData.boardingStage.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.metaData.msiteFolder == "cbustheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.metaData.msiteFolder == "networktheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate1"]("", ctx_r2.reservationData.droppingStage.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.metaData.msiteFolder == "cbustheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.metaData.msiteFolder == "networktheme");
  }
}
function PaymentDetailsPage_ng_container_0_ion_content_10_ion_icon_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](0, "ion-icon", 119);
  }
}
function PaymentDetailsPage_ng_container_0_ion_content_10_ion_icon_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](0, "ion-icon", 120);
  }
}
function PaymentDetailsPage_ng_container_0_ion_content_10_ion_row_69__svg_svg_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "svg", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](1, "rect", 83)(2, "path", 84)(3, "path", 85)(4, "path", 86)(5, "path", 87)(6, "path", 88)(7, "path", 89)(8, "path", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
}
function PaymentDetailsPage_ng_container_0_ion_content_10_ion_row_69_img_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](0, "img", 91);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("src", ctx_r2.roundedLogo, _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵsanitizeUrl"]);
  }
}
function PaymentDetailsPage_ng_container_0_ion_content_10_ion_row_69_h2_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "h2", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipe"](2, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipeBind1"](2, 1, ctx_r2.globalData.SELECTED_SERVICE_RETURN.origin.name.substring(0, 3)), " ");
  }
}
function PaymentDetailsPage_ng_container_0_ion_content_10_ion_row_69_h2_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "h2", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipe"](2, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipeBind1"](2, 1, ctx_r2.globalData.SELECTED_SERVICE_RETURN.origin.name.substring(0, 3)), " ");
  }
}
function PaymentDetailsPage_ng_container_0_ion_content_10_ion_row_69_h2_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "h2", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipe"](2, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipeBind1"](2, 1, ctx_r2.globalData.SELECTED_SERVICE_RETURN.destination.name.substring(0, 3)));
  }
}
function PaymentDetailsPage_ng_container_0_ion_content_10_ion_row_69_h2_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "h2", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipe"](2, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipeBind1"](2, 1, ctx_r2.globalData.SELECTED_SERVICE_RETURN.destination.name.substring(0, 3)));
  }
}
function PaymentDetailsPage_ng_container_0_ion_content_10_ion_row_69__svg_svg_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "svg", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](1, "path", 96)(2, "path", 97)(3, "path", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
}
function PaymentDetailsPage_ng_container_0_ion_content_10_ion_row_69_h3_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "h3", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.globalData.SELECTED_SERVICE_RETURN.duration.split(":")[0] + "h " + ctx_r2.globalData.SELECTED_SERVICE_RETURN.duration.split(":")[1] + "m");
  }
}
function PaymentDetailsPage_ng_container_0_ion_content_10_ion_row_69_h3_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "h3", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate1"](" ", ctx_r2.globalData.SELECTED_SERVICE_RETURN.duration.split(":")[0] + "h " + ctx_r2.globalData.SELECTED_SERVICE_RETURN.duration.split(":")[1] + "m", " ");
  }
}
function PaymentDetailsPage_ng_container_0_ion_content_10_ion_row_69_ion_icon_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](0, "ion-icon", 101);
  }
}
function PaymentDetailsPage_ng_container_0_ion_content_10_ion_row_69_ion_icon_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](0, "ion-icon", 102);
  }
}
function PaymentDetailsPage_ng_container_0_ion_content_10_ion_row_69_div_59_ion_row_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-row", 103)(1, "ion-col", 115)(2, "h4", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](3, "Passenger name");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](6, "ion-col", 115)(7, "h4", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](8, "Seat");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](9, "h3", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const p_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate2"]("", p_r6.name, " (", p_r6.sex === "Mr" ? "M" : "F", ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](p_r6.seat_number);
  }
}
function PaymentDetailsPage_ng_container_0_ion_content_10_ion_row_69_div_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div")(1, "ion-row", 103)(2, "ion-col", 36)(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](5, PaymentDetailsPage_ng_container_0_ion_content_10_ion_row_69_div_59_ion_row_5_Template, 11, 3, "ion-row", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](6, "ion-row", 105)(7, "ion-col", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](8, "ion-icon", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](9, "ion-col", 108)(10, "h4", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](11, "Pickup Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](12, "p")(13, "span", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](15, "span", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](17, "ion-col", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](18, "ion-icon", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](19, "ion-col", 114)(20, "h4", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](21, "Drop Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](22, "p")(23, "span", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](25, "span", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate1"]("Passenger Details (", ctx_r2.returnSeatDetails.length, " Seats)");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngForOf", ctx_r2.returnSeatDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate1"]("", ctx_r2.globalData.RESERVATION_DATA_RETURN.boardingStage.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.globalData.RESERVATION_DATA_RETURN.boardingStage.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate1"]("", ctx_r2.globalData.RESERVATION_DATA_RETURN.droppingStage.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.globalData.RESERVATION_DATA_RETURN.droppingStage.address);
  }
}
function PaymentDetailsPage_ng_container_0_ion_content_10_ion_row_69_ion_icon_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](0, "ion-icon", 124);
  }
}
function PaymentDetailsPage_ng_container_0_ion_content_10_ion_row_69_ion_icon_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](0, "ion-icon", 125);
  }
}
function PaymentDetailsPage_ng_container_0_ion_content_10_ion_row_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 36)(2, "ion-card", 121)(3, "ion-row", 39)(4, "ion-col", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](5, PaymentDetailsPage_ng_container_0_ion_content_10_ion_row_69__svg_svg_5_Template, 9, 0, "svg", 41)(6, PaymentDetailsPage_ng_container_0_ion_content_10_ion_row_69_img_6_Template, 1, 1, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](7, "ion-col", 43)(8, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](12, "ion-col", 44)(13, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](15, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](17, "ion-row", 45)(18, "ion-col", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](19, PaymentDetailsPage_ng_container_0_ion_content_10_ion_row_69_h2_19_Template, 3, 3, "h2", 47)(20, PaymentDetailsPage_ng_container_0_ion_content_10_ion_row_69_h2_20_Template, 3, 3, "h2", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](21, "ion-col", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](22, "h2", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](23, "ion-col", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](24, PaymentDetailsPage_ng_container_0_ion_content_10_ion_row_69_h2_24_Template, 3, 3, "h2", 51)(25, PaymentDetailsPage_ng_container_0_ion_content_10_ion_row_69_h2_25_Template, 3, 3, "h2", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](26, "ion-col", 46)(27, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](29, "ion-col", 54)(30, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](31, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](32, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](33, PaymentDetailsPage_ng_container_0_ion_content_10_ion_row_69__svg_svg_33_Template, 4, 0, "svg", 56)(34, PaymentDetailsPage_ng_container_0_ion_content_10_ion_row_69_h3_34_Template, 2, 1, "h3", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](35, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](36, "ion-col", 46)(37, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](39, "ion-col", 46)(40, "h2", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](42, "ion-col", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](43, PaymentDetailsPage_ng_container_0_ion_content_10_ion_row_69_h3_43_Template, 2, 1, "h3", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](44, "ion-col", 50)(45, "h2", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](47, "ion-col", 46)(48, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](49, "Depart");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](50, "ion-col", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](51, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](52, "ion-col", 46)(53, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](54, "Arrive");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](55, "ion-row", 60)(56, "ion-col", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](57, PaymentDetailsPage_ng_container_0_ion_content_10_ion_row_69_ion_icon_57_Template, 1, 0, "ion-icon", 62)(58, PaymentDetailsPage_ng_container_0_ion_content_10_ion_row_69_ion_icon_58_Template, 1, 0, "ion-icon", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](59, PaymentDetailsPage_ng_container_0_ion_content_10_ion_row_69_div_59_Template, 27, 6, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](60, "ion-row", 64)(61, "ion-col", 65)(62, "h2", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_0_ion_content_10_ion_row_69_Template_h2_click_62_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.viewreturnDetails());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](63);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](64, PaymentDetailsPage_ng_container_0_ion_content_10_ion_row_69_ion_icon_64_Template, 1, 0, "ion-icon", 122)(65, PaymentDetailsPage_ng_container_0_ion_content_10_ion_row_69_ion_icon_65_Template, 1, 0, "ion-icon", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngClass", ctx_r2.metaData.msiteFolder == "cbustheme" ? "review-booking-card-first-row" : "review-booking-card-first-row_2");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.metaData.msiteFolder == "cbustheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.metaData.msiteFolder == "networktheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.globalData.SELECTED_SERVICE_RETURN.number);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.globalData.SELECTED_SERVICE_RETURN.bus_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.globalData.DEPARTURE_DATE_RETURN.day);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.globalData.DEPARTURE_DATE_RETURN.monthNameShort);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.metaData.msiteFolder == "cbustheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.metaData.msiteFolder == "networktheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.metaData.msiteFolder == "cbustheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.metaData.msiteFolder == "networktheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.globalData.SELECTED_SERVICE_RETURN.origin.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngClass", ctx_r2.metaData.msiteFolder == "cbustheme" ? "location-line" : "location-line_2");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngClass", ctx_r2.metaData.msiteFolder == "cbustheme" ? "location-dot" : "location-dot_2");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngClass", ctx_r2.metaData.msiteFolder == "cbustheme" ? "location-bus" : "location-bus_2");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.metaData.msiteFolder == "cbustheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.metaData.msiteFolder == "networktheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngClass", ctx_r2.metaData.msiteFolder == "cbustheme" ? "location-dot-blue" : "location-dot-blue_2");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.globalData.SELECTED_SERVICE_RETURN.destination.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.globalData.SELECTED_SERVICE_RETURN.dep_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.metaData.msiteFolder == "cbustheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate1"](" ", ctx_r2.globalData.SELECTED_SERVICE_RETURN.arr_time, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.metaData.msiteFolder == "cbustheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.metaData.msiteFolder == "networktheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.returnmoreLessOpt);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngStyle", (ctx_r2.metaData == null ? null : ctx_r2.metaData.msiteFolder) === "cbustheme" ? _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpureFunction0"](30, _c3) : _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpureFunction0"](31, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngClass", ctx_r2.metaData.msiteFolder == "cbustheme" ? "show-details" : "show-details_2");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate1"](" ", ctx_r2.returnmoreLessOpt ? "Less" : "Show", " Return Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", !ctx_r2.returnmoreLessOpt);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.returnmoreLessOpt);
  }
}
function PaymentDetailsPage_ng_container_0_ion_content_10_ion_card_72_p_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "p", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](1, "Applied Coupon");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
}
function PaymentDetailsPage_ng_container_0_ion_content_10_ion_card_72_p_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "p", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](1, "Applied Coupons");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
}
function PaymentDetailsPage_ng_container_0_ion_content_10_ion_card_72_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div")(1, "span", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "span", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](5, "a", 142)(6, "ion-icon", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_0_ion_content_10_ion_card_72_div_11_div_1_Template_ion_icon_click_6_listener() {
      const i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r8).index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.deleteCoupon(i_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const coupon_r10 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](coupon_r10.couponCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate2"]("", ctx_r2.currencySym, " ", coupon_r10.couponAmount, "");
  }
}
function PaymentDetailsPage_ng_container_0_ion_content_10_ion_card_72_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](1, PaymentDetailsPage_ng_container_0_ion_content_10_ion_card_72_div_11_div_1_Template, 7, 3, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngForOf", ctx_r2.couponAplied);
  }
}
function PaymentDetailsPage_ng_container_0_ion_content_10_ion_card_72_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_0_ion_content_10_ion_card_72_div_12_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r11);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.addCoupon());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](1, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](2, " Add More Coupons ");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "a", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](4, "ion-icon", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
}
function PaymentDetailsPage_ng_container_0_ion_content_10_ion_card_72_ion_radio_group_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-radio-group", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayListener"]("ngModelChange", function PaymentDetailsPage_ng_container_0_ion_content_10_ion_card_72_ion_radio_group_13_Template_ion_radio_group_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r12);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayBindingSet"](ctx_r2.specialcashDiscountValue, $event) || (ctx_r2.specialcashDiscountValue = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("ionChange", function PaymentDetailsPage_ng_container_0_ion_content_10_ion_card_72_ion_radio_group_13_Template_ion_radio_group_ionChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r12);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.specialCashDiscount());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](1, "ion-row")(2, "ion-col", 149)(3, "ion-item", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](4, "ion-radio", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](5, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](7, "ion-col", 151)(8, "ion-item", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](9, "ion-radio", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](10, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.specialcashDiscountValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngStyle", ctx_r2.metaData.msiteFolder == "cbustheme" ? _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpureFunction0"](5, _c7) : _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpureFunction0"](6, _c8));
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate1"](" ", "Special Discount Coupon", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngStyle", ctx_r2.metaData.msiteFolder == "cbustheme" ? _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpureFunction0"](7, _c7) : _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpureFunction0"](8, _c8));
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate1"](" ", "Cash Coupon", "");
  }
}
function PaymentDetailsPage_ng_container_0_ion_content_10_ion_card_72_div_14_a_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "a", 163)(1, "ion-icon", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_0_ion_content_10_ion_card_72_div_14_a_14_Template_ion_icon_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r14);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.removeCoupon());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
}
function PaymentDetailsPage_ng_container_0_ion_content_10_ion_card_72_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 153)(1, "ion-item", 154)(2, "ion-label", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](3, "Coupon Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](4, "ion-input", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](5, "ion-row")(6, "ion-col", 157)(7, "ion-item", 158)(8, "ion-label", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](9, " Email/Phone Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](10, "ion-input", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayListener"]("ngModelChange", function PaymentDetailsPage_ng_container_0_ion_content_10_ion_card_72_div_14_Template_ion_input_ngModelChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r13);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayBindingSet"](ctx_r2.emailNumber, $event) || (ctx_r2.emailNumber = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](11, "ion-col", 160)(12, "ion-button", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_0_ion_content_10_ion_card_72_div_14_Template_ion_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r13);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.checkCoupon());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](13, "Apply ");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](14, PaymentDetailsPage_ng_container_0_ion_content_10_ion_card_72_div_14_a_14_Template, 2, 0, "a", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("formGroup", ctx_r2.couponForm)("ngClass", ctx_r2.couponErrors ? "errors" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngClass", ctx_r2.couponErrors ? "invalid-coupon-input" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpureFunction0"](7, _c9));
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.emailNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngClass", ctx_r2.isAddCoupon && ctx_r2.couponAplied.length > 0 ? "show-remove" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.isAddCoupon && ctx_r2.couponAplied.length > 0);
  }
}
function PaymentDetailsPage_ng_container_0_ion_content_10_ion_card_72_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-card", 126)(1, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](2, " Coupon Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "div", 128)(4, "ion-item", 129)(5, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](6, "Have Cash Coupons");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](7, "ion-checkbox", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayListener"]("ngModelChange", function PaymentDetailsPage_ng_container_0_ion_content_10_ion_card_72_Template_ion_checkbox_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayBindingSet"](ctx_r2.haveCoupons, $event) || (ctx_r2.haveCoupons = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("ionChange", function PaymentDetailsPage_ng_container_0_ion_content_10_ion_card_72_Template_ion_checkbox_ionChange_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.haveCouponsChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](8, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](9, PaymentDetailsPage_ng_container_0_ion_content_10_ion_card_72_p_9_Template, 2, 0, "p", 132)(10, PaymentDetailsPage_ng_container_0_ion_content_10_ion_card_72_p_10_Template, 2, 0, "p", 132)(11, PaymentDetailsPage_ng_container_0_ion_content_10_ion_card_72_div_11_Template, 2, 1, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](12, PaymentDetailsPage_ng_container_0_ion_content_10_ion_card_72_div_12_Template, 5, 0, "div", 134)(13, PaymentDetailsPage_ng_container_0_ion_content_10_ion_card_72_ion_radio_group_13_Template, 12, 9, "ion-radio-group", 135)(14, PaymentDetailsPage_ng_container_0_ion_content_10_ion_card_72_div_14_Template, 15, 8, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngStyle", ctx_r2.metaData.msiteFolder == "cbustheme" ? _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpureFunction0"](8, _c5) : _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpureFunction0"](9, _c6));
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.haveCoupons);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.couponAplied.length == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.couponAplied.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.couponAplied.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.couponAplied.length > 0 && !ctx_r2.isAddCoupon && ctx_r2.couponAmount < ctx_r2.fareBreakupDetails.ticket_fare && ctx_r2.specialcashDiscountValue != "special");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.showCouponForm() && ctx_r2.allow_to_create_special_discount_coupon);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.showCouponForm());
  }
}
function PaymentDetailsPage_ng_container_0_ion_content_10_ion_row_73_span_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "span", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_0_ion_content_10_ion_row_73_span_7_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r16);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.removeOffer());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](1, "Remove Offers");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
}
function PaymentDetailsPage_ng_container_0_ion_content_10_ion_row_73_ion_icon_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](0, "ion-icon", 177);
  }
}
function PaymentDetailsPage_ng_container_0_ion_content_10_ion_row_73_ion_icon_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](0, "ion-icon", 178);
  }
}
function PaymentDetailsPage_ng_container_0_ion_content_10_ion_row_73_ion_card_15_div_2_ion_item_1_ion_radio_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](0, "ion-radio", 183);
  }
  if (rf & 2) {
    const offer_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2).$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpropertyInterpolate"]("value", offer_r18.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngStyle", ctx_r2.metaData.msiteFolder === "networktheme" ? _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpureFunction0"](2, _c10) : null);
  }
}
function PaymentDetailsPage_ng_container_0_ion_content_10_ion_row_73_ion_card_15_div_2_ion_item_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-item")(1, "ion-label", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](3, PaymentDetailsPage_ng_container_0_ion_content_10_ion_row_73_ion_card_15_div_2_ion_item_1_ion_radio_3_Template, 1, 3, "ion-radio", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]();
    const offer_r18 = ctx_r18.$implicit;
    const i_r20 = ctx_r18.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngStyle", ctx_r2.metaData.msiteFolder === "networktheme" ? _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpureFunction0"](3, _c10) : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate1"](" ", offer_r18.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", i_r20 == 1 || offer_r18.id == 5 || offer_r18.id == 7 || offer_r18.id == 2 || offer_r18.id == 4);
  }
}
function PaymentDetailsPage_ng_container_0_ion_content_10_ion_row_73_ion_card_15_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](1, PaymentDetailsPage_ng_container_0_ion_content_10_ion_row_73_ion_card_15_div_2_ion_item_1_Template, 4, 4, "ion-item", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const offer_r18 = ctx.$implicit;
    const i_r20 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", i_r20 > 0 && i_r20 == 1 || offer_r18.id == 5 || offer_r18.id == 7 || offer_r18.id == 2 || offer_r18.id == 4);
  }
}
function PaymentDetailsPage_ng_container_0_ion_content_10_ion_row_73_ion_card_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-card", 179)(1, "ion-radio-group", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayListener"]("ngModelChange", function PaymentDetailsPage_ng_container_0_ion_content_10_ion_row_73_ion_card_15_Template_ion_radio_group_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r17);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayBindingSet"](ctx_r2.offerType, $event) || (ctx_r2.offerType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("ionCancel", function PaymentDetailsPage_ng_container_0_ion_content_10_ion_row_73_ion_card_15_Template_ion_radio_group_ionCancel_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r17);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.offerType = "");
    })("ionChange", function PaymentDetailsPage_ng_container_0_ion_content_10_ion_row_73_ion_card_15_Template_ion_radio_group_ionChange_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r17);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.offerTypeChange(ctx_r2.offerType));
    })("click", function PaymentDetailsPage_ng_container_0_ion_content_10_ion_row_73_ion_card_15_Template_ion_radio_group_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r17);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.offerType == 7 ? ctx_r2.checkpromoCoupon(ctx_r2.promoCoupon = "", false) : "");
    })("click", function PaymentDetailsPage_ng_container_0_ion_content_10_ion_row_73_ion_card_15_Template_ion_radio_group_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r17);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.offerType == 5 ? ctx_r2.checkOfferCoupon(ctx_r2.offerCoupon = "", false) : "");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](2, PaymentDetailsPage_ng_container_0_ion_content_10_ion_row_73_ion_card_15_div_2_Template, 2, 1, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.offerType);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngForOf", ctx_r2.offersDropDown);
  }
}
function PaymentDetailsPage_ng_container_0_ion_content_10_ion_row_73_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-row", 164)(1, "ion-col", 165)(2, "ion-row")(3, "ion-col", 166)(4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](5, "Offer type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](6, "ion-col", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](7, PaymentDetailsPage_ng_container_0_ion_content_10_ion_row_73_span_7_Template, 2, 0, "span", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](8, "ion-row", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_0_ion_content_10_ion_row_73_Template_ion_row_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r15);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.viewofferDetails());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](9, "ion-col", 170)(10, "h3", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](11, " Select offer type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](12, "ion-col", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](13, PaymentDetailsPage_ng_container_0_ion_content_10_ion_row_73_ion_icon_13_Template, 1, 0, "ion-icon", 173)(14, PaymentDetailsPage_ng_container_0_ion_content_10_ion_row_73_ion_icon_14_Template, 1, 0, "ion-icon", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](15, PaymentDetailsPage_ng_container_0_ion_content_10_ion_row_73_ion_card_15_Template, 3, 2, "ion-card", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.offerType == "4" || ctx_r2.appliedofferCouponname);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", !ctx_r2.moreLessOffer);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.moreLessOffer);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.offersDropDown.length > 1 && ctx_r2.moreLessOffer);
  }
}
function PaymentDetailsPage_ng_container_0_ion_content_10_ion_item_divider_74_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](0, "ion-item-divider", 78);
  }
}
function PaymentDetailsPage_ng_container_0_ion_content_10_ion_card_75_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-card", 184)(1, "div", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](2, " Privilege Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "ion-row")(4, "ion-col", 186)(5, "ion-item", 187)(6, "ion-input", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayListener"]("ngModelChange", function PaymentDetailsPage_ng_container_0_ion_content_10_ion_card_75_Template_ion_input_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r21);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayBindingSet"](ctx_r2.privCardNumber, $event) || (ctx_r2.privCardNumber = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](7, "ion-row")(8, "ion-col", 186)(9, "ion-button", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_0_ion_content_10_ion_card_75_Template_ion_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r21);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.applyPrivCardNumber());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](10, "Use ");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](11, "ion-button", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_0_ion_content_10_ion_card_75_Template_ion_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r21);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.cancelPrivCardNumber());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](12, "Clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngClass", ctx_r2.metaData.msiteFolder == "cbustheme" ? "Contact-details" : "contact-details-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.privCardNumber);
  }
}
function PaymentDetailsPage_ng_container_0_ion_content_10_ion_card_76_ion_checkbox_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-checkbox", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayListener"]("ngModelChange", function PaymentDetailsPage_ng_container_0_ion_content_10_ion_card_76_ion_checkbox_7_Template_ion_checkbox_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r22);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayBindingSet"](ctx_r2.quotepnr, $event) || (ctx_r2.quotepnr = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("ionChange", function PaymentDetailsPage_ng_container_0_ion_content_10_ion_card_76_ion_checkbox_7_Template_ion_checkbox_ionChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r22);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.quotePNRChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.quotepnr);
  }
}
function PaymentDetailsPage_ng_container_0_ion_content_10_ion_card_76_ion_checkbox_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-checkbox", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayListener"]("ngModelChange", function PaymentDetailsPage_ng_container_0_ion_content_10_ion_card_76_ion_checkbox_8_Template_ion_checkbox_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r23);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayBindingSet"](ctx_r2.quotepnr, $event) || (ctx_r2.quotepnr = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("ionChange", function PaymentDetailsPage_ng_container_0_ion_content_10_ion_card_76_ion_checkbox_8_Template_ion_checkbox_ionChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r23);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.quotePNRChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.quotepnr);
  }
}
function PaymentDetailsPage_ng_container_0_ion_content_10_ion_card_76_p_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "p", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](1, "Applied PNR discount");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
}
function PaymentDetailsPage_ng_container_0_ion_content_10_ion_card_76_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 138)(1, "div")(2, "span", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](4, "span", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](6, "a", 142)(7, "ion-icon", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_0_ion_content_10_ion_card_76_div_11_Template_ion_icon_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r24);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.deletePnrDiscount());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.quotePnrForm.value.pnrnumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate2"]("", ctx_r2.currencySym, " ", ctx_r2.fareBreakupDetails.previous_pnr_discount, "");
  }
}
function PaymentDetailsPage_ng_container_0_ion_content_10_ion_card_76_div_12_a_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "a", 163)(1, "ion-icon", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_0_ion_content_10_ion_card_76_div_12_a_9_Template_ion_icon_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r25);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.removeQuote());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
}
function PaymentDetailsPage_ng_container_0_ion_content_10_ion_card_76_div_12_ion_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-button", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_0_ion_content_10_ion_card_76_div_12_ion_button_10_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r26);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.checkQuotePNR());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](1, "Apply");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
}
function PaymentDetailsPage_ng_container_0_ion_content_10_ion_card_76_div_12_ion_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-button", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_0_ion_content_10_ion_card_76_div_12_ion_button_11_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r27);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.checkQuotePNR());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](1, "Apply");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
}
function PaymentDetailsPage_ng_container_0_ion_content_10_ion_card_76_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 153)(1, "ion-row")(2, "ion-item", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](3, "ion-input", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](4, "ion-row")(5, "ion-col", 199)(6, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](7, "ion-input", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](8, "ion-col", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](9, PaymentDetailsPage_ng_container_0_ion_content_10_ion_card_76_div_12_a_9_Template, 2, 0, "a", 162)(10, PaymentDetailsPage_ng_container_0_ion_content_10_ion_card_76_div_12_ion_button_10_Template, 2, 0, "ion-button", 202)(11, PaymentDetailsPage_ng_container_0_ion_content_10_ion_card_76_div_12_ion_button_11_Template, 2, 0, "ion-button", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("formGroup", ctx_r2.quotePnrForm)("ngClass", ctx_r2.quoteErrors ? "errors" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngClass", ctx_r2.quoteErrors ? "invalid-quote-input" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("readonly", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngClass", ctx_r2.isAddquote && ctx_r2.quoteAplied.length > 0 ? "show-remove" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.isAddquote && ctx_r2.quoteAplied.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.metaData.msiteFolder == "cbustheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.metaData.msiteFolder == "networktheme");
  }
}
function PaymentDetailsPage_ng_container_0_ion_content_10_ion_card_76_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "span", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.quoteInvalidMsg);
  }
}
function PaymentDetailsPage_ng_container_0_ion_content_10_ion_card_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-card", 184)(1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](2, " Quote for Previous PNR");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "div", 191)(4, "ion-item", 129)(5, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](6, "Quote for Previous PNR");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](7, PaymentDetailsPage_ng_container_0_ion_content_10_ion_card_76_ion_checkbox_7_Template, 1, 1, "ion-checkbox", 192)(8, PaymentDetailsPage_ng_container_0_ion_content_10_ion_card_76_ion_checkbox_8_Template, 1, 1, "ion-checkbox", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](9, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](10, PaymentDetailsPage_ng_container_0_ion_content_10_ion_card_76_p_10_Template, 2, 0, "p", 132)(11, PaymentDetailsPage_ng_container_0_ion_content_10_ion_card_76_div_11_Template, 8, 3, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](12, PaymentDetailsPage_ng_container_0_ion_content_10_ion_card_76_div_12_Template, 12, 8, "div", 136)(13, PaymentDetailsPage_ng_container_0_ion_content_10_ion_card_76_span_13_Template, 2, 1, "span", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngClass", ctx_r2.metaData.msiteFolder == "cbustheme" ? "Contact-details" : "contact-details-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.metaData.msiteFolder == "cbustheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.metaData.msiteFolder == "networktheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.pnrDiscountAplied);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.pnrDiscountAplied);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.showQuotePnrForm());
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.quoteInvalidMsg && ctx_r2.quotepnr);
  }
}
function PaymentDetailsPage_ng_container_0_ion_content_10_ion_item_divider_77_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](0, "ion-item-divider", 78);
  }
}
function PaymentDetailsPage_ng_container_0_ion_content_10_ion_row_78_ion_radio_group_4_ion_label_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-label", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](1, " Chartered Wallet ");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](2, "ion-icon", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_0_ion_content_10_ion_row_78_ion_radio_group_4_ion_label_2_Template_ion_icon_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r29);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.showWalletDets = !ctx_r2.showWalletDets);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
}
function PaymentDetailsPage_ng_container_0_ion_content_10_ion_row_78_ion_radio_group_4_ion_label_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-label", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](1, " Network Wallet ");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](2, "ion-icon", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_0_ion_content_10_ion_row_78_ion_radio_group_4_ion_label_3_Template_ion_icon_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r30);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.showWalletDets = !ctx_r2.showWalletDets);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
}
function PaymentDetailsPage_ng_container_0_ion_content_10_ion_row_78_ion_radio_group_4_ion_item_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-item")(1, "ion-label", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](2, " Phone Booking");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "ion-icon", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_0_ion_content_10_ion_row_78_ion_radio_group_4_ion_item_11_Template_ion_icon_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r31);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.openphonebookinModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](4, "ion-radio", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngStyle", ctx_r2.metaData.msiteFolder === "networktheme" ? _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpureFunction0"](1, _c10) : null);
  }
}
function PaymentDetailsPage_ng_container_0_ion_content_10_ion_row_78_ion_radio_group_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-radio-group", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayListener"]("ngModelChange", function PaymentDetailsPage_ng_container_0_ion_content_10_ion_row_78_ion_radio_group_4_Template_ion_radio_group_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r28);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayBindingSet"](ctx_r2.bookType, $event) || (ctx_r2.bookType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("ionChange", function PaymentDetailsPage_ng_container_0_ion_content_10_ion_row_78_ion_radio_group_4_Template_ion_radio_group_ionChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r28);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.bookTypeChanged(ctx_r2.bookType));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](1, "ion-item", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](2, PaymentDetailsPage_ng_container_0_ion_content_10_ion_row_78_ion_radio_group_4_ion_label_2_Template, 3, 0, "ion-label", 211)(3, PaymentDetailsPage_ng_container_0_ion_content_10_ion_row_78_ion_radio_group_4_ion_label_3_Template, 3, 0, "ion-label", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](4, "span", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](6, "ion-radio", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](7, "ion-item")(8, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](9, " Book Online ");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](10, "ion-radio", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](11, PaymentDetailsPage_ng_container_0_ion_content_10_ion_row_78_ion_radio_group_4_ion_item_11_Template, 5, 2, "ion-item", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.bookType);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.metaData.msiteFolder == "cbustheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.metaData.msiteFolder == "networktheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngStyle", ctx_r2.metaData.msiteFolder === "networktheme" ? _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpureFunction0"](9, _c11) : _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpureFunction0"](10, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate2"]("", ctx_r2.currencySym, "", ctx_r2.balance ? ctx_r2.balance : 0, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngStyle", ctx_r2.metaData.msiteFolder === "networktheme" ? _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpureFunction0"](11, _c10) : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngStyle", ctx_r2.metaData.msiteFolder === "networktheme" ? _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpureFunction0"](12, _c10) : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.commonStorage.localGet("locale").is_phone_booking_allowed && !ctx_r2.isBima);
  }
}
function PaymentDetailsPage_ng_container_0_ion_content_10_ion_row_78_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-row", 207)(1, "ion-col", 165)(2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](3, "Select Payment Method");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](4, PaymentDetailsPage_ng_container_0_ion_content_10_ion_row_78_ion_radio_group_4_Template, 12, 13, "ion-radio-group", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.walletBooking && ctx_r2.auth.isLoggedIn());
  }
}
function PaymentDetailsPage_ng_container_0_ion_content_10_ion_item_divider_79_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](0, "ion-item-divider", 78);
  }
}
function PaymentDetailsPage_ng_container_0_ion_content_10_ion_row_80_ion_col_1_div_5_ion_item_1_ion_label_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](1, "img", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
}
function PaymentDetailsPage_ng_container_0_ion_content_10_ion_row_80_ion_col_1_div_5_ion_item_1_ion_label_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const payType_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate1"]("", payType_r33.name, " ");
  }
}
function PaymentDetailsPage_ng_container_0_ion_content_10_ion_row_80_ion_col_1_div_5_ion_item_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](1, PaymentDetailsPage_ng_container_0_ion_content_10_ion_row_80_ion_col_1_div_5_ion_item_1_ion_label_1_Template, 2, 0, "ion-label", 3)(2, PaymentDetailsPage_ng_container_0_ion_content_10_ion_row_80_ion_col_1_div_5_ion_item_1_ion_label_2_Template, 2, 1, "ion-label", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](3, "ion-radio", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const payType_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", payType_r33.name == "Razorpay" && payType_r33.id == "53");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", payType_r33.name != "Razorpay" || payType_r33.id != "53");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpropertyInterpolate"]("value", payType_r33 ? payType_r33.id : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngStyle", ctx_r2.metaData.msiteFolder === "networktheme" ? _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpureFunction0"](4, _c10) : null);
  }
}
function PaymentDetailsPage_ng_container_0_ion_content_10_ion_row_80_ion_col_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](1, PaymentDetailsPage_ng_container_0_ion_content_10_ion_row_80_ion_col_1_div_5_ion_item_1_Template, 4, 5, "ion-item", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const payType_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", payType_r33.name && payType_r33.name.toUpperCase().indexOf("EBS") < 0);
  }
}
function PaymentDetailsPage_ng_container_0_ion_content_10_ion_row_80_ion_col_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-col", 165)(1, "div", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](2, "Payment options");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "ion-list", 129)(4, "ion-radio-group", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayListener"]("ngModelChange", function PaymentDetailsPage_ng_container_0_ion_content_10_ion_row_80_ion_col_1_Template_ion_radio_group_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r32);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayBindingSet"](ctx_r2.paymentType, $event) || (ctx_r2.paymentType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("ionChange", function PaymentDetailsPage_ng_container_0_ion_content_10_ion_row_80_ion_col_1_Template_ion_radio_group_ionChange_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r32);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.calculatePgCharges(ctx_r2.paymentType));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](5, PaymentDetailsPage_ng_container_0_ion_content_10_ion_row_80_ion_col_1_div_5_Template, 2, 1, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.paymentType);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngForOf", ctx_r2.metaData.payMentGateWayTypes);
  }
}
function PaymentDetailsPage_ng_container_0_ion_content_10_ion_row_80_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-row", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](1, PaymentDetailsPage_ng_container_0_ion_content_10_ion_row_80_ion_col_1_Template, 6, 2, "ion-col", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", !ctx_r2.payTypeName.includes("52"));
  }
}
function PaymentDetailsPage_ng_container_0_ion_content_10_ion_item_divider_81_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](0, "ion-item-divider", 78);
  }
}
function PaymentDetailsPage_ng_container_0_ion_content_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-content", 35)(1, "ion-grid")(2, "ion-row")(3, "ion-col", 36)(4, "div", 37)(5, "div", 38)(6, "ion-row", 39)(7, "ion-col", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](8, PaymentDetailsPage_ng_container_0_ion_content_10__svg_svg_8_Template, 9, 0, "svg", 41)(9, PaymentDetailsPage_ng_container_0_ion_content_10_img_9_Template, 1, 1, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](10, "ion-col", 43)(11, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](15, "ion-col", 44)(16, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](18, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](20, "ion-row", 45)(21, "ion-col", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](22, PaymentDetailsPage_ng_container_0_ion_content_10_h2_22_Template, 3, 3, "h2", 47)(23, PaymentDetailsPage_ng_container_0_ion_content_10_h2_23_Template, 3, 3, "h2", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](24, "ion-col", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](25, "h2", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](26, "ion-col", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](27, PaymentDetailsPage_ng_container_0_ion_content_10_h2_27_Template, 3, 3, "h2", 51)(28, PaymentDetailsPage_ng_container_0_ion_content_10_h2_28_Template, 3, 3, "h2", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](29, "ion-col", 46)(30, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](32, "ion-col", 54)(33, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](34, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](35, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](36, PaymentDetailsPage_ng_container_0_ion_content_10__svg_svg_36_Template, 4, 0, "svg", 56)(37, PaymentDetailsPage_ng_container_0_ion_content_10_h3_37_Template, 2, 1, "h3", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](38, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](39, "ion-col", 46)(40, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](42, "ion-col", 46)(43, "h2", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](45, "ion-col", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](46, PaymentDetailsPage_ng_container_0_ion_content_10_h3_46_Template, 2, 1, "h3", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](47, "ion-col", 50)(48, "h2", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](50, "ion-col", 46)(51, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](52, "Depart");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](53, "ion-col", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](54, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](55, "ion-col", 46)(56, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](57, "Arrive");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](58, "ion-row", 60)(59, "ion-col", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](60, PaymentDetailsPage_ng_container_0_ion_content_10_ion_icon_60_Template, 1, 0, "ion-icon", 62)(61, PaymentDetailsPage_ng_container_0_ion_content_10_ion_icon_61_Template, 1, 0, "ion-icon", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](62, PaymentDetailsPage_ng_container_0_ion_content_10_div_62_Template, 27, 8, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](63, "ion-row", 64)(64, "ion-col", 65)(65, "h2", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_0_ion_content_10_Template_h2_click_65_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.viewDetails());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](66);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](67, PaymentDetailsPage_ng_container_0_ion_content_10_ion_icon_67_Template, 1, 0, "ion-icon", 67)(68, PaymentDetailsPage_ng_container_0_ion_content_10_ion_icon_68_Template, 1, 0, "ion-icon", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](69, PaymentDetailsPage_ng_container_0_ion_content_10_ion_row_69_Template, 66, 32, "ion-row", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](70, "ion-row")(71, "ion-col", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](72, PaymentDetailsPage_ng_container_0_ion_content_10_ion_card_72_Template, 15, 10, "ion-card", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](73, PaymentDetailsPage_ng_container_0_ion_content_10_ion_row_73_Template, 16, 4, "ion-row", 70)(74, PaymentDetailsPage_ng_container_0_ion_content_10_ion_item_divider_74_Template, 1, 0, "ion-item-divider", 71)(75, PaymentDetailsPage_ng_container_0_ion_content_10_ion_card_75_Template, 13, 2, "ion-card", 72)(76, PaymentDetailsPage_ng_container_0_ion_content_10_ion_card_76_Template, 14, 7, "ion-card", 72)(77, PaymentDetailsPage_ng_container_0_ion_content_10_ion_item_divider_77_Template, 1, 0, "ion-item-divider", 71)(78, PaymentDetailsPage_ng_container_0_ion_content_10_ion_row_78_Template, 5, 1, "ion-row", 73)(79, PaymentDetailsPage_ng_container_0_ion_content_10_ion_item_divider_79_Template, 1, 0, "ion-item-divider", 71)(80, PaymentDetailsPage_ng_container_0_ion_content_10_ion_row_80_Template, 2, 1, "ion-row", 73)(81, PaymentDetailsPage_ng_container_0_ion_content_10_ion_item_divider_81_Template, 1, 0, "ion-item-divider", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](82, "ion-row", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_0_ion_content_10_Template_ion_row_click_82_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.cancellation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](83, "ion-col", 75)(84, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](85, "Cancellation Policy");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](86, "ion-col", 76)(87, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](88, "ion-icon", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](89, "ion-item-divider", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](90, "ion-row", 79)(91, "ion-col", 36)(92, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](93, "By clicking on continue you agree to all our ");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](94, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_0_ion_content_10_Template_a_click_94_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.termsCond());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](95, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](96, "T&C");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](97, "form", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngClass", ctx_r2.metaData.msiteFolder == "cbustheme" ? "review-booking-card-first-row" : "review-booking-card-first-row_2");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.metaData.msiteFolder == "cbustheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.metaData.msiteFolder == "networktheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.globalData.SELECTED_SERVICE.number);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.globalData.SELECTED_SERVICE.bus_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.globalData.DEPARTURE_DATE.day);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.globalData.DEPARTURE_DATE.monthNameShort);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.metaData.msiteFolder == "cbustheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.metaData.msiteFolder == "networktheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.metaData.msiteFolder == "cbustheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.metaData.msiteFolder == "networktheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.globalData.SEARCH_DATA.originCity.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngClass", ctx_r2.metaData.msiteFolder == "cbustheme" ? "location-line" : "location-line_2");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngClass", ctx_r2.metaData.msiteFolder == "cbustheme" ? "location-dot" : "location-dot_2");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngClass", ctx_r2.metaData.msiteFolder == "cbustheme" ? "location-bus" : "location-bus_2");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.metaData.msiteFolder == "cbustheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.metaData.msiteFolder == "networktheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngClass", ctx_r2.metaData.msiteFolder == "cbustheme" ? "location-dot-blue" : "location-dot-blue_2");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.globalData.SEARCH_DATA.destCity.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.reservationData.boardingStage.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.metaData.msiteFolder == "cbustheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate1"](" ", ctx_r2.reservationData.droppingStage.time, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.metaData.msiteFolder == "cbustheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.metaData.msiteFolder == "networktheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.moreLessOpt);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngStyle", (ctx_r2.metaData == null ? null : ctx_r2.metaData.msiteFolder) === "cbustheme" ? _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpureFunction0"](42, _c3) : _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpureFunction0"](43, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngClass", ctx_r2.metaData.msiteFolder == "cbustheme" ? "show-details" : "show-details_2");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate1"](" ", ctx_r2.moreLessOpt ? "Less" : "Show", " Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", !ctx_r2.moreLessOpt);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.moreLessOpt);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.isReturn);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.showChashCoupons());
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.offersDropDown.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.offersDropDown.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.offerType == "4");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.offerType == "1" && ctx_r2.offersDropDown.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.offerType == "1" && ctx_r2.offersDropDown.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.walletBooking && ctx_r2.auth.isLoggedIn());
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.walletBooking && ctx_r2.auth.isLoggedIn());
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.bookOnline && ctx_r2.pgLength > "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.bookOnline && ctx_r2.pgLength > "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngClass", ctx_r2.metaData.msiteFolder == "cbustheme" ? "policy-row" : "policy-row-2");
  }
}
function PaymentDetailsPage_ng_container_0_div_11_ion_row_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-row", 230)(1, "div", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "span", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate1"](" ", ctx_r2.fareBreakupDetails && ctx_r2.fareBreakupDetails.offer_discount != 0 ? "Offer Discount" : ctx_r2.fareBreakupDetails && ctx_r2.fareBreakupDetails.ebooking_discount != 0 ? "E-Booking Discount" : ctx_r2.fareBreakupDetails && ctx_r2.fareBreakupDetails.ebooking_discount != 0 ? "E-Booking Discount" : ctx_r2.fareBreakupDetails && ctx_r2.fareBreakupDetails.previous_pnr_discount != 0 ? "Previous Pnr Discount" : ctx_r2.fareBreakupDetails && ctx_r2.fareBreakupDetails.privilege_card_discount != 0 ? "Privilege Card Discount" : "Discount", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate2"]("", ctx_r2.currencySym, " ", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipeBind2"](5, 3, ctx_r2.fareBreakupDetails ? (ctx_r2.fareBreakupDetails.offer_discount ? ctx_r2.fareBreakupDetails.offer_discount : 0) + (ctx_r2.fareBreakupDetails.ebooking_discount ? ctx_r2.fareBreakupDetails.ebooking_discount : 0) + (ctx_r2.fareBreakupDetails.previous_pnr_discount ? ctx_r2.fareBreakupDetails.previous_pnr_discount : 0) + (ctx_r2.fareBreakupDetails.privilege_card_discount ? ctx_r2.fareBreakupDetails.privilege_card_discount : 0) : 0, "1.1-1"), " ");
  }
}
function PaymentDetailsPage_ng_container_0_div_11_ion_row_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-row", 230)(1, "div", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](2, "Total snack price");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "span", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate2"]("", ctx_r2.currencySym, " ", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipeBind2"](5, 2, ctx_r2.fareBreakupDetails.total_snack_price, "1.1-1"), "");
  }
}
function PaymentDetailsPage_ng_container_0_div_11_ion_row_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-row", 230)(1, "div", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](2, "Cash coupon");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "span", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate2"]("", ctx_r2.currencySym, " ", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipeBind2"](5, 2, ctx_r2.fareBreakupDetails.cash_coupon, "1.1-1"), "");
  }
}
function PaymentDetailsPage_ng_container_0_div_11_ion_row_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-row")(1, "div", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](2, "Special Discount Coupon");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "span", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate2"]("", ctx_r2.currencySym, " ", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipeBind2"](5, 2, ctx_r2.fareBreakupDetails.special_discount_coupon, "1.1-1"), "");
  }
}
function PaymentDetailsPage_ng_container_0_div_11_ion_row_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-row", 230)(1, "div", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](2, "Bus Operator GST");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "span", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate2"]("", ctx_r2.currencySym, " ", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipeBind2"](5, 2, ctx_r2.fareBreakupDetails.service_tax_amount, "1.1-1"), "");
  }
}
function PaymentDetailsPage_ng_container_0_div_11_ion_row_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-row", 230)(1, "div", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](2, "Transaction Charge");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "span", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate2"]("", ctx_r2.currencySym, " ", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipeBind2"](5, 2, ctx_r2.fareBreakupDetails.transaction_charges, "1.1-1"), "");
  }
}
function PaymentDetailsPage_ng_container_0_div_11_ion_row_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-row", 230)(1, "div", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](2, "Convenience Charge");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "span", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate2"]("", ctx_r2.currencySym, " ", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipeBind2"](5, 2, ctx_r2.fareBreakupDetails.cc_charges, "1.1-1"), "");
  }
}
function PaymentDetailsPage_ng_container_0_div_11_ion_row_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-row", 230)(1, "div", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](2, "Promotional Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "span", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate2"]("", ctx_r2.currencySym, " ", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipeBind2"](5, 2, ctx_r2.fareBreakupDetails.usable_promotional_balance, "1.1-1"), "");
  }
}
function PaymentDetailsPage_ng_container_0_div_11_ion_row_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-row", 230)(1, "div", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](2, "Wallet Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "span", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate2"]("", ctx_r2.currencySym, " ", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipeBind2"](5, 2, ctx_r2.fareBreakupDetails.wallet_balance, "1.1-1"), "");
  }
}
function PaymentDetailsPage_ng_container_0_div_11_ion_row_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-row", 230)(1, "div", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](2, "Refundable Booking Charges");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "span", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipeBind2"](5, 1, ctx_r2.fareBreakupDetails.cancel_protect_charge, "1.1-1"));
  }
}
function PaymentDetailsPage_ng_container_0_div_11_ion_row_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-row", 230)(1, "div", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](2, "Total Fare");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "span", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate2"]("", ctx_r2.currencySym, " ", ctx_r2.fareBreakupDetails.total_fare < 0 ? 0 : _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipeBind2"](5, 2, ctx_r2.fareBreakupDetails.total_fare, "1.1-1"), "");
  }
}
function PaymentDetailsPage_ng_container_0_div_11_ion_row_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-row")(1, "div", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](2, "Net Payable Phonebook (10%)");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "span", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate2"]("", ctx_r2.currencySym, " ", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipeBind2"](5, 2, ctx_r2.fareBreakupDetails.net_payable_phonebook, "1.1-1"), "");
  }
}
function PaymentDetailsPage_ng_container_0_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 222)(1, "div", 223)(2, "ion-row", 224)(3, "ion-col", 225)(4, "span", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](5, "Price Breakup");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](6, "ion-col", 227)(7, "ion-icon", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_0_div_11_Template_ion_icon_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r34);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.pricebreakUP = !ctx_r2.pricebreakUP);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](8, "hr", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](9, "div")(10, "ion-row", 230)(11, "div", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](12, "Base Fare");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](13, "span", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipe"](15, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](16, PaymentDetailsPage_ng_container_0_div_11_ion_row_16_Template, 6, 6, "ion-row", 233)(17, PaymentDetailsPage_ng_container_0_div_11_ion_row_17_Template, 6, 5, "ion-row", 233)(18, PaymentDetailsPage_ng_container_0_div_11_ion_row_18_Template, 6, 5, "ion-row", 233)(19, PaymentDetailsPage_ng_container_0_div_11_ion_row_19_Template, 6, 5, "ion-row", 3)(20, PaymentDetailsPage_ng_container_0_div_11_ion_row_20_Template, 6, 5, "ion-row", 233)(21, PaymentDetailsPage_ng_container_0_div_11_ion_row_21_Template, 6, 5, "ion-row", 233)(22, PaymentDetailsPage_ng_container_0_div_11_ion_row_22_Template, 6, 5, "ion-row", 233)(23, PaymentDetailsPage_ng_container_0_div_11_ion_row_23_Template, 6, 5, "ion-row", 233)(24, PaymentDetailsPage_ng_container_0_div_11_ion_row_24_Template, 6, 5, "ion-row", 233)(25, PaymentDetailsPage_ng_container_0_div_11_ion_row_25_Template, 6, 4, "ion-row", 233)(26, PaymentDetailsPage_ng_container_0_div_11_ion_row_26_Template, 6, 5, "ion-row", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](27, "hr", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](28, "ion-row")(29, "div", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](30, "Total Amount Payable");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](31, "span", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipe"](33, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](34, PaymentDetailsPage_ng_container_0_div_11_ion_row_34_Template, 6, 5, "ion-row", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate2"]("", ctx_r2.currencySym, " ", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipeBind2"](15, 16, ctx_r2.fareBreakupDetails.ticket_fare, "1.1-1"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.showDiscount(ctx_r2.fareBreakupDetails));
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.fareBreakupDetails.total_snack_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.fareBreakupDetails.cash_coupon);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.fareBreakupDetails.special_discount_coupon);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", !ctx_r2.commonService.isAbcApp() && ctx_r2.fareBreakupDetails.service_tax_amount != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.fareBreakupDetails.transaction_charges);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.fareBreakupDetails.cc_charges);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.fareBreakupDetails.usable_promotional_balance);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.fareBreakupDetails.wallet_balance);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.checkCancelProtect && !ctx_r2.phoneBooking && ctx_r2.metaData.showCancelProtect);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.fareBreakupDetails.total_fare);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate2"]("", ctx_r2.currencySym, "", ctx_r2.payAmount < 0 ? 0 : _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipeBind2"](33, 19, ctx_r2.payAmount, "1.1-1"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.fareBreakupDetails.net_payable_phonebook && ctx_r2.phoneBooking);
  }
}
function PaymentDetailsPage_ng_container_0_div_12_ion_col_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-col", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](1, "Wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
}
function PaymentDetailsPage_ng_container_0_div_12_ion_col_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-col", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](1, "Network Wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
}
function PaymentDetailsPage_ng_container_0_div_12_div_7_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](0, "img", 250);
  }
}
function PaymentDetailsPage_ng_container_0_div_12_div_7_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](0, "img", 251);
  }
}
function PaymentDetailsPage_ng_container_0_div_12_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 241)(1, "ion-row")(2, "ion-col", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](3, PaymentDetailsPage_ng_container_0_div_12_div_7_img_3_Template, 1, 0, "img", 248)(4, PaymentDetailsPage_ng_container_0_div_12_div_7_img_4_Template, 1, 0, "img", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](5, "ion-col", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](8, "div", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](9, " Money earned from cashback and coupons");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.metaData.msiteFolder == "cbustheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.metaData.msiteFolder == "networktheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate1"](" Promotional : ", ctx_r2.promobalance, " ");
  }
}
function PaymentDetailsPage_ng_container_0_div_12_img_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](0, "img", 252);
  }
}
function PaymentDetailsPage_ng_container_0_div_12_img_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](0, "img", 253);
  }
}
function PaymentDetailsPage_ng_container_0_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 222)(1, "div", 237)(2, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](3, PaymentDetailsPage_ng_container_0_div_12_ion_col_3_Template, 2, 0, "ion-col", 238)(4, PaymentDetailsPage_ng_container_0_div_12_ion_col_4_Template, 2, 0, "ion-col", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](5, "ion-col", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_0_div_12_Template_ion_col_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r35);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.showWalletDets = !ctx_r2.showWalletDets);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](6, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](7, PaymentDetailsPage_ng_container_0_div_12_div_7_Template, 10, 3, "div", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](8, "div", 241)(9, "ion-row")(10, "ion-col", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](11, PaymentDetailsPage_ng_container_0_div_12_img_11_Template, 1, 0, "img", 243)(12, PaymentDetailsPage_ng_container_0_div_12_img_12_Template, 1, 0, "img", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](13, "ion-col", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](16, "div", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](17, " Money added by you in wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.metaData.msiteFolder == "cbustheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.metaData.msiteFolder == "networktheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngStyle", ctx_r2.metaData.msiteFolder == "cbustheme" ? _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpureFunction0"](7, _c12) : _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpureFunction0"](8, _c13));
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.metaData.is_wallet_promotional);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.metaData.msiteFolder == "cbustheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.metaData.msiteFolder == "networktheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate1"](" Non-promotional : ", ctx_r2.nonpromobalance, "");
  }
}
function PaymentDetailsPage_ng_container_0_div_13_swiper_slide_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "swiper-slide", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](1, "img", 262)(2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "div", 263);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const o_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpropertyInterpolate"]("src", o_r37.image, _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](o_r37.text);
  }
}
function PaymentDetailsPage_ng_container_0_div_13_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](1, " 1. Phone booking feature is available for paying through wallet only.");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](2, "br")(3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](4, " 2. Release time differs based on origin-destination, bus type, or timing.");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](5, "br")(6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](7, " 3. In the case of auto cancellation, no refund of the advance fare shall be admissible.");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](8, "br")(9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](10, " 4. In the case of confirmation, you will need to pay 100% of the ticket amount, and the 10% advance amount will be automatically credited back to the wallet. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
}
function PaymentDetailsPage_ng_container_0_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 222)(1, "div", 254)(2, "ion-row")(3, "ion-col", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](4, "How it Works");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](5, "ion-col", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_0_div_13_Template_ion_col_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r36);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.showPhoneBookDets = !ctx_r2.showPhoneBookDets);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](6, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](7, "swiper-container", 257, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](9, PaymentDetailsPage_ng_container_0_div_13_swiper_slide_9_Template, 5, 2, "swiper-slide", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipe"](10, "filterOculto");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](11, "ion-col", 259);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](12, "T & C*");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](13, PaymentDetailsPage_ng_container_0_div_13_div_13_Template, 11, 0, "div", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("options", ctx_r2.slideOpts);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipeBind1"](10, 3, ctx_r2.termsImages));
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.metaData.is_wallet_promotional);
  }
}
function PaymentDetailsPage_ng_container_0_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 222)(1, "div", 265)(2, "div", 266)(3, "div", 267);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](4, "img", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](5, "ion-row")(6, "ion-col", 269)(7, "div", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](8, " Ticket has been booked! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](9, "ion-row")(10, "ion-col", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_0_div_14_Template_ion_col_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r38);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.viewTicketPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](11, "ion-button", 272);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](12, "View Ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngClass", ctx_r2.metaData.msitefolder == "cbustheme" ? "view-ticket-btn" : "themeone-view-ticket-btn");
  }
}
function PaymentDetailsPage_ng_container_0_p_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "p", 273);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_0_p_28_Template_p_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r39);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.openApplyCouponModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](1, "Save more with coupons");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
}
function PaymentDetailsPage_ng_container_0_p_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "p", 273);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_0_p_29_Template_p_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r40);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.checkpromoCoupon(ctx_r2.offerCoupon, false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate1"]("", ctx_r2.appliedofferCouponname, " Applied");
  }
}
function PaymentDetailsPage_ng_container_0_ion_icon_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-icon", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_0_ion_icon_31_Template_ion_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r41);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.openApplyCouponModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
}
function PaymentDetailsPage_ng_container_0_p_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "p", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_0_p_32_Template_p_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r42);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.checkOfferCoupon(null, false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](1, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
}
function PaymentDetailsPage_ng_container_0_h2_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate2"]("", ctx_r2.currencySym, "", ctx_r2.payAmount < 0 ? 0 : _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipeBind2"](2, 2, ctx_r2.payAmount, "1.1-1"), "");
  }
}
function PaymentDetailsPage_ng_container_0_h2_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate2"]("", ctx_r2.currencySym, " ", ctx_r2.fareBreakupDetails.net_payable_phonebook < 0 ? 0 : _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipeBind2"](2, 2, ctx_r2.fareBreakupDetails.net_payable_phonebook, "1.1-1"), "");
  }
}
function PaymentDetailsPage_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](1, "ion-header", 4)(2, "ion-row", 5)(3, "ion-col", 6)(4, "ion-buttons", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](5, "ion-back-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](6, "ion-col", 9)(7, "h1", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](8, "Review Bookings");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](9, "ion-col", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](10, PaymentDetailsPage_ng_container_0_ion_content_10_Template, 98, 44, "ion-content", 12)(11, PaymentDetailsPage_ng_container_0_div_11_Template, 35, 22, "div", 13)(12, PaymentDetailsPage_ng_container_0_div_12_Template, 18, 9, "div", 13)(13, PaymentDetailsPage_ng_container_0_div_13_Template, 14, 5, "div", 13)(14, PaymentDetailsPage_ng_container_0_div_14_Template, 13, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](15, "ion-footer", 14)(16, "ion-grid", 15)(17, "ion-row", 16)(18, "ion-col", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](19, "svg", 18)(20, "g", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](21, "path", 20)(22, "path", 21)(23, "path", 22)(24, "path", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](25, "defs")(26, "clipPath", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](27, "rect", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](28, PaymentDetailsPage_ng_container_0_p_28_Template, 2, 0, "p", 26)(29, PaymentDetailsPage_ng_container_0_p_29_Template, 2, 1, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](30, "ion-col", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](31, PaymentDetailsPage_ng_container_0_ion_icon_31_Template, 1, 0, "ion-icon", 28)(32, PaymentDetailsPage_ng_container_0_p_32_Template, 2, 0, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](33, "ion-row", 30)(34, "ion-col", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](35, PaymentDetailsPage_ng_container_0_h2_35_Template, 3, 5, "h2", 3)(36, PaymentDetailsPage_ng_container_0_h2_36_Template, 3, 5, "h2", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](37, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_0_Template_p_click_37_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.pricebreakUP = !ctx_r2.pricebreakUP);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](38, "View Breakup");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](39, "ion-col", 33)(40, "ion-button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_0_Template_ion_button_click_40_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.pay());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](41, "Continue to Payment");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngStyle", ctx_r2.isIos ? _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpureFunction0"](14, _c0) : _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpureFunction0"](15, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.globalData);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.pricebreakUP);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.showWalletDets);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.showPhoneBookDets);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.viewTicket);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", !ctx_r2.appliedofferCouponname);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.appliedofferCouponname);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", !ctx_r2.appliedofferCouponname);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.appliedofferCouponname);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngClass", ctx_r2.metaData.msiteFolder == "cbustheme" ? "footer-row" : "footer-row-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", !ctx_r2.phoneBooking);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.fareBreakupDetails.net_payable_phonebook && ctx_r2.phoneBooking);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpureFunction1"](16, _c2, ctx_r2.metaData.msiteFolder == "cbustheme" ? "ctp_theme1" : "ctp_theme1_2"));
  }
}
function PaymentDetailsPage_ng_container_1_div_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 313)(1, "div", 284)(2, "div", 285)(3, "span", 286);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](5, "p", 314);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](7, "div", 288)(8, "span", 286);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](10, "p", 314);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](12, "div", 294);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](13, "ion-icon", 315);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](14, "div", 292);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](15, "div", 293)(16, "div", 285)(17, "span", 286);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](20, "span", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](22, "div", 288)(23, "span", 286);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](25, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](26, "span", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](28, "div", 294)(29, "span", 286);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](31, "div", 292);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.commaSeparate(ctx_r2.globalData.SEARCH_DATA.destCity.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.reservationDataReturn.boardingStage.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate1"](" ", ctx_r2.commaSeparate(ctx_r2.globalData.SEARCH_DATA.originCity.name), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.reservationDataReturn.droppingStage.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.reservationData.boardingStage.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate4"](" ", ctx_r2.globalData.DEPARTURE_DATE_RETURN.dayNameShort + ", ", "", " " + ctx_r2.globalData.DEPARTURE_DATE_RETURN.day, " ", " " + ctx_r2.globalData.DEPARTURE_DATE_RETURN.monthName + " ", " ", " " + ctx_r2.globalData.DEPARTURE_DATE_RETURN.year, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.reservationData.droppingStage.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate4"](" ", ctx_r2.globalData.DEPARTURE_DATE_RETURN.dayNameShort + ", ", "", " " + ctx_r2.globalData.DEPARTURE_DATE_RETURN.day, " ", " " + ctx_r2.globalData.DEPARTURE_DATE_RETURN.monthName + " ", " ", " " + ctx_r2.globalData.DEPARTURE_DATE_RETURN.year, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate1"](" ", ctx_r2.globalData.SELECTED_SERVICE.duration, "hrs");
  }
}
function PaymentDetailsPage_ng_container_1_div_43_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](1, "ion-row")(2, "span", 320);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](4, "ion-row")(5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](7, "ion-row")(8, "span", 320);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](9, "Boarding point");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](10, "ion-row")(11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](13, "ion-row")(14, "span", 320);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](15, "Dropping point");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](16, "ion-row")(17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate2"]("", ctx_r2.globalData.SEARCH_DATA.destCity.name, " - ", ctx_r2.globalData.SEARCH_DATA.originCity.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.globalData.SELECTED_SERVICE_RETURN.bus_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.reservationDataReturn.boardingStage.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.reservationDataReturn.droppingStage.name);
  }
}
function PaymentDetailsPage_ng_container_1_div_43_ion_row_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 323)(2, "ion-row")(3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](5, "ion-col", 323)(6, "div", 324);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const p_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](p_r44.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](p_r44.seat_number);
  }
}
function PaymentDetailsPage_ng_container_1_div_43_ng_container_29_ion_row_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-row")(1, "div")(2, "ion-row")(3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](5, "ion-row")(6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](8, "span", 325);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const p_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](p_r45.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate2"]("", p_r45.sex === "Mr" ? "Male" : "Female", " , ", p_r45.age, " years");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](p_r45.seat_number);
  }
}
function PaymentDetailsPage_ng_container_1_div_43_ng_container_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](1, PaymentDetailsPage_ng_container_1_div_43_ng_container_29_ion_row_1_Template, 11, 4, "ion-row", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngForOf", ctx_r2.returnSeatDetails);
  }
}
function PaymentDetailsPage_ng_container_1_div_43_ion_row_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-row")(1, "div", 321);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](2, "Discount");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "span", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate2"]("", ctx_r2.currencySym, " ", ctx_r2.fareBreakupDetails ? (ctx_r2.fareBreakupDetails.offer_discount ? ctx_r2.fareBreakupDetails.offer_discount : 0) + (ctx_r2.fareBreakupDetails.ebooking_discount ? ctx_r2.fareBreakupDetails.ebooking_discount : 0) + (ctx_r2.fareBreakupDetails.previous_pnr_discount ? ctx_r2.fareBreakupDetails.previous_pnr_discount : 0) + (ctx_r2.fareBreakupDetails.privilege_card_discount ? ctx_r2.fareBreakupDetails.privilege_card_discount : 0) : _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipeBind2"](5, 2, 0, "1.1-1"), "");
  }
}
function PaymentDetailsPage_ng_container_1_div_43_ion_row_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-row")(1, "div", 321);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](2, "Total snack price");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "span", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate2"]("", ctx_r2.currencySym, " ", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipeBind2"](5, 2, ctx_r2.fareBreakupDetails.total_snack_price, "1.1-1"), "");
  }
}
function PaymentDetailsPage_ng_container_1_div_43_ion_row_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-row")(1, "div", 321);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](2, "Cash coupon");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "span", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate2"](" ", ctx_r2.currencySym, " ", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipeBind2"](5, 2, ctx_r2.fareBreakupDetails.cash_coupon, "1.1-1"), "");
  }
}
function PaymentDetailsPage_ng_container_1_div_43_ion_row_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-row")(1, "div", 321);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](2, "Bus Operator GST");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "span", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate2"](" ", ctx_r2.currencySym, " ", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipeBind2"](5, 2, ctx_r2.fareBreakupDetails.service_tax_amount, "1.1-1"), "");
  }
}
function PaymentDetailsPage_ng_container_1_div_43_ion_row_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-row")(1, "div", 321);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](2, "Transaction Charge");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "span", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate2"](" ", ctx_r2.currencySym, " ", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipeBind2"](5, 2, ctx_r2.fareBreakupDetails.transaction_charges, "1.1-1"), "");
  }
}
function PaymentDetailsPage_ng_container_1_div_43_ion_row_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-row")(1, "div", 321);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](2, "Convenience Charge");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "span", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate2"](" ", ctx_r2.currencySym, " ", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipeBind2"](5, 2, ctx_r2.fareBreakupDetails.cc_charges, "1.1-1"), "");
  }
}
function PaymentDetailsPage_ng_container_1_div_43_ion_row_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-row")(1, "div", 321);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](2, "Promotional Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "span", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate2"](" ", ctx_r2.currencySym, " ", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipeBind2"](5, 2, ctx_r2.fareBreakupDetails.usable_promotional_balance, "1.1-1"), "");
  }
}
function PaymentDetailsPage_ng_container_1_div_43_ion_row_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-row")(1, "div", 321);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](2, "Wallet Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "span", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate2"](" ", ctx_r2.currencySym, " ", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipeBind2"](5, 2, ctx_r2.fareBreakupDetails.wallet_balance, "1.1-1"), "");
  }
}
function PaymentDetailsPage_ng_container_1_div_43_ion_row_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-row")(1, "div", 321);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](2, "Refundable Booking Charges");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "span", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipeBind2"](5, 1, ctx_r2.fareBreakupDetails.cancel_protect_charge, "1.1-1"));
  }
}
function PaymentDetailsPage_ng_container_1_div_43_ion_row_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-row")(1, "div", 326);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](2, "Net Payable Phonebook (10%)");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "span", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate2"]("", ctx_r2.currencySym, " ", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipeBind2"](5, 2, ctx_r2.fareBreakupDetails.net_payable_phonebook, "1.1-1"), "");
  }
}
function PaymentDetailsPage_ng_container_1_div_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 316)(1, "div", 317)(2, "span", 318);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](3, "BUS DETAILS");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](4, "hr", 319);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](5, "ion-row")(6, "span", 320);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](8, "ion-row")(9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](11, "ion-row")(12, "span", 320);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](13, "Boarding point");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](14, "ion-row")(15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](17, "ion-row")(18, "span", 320);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](19, "Dropping point");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](20, "ion-row")(21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](23, PaymentDetailsPage_ng_container_1_div_43_ng_container_23_Template, 19, 5, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](24, "ion-row")(25, "span", 318);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](26, "PASSENGER DETAILS");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](27, "hr", 319);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](28, PaymentDetailsPage_ng_container_1_div_43_ion_row_28_Template, 8, 2, "ion-row", 139)(29, PaymentDetailsPage_ng_container_1_div_43_ng_container_29_Template, 2, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](30, "div")(31, "ion-row")(32, "span", 318);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](33, "FARE BREAKUP");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](34, "hr", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](35, "ion-row")(36, "div", 321);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](37, "Base Fare");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](38, "span", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipe"](40, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](41, PaymentDetailsPage_ng_container_1_div_43_ion_row_41_Template, 6, 5, "ion-row", 3)(42, PaymentDetailsPage_ng_container_1_div_43_ion_row_42_Template, 6, 5, "ion-row", 3)(43, PaymentDetailsPage_ng_container_1_div_43_ion_row_43_Template, 6, 5, "ion-row", 3)(44, PaymentDetailsPage_ng_container_1_div_43_ion_row_44_Template, 6, 5, "ion-row", 3)(45, PaymentDetailsPage_ng_container_1_div_43_ion_row_45_Template, 6, 5, "ion-row", 3)(46, PaymentDetailsPage_ng_container_1_div_43_ion_row_46_Template, 6, 5, "ion-row", 3)(47, PaymentDetailsPage_ng_container_1_div_43_ion_row_47_Template, 6, 5, "ion-row", 3)(48, PaymentDetailsPage_ng_container_1_div_43_ion_row_48_Template, 6, 5, "ion-row", 3)(49, PaymentDetailsPage_ng_container_1_div_43_ion_row_49_Template, 6, 4, "ion-row", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](50, "hr", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](51, "ion-row")(52, "div", 322);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](53, "TOTAL PAYABLE");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](54, "span", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipe"](56, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](57, PaymentDetailsPage_ng_container_1_div_43_ion_row_57_Template, 6, 5, "ion-row", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate2"]("", ctx_r2.globalData.SEARCH_DATA.originCity.name, " - ", ctx_r2.globalData.SEARCH_DATA.destCity.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.globalData.SELECTED_SERVICE.bus_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.reservationData.boardingStage.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.reservationData.droppingStage.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.isReturn);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngForOf", ctx_r2.onwardSeatDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.isReturn);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate2"]("", ctx_r2.currencySym, " ", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipeBind2"](40, 22, ctx_r2.fareBreakupDetails.ticket_fare, "1.1-1"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.showDiscount(ctx_r2.fareBreakupDetails));
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.fareBreakupDetails.total_snack_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.fareBreakupDetails.cash_coupon);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", !ctx_r2.commonService.isAbcApp());
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.fareBreakupDetails.transaction_charges);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.fareBreakupDetails.cc_charges);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.fareBreakupDetails.usable_promotional_balance);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.fareBreakupDetails.wallet_balance);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.checkCancelProtect && !ctx_r2.phoneBooking && ctx_r2.metaData.showCancelProtect);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate2"]("", ctx_r2.currencySym, " ", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipeBind2"](56, 25, ctx_r2.payAmount, "1.1-1"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.fareBreakupDetails.net_payable_phonebook && ctx_r2.phoneBooking);
  }
}
function PaymentDetailsPage_ng_container_1_span_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](1, "Pay");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
}
function PaymentDetailsPage_ng_container_1_span_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "span", 327);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate2"](" ", ctx_r2.currencySym, " ", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipeBind2"](2, 2, ctx_r2.payAmount, "1.1-1"), " ");
  }
}
function PaymentDetailsPage_ng_container_1_span_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "span", 327);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate1"](" ", ctx_r2.currencySym + " " + ctx_r2.fareBreakupDetails.net_payable_phonebook, " ");
  }
}
function PaymentDetailsPage_ng_container_1_span_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](1, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
}
function PaymentDetailsPage_ng_container_1_span_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](1, "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
}
function PaymentDetailsPage_ng_container_1_ion_icon_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](0, "ion-icon", 328);
  }
}
function PaymentDetailsPage_ng_container_1_ion_icon_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](0, "ion-icon", 329);
  }
}
function PaymentDetailsPage_ng_container_1_ion_row_55_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "span", 331);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](1, "Inclusive of all taxes");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
}
function PaymentDetailsPage_ng_container_1_ion_row_55_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "span", 331);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](1, "Inclusive of VAT");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
}
function PaymentDetailsPage_ng_container_1_ion_row_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](1, PaymentDetailsPage_ng_container_1_ion_row_55_span_1_Template, 2, 0, "span", 330)(2, PaymentDetailsPage_ng_container_1_ion_row_55_span_2_Template, 2, 0, "span", 330);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", !ctx_r2.commonService.isAbcApp());
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.commonService.isAbcApp());
  }
}
function PaymentDetailsPage_ng_container_1_ion_card_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-card", 332)(1, "div", 128)(2, "ion-item", 129)(3, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](4, "Refund Protect");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](5, "ion-checkbox", 333);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("ionChange", function PaymentDetailsPage_ng_container_1_ion_card_57_Template_ion_checkbox_ionChange_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r46);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.getFare());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayListener"]("ngModelChange", function PaymentDetailsPage_ng_container_1_ion_card_57_Template_ion_checkbox_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r46);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayBindingSet"](ctx_r2.checkCancelProtect, $event) || (ctx_r2.checkCancelProtect = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("disabled", ctx_r2.metaData.isCancelProtectMandatory);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.checkCancelProtect);
  }
}
function PaymentDetailsPage_ng_container_1_ion_card_58_p_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "p", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](1, "Applied Coupon");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
}
function PaymentDetailsPage_ng_container_1_ion_card_58_p_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "p", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](1, "Applied Coupons");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
}
function PaymentDetailsPage_ng_container_1_ion_card_58_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div")(1, "span", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "span", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](5, "a", 142)(6, "ion-icon", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_1_ion_card_58_div_11_div_1_Template_ion_icon_click_6_listener() {
      const i_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r48).index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.deleteCoupon(i_r49));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const coupon_r50 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](coupon_r50.couponCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate2"]("", ctx_r2.currencySym, " ", coupon_r50.couponAmount, "");
  }
}
function PaymentDetailsPage_ng_container_1_ion_card_58_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](1, PaymentDetailsPage_ng_container_1_ion_card_58_div_11_div_1_Template, 7, 3, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngForOf", ctx_r2.couponAplied);
  }
}
function PaymentDetailsPage_ng_container_1_ion_card_58_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_1_ion_card_58_div_12_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r51);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.addCoupon());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](1, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](2, " Add More Coupons ");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "a", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](4, "ion-icon", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
}
function PaymentDetailsPage_ng_container_1_ion_card_58_div_13_a_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "a", 163)(1, "ion-icon", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_1_ion_card_58_div_13_a_8_Template_ion_icon_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r53);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.removeCoupon());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
}
function PaymentDetailsPage_ng_container_1_ion_card_58_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 153)(1, "ion-item", 337);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](2, "ion-input", 338);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "ion-row")(4, "ion-col", 157)(5, "ion-item", 339)(6, "ion-input", 340);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayListener"]("ngModelChange", function PaymentDetailsPage_ng_container_1_ion_card_58_div_13_Template_ion_input_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r52);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayBindingSet"](ctx_r2.emailNumber, $event) || (ctx_r2.emailNumber = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](7, "ion-col", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](8, PaymentDetailsPage_ng_container_1_ion_card_58_div_13_a_8_Template, 2, 0, "a", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](9, "ion-button", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_1_ion_card_58_div_13_Template_ion_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r52);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.checkCoupon());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](10, "Apply ");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("formGroup", ctx_r2.couponForm)("ngClass", ctx_r2.couponErrors ? "errors" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngClass", ctx_r2.couponErrors ? "invalid-coupon-input" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.emailNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("label", ctx_r2.localdata.allow_cash_coupon_validation_with_phone_number ? "Email/Phone Number" : "Email")("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpureFunction0"](8, _c9));
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngClass", ctx_r2.isAddCoupon && ctx_r2.couponAplied.length > 0 ? "show-remove" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.isAddCoupon && ctx_r2.couponAplied.length > 0);
  }
}
function PaymentDetailsPage_ng_container_1_ion_card_58_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "span", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.couponInvalidMsg);
  }
}
function PaymentDetailsPage_ng_container_1_ion_card_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-card", 334)(1, "div", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](2, " Coupon Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "div", 128)(4, "ion-item", 335)(5, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](6, "Have Cash Coupons");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](7, "ion-checkbox", 336);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayListener"]("ngModelChange", function PaymentDetailsPage_ng_container_1_ion_card_58_Template_ion_checkbox_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r47);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayBindingSet"](ctx_r2.haveCoupons, $event) || (ctx_r2.haveCoupons = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("ionChange", function PaymentDetailsPage_ng_container_1_ion_card_58_Template_ion_checkbox_ionChange_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r47);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.haveCouponsChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](8, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](9, PaymentDetailsPage_ng_container_1_ion_card_58_p_9_Template, 2, 0, "p", 132)(10, PaymentDetailsPage_ng_container_1_ion_card_58_p_10_Template, 2, 0, "p", 132)(11, PaymentDetailsPage_ng_container_1_ion_card_58_div_11_Template, 2, 1, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](12, PaymentDetailsPage_ng_container_1_ion_card_58_div_12_Template, 5, 0, "div", 134)(13, PaymentDetailsPage_ng_container_1_ion_card_58_div_13_Template, 11, 9, "div", 136)(14, PaymentDetailsPage_ng_container_1_ion_card_58_span_14_Template, 2, 1, "span", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.haveCoupons);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.couponAplied.length == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.couponAplied.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.couponAplied.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.couponAplied.length > 0 && !ctx_r2.isAddCoupon && ctx_r2.couponAmount < ctx_r2.fareBreakupDetails.ticket_fare);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.showCouponForm());
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.couponInvalidMsg && ctx_r2.haveCoupons);
  }
}
function PaymentDetailsPage_ng_container_1_ion_card_59_div_4_ion_select_option_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-select-option", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const offer_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpropertyInterpolate"]("value", offer_r55.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate1"](" ", offer_r55.name, "");
  }
}
function PaymentDetailsPage_ng_container_1_ion_card_59_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](1, PaymentDetailsPage_ng_container_1_ion_card_59_div_4_ion_select_option_1_Template, 2, 2, "ion-select-option", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const offer_r55 = ctx.$implicit;
    const i_r56 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", i_r56 == 1 || offer_r55.id == 5 || offer_r55.id == 7 || offer_r55.id == 2 || offer_r55.id == 4);
  }
}
function PaymentDetailsPage_ng_container_1_ion_card_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-card", 334)(1, "div", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](2, "Offer type");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "ion-select", 341);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayListener"]("ngModelChange", function PaymentDetailsPage_ng_container_1_ion_card_59_Template_ion_select_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r54);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayBindingSet"](ctx_r2.offerType, $event) || (ctx_r2.offerType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("ionCancel", function PaymentDetailsPage_ng_container_1_ion_card_59_Template_ion_select_ionCancel_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r54);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.offerType = "");
    })("ionChange", function PaymentDetailsPage_ng_container_1_ion_card_59_Template_ion_select_ionChange_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r54);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.offerTypeChange(ctx_r2.offerType));
    })("click", function PaymentDetailsPage_ng_container_1_ion_card_59_Template_ion_select_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r54);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.offerType == 7 ? ctx_r2.checkpromoCoupon(ctx_r2.promoCoupon = "", false) : "");
    })("click", function PaymentDetailsPage_ng_container_1_ion_card_59_Template_ion_select_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r54);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.offerType == 5 ? ctx_r2.checkOfferCoupon(ctx_r2.offerCoupon = "", false) : "");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](4, PaymentDetailsPage_ng_container_1_ion_card_59_div_4_Template, 2, 1, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.offerType);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("interfaceOptions", ctx_r2.customPopoverOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngForOf", ctx_r2.offersDropDown);
  }
}
function PaymentDetailsPage_ng_container_1_ion_card_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-card", 344)(1, "div", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](2, " Privilege Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "ion-row")(4, "ion-col", 186)(5, "ion-item", 339)(6, "ion-input", 345);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayListener"]("ngModelChange", function PaymentDetailsPage_ng_container_1_ion_card_60_Template_ion_input_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r57);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayBindingSet"](ctx_r2.privCardNumber, $event) || (ctx_r2.privCardNumber = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](7, "ion-row")(8, "ion-col", 186)(9, "ion-button", 346);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_1_ion_card_60_Template_ion_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r57);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.applyPrivCardNumber());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](10, "use ");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](11, "ion-button", 347);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_1_ion_card_60_Template_ion_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r57);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.cancelPrivCardNumber());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](12, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.privCardNumber);
  }
}
function PaymentDetailsPage_ng_container_1_ion_card_61_p_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "p", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](1, "Applied PNR discount");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
}
function PaymentDetailsPage_ng_container_1_ion_card_61_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 138)(1, "div")(2, "span", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](4, "span", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](6, "a", 142)(7, "ion-icon", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_1_ion_card_61_div_10_Template_ion_icon_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r59);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.deletePnrDiscount());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.quotePnrForm.value.pnrnumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate2"]("", ctx_r2.currencySym, " ", ctx_r2.fareBreakupDetails.previous_pnr_discount, "");
  }
}
function PaymentDetailsPage_ng_container_1_ion_card_61_div_11_a_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "a", 163)(1, "ion-icon", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_1_ion_card_61_div_11_a_9_Template_ion_icon_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r61);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.removeQuote());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
}
function PaymentDetailsPage_ng_container_1_ion_card_61_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 153)(1, "ion-row")(2, "ion-item", 349);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](3, "ion-input", 350);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](4, "ion-row")(5, "ion-col", 199)(6, "ion-item", 339);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](7, "ion-input", 351);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](8, "ion-col", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](9, PaymentDetailsPage_ng_container_1_ion_card_61_div_11_a_9_Template, 2, 0, "a", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](10, "ion-button", 352);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_1_ion_card_61_div_11_Template_ion_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r60);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.checkQuotePNR());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](11, "Apply");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("formGroup", ctx_r2.quotePnrForm)("ngClass", ctx_r2.quoteErrors ? "errors" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngClass", ctx_r2.quoteErrors ? "invalid-quote-input" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("readonly", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngClass", ctx_r2.isAddquote && ctx_r2.quoteAplied.length > 0 ? "show-remove" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.isAddquote && ctx_r2.quoteAplied.length > 0);
  }
}
function PaymentDetailsPage_ng_container_1_ion_card_61_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "span", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.quoteInvalidMsg);
  }
}
function PaymentDetailsPage_ng_container_1_ion_card_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-card", 334)(1, "div", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](2, " Quote for Previous PNR");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "div", 191)(4, "ion-item", 335)(5, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](6, "Quote for Previous PNR");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](7, "ion-checkbox", 348);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayListener"]("ngModelChange", function PaymentDetailsPage_ng_container_1_ion_card_61_Template_ion_checkbox_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r58);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayBindingSet"](ctx_r2.quotepnr, $event) || (ctx_r2.quotepnr = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("ionChange", function PaymentDetailsPage_ng_container_1_ion_card_61_Template_ion_checkbox_ionChange_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r58);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.quotePNRChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](8, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](9, PaymentDetailsPage_ng_container_1_ion_card_61_p_9_Template, 2, 0, "p", 132)(10, PaymentDetailsPage_ng_container_1_ion_card_61_div_10_Template, 8, 3, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](11, PaymentDetailsPage_ng_container_1_ion_card_61_div_11_Template, 12, 6, "div", 136)(12, PaymentDetailsPage_ng_container_1_ion_card_61_span_12_Template, 2, 1, "span", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.quotepnr);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.pnrDiscountAplied);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.pnrDiscountAplied);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.showQuotePnrForm());
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.quoteInvalidMsg && ctx_r2.quotepnr);
  }
}
function PaymentDetailsPage_ng_container_1_ion_card_62_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 356)(1, "ion-row")(2, "ion-col", 357)(3, "ion-item", 358)(4, "ion-label", 359);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](6, "ion-col", 360)(7, "ion-item", 361)(8, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](9, "APPLIED");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.appliedofferCouponname);
  }
}
function PaymentDetailsPage_ng_container_1_ion_card_62_div_5_ion_row_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 362);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](2, "ion-radio", 363);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "ion-col", 364)(4, "ion-item", 365)(5, "div", 366);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](6, "ion-label", 367);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const oCoupon_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpropertyInterpolate"]("value", oCoupon_r63 == null ? null : oCoupon_r63.coupon_code);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("innerHTML", oCoupon_r63.coupon_code, _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵsanitizeHtml"]);
  }
}
function PaymentDetailsPage_ng_container_1_ion_card_62_div_5_ion_row_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](1, "ion-col", 362);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](2, "ion-col", 368);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](3, "ion-label", 367);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const oCoupon_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("innerHTML", oCoupon_r63.description, _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵsanitizeHtml"]);
  }
}
function PaymentDetailsPage_ng_container_1_ion_card_62_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](1, PaymentDetailsPage_ng_container_1_ion_card_62_div_5_ion_row_1_Template, 7, 2, "ion-row", 3)(2, PaymentDetailsPage_ng_container_1_ion_card_62_div_5_ion_row_2_Template, 4, 1, "ion-row", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const oCoupon_r63 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", oCoupon_r63.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", oCoupon_r63.description);
  }
}
function PaymentDetailsPage_ng_container_1_ion_card_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-card", 344)(1, "div", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](2, " Select Offer Coupon");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](3, PaymentDetailsPage_ng_container_1_ion_card_62_div_3_Template, 10, 1, "div", 353);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](4, "ion-radio-group", 354);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayListener"]("ngModelChange", function PaymentDetailsPage_ng_container_1_ion_card_62_Template_ion_radio_group_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r62);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayBindingSet"](ctx_r2.offerCoupon, $event) || (ctx_r2.offerCoupon = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("ionChange", function PaymentDetailsPage_ng_container_1_ion_card_62_Template_ion_radio_group_ionChange_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r62);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.checkOfferCoupon(ctx_r2.offerCoupon, true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](5, PaymentDetailsPage_ng_container_1_ion_card_62_div_5_Template, 3, 2, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](6, "div", 355);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.appliedcoupon2 && ctx_r2.appliedofferCouponname);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.offerCoupon);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngForOf", ctx_r2.offerCoupons);
  }
}
function PaymentDetailsPage_ng_container_1_ion_card_63_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 356)(1, "ion-row")(2, "ion-col", 357)(3, "ion-item", 371)(4, "ion-label", 359);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](6, "ion-col", 360)(7, "ion-item", 372)(8, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](9, "APPLIED");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.appliedCouponname);
  }
}
function PaymentDetailsPage_ng_container_1_ion_card_63_div_5_ion_row_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 362);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](2, "ion-radio", 363);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "ion-col", 368)(4, "ion-item", 374)(5, "div", 366);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](6, "ion-label", 367);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]();
    const pCoupon_r66 = ctx_r64.$implicit;
    const i_r67 = ctx_r64.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpropertyInterpolate2"]("value", "", pCoupon_r66 == null ? null : pCoupon_r66.coupon_code, ",", i_r67, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("innerHTML", pCoupon_r66.coupon_code, _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵsanitizeHtml"]);
  }
}
function PaymentDetailsPage_ng_container_1_ion_card_63_div_5_ion_row_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](1, "ion-col", 362);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](2, "ion-col", 368);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](3, "ion-label", 367);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const pCoupon_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("innerHTML", pCoupon_r66.description, _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵsanitizeHtml"]);
  }
}
function PaymentDetailsPage_ng_container_1_ion_card_63_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 373);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](1, PaymentDetailsPage_ng_container_1_ion_card_63_div_5_ion_row_1_Template, 7, 4, "ion-row", 3)(2, PaymentDetailsPage_ng_container_1_ion_card_63_div_5_ion_row_2_Template, 4, 1, "ion-row", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const pCoupon_r66 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", pCoupon_r66.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", pCoupon_r66.description);
  }
}
function PaymentDetailsPage_ng_container_1_ion_card_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-card", 369)(1, "div", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](2, " Select Offer Coupon ");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](3, PaymentDetailsPage_ng_container_1_ion_card_63_div_3_Template, 10, 1, "div", 353);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](4, "ion-radio-group", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayListener"]("ngModelChange", function PaymentDetailsPage_ng_container_1_ion_card_63_Template_ion_radio_group_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r64);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayBindingSet"](ctx_r2.promoCoupon, $event) || (ctx_r2.promoCoupon = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("ionChange", function PaymentDetailsPage_ng_container_1_ion_card_63_Template_ion_radio_group_ionChange_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r64);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.checkpromoCoupon(ctx_r2.promoCoupon, true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](5, PaymentDetailsPage_ng_container_1_ion_card_63_div_5_Template, 3, 2, "div", 370);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](6, "div", 355);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.appliedcoupon1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.promoCoupon);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngForOf", ctx_r2.promoCoupons);
  }
}
function PaymentDetailsPage_ng_container_1_ion_card_64_div_6_ion_item_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-item", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](1, "ion-label", 367)(2, "ion-radio", 379);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const sCoupon_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("innerHTML", sCoupon_r69.used_points, _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpropertyInterpolate"]("value", sCoupon_r69 == null ? null : sCoupon_r69.discount_amount);
  }
}
function PaymentDetailsPage_ng_container_1_ion_card_64_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](1, PaymentDetailsPage_ng_container_1_ion_card_64_div_6_ion_item_1_Template, 3, 2, "ion-item", 378);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const sCoupon_r69 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", sCoupon_r69.used_points);
  }
}
function PaymentDetailsPage_ng_container_1_ion_card_64_a_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "a", 380);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_1_ion_card_64_a_10_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r70);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
      ctx_r2.smartMileCoupon = "";
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.checkSmartMileCoupon(ctx_r2.smartMileCoupon));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](1, "Remove offer coupon");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
}
function PaymentDetailsPage_ng_container_1_ion_card_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-card", 369)(1, "div", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](2, " Select Offer Coupon");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "ion-row")(4, "ion-col", 323)(5, "ion-radio-group", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayListener"]("ngModelChange", function PaymentDetailsPage_ng_container_1_ion_card_64_Template_ion_radio_group_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r68);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayBindingSet"](ctx_r2.smartMileCoupon, $event) || (ctx_r2.smartMileCoupon = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("ionChange", function PaymentDetailsPage_ng_container_1_ion_card_64_Template_ion_radio_group_ionChange_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r68);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.checkSmartMileCoupon(ctx_r2.smartMileCoupon));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](6, PaymentDetailsPage_ng_container_1_ion_card_64_div_6_Template, 2, 1, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](7, "span", 375);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](9, "ion-col", 376);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](10, PaymentDetailsPage_ng_container_1_ion_card_64_a_10_Template, 2, 0, "a", 377);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](11, "div", 355);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.smartMileCoupon);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngForOf", ctx_r2.smartMiles);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.offerCouponErrorMsg);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.smartMileCoupon);
  }
}
function PaymentDetailsPage_ng_container_1_ion_card_65_ion_item_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-item", 339)(1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](2, "Phone Booking");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "ion-icon", 383);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_1_ion_card_65_ion_item_9_Template_ion_icon_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r72);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.showPhoneBookDets = !ctx_r2.showPhoneBookDets);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](4, "ion-radio", 385);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
}
function PaymentDetailsPage_ng_container_1_ion_card_65_Template(rf, ctx) {
  if (rf & 1) {
    const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-card", 344)(1, "div", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](2, "Select Payment Method");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "ion-list", 335)(4, "ion-radio-group", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayListener"]("ngModelChange", function PaymentDetailsPage_ng_container_1_ion_card_65_Template_ion_radio_group_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r71);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayBindingSet"](ctx_r2.bookType, $event) || (ctx_r2.bookType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("ionChange", function PaymentDetailsPage_ng_container_1_ion_card_65_Template_ion_radio_group_ionChange_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r71);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.bookTypeChanged(ctx_r2.bookType));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](5, "ion-item", 339)(6, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](7, "Book Online");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](8, "ion-radio", 381);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](9, PaymentDetailsPage_ng_container_1_ion_card_65_ion_item_9_Template, 5, 0, "ion-item", 382);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](10, "ion-item", 339)(11, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](12, "Pay From Wallet ");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](13, "ion-icon", 383);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_1_ion_card_65_Template_ion_icon_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r71);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.showWalletDets = !ctx_r2.showWalletDets);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](14, "ion-radio", 384);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.bookType);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.commonStorage.localGet("locale").is_phone_booking_allowed && !ctx_r2.isBima);
  }
}
function PaymentDetailsPage_ng_container_1_div_66_ion_card_1_div_5_ion_item_1_ion_label_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](1, "img", 388);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
}
function PaymentDetailsPage_ng_container_1_div_66_ion_card_1_div_5_ion_item_1_ion_label_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const payType_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate1"]("", payType_r74.name, " ");
  }
}
function PaymentDetailsPage_ng_container_1_div_66_ion_card_1_div_5_ion_item_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-item", 339);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](1, PaymentDetailsPage_ng_container_1_div_66_ion_card_1_div_5_ion_item_1_ion_label_1_Template, 2, 0, "ion-label", 3)(2, PaymentDetailsPage_ng_container_1_div_66_ion_card_1_div_5_ion_item_1_ion_label_2_Template, 2, 1, "ion-label", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](3, "ion-radio", 387);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const payType_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", payType_r74.name == "RazorPay" && payType_r74.id == "53");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", payType_r74.name != "RazorPay" || payType_r74.id != "53");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpropertyInterpolate"]("value", payType_r74 ? payType_r74.id : "");
  }
}
function PaymentDetailsPage_ng_container_1_div_66_ion_card_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](1, PaymentDetailsPage_ng_container_1_div_66_ion_card_1_div_5_ion_item_1_Template, 4, 3, "ion-item", 382);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const payType_r74 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", payType_r74.name && payType_r74.name.toUpperCase().indexOf("EBS") < 0);
  }
}
function PaymentDetailsPage_ng_container_1_div_66_ion_card_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-card", 344)(1, "div", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](2, "Payment options ");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "ion-list", 335)(4, "ion-radio-group", 386);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayListener"]("ngModelChange", function PaymentDetailsPage_ng_container_1_div_66_ion_card_1_Template_ion_radio_group_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r73);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayBindingSet"](ctx_r2.paymentType, $event) || (ctx_r2.paymentType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("ionChange", function PaymentDetailsPage_ng_container_1_div_66_ion_card_1_Template_ion_radio_group_ionChange_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r73);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.calculatePgCharges(ctx_r2.paymentType));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](5, PaymentDetailsPage_ng_container_1_div_66_ion_card_1_div_5_Template, 2, 1, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.paymentType);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngForOf", ctx_r2.metaData.payMentGateWayTypes);
  }
}
function PaymentDetailsPage_ng_container_1_div_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](1, PaymentDetailsPage_ng_container_1_div_66_ion_card_1_Template, 6, 2, "ion-card", 303);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", !ctx_r2.payTypeName.includes("52"));
  }
}
function PaymentDetailsPage_ng_container_1_ion_card_67_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div")(1, "ion-item", 339)(2, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](4, "ion-radio", 390)(5, "ion-img", 391);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const payType_r76 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](payType_r76.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("value", payType_r76);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpropertyInterpolate"]("src", payType_r76.ImageUrl);
  }
}
function PaymentDetailsPage_ng_container_1_ion_card_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-card", 389)(1, "div", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](2, " Virtual account transfer");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "ion-list", 335)(4, "ion-radio-group", 354);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayListener"]("ngModelChange", function PaymentDetailsPage_ng_container_1_ion_card_67_Template_ion_radio_group_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r75);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayBindingSet"](ctx_r2.virtualPaymentType, $event) || (ctx_r2.virtualPaymentType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("ionChange", function PaymentDetailsPage_ng_container_1_ion_card_67_Template_ion_radio_group_ionChange_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r75);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.virtualAccTransfer(ctx_r2.virtualPaymentType));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](5, PaymentDetailsPage_ng_container_1_ion_card_67_div_5_Template, 6, 3, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.virtualPaymentType);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngForOf", ctx_r2.datttttt.rb_virtual_banks);
  }
}
function PaymentDetailsPage_ng_container_1_div_73_Template(rf, ctx) {
  if (rf & 1) {
    const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 392)(1, "ion-button", 393);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_1_div_73_Template_ion_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r77);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.pay());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](2, "div", 394);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](3, "Continue");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
  }
}
function PaymentDetailsPage_ng_container_1_div_74_Template(rf, ctx) {
  if (rf & 1) {
    const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 395)(1, "ion-button", 396);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_1_div_74_Template_ion_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r78);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.pay());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](2, "div", 397);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](3, "Proceed to payment");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
  }
}
function PaymentDetailsPage_ng_container_1_div_76_Template(rf, ctx) {
  if (rf & 1) {
    const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 222)(1, "div", 398)(2, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](3, "img", 399);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](4, "div", 400);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](5, "This ticket has been booked");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](6, "ion-row")(7, "ion-col", 401);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_1_div_76_Template_ion_col_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r79);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.viewTicketPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](8, "VIEW TICKET ");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()()();
  }
}
function PaymentDetailsPage_ng_container_1_div_77_Template(rf, ctx) {
  if (rf & 1) {
    const _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 222)(1, "div", 398)(2, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](3, "img", 399);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](4, "div", 400);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](5, "Your payment has failed");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](6, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](7, "ion-col", 402);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](8, "ion-col", 403);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_1_div_77_Template_ion_col_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r80);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.paymentFailed = !ctx_r2.paymentFailed);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](9, "TRY AGAIN ");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()()();
  }
}
function PaymentDetailsPage_ng_container_1_div_78_ion_row_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](1, "ion-col", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](2, "ion-col", 403);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_1_div_78_ion_row_6_Template_ion_col_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r82);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.addMoney());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](3, "ADD MONEY");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](4, "ion-col", 406);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_1_div_78_ion_row_6_Template_ion_col_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r82);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.bookTypeChanged("1"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](5, "PAY ONLINE");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
}
function PaymentDetailsPage_ng_container_1_div_78_ion_row_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](1, "ion-col", 242)(2, "ion-col", 407);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "ion-col", 408);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_1_div_78_ion_row_7_Template_ion_col_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r83);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.walletNoteModal = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](4, "CANCEL");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
}
function PaymentDetailsPage_ng_container_1_div_78_Template(rf, ctx) {
  if (rf & 1) {
    const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 404);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_1_div_78_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r81);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.walletNoteModal = !ctx_r2.walletNoteModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](1, "div", 398)(2, "div", 405);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](3, " Wallet Booking ");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](4, "div", 400);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](6, PaymentDetailsPage_ng_container_1_div_78_ion_row_6_Template, 6, 0, "ion-row", 3)(7, PaymentDetailsPage_ng_container_1_div_78_ion_row_7_Template, 5, 0, "ion-row", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.walletMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.isShowWalletBtn);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", !ctx_r2.isShowWalletBtn);
  }
}
function PaymentDetailsPage_ng_container_1_div_79_Template(rf, ctx) {
  if (rf & 1) {
    const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 222)(1, "div", 398)(2, "ion-item")(3, "ion-input", 409);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayListener"]("ngModelChange", function PaymentDetailsPage_ng_container_1_div_79_Template_ion_input_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r84);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayBindingSet"](ctx_r2.idProof, $event) || (ctx_r2.idProof = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](4, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](5, "ion-col", 410);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](6, "ion-col", 411);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_1_div_79_Template_ion_col_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r84);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.cancelIdProof());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](7, "CANCEL");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](8, "ion-col", 412);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_1_div_79_Template_ion_col_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r84);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.applyIdPrrof(ctx_r2.promoCoupon, true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](9, "APPLY");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.idProof);
  }
}
function PaymentDetailsPage_ng_container_1_div_80_Template(rf, ctx) {
  if (rf & 1) {
    const _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 222)(1, "div", 398)(2, "h6", 413);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](3, "OTP Verification");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](4, "ion-row")(5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](7, "div")(8, "ion-item")(9, "ion-label", 414);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](10, "Enter OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](11, "ion-input", 415);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayListener"]("ngModelChange", function PaymentDetailsPage_ng_container_1_div_80_Template_ion_input_ngModelChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r85);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayBindingSet"](ctx_r2.otpInput, $event) || (ctx_r2.otpInput = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](12, "ion-row")(13, "ion-col", 416);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_1_div_80_Template_ion_col_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r85);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.otpShow = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](14, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](15, "ion-col", 417);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_1_div_80_Template_ion_col_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r85);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.resendOtp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](16, "Resend OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](17, "ion-col", 418);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_1_div_80_Template_ion_col_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r85);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.validateOtp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](18, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate1"](" An OTP has been sent to mobile number ", ctx_r2.couponOtpDetails ? ctx_r2.couponOtpDetails.mobile : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.otpInput);
  }
}
function PaymentDetailsPage_ng_container_1_div_81_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 241)(1, "ion-row")(2, "ion-col", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](3, "img", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](4, "ion-col", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](7, "div", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](8, " Money earned from cashback and coupons");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate1"](" Promotional : ", ctx_r2.promobalance, " ");
  }
}
function PaymentDetailsPage_ng_container_1_div_81_Template(rf, ctx) {
  if (rf & 1) {
    const _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 222)(1, "div", 254)(2, "ion-row")(3, "ion-col", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](4, "WALLET");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](5, "ion-col", 419);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_1_div_81_Template_ion_col_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r86);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.showWalletDets = !ctx_r2.showWalletDets);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](6, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](7, PaymentDetailsPage_ng_container_1_div_81_div_7_Template, 9, 1, "div", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](8, "div", 241)(9, "ion-row")(10, "ion-col", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](11, "img", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](12, "ion-col", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](15, "div", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](16, " Money added by you in wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.metaData.is_wallet_promotional);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate1"](" Non-promotional : ", ctx_r2.nonpromobalance, "");
  }
}
function PaymentDetailsPage_ng_container_1_div_82_swiper_slide_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "swiper-slide", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](1, "img", 420)(2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "div", 263);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const o_r88 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpropertyInterpolate"]("src", o_r88.image, _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](o_r88.text);
  }
}
function PaymentDetailsPage_ng_container_1_div_82_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](1, " 1. Phone booking feature is available for paying through wallet only.");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](2, "br")(3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](4, " 2. Release time differs based on origin-destination, bus type, or timing.");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](5, "br")(6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](7, " 3. In the case of auto cancellation, no refund of the advance fare shall be admissible.");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](8, "br")(9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](10, " 4. In the case of confirmation, you will need to pay 100% of the ticket amount, and the 10% advance amount will be automatically credited back to the wallet. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
}
function PaymentDetailsPage_ng_container_1_div_82_Template(rf, ctx) {
  if (rf & 1) {
    const _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 222)(1, "div", 254)(2, "ion-row")(3, "ion-col", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](4, "How it Works");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](5, "ion-col", 419);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_1_div_82_Template_ion_col_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r87);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.showPhoneBookDets = !ctx_r2.showPhoneBookDets);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](6, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](7, "swiper-container", 257, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](9, PaymentDetailsPage_ng_container_1_div_82_swiper_slide_9_Template, 5, 2, "swiper-slide", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipe"](10, "filterOculto");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](11, "ion-col", 259);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](12, "T & C*");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](13, PaymentDetailsPage_ng_container_1_div_82_div_13_Template, 11, 0, "div", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("options", ctx_r2.slideOpts);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipeBind1"](10, 3, ctx_r2.termsImages));
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.metaData.is_wallet_promotional);
  }
}
function PaymentDetailsPage_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](1, "ion-header", 276)(2, "ion-toolbar", 277)(3, "ion-buttons", 278)(4, "ion-back-button", 279);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_1_Template_ion_back_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r43);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](5, "ion-title", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](6, "Select a payment option");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](7, "ion-content", 281)(8, "div", 282)(9, "ion-card", 283)(10, "div", 284)(11, "div", 285)(12, "span", 286);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](14, "p", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](16, "div", 288)(17, "span", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](19, "p", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](21, "div", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](22, "ion-icon", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](23, "div", 292);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](24, "div", 293)(25, "div", 285)(26, "span", 286);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](28, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](29, "span", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](31, "div", 288)(32, "span", 286);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](34, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](35, "span", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](37, "div", 294)(38, "span", 286);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](40, "div", 292)(41, "div", 292);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](42, PaymentDetailsPage_ng_container_1_div_42_Template, 32, 15, "div", 295)(43, PaymentDetailsPage_ng_container_1_div_43_Template, 58, 28, "div", 296);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](44, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](45, PaymentDetailsPage_ng_container_1_span_45_Template, 2, 0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](46, "\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](47, PaymentDetailsPage_ng_container_1_span_47_Template, 3, 5, "span", 297)(48, PaymentDetailsPage_ng_container_1_span_48_Template, 2, 1, "span", 297);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](49, "span", 298);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_1_Template_span_click_49_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r43);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.viewDetails());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](50, PaymentDetailsPage_ng_container_1_span_50_Template, 2, 0, "span", 3)(51, PaymentDetailsPage_ng_container_1_span_51_Template, 2, 0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](52, " \u00A0 Details \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](53, PaymentDetailsPage_ng_container_1_ion_icon_53_Template, 1, 0, "ion-icon", 299)(54, PaymentDetailsPage_ng_container_1_ion_icon_54_Template, 1, 0, "ion-icon", 300);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](55, PaymentDetailsPage_ng_container_1_ion_row_55_Template, 3, 2, "ion-row", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](56, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](57, PaymentDetailsPage_ng_container_1_ion_card_57_Template, 6, 2, "ion-card", 301)(58, PaymentDetailsPage_ng_container_1_ion_card_58_Template, 15, 7, "ion-card", 302)(59, PaymentDetailsPage_ng_container_1_ion_card_59_Template, 5, 3, "ion-card", 302)(60, PaymentDetailsPage_ng_container_1_ion_card_60_Template, 13, 1, "ion-card", 303)(61, PaymentDetailsPage_ng_container_1_ion_card_61_Template, 13, 5, "ion-card", 302)(62, PaymentDetailsPage_ng_container_1_ion_card_62_Template, 7, 3, "ion-card", 304)(63, PaymentDetailsPage_ng_container_1_ion_card_63_Template, 7, 3, "ion-card", 305)(64, PaymentDetailsPage_ng_container_1_ion_card_64_Template, 12, 4, "ion-card", 305)(65, PaymentDetailsPage_ng_container_1_ion_card_65_Template, 15, 2, "ion-card", 303)(66, PaymentDetailsPage_ng_container_1_div_66_Template, 2, 1, "div", 3)(67, PaymentDetailsPage_ng_container_1_ion_card_67_Template, 6, 2, "ion-card", 306);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](68, "ion-card", 307)(69, "div", 308);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](70, "By clicking on continue you agree to all our ");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](71, "span", 309);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_1_Template_span_click_71_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r43);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.termsCond());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](72, "Terms & Conditions");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](73, PaymentDetailsPage_ng_container_1_div_73_Template, 4, 0, "div", 310)(74, PaymentDetailsPage_ng_container_1_div_74_Template, 4, 0, "div", 311);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](75, "form", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](76, PaymentDetailsPage_ng_container_1_div_76_Template, 9, 0, "div", 13)(77, PaymentDetailsPage_ng_container_1_div_77_Template, 10, 0, "div", 13)(78, PaymentDetailsPage_ng_container_1_div_78_Template, 8, 3, "div", 312)(79, PaymentDetailsPage_ng_container_1_div_79_Template, 10, 1, "div", 13)(80, PaymentDetailsPage_ng_container_1_div_80_Template, 19, 2, "div", 13)(81, PaymentDetailsPage_ng_container_1_div_81_Template, 17, 2, "div", 13)(82, PaymentDetailsPage_ng_container_1_div_82_Template, 14, 5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpureFunction1"](46, _c14, ctx_r2.moreLessOpt));
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.commaSeparate(ctx_r2.globalData.SEARCH_DATA.originCity.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.reservationData.boardingStage.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate1"](" ", ctx_r2.commaSeparate(ctx_r2.globalData.SEARCH_DATA.destCity.name), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.reservationData.droppingStage.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.reservationData.boardingStage.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate4"](" ", ctx_r2.globalData.ARRIVAL_DATE.dayNameShort + ", ", "", " " + ctx_r2.globalData.ARRIVAL_DATE.day, " ", " " + ctx_r2.globalData.ARRIVAL_DATE.monthName + " ", " ", " " + ctx_r2.globalData.ARRIVAL_DATE.year, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.reservationData.droppingStage.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate4"](" ", ctx_r2.globalData.DEPARTURE_DATE.dayNameShort + ", ", "", " " + ctx_r2.globalData.DEPARTURE_DATE.day, " ", " " + ctx_r2.globalData.DEPARTURE_DATE.monthName + " ", " ", " " + ctx_r2.globalData.DEPARTURE_DATE.year, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate1"](" ", ctx_r2.globalData.SELECTED_SERVICE.duration, "hrs");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.isReturn);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.moreLessOpt);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", !ctx_r2.moreLessOpt);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", !ctx_r2.moreLessOpt && !ctx_r2.fareBreakupDetails.net_payable_phonebook && !ctx_r2.phoneBooking);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.fareBreakupDetails.net_payable_phonebook && ctx_r2.phoneBooking);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", !ctx_r2.moreLessOpt);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.moreLessOpt);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", !ctx_r2.moreLessOpt);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.moreLessOpt);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.commonStorage && ctx_r2.commonStorage.getItem("isServiceTaxApplicable") && !ctx_r2.moreLessOpt);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.metaData.showCancelProtect && !ctx_r2.phoneBooking);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.showChashCoupons());
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.offersDropDown.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.offerType == "4");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.offerType == "1" && ctx_r2.offersDropDown.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.offerCoupons && ctx_r2.offerCoupons.length > 0 && ctx_r2.isOfferCoup() && ctx_r2.offerType == "5");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.promoCoupons && ctx_r2.promoCoupons.length > 0 && ctx_r2.isPromoCoup() && ctx_r2.offerType == "7" && ctx_r2.metaData.isAllowPromoOffers);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.smartMiles && ctx_r2.smartMiles.length > 0 && ctx_r2.offerType == "2" && ctx_r2.metaData.isAllowSmartMiles);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.walletBooking && ctx_r2.auth.isLoggedIn() && !ctx_r2.isWPBooking);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.bookOnline && ctx_r2.pgLength > "1" && !ctx_r2.isWPBooking);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.payTypeName.includes("52"));
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", !ctx_r2.isWPBooking);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.isWPBooking);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.viewTicket);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.paymentFailed);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.walletNoteModal);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.showCouponIdProof);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.otpShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.showWalletDets);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.showPhoneBookDets);
  }
}
function PaymentDetailsPage_ng_container_2_ion_row_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-row", 423)(1, "ion-col", 424)(2, "div", 423);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](4, "div", 425);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](6, "ion-col", 426)(7, "div", 427);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](8, "ion-icon", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](11, "ion-col", 428)(12, "div", 423);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](14, "div", 423);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.commaSeparate(ctx_r2.globalData.SEARCH_DATA.destCity.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.reservationDataReturn == null ? null : ctx_r2.reservationDataReturn.boardingStage == null ? null : ctx_r2.reservationDataReturn.boardingStage.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate1"]("", ctx_r2.globalData.SELECTED_SERVICE == null ? null : ctx_r2.globalData.SELECTED_SERVICE.duration, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.commaSeparate(ctx_r2.globalData.SEARCH_DATA.originCity.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate1"](" ", ctx_r2.reservationDataReturn == null ? null : ctx_r2.reservationDataReturn.droppingStage == null ? null : ctx_r2.reservationDataReturn.droppingStage.time, "");
  }
}
function PaymentDetailsPage_ng_container_2_div_26_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](1, "ion-row")(2, "span", 320);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](4, "ion-row")(5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](7, "ion-row")(8, "span", 320);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](9, "Boarding point");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](10, "ion-row")(11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](13, "ion-row")(14, "span", 320);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](15, "Dropping point");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](16, "ion-row")(17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate2"]("", ctx_r2.globalData.SEARCH_DATA.destCity.name, " - ", ctx_r2.globalData.SEARCH_DATA.originCity.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.globalData.SELECTED_SERVICE_RETURN.bus_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.reservationDataReturn.boardingStage.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.reservationDataReturn.droppingStage.name);
  }
}
function PaymentDetailsPage_ng_container_2_div_26_ion_row_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-row")(1, "div")(2, "ion-row")(3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](5, "ion-row")(6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](8, "span", 325);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const p_r90 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](p_r90.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate2"]("", p_r90.sex === "Mr" ? "Male" : "Female", " , ", p_r90.age, " years");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](p_r90.seat_number);
  }
}
function PaymentDetailsPage_ng_container_2_div_26_ng_container_29_ion_row_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-row")(1, "div")(2, "ion-row")(3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](5, "ion-row")(6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](8, "span", 325);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const p_r91 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](p_r91.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate2"]("", p_r91.sex === "Mr" ? "Male" : "Female", " , ", p_r91.age, " years");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](p_r91.seat_number);
  }
}
function PaymentDetailsPage_ng_container_2_div_26_ng_container_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](1, PaymentDetailsPage_ng_container_2_div_26_ng_container_29_ion_row_1_Template, 11, 4, "ion-row", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngForOf", ctx_r2.returnSeatDetails);
  }
}
function PaymentDetailsPage_ng_container_2_div_26_div_34_ion_row_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-row")(1, "div", 321);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](2, "Total Fare");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "span", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.currencySym + " " + ctx_r2.roundTripTicketFare);
  }
}
function PaymentDetailsPage_ng_container_2_div_26_div_34_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-row")(1, "div", 321);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](2, "Total Fare");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "span", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.currencySym + " " + ctx_r2.fareBreakupDetails.total_fare);
  }
}
function PaymentDetailsPage_ng_container_2_div_26_div_34_ion_row_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-row")(1, "div", 321);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](2, "Return Trip Discount");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "span", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.currencySym + " " + ctx_r2.fareBreakupDetails.fare_break_up_hash["Round Trip Discount"]);
  }
}
function PaymentDetailsPage_ng_container_2_div_26_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](1, PaymentDetailsPage_ng_container_2_div_26_div_34_ion_row_1_Template, 5, 1, "ion-row", 440)(2, PaymentDetailsPage_ng_container_2_div_26_div_34_ng_template_2_Template, 5, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplateRefExtractor"])(4, PaymentDetailsPage_ng_container_2_div_26_div_34_ion_row_4_Template, 5, 1, "ion-row", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](5, "ion-row")(6, "div", 321);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](7, " Net Fare ");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](8, "span", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const noRoundTripDiscount_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵreference"](3);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", (ctx_r2.metaData == null ? null : ctx_r2.metaData.is_round_trip_discount_allowed) && ctx_r2.roundTripTicketFare)("ngIfElse", noRoundTripDiscount_r92);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", (ctx_r2.metaData == null ? null : ctx_r2.metaData.is_round_trip_discount_allowed) && ctx_r2.fareBreakupDetails.fare_break_up_hash && ctx_r2.fareBreakupDetails.fare_break_up_hash["Round Trip Discount"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.currencySym + " " + ctx_r2.fareBreakupDetails.total_fare);
  }
}
function PaymentDetailsPage_ng_container_2_div_26_ng_template_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-row")(1, "div", 321);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](2, "Base Fare");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "span", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](5, "ion-row")(6, "div", 321);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](7, "Total Fare");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](8, "span", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.currencySym + " " + ctx_r2.fareBreakupDetails.ticket_fare);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.currencySym + " " + ctx_r2.fareBreakupDetails.total_fare);
  }
}
function PaymentDetailsPage_ng_container_2_div_26_ion_row_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-row")(1, "div", 321);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](2, "Discount");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "span", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate2"]("", ctx_r2.currencySym, " ", ctx_r2.fareBreakupDetails ? (ctx_r2.fareBreakupDetails.offer_discount ? ctx_r2.fareBreakupDetails.offer_discount : 0) + (ctx_r2.fareBreakupDetails.ebooking_discount ? ctx_r2.fareBreakupDetails.ebooking_discount : 0) + (ctx_r2.fareBreakupDetails.previous_pnr_discount ? ctx_r2.fareBreakupDetails.previous_pnr_discount : 0) + (ctx_r2.fareBreakupDetails.privilege_card_discount ? ctx_r2.fareBreakupDetails.privilege_card_discount : 0) : 0, "");
  }
}
function PaymentDetailsPage_ng_container_2_div_26_ion_row_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-row")(1, "div", 321);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](2, "Total snack price");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "span", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.currencySym + "" + ctx_r2.fareBreakupDetails.total_snack_price);
  }
}
function PaymentDetailsPage_ng_container_2_div_26_ion_row_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-row")(1, "div", 321);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](2, "Cash coupon");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "span", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.currencySym + " " + ctx_r2.fareBreakupDetails.cash_coupon);
  }
}
function PaymentDetailsPage_ng_container_2_div_26_ion_row_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-row")(1, "div", 321);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](2, "Special Discount Coupon");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "span", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.currencySym + " " + ctx_r2.fareBreakupDetails.special_discount_coupon);
  }
}
function PaymentDetailsPage_ng_container_2_div_26_ion_row_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-row")(1, "div", 321);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](2, "Bus Operator GST");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "span", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.currencySym + " " + ctx_r2.fareBreakupDetails.service_tax_amount);
  }
}
function PaymentDetailsPage_ng_container_2_div_26_ion_row_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-row")(1, "div", 321);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](2, "Transaction Charge");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "span", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.currencySym + " " + ctx_r2.fareBreakupDetails.transaction_charges);
  }
}
function PaymentDetailsPage_ng_container_2_div_26_ion_row_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-row")(1, "div", 321);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](2, "Convenience Charge");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "span", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.currencySym + " " + ctx_r2.fareBreakupDetails.cc_charges);
  }
}
function PaymentDetailsPage_ng_container_2_div_26_ion_row_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-row")(1, "div", 321);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](2, "Promotional Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "span", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.currencySym + " " + ctx_r2.fareBreakupDetails.usable_promotional_balance);
  }
}
function PaymentDetailsPage_ng_container_2_div_26_ion_row_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-row")(1, "div", 321);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](2, "Wallet Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "span", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.currencySym + " " + ctx_r2.fareBreakupDetails.wallet_balance);
  }
}
function PaymentDetailsPage_ng_container_2_div_26_ion_row_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-row")(1, "div", 321);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](2, "Refundable Booking Charges");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "span", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.fareBreakupDetails.cancel_protect_charge);
  }
}
function PaymentDetailsPage_ng_container_2_div_26_ion_row_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-row")(1, "div", 442);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](2, "Net Payable Phonebook (10%)");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "span", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.currencySym + " " + ctx_r2.fareBreakupDetails.net_payable_phonebook);
  }
}
function PaymentDetailsPage_ng_container_2_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 438)(1, "div", 439)(2, "span", 318);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](3, "BUS DETAILS");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](4, "hr", 319);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](5, "ion-row")(6, "span", 320);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](8, "ion-row")(9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](11, "ion-row")(12, "span", 320);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](13, "Boarding point");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](14, "ion-row")(15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](17, "ion-row")(18, "span", 320);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](19, "Dropping point");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](20, "ion-row")(21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](23, PaymentDetailsPage_ng_container_2_div_26_ng_container_23_Template, 19, 5, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](24, "ion-row")(25, "span", 318);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](26, "PASSENGER DETAILS");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](27, "hr", 319);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](28, PaymentDetailsPage_ng_container_2_div_26_ion_row_28_Template, 11, 4, "ion-row", 139)(29, PaymentDetailsPage_ng_container_2_div_26_ng_container_29_Template, 2, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](30, "div")(31, "ion-row")(32, "span", 318);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](33, "FARE BREAKUP");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](34, PaymentDetailsPage_ng_container_2_div_26_div_34_Template, 10, 4, "div", 440)(35, PaymentDetailsPage_ng_container_2_div_26_ng_template_35_Template, 10, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplateRefExtractor"])(37, PaymentDetailsPage_ng_container_2_div_26_ion_row_37_Template, 5, 2, "ion-row", 3)(38, PaymentDetailsPage_ng_container_2_div_26_ion_row_38_Template, 5, 1, "ion-row", 3)(39, PaymentDetailsPage_ng_container_2_div_26_ion_row_39_Template, 5, 1, "ion-row", 3)(40, PaymentDetailsPage_ng_container_2_div_26_ion_row_40_Template, 5, 1, "ion-row", 3)(41, PaymentDetailsPage_ng_container_2_div_26_ion_row_41_Template, 5, 1, "ion-row", 3)(42, PaymentDetailsPage_ng_container_2_div_26_ion_row_42_Template, 5, 1, "ion-row", 3)(43, PaymentDetailsPage_ng_container_2_div_26_ion_row_43_Template, 5, 1, "ion-row", 3)(44, PaymentDetailsPage_ng_container_2_div_26_ion_row_44_Template, 5, 1, "ion-row", 3)(45, PaymentDetailsPage_ng_container_2_div_26_ion_row_45_Template, 5, 1, "ion-row", 3)(46, PaymentDetailsPage_ng_container_2_div_26_ion_row_46_Template, 5, 1, "ion-row", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](47, "hr", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](48, "ion-row")(49, "div", 441);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](50, "TOTAL PAYABLE");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](51, "span", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](53, PaymentDetailsPage_ng_container_2_div_26_ion_row_53_Template, 5, 1, "ion-row", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const nogstrc_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵreference"](36);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpureFunction1"](24, _c16, ctx_r2.moreLessOpt));
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpureFunction1"](26, _c15, ctx_r2.moreLessOpt));
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.serviceDetail == null ? null : ctx_r2.serviceDetail.number);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.globalData.SELECTED_SERVICE.bus_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.reservationData.boardingStage.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.reservationData.droppingStage.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.isReturn);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngForOf", ctx_r2.onwardSeatDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.isReturn);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.metaData == null ? null : ctx_r2.metaData.gst_tsrtc_enable)("ngIfElse", nogstrc_r93);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.showDiscount(ctx_r2.fareBreakupDetails));
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.fareBreakupDetails.total_snack_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.fareBreakupDetails.cash_coupon);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.fareBreakupDetails.special_discount_coupon);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", !ctx_r2.commonService.isAbcApp() && !ctx_r2.metaData.gst_tsrtc_enable);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.fareBreakupDetails.transaction_charges);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.fareBreakupDetails.cc_charges);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.fareBreakupDetails.usable_promotional_balance);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.fareBreakupDetails.wallet_balance);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.checkCancelProtect && !ctx_r2.phoneBooking && ctx_r2.metaData.showCancelProtect);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate2"]("", ctx_r2.currencySym, "", ctx_r2.payAmount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.fareBreakupDetails.net_payable_phonebook && ctx_r2.phoneBooking);
  }
}
function PaymentDetailsPage_ng_container_2_ion_col_28_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "span", 445);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate2"](" ", ctx_r2.currencySym, "", ctx_r2.payAmount, " ");
  }
}
function PaymentDetailsPage_ng_container_2_ion_col_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-col", 323)(1, "div", 443)(2, "span", 444);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](3, "Pay\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](4, PaymentDetailsPage_ng_container_2_ion_col_28_span_4_Template, 2, 2, "span", 432);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", !ctx_r2.moreLessOpt && !ctx_r2.fareBreakupDetails.net_payable_phonebook && !ctx_r2.phoneBooking);
  }
}
function PaymentDetailsPage_ng_container_2_span_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "span", 445);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate1"](" ", ctx_r2.currencySym + " " + ctx_r2.fareBreakupDetails.net_payable_phonebook, " ");
  }
}
function PaymentDetailsPage_ng_container_2_span_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](1, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
}
function PaymentDetailsPage_ng_container_2_span_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](1, "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
}
function PaymentDetailsPage_ng_container_2_ion_icon_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](0, "ion-icon", 328);
  }
}
function PaymentDetailsPage_ng_container_2_ion_icon_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](0, "ion-icon", 329);
  }
}
function PaymentDetailsPage_ng_container_2_ion_row_36_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "span", 331);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](1, "Inclusive of all taxes");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
}
function PaymentDetailsPage_ng_container_2_ion_row_36_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "span", 331);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](1, "Inclusive of VAT");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
}
function PaymentDetailsPage_ng_container_2_ion_row_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](1, PaymentDetailsPage_ng_container_2_ion_row_36_span_1_Template, 2, 0, "span", 330)(2, PaymentDetailsPage_ng_container_2_ion_row_36_span_2_Template, 2, 0, "span", 330);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", !ctx_r2.commonService.isAbcApp());
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.commonService.isAbcApp());
  }
}
function PaymentDetailsPage_ng_container_2_ion_card_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-card", 126)(1, "div", 128)(2, "ion-item", 129)(3, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](4, "Refund Protect");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](5, "ion-checkbox", 333);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("ionChange", function PaymentDetailsPage_ng_container_2_ion_card_38_Template_ion_checkbox_ionChange_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r94);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.getFare());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayListener"]("ngModelChange", function PaymentDetailsPage_ng_container_2_ion_card_38_Template_ion_checkbox_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r94);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayBindingSet"](ctx_r2.checkCancelProtect, $event) || (ctx_r2.checkCancelProtect = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("disabled", ctx_r2.metaData.isCancelProtectMandatory);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.checkCancelProtect);
  }
}
function PaymentDetailsPage_ng_container_2_ion_card_39_p_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "p", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](1, "Applied Coupon");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
}
function PaymentDetailsPage_ng_container_2_ion_card_39_p_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "p", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](1, "Applied Coupons");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
}
function PaymentDetailsPage_ng_container_2_ion_card_39_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div")(1, "span", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "span", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](5, "a", 142)(6, "ion-icon", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_2_ion_card_39_div_11_div_1_Template_ion_icon_click_6_listener() {
      const i_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r96).index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.deleteCoupon(i_r97));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const coupon_r98 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](coupon_r98.couponCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate2"]("", ctx_r2.currencySym, " ", coupon_r98.couponAmount, "");
  }
}
function PaymentDetailsPage_ng_container_2_ion_card_39_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](1, PaymentDetailsPage_ng_container_2_ion_card_39_div_11_div_1_Template, 7, 3, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngForOf", ctx_r2.couponAplied);
  }
}
function PaymentDetailsPage_ng_container_2_ion_card_39_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r99 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_2_ion_card_39_div_12_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r99);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.addCoupon());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](1, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](2, " Add More Coupons ");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "a", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](4, "ion-icon", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
}
function PaymentDetailsPage_ng_container_2_ion_card_39_ion_radio_group_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-radio-group", 448);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayListener"]("ngModelChange", function PaymentDetailsPage_ng_container_2_ion_card_39_ion_radio_group_13_Template_ion_radio_group_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r100);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayBindingSet"](ctx_r2.specialcashDiscountValue, $event) || (ctx_r2.specialcashDiscountValue = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("ionChange", function PaymentDetailsPage_ng_container_2_ion_card_39_ion_radio_group_13_Template_ion_radio_group_ionChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r100);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.specialCashDiscount());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](1, "ion-row")(2, "ion-col")(3, "ion-item", 449);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](4, "ion-radio", 450);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](5, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](7, "ion-col")(8, "ion-item", 451);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](9, "ion-radio", 452);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](10, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.specialcashDiscountValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate1"](" ", "Special Discount Coupon", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate1"](" ", "Cash Coupon", "");
  }
}
function PaymentDetailsPage_ng_container_2_ion_card_39_div_14_a_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r102 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "a", 163)(1, "ion-icon", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_2_ion_card_39_div_14_a_8_Template_ion_icon_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r102);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.removeCoupon());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
}
function PaymentDetailsPage_ng_container_2_ion_card_39_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r101 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 153)(1, "ion-item", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](2, "ion-input", 338);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "ion-row")(4, "ion-col", 157)(5, "ion-item", 453)(6, "ion-input", 454);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayListener"]("ngModelChange", function PaymentDetailsPage_ng_container_2_ion_card_39_div_14_Template_ion_input_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r101);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayBindingSet"](ctx_r2.emailNumber, $event) || (ctx_r2.emailNumber = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](7, "ion-col", 455);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](8, PaymentDetailsPage_ng_container_2_ion_card_39_div_14_a_8_Template, 2, 0, "a", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](9, "ion-button", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_2_ion_card_39_div_14_Template_ion_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r101);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.checkCoupon());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](10, "Apply ");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("formGroup", ctx_r2.couponForm)("ngClass", ctx_r2.couponErrors ? "errors" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngClass", ctx_r2.couponErrors ? "invalid-coupon-input" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpureFunction0"](7, _c9));
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.emailNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngClass", ctx_r2.isAddCoupon && ctx_r2.couponAplied.length > 0 ? "show-remove" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.isAddCoupon && ctx_r2.couponAplied.length > 0);
  }
}
function PaymentDetailsPage_ng_container_2_ion_card_39_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "span", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.couponInvalidMsg);
  }
}
function PaymentDetailsPage_ng_container_2_ion_card_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r95 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-card", 126)(1, "div", 446);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](2, " Coupon Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "div", 128)(4, "ion-item", 129)(5, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](6, "Have Cash Coupons");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](7, "ion-checkbox", 336);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayListener"]("ngModelChange", function PaymentDetailsPage_ng_container_2_ion_card_39_Template_ion_checkbox_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r95);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayBindingSet"](ctx_r2.haveCoupons, $event) || (ctx_r2.haveCoupons = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("ionChange", function PaymentDetailsPage_ng_container_2_ion_card_39_Template_ion_checkbox_ionChange_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r95);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.haveCouponsChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](8, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](9, PaymentDetailsPage_ng_container_2_ion_card_39_p_9_Template, 2, 0, "p", 132)(10, PaymentDetailsPage_ng_container_2_ion_card_39_p_10_Template, 2, 0, "p", 132)(11, PaymentDetailsPage_ng_container_2_ion_card_39_div_11_Template, 2, 1, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](12, PaymentDetailsPage_ng_container_2_ion_card_39_div_12_Template, 5, 0, "div", 134)(13, PaymentDetailsPage_ng_container_2_ion_card_39_ion_radio_group_13_Template, 12, 3, "ion-radio-group", 447)(14, PaymentDetailsPage_ng_container_2_ion_card_39_div_14_Template, 11, 8, "div", 136)(15, PaymentDetailsPage_ng_container_2_ion_card_39_span_15_Template, 2, 1, "span", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpureFunction1"](9, _c17, ctx_r2.isReturn ? "110px" : "50px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.haveCoupons);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.couponAplied.length == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.couponAplied.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.couponAplied.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.couponAplied.length > 0 && !ctx_r2.isAddCoupon && ctx_r2.couponAmount < ctx_r2.fareBreakupDetails.ticket_fare && ctx_r2.specialcashDiscountValue != "special");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.showCouponForm() && ctx_r2.allow_to_create_special_discount_coupon);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.showCouponForm());
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.couponInvalidMsg && ctx_r2.haveCoupons);
  }
}
function PaymentDetailsPage_ng_container_2_ion_card_40_div_4_ion_select_option_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-select-option", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const offer_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpropertyInterpolate"]("value", offer_r104.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate1"](" ", offer_r104.name, "");
  }
}
function PaymentDetailsPage_ng_container_2_ion_card_40_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](1, PaymentDetailsPage_ng_container_2_ion_card_40_div_4_ion_select_option_1_Template, 2, 2, "ion-select-option", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const offer_r104 = ctx.$implicit;
    const i_r105 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", i_r105 == 1 || offer_r104.id == 5 || offer_r104.id == 7 || offer_r104.id == 2 || offer_r104.id == 4);
  }
}
function PaymentDetailsPage_ng_container_2_ion_card_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r103 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-card", 126)(1, "div", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](2, "Offer type");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "ion-select", 341);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayListener"]("ngModelChange", function PaymentDetailsPage_ng_container_2_ion_card_40_Template_ion_select_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r103);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayBindingSet"](ctx_r2.offerType, $event) || (ctx_r2.offerType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("ionCancel", function PaymentDetailsPage_ng_container_2_ion_card_40_Template_ion_select_ionCancel_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r103);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.offerType = "");
    })("ionChange", function PaymentDetailsPage_ng_container_2_ion_card_40_Template_ion_select_ionChange_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r103);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.offerTypeChange(ctx_r2.offerType));
    })("click", function PaymentDetailsPage_ng_container_2_ion_card_40_Template_ion_select_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r103);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.offerType == 7 ? ctx_r2.checkpromoCoupon(ctx_r2.promoCoupon = "", false) : "");
    })("click", function PaymentDetailsPage_ng_container_2_ion_card_40_Template_ion_select_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r103);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.offerType == 5 ? ctx_r2.checkOfferCoupon(ctx_r2.offerCoupon = "", false) : "");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](4, PaymentDetailsPage_ng_container_2_ion_card_40_div_4_Template, 2, 1, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](5, "ion-icon", 456);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.offerType);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("interfaceOptions", ctx_r2.customPopoverOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngForOf", ctx_r2.offersDropDown);
  }
}
function PaymentDetailsPage_ng_container_2_ion_card_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r106 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-card", 457)(1, "div", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](2, " Privilege Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "ion-row")(4, "ion-col", 186)(5, "ion-item")(6, "ion-input", 345);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayListener"]("ngModelChange", function PaymentDetailsPage_ng_container_2_ion_card_41_Template_ion_input_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r106);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayBindingSet"](ctx_r2.privCardNumber, $event) || (ctx_r2.privCardNumber = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](7, "ion-row")(8, "ion-col", 186)(9, "ion-button", 346);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_2_ion_card_41_Template_ion_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r106);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.applyPrivCardNumber());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](10, "use ");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](11, "ion-button", 347);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_2_ion_card_41_Template_ion_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r106);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.cancelPrivCardNumber());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](12, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.privCardNumber);
  }
}
function PaymentDetailsPage_ng_container_2_ion_card_42_p_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "p", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](1, "Applied PNR discount");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
}
function PaymentDetailsPage_ng_container_2_ion_card_42_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r108 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 138)(1, "div")(2, "span", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](4, "span", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](6, "a", 142)(7, "ion-icon", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_2_ion_card_42_div_10_Template_ion_icon_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r108);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.deletePnrDiscount());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.quotePnrForm.value.pnrnumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate2"]("", ctx_r2.currencySym, " ", ctx_r2.fareBreakupDetails.previous_pnr_discount, "");
  }
}
function PaymentDetailsPage_ng_container_2_ion_card_42_div_11_a_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r110 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "a", 163)(1, "ion-icon", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_2_ion_card_42_div_11_a_9_Template_ion_icon_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r110);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.removeQuote());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
}
function PaymentDetailsPage_ng_container_2_ion_card_42_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r109 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 153)(1, "ion-row")(2, "ion-item", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](3, "ion-input", 458);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](4, "ion-row")(5, "ion-col", 199)(6, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](7, "ion-input", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](8, "ion-col", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](9, PaymentDetailsPage_ng_container_2_ion_card_42_div_11_a_9_Template, 2, 0, "a", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](10, "ion-button", 352);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_2_ion_card_42_div_11_Template_ion_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r109);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.checkQuotePNR());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](11, "Apply");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("formGroup", ctx_r2.quotePnrForm)("ngClass", ctx_r2.quoteErrors ? "errors" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngClass", ctx_r2.quoteErrors ? "invalid-quote-input" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("readonly", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngClass", ctx_r2.isAddquote && ctx_r2.quoteAplied.length > 0 ? "show-remove" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.isAddquote && ctx_r2.quoteAplied.length > 0);
  }
}
function PaymentDetailsPage_ng_container_2_ion_card_42_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "span", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.quoteInvalidMsg);
  }
}
function PaymentDetailsPage_ng_container_2_ion_card_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r107 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-card", 126)(1, "div", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](2, " Quote for Previous PNR");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "div", 191)(4, "ion-item", 129)(5, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](6, "Quote for Previous PNR");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](7, "ion-checkbox", 348);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayListener"]("ngModelChange", function PaymentDetailsPage_ng_container_2_ion_card_42_Template_ion_checkbox_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r107);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayBindingSet"](ctx_r2.quotepnr, $event) || (ctx_r2.quotepnr = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("ionChange", function PaymentDetailsPage_ng_container_2_ion_card_42_Template_ion_checkbox_ionChange_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r107);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.quotePNRChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](8, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](9, PaymentDetailsPage_ng_container_2_ion_card_42_p_9_Template, 2, 0, "p", 132)(10, PaymentDetailsPage_ng_container_2_ion_card_42_div_10_Template, 8, 3, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](11, PaymentDetailsPage_ng_container_2_ion_card_42_div_11_Template, 12, 6, "div", 136)(12, PaymentDetailsPage_ng_container_2_ion_card_42_span_12_Template, 2, 1, "span", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.quotepnr);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.pnrDiscountAplied);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.pnrDiscountAplied);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.showQuotePnrForm());
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.quoteInvalidMsg && ctx_r2.quotepnr);
  }
}
function PaymentDetailsPage_ng_container_2_ion_card_43_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 356)(1, "ion-row")(2, "ion-col", 357)(3, "ion-item", 371)(4, "ion-label", 359);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](6, "ion-col", 360)(7, "ion-item", 372)(8, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](9, "APPLIED");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.appliedofferCouponname);
  }
}
function PaymentDetailsPage_ng_container_2_ion_card_43_div_5_ion_row_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 362);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](2, "ion-radio", 363);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "ion-col", 364)(4, "ion-item", 374)(5, "div", 366);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](6, "ion-label", 367);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const oCoupon_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpropertyInterpolate"]("value", oCoupon_r112 == null ? null : oCoupon_r112.coupon_code);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("innerHTML", oCoupon_r112.coupon_code, _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵsanitizeHtml"]);
  }
}
function PaymentDetailsPage_ng_container_2_ion_card_43_div_5_ion_row_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](1, "ion-col", 362);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](2, "ion-col", 368);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](3, "ion-label", 367);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const oCoupon_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("innerHTML", oCoupon_r112.description, _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵsanitizeHtml"]);
  }
}
function PaymentDetailsPage_ng_container_2_ion_card_43_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](1, PaymentDetailsPage_ng_container_2_ion_card_43_div_5_ion_row_1_Template, 7, 2, "ion-row", 3)(2, PaymentDetailsPage_ng_container_2_ion_card_43_div_5_ion_row_2_Template, 4, 1, "ion-row", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const oCoupon_r112 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", oCoupon_r112.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", oCoupon_r112.description);
  }
}
function PaymentDetailsPage_ng_container_2_ion_card_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r111 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-card", 457)(1, "div", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](2, " Select Offer Coupon");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](3, PaymentDetailsPage_ng_container_2_ion_card_43_div_3_Template, 10, 1, "div", 353);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](4, "ion-radio-group", 354);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayListener"]("ngModelChange", function PaymentDetailsPage_ng_container_2_ion_card_43_Template_ion_radio_group_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r111);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayBindingSet"](ctx_r2.offerCoupon, $event) || (ctx_r2.offerCoupon = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("ionChange", function PaymentDetailsPage_ng_container_2_ion_card_43_Template_ion_radio_group_ionChange_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r111);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.checkOfferCoupon(ctx_r2.offerCoupon, true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](5, PaymentDetailsPage_ng_container_2_ion_card_43_div_5_Template, 3, 2, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](6, "div", 355);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.appliedcoupon2 && ctx_r2.appliedofferCouponname);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.offerCoupon);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngForOf", ctx_r2.offerCoupons);
  }
}
function PaymentDetailsPage_ng_container_2_ion_card_44_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 356)(1, "ion-row")(2, "ion-col", 357)(3, "ion-item", 371)(4, "ion-label", 359);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](6, "ion-col", 360)(7, "ion-item", 372)(8, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](9, "APPLIED");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.appliedCouponname);
  }
}
function PaymentDetailsPage_ng_container_2_ion_card_44_div_5_ion_row_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 362);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](2, "ion-radio", 363);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "ion-col", 368)(4, "ion-item", 374)(5, "div", 366);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](6, "ion-label", 367);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]();
    const pCoupon_r115 = ctx_r113.$implicit;
    const i_r116 = ctx_r113.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpropertyInterpolate2"]("value", "", pCoupon_r115 == null ? null : pCoupon_r115.coupon_code, ",", i_r116, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("innerHTML", pCoupon_r115.coupon_code, _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵsanitizeHtml"]);
  }
}
function PaymentDetailsPage_ng_container_2_ion_card_44_div_5_ion_row_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](1, "ion-col", 362);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](2, "ion-col", 368);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](3, "ion-label", 367);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const pCoupon_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("innerHTML", pCoupon_r115.description, _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵsanitizeHtml"]);
  }
}
function PaymentDetailsPage_ng_container_2_ion_card_44_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 373);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](1, PaymentDetailsPage_ng_container_2_ion_card_44_div_5_ion_row_1_Template, 7, 4, "ion-row", 3)(2, PaymentDetailsPage_ng_container_2_ion_card_44_div_5_ion_row_2_Template, 4, 1, "ion-row", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const pCoupon_r115 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", pCoupon_r115.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", pCoupon_r115.description);
  }
}
function PaymentDetailsPage_ng_container_2_ion_card_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r113 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-card", 457)(1, "div", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](2, " Select Offer Coupon ");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](3, PaymentDetailsPage_ng_container_2_ion_card_44_div_3_Template, 10, 1, "div", 353);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](4, "ion-radio-group", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayListener"]("ngModelChange", function PaymentDetailsPage_ng_container_2_ion_card_44_Template_ion_radio_group_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r113);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayBindingSet"](ctx_r2.promoCoupon, $event) || (ctx_r2.promoCoupon = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("ionChange", function PaymentDetailsPage_ng_container_2_ion_card_44_Template_ion_radio_group_ionChange_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r113);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.checkpromoCoupon(ctx_r2.promoCoupon, true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](5, PaymentDetailsPage_ng_container_2_ion_card_44_div_5_Template, 3, 2, "div", 370);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](6, "div", 355);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.appliedcoupon1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.promoCoupon);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngForOf", ctx_r2.promoCoupons);
  }
}
function PaymentDetailsPage_ng_container_2_ion_card_45_div_6_ion_item_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-item", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](1, "ion-label", 367)(2, "ion-radio", 459);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const sCoupon_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("innerHTML", sCoupon_r118.used_points, _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpropertyInterpolate"]("value", sCoupon_r118 == null ? null : sCoupon_r118.discount_amount);
  }
}
function PaymentDetailsPage_ng_container_2_ion_card_45_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](1, PaymentDetailsPage_ng_container_2_ion_card_45_div_6_ion_item_1_Template, 3, 2, "ion-item", 378);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const sCoupon_r118 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", sCoupon_r118.used_points);
  }
}
function PaymentDetailsPage_ng_container_2_ion_card_45_a_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r119 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "a", 380);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_2_ion_card_45_a_10_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r119);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
      ctx_r2.smartMileCoupon = "";
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.checkSmartMileCoupon(ctx_r2.smartMileCoupon));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](1, "Remove offer coupon");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
}
function PaymentDetailsPage_ng_container_2_ion_card_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r117 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-card", 457)(1, "div", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](2, " Select Offer Coupon");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "ion-row")(4, "ion-col", 323)(5, "ion-radio-group", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayListener"]("ngModelChange", function PaymentDetailsPage_ng_container_2_ion_card_45_Template_ion_radio_group_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r117);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayBindingSet"](ctx_r2.smartMileCoupon, $event) || (ctx_r2.smartMileCoupon = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("ionChange", function PaymentDetailsPage_ng_container_2_ion_card_45_Template_ion_radio_group_ionChange_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r117);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.checkSmartMileCoupon(ctx_r2.smartMileCoupon));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](6, PaymentDetailsPage_ng_container_2_ion_card_45_div_6_Template, 2, 1, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](7, "span", 375);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](9, "ion-col", 376);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](10, PaymentDetailsPage_ng_container_2_ion_card_45_a_10_Template, 2, 0, "a", 377);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](11, "div", 355);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.smartMileCoupon);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngForOf", ctx_r2.smartMiles);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.offerCouponErrorMsg);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.smartMileCoupon);
  }
}
function PaymentDetailsPage_ng_container_2_ion_card_46_ion_item_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r121 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-item")(1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](2, "Phone Booking");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "ion-icon", 383);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_2_ion_card_46_ion_item_9_Template_ion_icon_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r121);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.showPhoneBookDets = !ctx_r2.showPhoneBookDets);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](4, "ion-radio", 462);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
}
function PaymentDetailsPage_ng_container_2_ion_card_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r120 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-card", 457)(1, "div", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](2, "Select Payment Method");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "ion-list", 129)(4, "ion-radio-group", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayListener"]("ngModelChange", function PaymentDetailsPage_ng_container_2_ion_card_46_Template_ion_radio_group_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r120);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayBindingSet"](ctx_r2.bookType, $event) || (ctx_r2.bookType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("ionChange", function PaymentDetailsPage_ng_container_2_ion_card_46_Template_ion_radio_group_ionChange_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r120);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.bookTypeChanged(ctx_r2.bookType));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](5, "ion-item")(6, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](7, "Book Online");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](8, "ion-radio", 460);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](9, PaymentDetailsPage_ng_container_2_ion_card_46_ion_item_9_Template, 5, 0, "ion-item", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](10, "ion-item")(11, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](12, "Pay From Wallet ");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](13, "ion-icon", 383);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_2_ion_card_46_Template_ion_icon_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r120);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.showWalletDets = !ctx_r2.showWalletDets);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](14, "ion-radio", 461);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.bookType);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.commonStorage.localGet("locale").is_phone_booking_allowed && !ctx_r2.isBima);
  }
}
function PaymentDetailsPage_ng_container_2_div_47_ion_card_1_div_5_ion_item_1_ion_label_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](1, "img", 463);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
}
function PaymentDetailsPage_ng_container_2_div_47_ion_card_1_div_5_ion_item_1_ion_label_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const payType_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate1"]("", payType_r123.name, " ");
  }
}
function PaymentDetailsPage_ng_container_2_div_47_ion_card_1_div_5_ion_item_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](1, PaymentDetailsPage_ng_container_2_div_47_ion_card_1_div_5_ion_item_1_ion_label_1_Template, 2, 0, "ion-label", 3)(2, PaymentDetailsPage_ng_container_2_div_47_ion_card_1_div_5_ion_item_1_ion_label_2_Template, 2, 1, "ion-label", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](3, "ion-radio", 390);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const payType_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", payType_r123.name == "RazorPay" && payType_r123.id == "53");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", payType_r123.name != "RazorPay" || payType_r123.id != "53");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpropertyInterpolate"]("value", payType_r123 ? payType_r123.id : "");
  }
}
function PaymentDetailsPage_ng_container_2_div_47_ion_card_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](1, PaymentDetailsPage_ng_container_2_div_47_ion_card_1_div_5_ion_item_1_Template, 4, 3, "ion-item", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const payType_r123 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", payType_r123.name && payType_r123.name.toUpperCase().indexOf("EBS") < 0);
  }
}
function PaymentDetailsPage_ng_container_2_div_47_ion_card_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r122 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-card", 457)(1, "div", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](2, "Payment options ");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "ion-list", 129)(4, "ion-radio-group", 386);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayListener"]("ngModelChange", function PaymentDetailsPage_ng_container_2_div_47_ion_card_1_Template_ion_radio_group_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r122);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayBindingSet"](ctx_r2.paymentType, $event) || (ctx_r2.paymentType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("ionChange", function PaymentDetailsPage_ng_container_2_div_47_ion_card_1_Template_ion_radio_group_ionChange_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r122);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.calculatePgCharges(ctx_r2.paymentType));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](5, PaymentDetailsPage_ng_container_2_div_47_ion_card_1_div_5_Template, 2, 1, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.paymentType);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngForOf", ctx_r2.metaData.payMentGateWayTypes);
  }
}
function PaymentDetailsPage_ng_container_2_div_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](1, PaymentDetailsPage_ng_container_2_div_47_ion_card_1_Template, 6, 2, "ion-card", 435);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", !ctx_r2.payTypeName.includes("52"));
  }
}
function PaymentDetailsPage_ng_container_2_ion_card_48_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div")(1, "ion-item")(2, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](4, "ion-radio", 390)(5, "ion-img", 391);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const payType_r125 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](payType_r125.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("value", payType_r125);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpropertyInterpolate"]("src", payType_r125.ImageUrl);
  }
}
function PaymentDetailsPage_ng_container_2_ion_card_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r124 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-card", 464)(1, "div", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](2, " Virtual account transfer");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "ion-list", 129)(4, "ion-radio-group", 354);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayListener"]("ngModelChange", function PaymentDetailsPage_ng_container_2_ion_card_48_Template_ion_radio_group_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r124);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayBindingSet"](ctx_r2.virtualPaymentType, $event) || (ctx_r2.virtualPaymentType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("ionChange", function PaymentDetailsPage_ng_container_2_ion_card_48_Template_ion_radio_group_ionChange_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r124);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.virtualAccTransfer(ctx_r2.virtualPaymentType));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](5, PaymentDetailsPage_ng_container_2_ion_card_48_div_5_Template, 6, 3, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.virtualPaymentType);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngForOf", ctx_r2.datttttt.rb_virtual_banks);
  }
}
function PaymentDetailsPage_ng_container_2_div_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r126 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 395)(1, "ion-button", 396);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_2_div_54_Template_ion_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r126);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.pay());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](2, "div", 465);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](3, "Continue");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
  }
}
function PaymentDetailsPage_ng_container_2_div_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r127 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 395)(1, "ion-button", 396);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_2_div_55_Template_ion_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r127);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.pay());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](2, "div", 466);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](3, "Proceed to payment");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
  }
}
function PaymentDetailsPage_ng_container_2_div_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r128 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 222)(1, "div", 398)(2, "ion-row")(3, "div", 467);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](4, "\u2714");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](5, "div", 400);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](6, "This ticket has been booked");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](7, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](8, "ion-col", 402);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](9, "ion-col", 403);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_2_div_57_Template_ion_col_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r128);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.viewTicketPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](10, "VIEW TICKET ");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()()();
  }
}
function PaymentDetailsPage_ng_container_2_div_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r129 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 222)(1, "div", 398)(2, "ion-row")(3, "div", 468);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](4, "\u2715");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](5, "div", 400);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](6, "Your payment has failed");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](7, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](8, "ion-col", 402);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](9, "ion-col", 403);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_2_div_58_Template_ion_col_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r129);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.paymentFailed = !ctx_r2.paymentFailed);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](10, "TRY AGAIN ");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()()();
  }
}
function PaymentDetailsPage_ng_container_2_div_59_ion_row_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r131 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](1, "ion-col", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](2, "ion-col", 403);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_2_div_59_ion_row_6_Template_ion_col_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r131);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.addMoney());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](3, "ADD MONEY");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](4, "ion-col", 406);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_2_div_59_ion_row_6_Template_ion_col_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r131);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.bookTypeChanged("1"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](5, "PAY ONLINE");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
}
function PaymentDetailsPage_ng_container_2_div_59_ion_row_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r132 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](1, "ion-col", 242)(2, "ion-col", 407);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "ion-col", 403);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_2_div_59_ion_row_7_Template_ion_col_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r132);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.walletNoteModal = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](4, "CANCEL");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
}
function PaymentDetailsPage_ng_container_2_div_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r130 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 404);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_2_div_59_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r130);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.walletNoteModal = !ctx_r2.walletNoteModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](1, "div", 398)(2, "div", 405);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](3, " Wallet Booking ");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](4, "div", 400);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](6, PaymentDetailsPage_ng_container_2_div_59_ion_row_6_Template, 6, 0, "ion-row", 3)(7, PaymentDetailsPage_ng_container_2_div_59_ion_row_7_Template, 5, 0, "ion-row", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.walletMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.isShowWalletBtn);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", !ctx_r2.isShowWalletBtn);
  }
}
function PaymentDetailsPage_ng_container_2_div_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r133 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 222)(1, "div", 398)(2, "ion-item")(3, "ion-input", 409);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayListener"]("ngModelChange", function PaymentDetailsPage_ng_container_2_div_60_Template_ion_input_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r133);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayBindingSet"](ctx_r2.idProof, $event) || (ctx_r2.idProof = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](4, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](5, "ion-col", 410);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](6, "ion-col", 411);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_2_div_60_Template_ion_col_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r133);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.cancelIdProof());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](7, "CANCEL");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](8, "ion-col", 469);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_2_div_60_Template_ion_col_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r133);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.applyIdPrrof(ctx_r2.promoCoupon, true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](9, "APPLY");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.idProof);
  }
}
function PaymentDetailsPage_ng_container_2_div_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r134 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 222)(1, "div", 398)(2, "h6", 413);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](3, "OTP Verification");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](4, "ion-row")(5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](7, "div")(8, "ion-item")(9, "ion-label", 414);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](10, "Enter OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](11, "ion-input", 415);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayListener"]("ngModelChange", function PaymentDetailsPage_ng_container_2_div_61_Template_ion_input_ngModelChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r134);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayBindingSet"](ctx_r2.otpInput, $event) || (ctx_r2.otpInput = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](12, "ion-row")(13, "ion-col", 416);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_2_div_61_Template_ion_col_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r134);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.otpShow = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](14, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](15, "ion-col", 417);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_2_div_61_Template_ion_col_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r134);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.resendOtp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](16, "Resend OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](17, "ion-col", 470);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_2_div_61_Template_ion_col_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r134);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.validateOtp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](18, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate1"](" An OTP has been sent to mobile number ", ctx_r2.couponOtpDetails ? ctx_r2.couponOtpDetails.mobile : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.otpInput);
  }
}
function PaymentDetailsPage_ng_container_2_div_62_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 241)(1, "ion-row")(2, "ion-col", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](3, "img", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](4, "ion-col", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](7, "div", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](8, " Money earned from cashback and coupons");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate1"](" Promotional : ", ctx_r2.promobalance, " ");
  }
}
function PaymentDetailsPage_ng_container_2_div_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r135 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 222)(1, "div", 254)(2, "ion-row")(3, "ion-col", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](4, "WALLET");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](5, "ion-col", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_2_div_62_Template_ion_col_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r135);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.showWalletDets = !ctx_r2.showWalletDets);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](6, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](7, PaymentDetailsPage_ng_container_2_div_62_div_7_Template, 9, 1, "div", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](8, "div", 241)(9, "ion-row")(10, "ion-col", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](11, "img", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](12, "ion-col", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](15, "div", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](16, " Money added by you in wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.metaData.is_wallet_promotional);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate1"](" Non-promotional : ", ctx_r2.nonpromobalance, "");
  }
}
function PaymentDetailsPage_ng_container_2_div_63_swiper_slide_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "swiper-slide", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](1, "img", 262)(2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "div", 263);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const o_r137 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpropertyInterpolate"]("src", o_r137.image, _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](o_r137.text);
  }
}
function PaymentDetailsPage_ng_container_2_div_63_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](1, " 1. Phone booking feature is available for paying through wallet only.");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](2, "br")(3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](4, " 2. Release time differs based on origin-destination, bus type, or timing.");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](5, "br")(6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](7, " 3. In the case of auto cancellation, no refund of the advance fare shall be admissible.");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](8, "br")(9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](10, " 4. In the case of confirmation, you will need to pay 100% of the ticket amount, and the 10% advance amount will be automatically credited back to the wallet. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
}
function PaymentDetailsPage_ng_container_2_div_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r136 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 222)(1, "div", 254)(2, "ion-row")(3, "ion-col", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](4, "How it Works");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](5, "ion-col", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_2_div_63_Template_ion_col_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r136);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.showPhoneBookDets = !ctx_r2.showPhoneBookDets);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](6, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](7, "swiper-container", 257, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](9, PaymentDetailsPage_ng_container_2_div_63_swiper_slide_9_Template, 5, 2, "swiper-slide", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipe"](10, "filterOculto");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](11, "ion-col", 259);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](12, "T & C*");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](13, PaymentDetailsPage_ng_container_2_div_63_div_13_Template, 11, 0, "div", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("options", ctx_r2.slideOpts);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipeBind1"](10, 3, ctx_r2.termsImages));
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.metaData.is_wallet_promotional);
  }
}
function PaymentDetailsPage_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](1, "ion-header", 276)(2, "ion-toolbar", 277)(3, "ion-buttons", 278);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](4, "ion-back-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](5, "ion-title", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](6, "Select a payment options");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](7, "ion-content", 421)(8, "ion-card", 422)(9, "ion-row", 423)(10, "ion-col", 424)(11, "div", 423);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](13, "div", 425);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](15, "ion-col", 426)(16, "div", 427);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](17, "ion-icon", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](18, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](20, "ion-col", 428)(21, "div", 423);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](23, "div", 425);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](25, PaymentDetailsPage_ng_container_2_ion_row_25_Template, 16, 5, "ion-row", 429)(26, PaymentDetailsPage_ng_container_2_div_26_Template, 54, 28, "div", 430);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](27, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](28, PaymentDetailsPage_ng_container_2_ion_col_28_Template, 5, 1, "ion-col", 431)(29, PaymentDetailsPage_ng_container_2_span_29_Template, 2, 1, "span", 432);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](30, "ion-col", 433);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_2_Template_ion_col_click_30_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r89);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.viewDetails());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](31, PaymentDetailsPage_ng_container_2_span_31_Template, 2, 0, "span", 3)(32, PaymentDetailsPage_ng_container_2_span_32_Template, 2, 0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](33, " Details \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](34, PaymentDetailsPage_ng_container_2_ion_icon_34_Template, 1, 0, "ion-icon", 299)(35, PaymentDetailsPage_ng_container_2_ion_icon_35_Template, 1, 0, "ion-icon", 300);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](36, PaymentDetailsPage_ng_container_2_ion_row_36_Template, 3, 2, "ion-row", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](37, "div", 434);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](38, PaymentDetailsPage_ng_container_2_ion_card_38_Template, 6, 2, "ion-card", 69)(39, PaymentDetailsPage_ng_container_2_ion_card_39_Template, 16, 11, "ion-card", 69)(40, PaymentDetailsPage_ng_container_2_ion_card_40_Template, 6, 3, "ion-card", 69)(41, PaymentDetailsPage_ng_container_2_ion_card_41_Template, 13, 1, "ion-card", 435)(42, PaymentDetailsPage_ng_container_2_ion_card_42_Template, 13, 5, "ion-card", 69)(43, PaymentDetailsPage_ng_container_2_ion_card_43_Template, 7, 3, "ion-card", 435)(44, PaymentDetailsPage_ng_container_2_ion_card_44_Template, 7, 3, "ion-card", 435)(45, PaymentDetailsPage_ng_container_2_ion_card_45_Template, 12, 4, "ion-card", 435)(46, PaymentDetailsPage_ng_container_2_ion_card_46_Template, 15, 2, "ion-card", 435)(47, PaymentDetailsPage_ng_container_2_div_47_Template, 2, 1, "div", 3)(48, PaymentDetailsPage_ng_container_2_ion_card_48_Template, 6, 2, "ion-card", 436);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](49, "ion-card", 437)(50, "div", 308);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](51, "By clicking on continue you agree to all our ");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](52, "span", 309);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_2_Template_span_click_52_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r89);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.termsCond());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](53, "Terms and Conditions");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](54, PaymentDetailsPage_ng_container_2_div_54_Template, 4, 0, "div", 311)(55, PaymentDetailsPage_ng_container_2_div_55_Template, 4, 0, "div", 311);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](56, "form", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](57, PaymentDetailsPage_ng_container_2_div_57_Template, 11, 0, "div", 13)(58, PaymentDetailsPage_ng_container_2_div_58_Template, 11, 0, "div", 13)(59, PaymentDetailsPage_ng_container_2_div_59_Template, 8, 3, "div", 312)(60, PaymentDetailsPage_ng_container_2_div_60_Template, 10, 1, "div", 13)(61, PaymentDetailsPage_ng_container_2_div_61_Template, 19, 2, "div", 13)(62, PaymentDetailsPage_ng_container_2_div_62_Template, 17, 2, "div", 13)(63, PaymentDetailsPage_ng_container_2_div_63_Template, 14, 5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpureFunction1"](35, _c15, ctx_r2.moreLessOpt));
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.commaSeparate(ctx_r2.globalData.SEARCH_DATA.originCity.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.reservationData == null ? null : ctx_r2.reservationData.boardingStage == null ? null : ctx_r2.reservationData.boardingStage.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.globalData.SELECTED_SERVICE == null ? null : ctx_r2.globalData.SELECTED_SERVICE.duration);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.commaSeparate(ctx_r2.globalData.SEARCH_DATA.destCity.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate1"](" ", ctx_r2.reservationData == null ? null : ctx_r2.reservationData.droppingStage == null ? null : ctx_r2.reservationData.droppingStage.time, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.isReturn);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.moreLessOpt);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", !ctx_r2.moreLessOpt);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.fareBreakupDetails.net_payable_phonebook && ctx_r2.phoneBooking);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", !ctx_r2.moreLessOpt);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.moreLessOpt);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", !ctx_r2.moreLessOpt);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.moreLessOpt);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.commonStorage && ctx_r2.commonStorage.getItem("isServiceTaxApplicable") && !ctx_r2.moreLessOpt);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.metaData.showCancelProtect && !ctx_r2.phoneBooking);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.showChashCoupons());
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.offersDropDown.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.offerType == "4");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.offerType == "1" && ctx_r2.offersDropDown.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.offerCoupons && ctx_r2.offerCoupons.length > 0 && ctx_r2.isOfferCoup() && ctx_r2.offerType == "5");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.promoCoupons && ctx_r2.promoCoupons.length > 0 && ctx_r2.isPromoCoup() && ctx_r2.offerType == "7" && ctx_r2.metaData.isAllowPromoOffers);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.smartMiles && ctx_r2.smartMiles.length > 0 && ctx_r2.offerType == "2" && ctx_r2.metaData.isAllowSmartMiles);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.walletBooking && ctx_r2.auth.isLoggedIn() && !ctx_r2.isWPBooking);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.bookOnline && ctx_r2.pgLength > 0 && !ctx_r2.isWPBooking);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.payTypeName.includes("52"));
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", !ctx_r2.isWPBooking && !ctx_r2.moreLessOpt);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.isWPBooking);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.viewTicket);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.paymentFailed);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.walletNoteModal);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.showCouponIdProof);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.otpShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.showWalletDets);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.showPhoneBookDets);
  }
}
function PaymentDetailsPage_ng_container_3_ion_header_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-header", 476)(1, "ion-toolbar", 7)(2, "ion-row")(3, "ion-col", 242)(4, "ion-buttons");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](5, "ion-back-button", 477);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](6, "ion-col", 478)(7, "div", 479);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](8, " Payment Options ");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()()()();
  }
}
function PaymentDetailsPage_ng_container_3_ion_content_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 504);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](1, "ion-img", 505);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpropertyInterpolate"]("src", ctx_r2.payment_page_banner);
  }
}
function PaymentDetailsPage_ng_container_3_ion_content_2_ion_card_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r139 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-card", 483)(1, "div", 128)(2, "ion-item", 129)(3, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](4, "Refund Protect");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](5, "ion-checkbox", 333);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("ionChange", function PaymentDetailsPage_ng_container_3_ion_content_2_ion_card_2_Template_ion_checkbox_ionChange_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r139);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.getFare());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayListener"]("ngModelChange", function PaymentDetailsPage_ng_container_3_ion_content_2_ion_card_2_Template_ion_checkbox_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r139);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayBindingSet"](ctx_r2.checkCancelProtect, $event) || (ctx_r2.checkCancelProtect = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("disabled", ctx_r2.metaData.isCancelProtectMandatory);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.checkCancelProtect);
  }
}
function PaymentDetailsPage_ng_container_3_ion_content_2_ion_card_3_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r140 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 511);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_3_ion_content_2_ion_card_3_div_6_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r140);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.removeOffers());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](1, "Remove Offers");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
}
function PaymentDetailsPage_ng_container_3_ion_content_2_ion_card_3_ion_icon_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r141 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-icon", 512);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_3_ion_content_2_ion_card_3_ion_icon_12_Template_ion_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r141);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.toggleRadioGroup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
}
function PaymentDetailsPage_ng_container_3_ion_content_2_ion_card_3_ion_icon_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r142 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-icon", 513);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_3_ion_content_2_ion_card_3_ion_icon_13_Template_ion_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r142);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.toggleRadioGroup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
}
function PaymentDetailsPage_ng_container_3_ion_content_2_ion_card_3_ion_radio_group_14_div_1_ion_item_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-item")(1, "ion-row")(2, "ion-col", 515);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](3, "ion-radio", 516);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](4, "span", 517);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const offer_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpropertyInterpolate"]("value", offer_r144.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpropertyInterpolate"]("id", offer_r144.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](offer_r144.name);
  }
}
function PaymentDetailsPage_ng_container_3_ion_content_2_ion_card_3_ion_radio_group_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](1, PaymentDetailsPage_ng_container_3_ion_content_2_ion_card_3_ion_radio_group_14_div_1_ion_item_1_Template, 6, 3, "ion-item", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const offer_r144 = ctx.$implicit;
    const i_r145 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", i_r145 == 1 || offer_r144.id == 5 || offer_r144.id == 7 || offer_r144.id == 2 || offer_r144.id == 4);
  }
}
function PaymentDetailsPage_ng_container_3_ion_content_2_ion_card_3_ion_radio_group_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r143 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-radio-group", 514);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayListener"]("ngModelChange", function PaymentDetailsPage_ng_container_3_ion_content_2_ion_card_3_ion_radio_group_14_Template_ion_radio_group_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r143);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayBindingSet"](ctx_r2.offerType, $event) || (ctx_r2.offerType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("ionChange", function PaymentDetailsPage_ng_container_3_ion_content_2_ion_card_3_ion_radio_group_14_Template_ion_radio_group_ionChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r143);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.checkOfferCoupon(ctx_r2.offerCoupon, true));
    })("ionCancel", function PaymentDetailsPage_ng_container_3_ion_content_2_ion_card_3_ion_radio_group_14_Template_ion_radio_group_ionCancel_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r143);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.offerType = "");
    })("ionChange", function PaymentDetailsPage_ng_container_3_ion_content_2_ion_card_3_ion_radio_group_14_Template_ion_radio_group_ionChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r143);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.offerTypeChange(ctx_r2.offerType));
    })("click", function PaymentDetailsPage_ng_container_3_ion_content_2_ion_card_3_ion_radio_group_14_Template_ion_radio_group_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r143);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.offerType == 7 ? ctx_r2.checkpromoCoupon(ctx_r2.promoCoupon = "", false) : "");
    })("click", function PaymentDetailsPage_ng_container_3_ion_content_2_ion_card_3_ion_radio_group_14_Template_ion_radio_group_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r143);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.offerType == 5 ? ctx_r2.checkOfferCoupon(ctx_r2.offerCoupon = "", false) : "");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](1, PaymentDetailsPage_ng_container_3_ion_content_2_ion_card_3_ion_radio_group_14_div_1_Template, 2, 1, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.offerType);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngForOf", ctx_r2.offersDropDown);
  }
}
function PaymentDetailsPage_ng_container_3_ion_content_2_ion_card_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-card", 483)(1, "ion-row")(2, "ion-col", 36)(3, "div", 506)(4, "div", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](5, "Offer Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](6, PaymentDetailsPage_ng_container_3_ion_content_2_ion_card_3_div_6_Template, 2, 0, "div", 507);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](7, "ion-row")(8, "ion-col", 323)(9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](10, "Select offer Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](11, "ion-col", 493);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](12, PaymentDetailsPage_ng_container_3_ion_content_2_ion_card_3_ion_icon_12_Template, 1, 0, "ion-icon", 508)(13, PaymentDetailsPage_ng_container_3_ion_content_2_ion_card_3_ion_icon_13_Template, 1, 0, "ion-icon", 509);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](14, PaymentDetailsPage_ng_container_3_ion_content_2_ion_card_3_ion_radio_group_14_Template, 2, 2, "ion-radio-group", 510);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.offerSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.isRadioGroupVisible);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", !ctx_r2.isRadioGroupVisible);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", !ctx_r2.isRadioGroupVisible);
  }
}
function PaymentDetailsPage_ng_container_3_ion_content_2_ion_card_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r146 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-card", 483)(1, "div", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](2, " Privilege Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "ion-row")(4, "ion-col", 186)(5, "ion-item", 518)(6, "ion-input", 519);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayListener"]("ngModelChange", function PaymentDetailsPage_ng_container_3_ion_content_2_ion_card_4_Template_ion_input_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r146);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayBindingSet"](ctx_r2.privCardNumber, $event) || (ctx_r2.privCardNumber = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](7, "ion-row")(8, "ion-col", 186)(9, "ion-button", 520);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_3_ion_content_2_ion_card_4_Template_ion_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r146);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.applyPrivCardNumber());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](10, "use ");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](11, "ion-button", 521);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_3_ion_content_2_ion_card_4_Template_ion_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r146);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.cancelPrivCardNumber());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](12, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.privCardNumber);
  }
}
function PaymentDetailsPage_ng_container_3_ion_content_2_ion_card_5_p_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "p", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](1, "Applied PNR discount");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
}
function PaymentDetailsPage_ng_container_3_ion_content_2_ion_card_5_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r148 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 138)(1, "div")(2, "span", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](4, "span", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](6, "a", 142)(7, "ion-icon", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_3_ion_content_2_ion_card_5_div_10_Template_ion_icon_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r148);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.deletePnrDiscount());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.quotePnrForm.value.pnrnumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate2"]("", ctx_r2.currencySym, " ", ctx_r2.fareBreakupDetails.previous_pnr_discount, "");
  }
}
function PaymentDetailsPage_ng_container_3_ion_content_2_ion_card_5_div_11_a_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r150 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "a", 163)(1, "ion-icon", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_3_ion_content_2_ion_card_5_div_11_a_9_Template_ion_icon_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r150);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.removeQuote());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
}
function PaymentDetailsPage_ng_container_3_ion_content_2_ion_card_5_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r149 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 153)(1, "ion-row")(2, "ion-item", 523);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](3, "ion-input", 524);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](4, "ion-row")(5, "ion-col", 199)(6, "ion-item", 518);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](7, "ion-input", 525);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](8, "ion-col", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](9, PaymentDetailsPage_ng_container_3_ion_content_2_ion_card_5_div_11_a_9_Template, 2, 0, "a", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](10, "ion-button", 352);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_3_ion_content_2_ion_card_5_div_11_Template_ion_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r149);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.checkQuotePNR());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](11, "Apply");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("formGroup", ctx_r2.quotePnrForm)("ngClass", ctx_r2.quoteErrors ? "errors" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngClass", ctx_r2.quoteErrors ? "invalid-quote-input" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("readonly", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngClass", ctx_r2.isAddquote && ctx_r2.quoteAplied.length > 0 ? "show-remove" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.isAddquote && ctx_r2.quoteAplied.length > 0);
  }
}
function PaymentDetailsPage_ng_container_3_ion_content_2_ion_card_5_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "span", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.quoteInvalidMsg);
  }
}
function PaymentDetailsPage_ng_container_3_ion_content_2_ion_card_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r147 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-card", 483)(1, "div", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](2, " Quote for Previous PNR");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "div", 191)(4, "ion-item", 522)(5, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](6, "Quote for Previous PNR");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](7, "ion-checkbox", 348);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayListener"]("ngModelChange", function PaymentDetailsPage_ng_container_3_ion_content_2_ion_card_5_Template_ion_checkbox_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r147);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayBindingSet"](ctx_r2.quotepnr, $event) || (ctx_r2.quotepnr = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("ionChange", function PaymentDetailsPage_ng_container_3_ion_content_2_ion_card_5_Template_ion_checkbox_ionChange_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r147);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.quotePNRChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](8, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](9, PaymentDetailsPage_ng_container_3_ion_content_2_ion_card_5_p_9_Template, 2, 0, "p", 132)(10, PaymentDetailsPage_ng_container_3_ion_content_2_ion_card_5_div_10_Template, 8, 3, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](11, PaymentDetailsPage_ng_container_3_ion_content_2_ion_card_5_div_11_Template, 12, 6, "div", 136)(12, PaymentDetailsPage_ng_container_3_ion_content_2_ion_card_5_span_12_Template, 2, 1, "span", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.quotepnr);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.pnrDiscountAplied);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.pnrDiscountAplied);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.showQuotePnrForm());
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.quoteInvalidMsg && ctx_r2.quotepnr);
  }
}
function PaymentDetailsPage_ng_container_3_ion_content_2_ion_card_6_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 356)(1, "ion-row")(2, "ion-col", 357)(3, "ion-item", 526)(4, "ion-label", 359);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](6, "ion-col", 360)(7, "ion-item", 372)(8, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](9, "APPLIED");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.appliedofferCouponname);
  }
}
function PaymentDetailsPage_ng_container_3_ion_content_2_ion_card_6_div_5_ion_row_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 362);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](2, "ion-radio", 363);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "ion-col", 364)(4, "ion-item", 527)(5, "div", 366);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](6, "ion-label", 367);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const oCoupon_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpropertyInterpolate"]("value", oCoupon_r152 == null ? null : oCoupon_r152.coupon_code);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("innerHTML", oCoupon_r152.coupon_code, _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵsanitizeHtml"]);
  }
}
function PaymentDetailsPage_ng_container_3_ion_content_2_ion_card_6_div_5_ion_row_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](1, "ion-col", 362);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](2, "ion-col", 368);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](3, "ion-label", 367);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const oCoupon_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("innerHTML", oCoupon_r152.description, _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵsanitizeHtml"]);
  }
}
function PaymentDetailsPage_ng_container_3_ion_content_2_ion_card_6_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](1, PaymentDetailsPage_ng_container_3_ion_content_2_ion_card_6_div_5_ion_row_1_Template, 7, 2, "ion-row", 3)(2, PaymentDetailsPage_ng_container_3_ion_content_2_ion_card_6_div_5_ion_row_2_Template, 4, 1, "ion-row", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const oCoupon_r152 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", oCoupon_r152.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", oCoupon_r152.description);
  }
}
function PaymentDetailsPage_ng_container_3_ion_content_2_ion_card_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r151 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-card", 483)(1, "div", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](2, " Select Offer Coupon");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](3, PaymentDetailsPage_ng_container_3_ion_content_2_ion_card_6_div_3_Template, 10, 1, "div", 353);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](4, "ion-radio-group", 354);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayListener"]("ngModelChange", function PaymentDetailsPage_ng_container_3_ion_content_2_ion_card_6_Template_ion_radio_group_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r151);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayBindingSet"](ctx_r2.offerCoupon, $event) || (ctx_r2.offerCoupon = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("ionChange", function PaymentDetailsPage_ng_container_3_ion_content_2_ion_card_6_Template_ion_radio_group_ionChange_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r151);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.checkOfferCoupon(ctx_r2.offerCoupon, true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](5, PaymentDetailsPage_ng_container_3_ion_content_2_ion_card_6_div_5_Template, 3, 2, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](6, "div", 355);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.appliedcoupon2 && ctx_r2.appliedofferCouponname);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.offerCoupon);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngForOf", ctx_r2.offerCoupons);
  }
}
function PaymentDetailsPage_ng_container_3_ion_content_2_div_7_ion_card_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 529)(1, "ion-row")(2, "ion-col", 357)(3, "ion-item", 530)(4, "ion-label", 359);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](6, "ion-col", 360)(7, "ion-item", 531)(8, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](9, "APPLIED");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.appliedCouponname);
  }
}
function PaymentDetailsPage_ng_container_3_ion_content_2_div_7_ion_card_1_div_5_ion_row_1_ion_col_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r154 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-col", 535)(1, "button", 536);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_3_ion_content_2_div_7_ion_card_1_div_5_ion_row_1_ion_col_7_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r154);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](7);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.removeCoupons());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](2, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
}
function PaymentDetailsPage_ng_container_3_ion_content_2_div_7_ion_card_1_div_5_ion_row_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 362);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](2, "ion-radio", 363);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "ion-col", 532)(4, "ion-item", 533)(5, "div", 366);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](6, "ion-label", 367);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](7, PaymentDetailsPage_ng_container_3_ion_content_2_div_7_ion_card_1_div_5_ion_row_1_ion_col_7_Template, 3, 0, "ion-col", 534);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r154 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]();
    const pCoupon_r156 = ctx_r154.$implicit;
    const i_r157 = ctx_r154.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpropertyInterpolate2"]("value", "", pCoupon_r156 == null ? null : pCoupon_r156.coupon_code, ",", i_r157, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("innerHTML", pCoupon_r156.coupon_code, _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", (ctx_r2.promoCoupon == null ? null : ctx_r2.promoCoupon.split(",")[0]) === (pCoupon_r156 == null ? null : pCoupon_r156.coupon_code));
  }
}
function PaymentDetailsPage_ng_container_3_ion_content_2_div_7_ion_card_1_div_5_ion_row_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](1, "ion-col", 362);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](2, "ion-col", 537);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](3, "ion-label", 367);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const pCoupon_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("innerHTML", pCoupon_r156.description, _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵsanitizeHtml"]);
  }
}
function PaymentDetailsPage_ng_container_3_ion_content_2_div_7_ion_card_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 373);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](1, PaymentDetailsPage_ng_container_3_ion_content_2_div_7_ion_card_1_div_5_ion_row_1_Template, 8, 5, "ion-row", 3)(2, PaymentDetailsPage_ng_container_3_ion_content_2_div_7_ion_card_1_div_5_ion_row_2_Template, 4, 1, "ion-row", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const pCoupon_r156 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", pCoupon_r156.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", pCoupon_r156.description);
  }
}
function PaymentDetailsPage_ng_container_3_ion_content_2_div_7_ion_card_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r153 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-card", 483)(1, "div", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](2, " Select Offer Coupon ");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](3, PaymentDetailsPage_ng_container_3_ion_content_2_div_7_ion_card_1_div_3_Template, 10, 1, "div", 528);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](4, "ion-radio-group", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayListener"]("ngModelChange", function PaymentDetailsPage_ng_container_3_ion_content_2_div_7_ion_card_1_Template_ion_radio_group_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r153);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayBindingSet"](ctx_r2.promoCoupon, $event) || (ctx_r2.promoCoupon = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("ionChange", function PaymentDetailsPage_ng_container_3_ion_content_2_div_7_ion_card_1_Template_ion_radio_group_ionChange_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r153);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.checkpromoCoupon(ctx_r2.promoCoupon, true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](5, PaymentDetailsPage_ng_container_3_ion_content_2_div_7_ion_card_1_div_5_Template, 3, 2, "div", 370);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](6, "div", 355);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.appliedcoupon1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.promoCoupon);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngForOf", ctx_r2.promoCoupons);
  }
}
function PaymentDetailsPage_ng_container_3_ion_content_2_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](1, PaymentDetailsPage_ng_container_3_ion_content_2_div_7_ion_card_1_Template, 7, 3, "ion-card", 482);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.promoCoupons && ctx_r2.promoCoupons.length > 0 && ctx_r2.isPromoCoup() && ctx_r2.offerType == "7" && ctx_r2.metaData.isAllowPromoOffers);
  }
}
function PaymentDetailsPage_ng_container_3_ion_content_2_ion_row_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-row", 37)(1, "ion-col", 323)(2, "span", 492);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](4, "ion-col", 493)(5, "span", 492);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.selectedText);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate2"]("", ctx_r2.currencySym, "", ctx_r2.fareBreakupDetails ? (ctx_r2.fareBreakupDetails.offer_discount ? ctx_r2.fareBreakupDetails.offer_discount : 0) + (ctx_r2.fareBreakupDetails.ebooking_discount ? ctx_r2.fareBreakupDetails.ebooking_discount : 0) + (ctx_r2.fareBreakupDetails.previous_pnr_discount ? ctx_r2.fareBreakupDetails.previous_pnr_discount : 0) + (ctx_r2.fareBreakupDetails.privilege_card_discount ? ctx_r2.fareBreakupDetails.privilege_card_discount : 0) : 0, "");
  }
}
function PaymentDetailsPage_ng_container_3_ion_content_2_ion_row_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-row", 37)(1, "ion-col", 323)(2, "span", 492);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](3, "Total snack price");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](4, "ion-col", 493)(5, "span", 492);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.currencySym + "" + ctx_r2.fareBreakupDetails.total_snack_price);
  }
}
function PaymentDetailsPage_ng_container_3_ion_content_2_ion_row_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-row", 37)(1, "ion-col", 323)(2, "span", 492);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](3, "Cash coupon");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](4, "ion-col", 493)(5, "span", 492);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.currencySym + "" + ctx_r2.fareBreakupDetails.cash_coupon);
  }
}
function PaymentDetailsPage_ng_container_3_ion_content_2_ion_row_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-row", 37)(1, "ion-col", 323)(2, "span", 492);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](3, "GST");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](4, "ion-col", 493)(5, "span", 492);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.currencySym + "" + ctx_r2.fareBreakupDetails.service_tax_amount);
  }
}
function PaymentDetailsPage_ng_container_3_ion_content_2_ion_row_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-row", 37)(1, "ion-col", 323)(2, "span", 492);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](3, "Transaction Charge");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](4, "ion-col", 493)(5, "span", 492);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.currencySym + "" + ctx_r2.fareBreakupDetails.transaction_charges);
  }
}
function PaymentDetailsPage_ng_container_3_ion_content_2_ion_row_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-row", 37)(1, "ion-col", 323)(2, "span", 492);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](3, "Convenience Charge");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](4, "ion-col", 493)(5, "span", 492);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.currencySym + "" + ctx_r2.fareBreakupDetails.cc_charges);
  }
}
function PaymentDetailsPage_ng_container_3_ion_content_2_ion_row_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-row", 37)(1, "ion-col", 323)(2, "span", 492);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](3, "Promotional Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](4, "ion-col", 493)(5, "span", 492);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.currencySym + "" + ctx_r2.fareBreakupDetails.usable_promotional_balance);
  }
}
function PaymentDetailsPage_ng_container_3_ion_content_2_ion_row_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-row", 37)(1, "ion-col", 323)(2, "span", 492);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](3, "Wallet Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](4, "ion-col", 493)(5, "span", 492);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.currencySym + "" + ctx_r2.fareBreakupDetails.wallet_balance);
  }
}
function PaymentDetailsPage_ng_container_3_ion_content_2_ion_row_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-row", 37)(1, "ion-col", 323)(2, "span", 492);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](3, "Refundable Booking Charges");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](4, "ion-col", 493)(5, "span", 492);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.fareBreakupDetails.cancel_protect_charge);
  }
}
function PaymentDetailsPage_ng_container_3_ion_content_2_ion_row_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-row", 37)(1, "ion-col", 323)(2, "span", 492);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](3, "Total Fare");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](4, "ion-col", 493)(5, "span", 492);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate2"]("", ctx_r2.currencySym, "", ctx_r2.fareBreakupDetails.total_fare < 0 ? 0 : ctx_r2.fareBreakupDetails.total_fare, "");
  }
}
function PaymentDetailsPage_ng_container_3_ion_content_2_ion_row_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-row", 496)(1, "ion-col", 323)(2, "span", 497);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](3, "Net Payable Phonebook (10%)");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](4, "ion-col", 493)(5, "span", 498);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.currencySym + " " + ctx_r2.fareBreakupDetails.net_payable_phonebook);
  }
}
function PaymentDetailsPage_ng_container_3_ion_content_2_ion_card_55_div_6_ion_item_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-item", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](1, "ion-label", 367)(2, "ion-radio", 459);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const sCoupon_r159 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("innerHTML", sCoupon_r159.used_points, _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpropertyInterpolate"]("value", sCoupon_r159 == null ? null : sCoupon_r159.discount_amount);
  }
}
function PaymentDetailsPage_ng_container_3_ion_content_2_ion_card_55_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](1, PaymentDetailsPage_ng_container_3_ion_content_2_ion_card_55_div_6_ion_item_1_Template, 3, 2, "ion-item", 378);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const sCoupon_r159 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", sCoupon_r159.used_points);
  }
}
function PaymentDetailsPage_ng_container_3_ion_content_2_ion_card_55_a_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r160 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "a", 380);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_3_ion_content_2_ion_card_55_a_10_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r160);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](4);
      ctx_r2.smartMileCoupon = "";
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.checkSmartMileCoupon(ctx_r2.smartMileCoupon));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](1, "Remove offer coupon");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
}
function PaymentDetailsPage_ng_container_3_ion_content_2_ion_card_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r158 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-card", 483)(1, "div", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](2, " Select Offer Coupon");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "ion-row")(4, "ion-col", 323)(5, "ion-radio-group", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayListener"]("ngModelChange", function PaymentDetailsPage_ng_container_3_ion_content_2_ion_card_55_Template_ion_radio_group_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r158);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayBindingSet"](ctx_r2.smartMileCoupon, $event) || (ctx_r2.smartMileCoupon = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("ionChange", function PaymentDetailsPage_ng_container_3_ion_content_2_ion_card_55_Template_ion_radio_group_ionChange_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r158);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.checkSmartMileCoupon(ctx_r2.smartMileCoupon));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](6, PaymentDetailsPage_ng_container_3_ion_content_2_ion_card_55_div_6_Template, 2, 1, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](7, "span", 375);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](9, "ion-col", 376);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](10, PaymentDetailsPage_ng_container_3_ion_content_2_ion_card_55_a_10_Template, 2, 0, "a", 377);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](11, "div", 355);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.smartMileCoupon);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngForOf", ctx_r2.smartMiles);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.offerCouponErrorMsg);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.smartMileCoupon);
  }
}
function PaymentDetailsPage_ng_container_3_ion_content_2_div_56_ion_card_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r162 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-card", 540)(1, "ion-item", 544)(2, "div", 545);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](3, "Phone Booking ");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](4, "ion-icon", 546);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_3_ion_content_2_div_56_ion_card_10_Template_ion_icon_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r162);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.showPhoneBookDets = !ctx_r2.showPhoneBookDets);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](5, "ion-radio", 548);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpureFunction1"](1, _c18, ctx_r2.bookType == "2" ? "1px solid var(--iconsAndButtonsColor)" : "1px solid #dedede"));
  }
}
function PaymentDetailsPage_ng_container_3_ion_content_2_div_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r161 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 538)(1, "div", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](2, "Select Payment Method");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "ion-list", 7)(4, "ion-radio-group", 539);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayListener"]("ngModelChange", function PaymentDetailsPage_ng_container_3_ion_content_2_div_56_Template_ion_radio_group_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r161);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayBindingSet"](ctx_r2.bookType, $event) || (ctx_r2.bookType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("ionChange", function PaymentDetailsPage_ng_container_3_ion_content_2_div_56_Template_ion_radio_group_ionChange_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r161);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.bookTypeChanged(ctx_r2.bookType));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](5, "ion-card", 540)(6, "ion-item", 541)(7, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](8, "Book Online");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](9, "ion-radio", 542);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](10, PaymentDetailsPage_ng_container_3_ion_content_2_div_56_ion_card_10_Template, 6, 3, "ion-card", 543);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](11, "ion-card", 540)(12, "ion-item", 544)(13, "div", 545);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](14, "Pay From Wallet ");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](15, "ion-icon", 546);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_3_ion_content_2_div_56_Template_ion_icon_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r161);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.showWalletDets = !ctx_r2.showWalletDets);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](16, "ion-radio", 547);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.bookType);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpureFunction1"](4, _c18, ctx_r2.bookType == "1" ? "1px solid var(--iconsAndButtonsColor)" : "1px solid #dedede"));
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.commonStorage.localGet("locale").is_phone_booking_allowed && !ctx_r2.isBima);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpureFunction1"](6, _c18, ctx_r2.bookType == "3" ? "1px solid var(--iconsAndButtonsColor)" : "1px solid #dedede"));
  }
}
function PaymentDetailsPage_ng_container_3_ion_content_2_div_57_div_1_div_5_ion_item_2_ion_label_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](1, "img", 388);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
}
function PaymentDetailsPage_ng_container_3_ion_content_2_div_57_div_1_div_5_ion_item_2_ion_label_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const payType_r164 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate1"]("", payType_r164.name, " ");
  }
}
function PaymentDetailsPage_ng_container_3_ion_content_2_div_57_div_1_div_5_ion_item_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-item", 544);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](1, PaymentDetailsPage_ng_container_3_ion_content_2_div_57_div_1_div_5_ion_item_2_ion_label_1_Template, 2, 0, "ion-label", 3)(2, PaymentDetailsPage_ng_container_3_ion_content_2_div_57_div_1_div_5_ion_item_2_ion_label_2_Template, 2, 1, "ion-label", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](3, "ion-radio", 550);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const payType_r164 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", payType_r164.name == "RazorPay" && payType_r164.id == "53");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", payType_r164.name != "RazorPay" || payType_r164.id != "53");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpropertyInterpolate"]("value", payType_r164 ? payType_r164.id : "");
  }
}
function PaymentDetailsPage_ng_container_3_ion_content_2_div_57_div_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div")(1, "ion-card", 540);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](2, PaymentDetailsPage_ng_container_3_ion_content_2_div_57_div_1_div_5_ion_item_2_Template, 4, 3, "ion-item", 549);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const payType_r164 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpureFunction1"](2, _c18, ctx_r2.paymentType == payType_r164.id ? "1px solid var(--iconsAndButtonsColor)" : "1px solid #dedede"));
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", payType_r164.name && payType_r164.name.toUpperCase().indexOf("EBS") < 0);
  }
}
function PaymentDetailsPage_ng_container_3_ion_content_2_div_57_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r163 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 538)(1, "div", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](2, "Select a payment option: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "ion-list")(4, "ion-radio-group", 354);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayListener"]("ngModelChange", function PaymentDetailsPage_ng_container_3_ion_content_2_div_57_div_1_Template_ion_radio_group_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r163);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayBindingSet"](ctx_r2.paymentType, $event) || (ctx_r2.paymentType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("ionChange", function PaymentDetailsPage_ng_container_3_ion_content_2_div_57_div_1_Template_ion_radio_group_ionChange_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r163);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.calculatePgCharges(ctx_r2.paymentType));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](5, PaymentDetailsPage_ng_container_3_ion_content_2_div_57_div_1_div_5_Template, 3, 4, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.paymentType);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngForOf", ctx_r2.metaData.payMentGateWayTypes);
  }
}
function PaymentDetailsPage_ng_container_3_ion_content_2_div_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](1, PaymentDetailsPage_ng_container_3_ion_content_2_div_57_div_1_Template, 6, 2, "div", 500);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", !ctx_r2.payTypeName.includes("52"));
  }
}
function PaymentDetailsPage_ng_container_3_ion_content_2_ion_card_58_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div")(1, "ion-item", 522)(2, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](4, "ion-radio", 390)(5, "ion-img", 391);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const payType_r166 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](payType_r166.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("value", payType_r166);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpropertyInterpolate"]("src", payType_r166.ImageUrl);
  }
}
function PaymentDetailsPage_ng_container_3_ion_content_2_ion_card_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r165 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-card", 551)(1, "div", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](2, " Virtual account transfer");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "ion-list", 129)(4, "ion-radio-group", 354);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayListener"]("ngModelChange", function PaymentDetailsPage_ng_container_3_ion_content_2_ion_card_58_Template_ion_radio_group_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r165);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayBindingSet"](ctx_r2.virtualPaymentType, $event) || (ctx_r2.virtualPaymentType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("ionChange", function PaymentDetailsPage_ng_container_3_ion_content_2_ion_card_58_Template_ion_radio_group_ionChange_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r165);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.virtualAccTransfer(ctx_r2.virtualPaymentType));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](5, PaymentDetailsPage_ng_container_3_ion_content_2_ion_card_58_div_5_Template, 6, 3, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.virtualPaymentType);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngForOf", ctx_r2.datttttt.rb_virtual_banks);
  }
}
function PaymentDetailsPage_ng_container_3_ion_content_2_div_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r167 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 552)(1, "ion-button", 553);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_3_ion_content_2_div_60_Template_ion_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r167);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.pay());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](2, "div", 554);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](3, "Continue to Payment");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("disabled", !ctx_r2.isOurbusChecked);
  }
}
function PaymentDetailsPage_ng_container_3_ion_content_2_div_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r168 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 395)(1, "ion-button", 396);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_3_ion_content_2_div_61_Template_ion_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r168);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.pay());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](2, "div", 555);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](3, "Proceed to payment");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
  }
}
function PaymentDetailsPage_ng_container_3_ion_content_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r138 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-content", 480);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](1, PaymentDetailsPage_ng_container_3_ion_content_2_div_1_Template, 2, 1, "div", 481)(2, PaymentDetailsPage_ng_container_3_ion_content_2_ion_card_2_Template, 6, 2, "ion-card", 482)(3, PaymentDetailsPage_ng_container_3_ion_content_2_ion_card_3_Template, 15, 4, "ion-card", 482)(4, PaymentDetailsPage_ng_container_3_ion_content_2_ion_card_4_Template, 13, 1, "ion-card", 482)(5, PaymentDetailsPage_ng_container_3_ion_content_2_ion_card_5_Template, 13, 5, "ion-card", 482)(6, PaymentDetailsPage_ng_container_3_ion_content_2_ion_card_6_Template, 7, 3, "ion-card", 482)(7, PaymentDetailsPage_ng_container_3_ion_content_2_div_7_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](8, "ion-card", 483)(9, "ion-row", 484)(10, "ion-col", 362)(11, "ion-checkbox", 485);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("ionChange", function PaymentDetailsPage_ng_container_3_ion_content_2_Template_ion_checkbox_ionChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r138);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.onCheckboxChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayListener"]("ngModelChange", function PaymentDetailsPage_ng_container_3_ion_content_2_Template_ion_checkbox_ngModelChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r138);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayBindingSet"](ctx_r2.isOurbusChecked, $event) || (ctx_r2.isOurbusChecked = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](12, "ion-col", 364)(13, "div", 486);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](14, "By providing your details you agree to OurBus ");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](15, "span", 487);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_3_ion_content_2_Template_span_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r138);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.termsCond());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](16, "Terms of Service ");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](17, "span", 487);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_3_ion_content_2_Template_span_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r138);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.cancellation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](18, ", Cancellation Policy");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](19, " and ");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](20, "span", 487);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_3_ion_content_2_Template_span_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r138);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.privacyPolicy());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](21, " Privacy Policy");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](22, "ion-card", 488)(23, "ion-row", 489)(24, "ion-col", 362);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](25, "ion-icon", 490);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](26, "ion-col", 364)(27, "span", 491);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](28, "Order Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](29, "ion-row", 37)(30, "ion-col", 323)(31, "span", 492);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](32, "Base Fare");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](33, "ion-col", 493)(34, "span", 492);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](36, PaymentDetailsPage_ng_container_3_ion_content_2_ion_row_36_Template, 7, 3, "ion-row", 494)(37, PaymentDetailsPage_ng_container_3_ion_content_2_ion_row_37_Template, 7, 1, "ion-row", 494)(38, PaymentDetailsPage_ng_container_3_ion_content_2_ion_row_38_Template, 7, 1, "ion-row", 494)(39, PaymentDetailsPage_ng_container_3_ion_content_2_ion_row_39_Template, 7, 1, "ion-row", 494)(40, PaymentDetailsPage_ng_container_3_ion_content_2_ion_row_40_Template, 7, 1, "ion-row", 494)(41, PaymentDetailsPage_ng_container_3_ion_content_2_ion_row_41_Template, 7, 1, "ion-row", 494)(42, PaymentDetailsPage_ng_container_3_ion_content_2_ion_row_42_Template, 7, 1, "ion-row", 494)(43, PaymentDetailsPage_ng_container_3_ion_content_2_ion_row_43_Template, 7, 1, "ion-row", 494)(44, PaymentDetailsPage_ng_container_3_ion_content_2_ion_row_44_Template, 7, 1, "ion-row", 494)(45, PaymentDetailsPage_ng_container_3_ion_content_2_ion_row_45_Template, 7, 2, "ion-row", 494);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](46, "div", 495);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](47, "ion-row", 496)(48, "ion-col", 323)(49, "span", 497);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](50, "Amount Payable");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](51, "ion-col", 493)(52, "span", 498);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](54, PaymentDetailsPage_ng_container_3_ion_content_2_ion_row_54_Template, 7, 1, "ion-row", 499);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](55, PaymentDetailsPage_ng_container_3_ion_content_2_ion_card_55_Template, 12, 4, "ion-card", 482)(56, PaymentDetailsPage_ng_container_3_ion_content_2_div_56_Template, 17, 8, "div", 500)(57, PaymentDetailsPage_ng_container_3_ion_content_2_div_57_Template, 2, 1, "div", 3)(58, PaymentDetailsPage_ng_container_3_ion_content_2_ion_card_58_Template, 6, 2, "ion-card", 501);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](59, "div", 502);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](60, PaymentDetailsPage_ng_container_3_ion_content_2_div_60_Template, 4, 1, "div", 503)(61, PaymentDetailsPage_ng_container_3_ion_content_2_div_61_Template, 4, 0, "div", 311);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](62, "form", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.payment_page_banner != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.metaData.showCancelProtect && !ctx_r2.phoneBooking);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.offersDropDown.length > 1 && ctx_r2.promoCoupons.length != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.offerType == "4");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.offerType == "1" && ctx_r2.offersDropDown.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.offerCoupons && ctx_r2.offerCoupons.length > 0 && ctx_r2.isOfferCoup() && ctx_r2.offerType == "5");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", !ctx_r2.isRadioGroupVisible);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.isOurbusChecked);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.currencySym + "" + ctx_r2.fareBreakupDetails.ticket_fare);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.showDiscount(ctx_r2.fareBreakupDetails));
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.fareBreakupDetails.total_snack_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.fareBreakupDetails.cash_coupon);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", !ctx_r2.commonService.isAbcApp() && ctx_r2.fareBreakupDetails.service_tax_amount != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.fareBreakupDetails.transaction_charges);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.fareBreakupDetails.cc_charges);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.fareBreakupDetails.usable_promotional_balance);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.fareBreakupDetails.wallet_balance);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.checkCancelProtect && !ctx_r2.phoneBooking && ctx_r2.metaData.showCancelProtect);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.fareBreakupDetails.total_fare);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate2"]("", ctx_r2.currencySym, "", ctx_r2.payAmount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.fareBreakupDetails.net_payable_phonebook && ctx_r2.phoneBooking);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.smartMiles && ctx_r2.smartMiles.length > 0 && ctx_r2.offerType == "2" && ctx_r2.metaData.isAllowSmartMiles);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.walletBooking && ctx_r2.auth.isLoggedIn() && !ctx_r2.isWPBooking);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.bookOnline && ctx_r2.pgLength > "1" && !ctx_r2.isWPBooking);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.payTypeName.includes("52"));
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", !ctx_r2.isWPBooking);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.isWPBooking);
  }
}
function PaymentDetailsPage_ng_container_3_ion_content_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r169 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-content", 556)(1, "div", 557);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](2, "ion-icon", 558);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "div", 559);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](4, "Transaction Failed");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](5, "ion-button", 560);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_3_ion_content_3_Template_ion_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r169);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.tryAgain());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](6, "Try Again");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](7, "ion-button", 561);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_3_ion_content_3_Template_ion_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r169);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.bckToHome());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](8, "Back To Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
  }
}
function PaymentDetailsPage_ng_container_3_div_4_ion_row_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r171 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](1, "ion-col", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](2, "ion-col", 564);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_3_div_4_ion_row_6_Template_ion_col_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r171);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.addMoney());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](3, "ADD MONEY");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](4, "ion-col", 565);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_3_div_4_ion_row_6_Template_ion_col_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r171);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.bookTypeChanged("1"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](5, "PAY ONLINE");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
}
function PaymentDetailsPage_ng_container_3_div_4_ion_row_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r172 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](1, "ion-col", 242)(2, "ion-col", 407);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "ion-col", 564);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_3_div_4_ion_row_7_Template_ion_col_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r172);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.walletNoteModal = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](4, "CANCEL");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
}
function PaymentDetailsPage_ng_container_3_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r170 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 562);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_3_div_4_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r170);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.walletNoteModal = !ctx_r2.walletNoteModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](1, "div", 563)(2, "div", 405);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](3, " Wallet Booking ");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](4, "div", 400);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](6, PaymentDetailsPage_ng_container_3_div_4_ion_row_6_Template, 6, 0, "ion-row", 3)(7, PaymentDetailsPage_ng_container_3_div_4_ion_row_7_Template, 5, 0, "ion-row", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.walletMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.isShowWalletBtn);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", !ctx_r2.isShowWalletBtn);
  }
}
function PaymentDetailsPage_ng_container_3_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r173 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 566)(1, "div", 567)(2, "ion-item", 518)(3, "ion-input", 568);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayListener"]("ngModelChange", function PaymentDetailsPage_ng_container_3_div_5_Template_ion_input_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r173);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayBindingSet"](ctx_r2.idProof, $event) || (ctx_r2.idProof = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](4, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](5, "ion-col", 410);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](6, "ion-col", 411);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_3_div_5_Template_ion_col_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r173);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.cancelIdProof());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](7, "CANCEL");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](8, "ion-col", 469);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_3_div_5_Template_ion_col_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r173);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.applyIdPrrof(ctx_r2.promoCoupon, true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](9, "APPLY");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.idProof);
  }
}
function PaymentDetailsPage_ng_container_3_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r174 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 566)(1, "div", 567)(2, "h6", 413);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](3, "OTP Verification");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](4, "ion-row")(5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](7, "div")(8, "ion-item", 518)(9, "ion-input", 569);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayListener"]("ngModelChange", function PaymentDetailsPage_ng_container_3_div_6_Template_ion_input_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r174);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayBindingSet"](ctx_r2.otpInput, $event) || (ctx_r2.otpInput = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("ionChange", function PaymentDetailsPage_ng_container_3_div_6_Template_ion_input_ionChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r174);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.enforceMaxLengthOtp($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](10, "ion-row")(11, "ion-col", 416);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_3_div_6_Template_ion_col_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r174);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.otpShow = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](12, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](13, "ion-col", 417);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_3_div_6_Template_ion_col_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r174);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.resendOtp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](14, "Resend OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](15, "ion-col", 470);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_3_div_6_Template_ion_col_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r174);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.validateOtp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](16, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate1"](" An OTP has been sent to mobile number ", ctx_r2.couponOtpDetails ? ctx_r2.couponOtpDetails.mobile : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.otpInput);
  }
}
function PaymentDetailsPage_ng_container_3_div_7_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 574)(1, "ion-row")(2, "ion-col", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](3, "img", 576);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](4, "ion-col", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](7, "div", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](8, " Money earned from cashback and coupons");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate1"](" Promotional: ", ctx_r2.promobalance, " ");
  }
}
function PaymentDetailsPage_ng_container_3_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r175 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 566)(1, "div", 570)(2, "ion-row")(3, "ion-col", 571);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](4, "Wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](5, "ion-col", 572);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_3_div_7_Template_ion_col_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r175);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.showWalletDets = !ctx_r2.showWalletDets);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](6, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](7, PaymentDetailsPage_ng_container_3_div_7_div_7_Template, 9, 1, "div", 573);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](8, "div", 574)(9, "ion-row")(10, "ion-col", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](11, "img", 575);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](12, "ion-col", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](15, "div", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](16, " Money added by you in Wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.metaData.is_wallet_promotional);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate1"](" Non Promotional: ", ctx_r2.nonpromobalance, "");
  }
}
function PaymentDetailsPage_ng_container_3_div_8_swiper_slide_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "swiper-slide", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](1, "img", 420)(2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "div", 263);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const o_r177 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpropertyInterpolate"]("src", o_r177.image, _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](o_r177.text);
  }
}
function PaymentDetailsPage_ng_container_3_div_8_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](1, " 1. Phone booking feature is available for paying through wallet only.");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](2, "br")(3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](4, " 2. Release time differs based on origin-destination, bus type, or timing.");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](5, "br")(6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](7, " 3. In the case of auto cancellation, no refund of the advance fare shall be admissible.");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](8, "br")(9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](10, " 4. In the case of confirmation, you will need to pay 100% of the ticket amount, and the 10% advance amount will be automatically credited back to the wallet. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
}
function PaymentDetailsPage_ng_container_3_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r176 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 566)(1, "div", 570)(2, "ion-row")(3, "ion-col", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](4, "How it Works");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](5, "ion-col", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function PaymentDetailsPage_ng_container_3_div_8_Template_ion_col_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r176);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.showPhoneBookDets = !ctx_r2.showPhoneBookDets);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](6, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](7, "swiper-container", 257, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](9, PaymentDetailsPage_ng_container_3_div_8_swiper_slide_9_Template, 5, 2, "swiper-slide", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipe"](10, "filterOculto");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](11, "ion-col", 259);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](12, "T & C*");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](13, PaymentDetailsPage_ng_container_3_div_8_div_13_Template, 11, 0, "div", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("options", ctx_r2.slideOpts);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipeBind1"](10, 3, ctx_r2.termsImages));
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.metaData.is_wallet_promotional);
  }
}
function PaymentDetailsPage_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](1, PaymentDetailsPage_ng_container_3_ion_header_1_Template, 9, 0, "ion-header", 471)(2, PaymentDetailsPage_ng_container_3_ion_content_2_Template, 63, 28, "ion-content", 472)(3, PaymentDetailsPage_ng_container_3_ion_content_3_Template, 9, 0, "ion-content", 473)(4, PaymentDetailsPage_ng_container_3_div_4_Template, 8, 3, "div", 474)(5, PaymentDetailsPage_ng_container_3_div_5_Template, 10, 1, "div", 475)(6, PaymentDetailsPage_ng_container_3_div_6_Template, 17, 2, "div", 475)(7, PaymentDetailsPage_ng_container_3_div_7_Template, 17, 2, "div", 475)(8, PaymentDetailsPage_ng_container_3_div_8_Template, 14, 5, "div", 475);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", !ctx_r2.paymentFailed);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", !ctx_r2.paymentFailed);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.paymentFailed);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.walletNoteModal);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.showCouponIdProof);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.otpShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.showWalletDets);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.showPhoneBookDets);
  }
}
const {
  AllInOneSDK
} = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_8__.registerPlugin)('AllInOneSDK');
class PaymentDetailsPage {
  constructor(navCtrl, modalCtrl, commonStorage, formBuilder, apiFactory, loaderService, commonService, util, appData, platform, modalController, theme, dateService, ex, alertCtrl, iab, auth, globalData, route, firebaseAnalyticsService, loadingController, cdr, router, upiCheckService, location, popoverCtrl, toastController, alertController
  // private location : Location
  ) {
    var _this$commonStorage$g, _this$commonStorage$g2;
    this.navCtrl = navCtrl;
    this.modalCtrl = modalCtrl;
    this.commonStorage = commonStorage;
    this.formBuilder = formBuilder;
    this.apiFactory = apiFactory;
    this.loaderService = loaderService;
    this.commonService = commonService;
    this.util = util;
    this.appData = appData;
    this.platform = platform;
    this.modalController = modalController;
    this.theme = theme;
    this.dateService = dateService;
    this.ex = ex;
    this.alertCtrl = alertCtrl;
    this.iab = iab;
    this.auth = auth;
    this.globalData = globalData;
    this.route = route;
    this.firebaseAnalyticsService = firebaseAnalyticsService;
    this.loadingController = loadingController;
    this.cdr = cdr;
    this.router = router;
    this.upiCheckService = upiCheckService;
    this.location = location;
    this.popoverCtrl = popoverCtrl;
    this.toastController = toastController;
    this.alertController = alertController;
    // @ViewChild('myslider', { static: false }) public slides: IonSlides;
    this.slideOpts = {
      initialSlide: 0,
      loop: true,
      centeredSlidesBounds: true,
      slidesPerView: 'auto',
      slidesPerGroup: 1,
      grabCursor: true,
      centeredSlides: true,
      zoom: {
        maxRatio: 5
      }
    };
    this.termsImages = [{
      image: "./assets/termsImage/Auto-Cancel.svg",
      text: '1.Phone booking is a temporary seat holding feature that can be done by paying a 10% advance amount.'
    }, {
      image: "./assets/termsImage/confirmation.svg",
      text: '2.After booking we will share the details of collecting your ticket with its validity through SMS.'
    }, {
      image: "./assets/termsImage/sms.svg",
      text: '3.You will have to confirm or collect the ticket before the mentioned auto-release period.'
    }, {
      image: "./assets/termsImage/ic_phone_confirm.png",
      text: '4.If you are not able to collect the ticket before the mentioned time period the ticket will be auto-canceled by the system.'
    }];
    this.selectedSeatsToBook = [];
    this.passengerDetails = [];
    this.haveCoupons = false;
    this.quotepnr = false;
    this.customPopoverOptions = [];
    this.couponAmount = 0;
    this.errors = false;
    this.couponErrors = false;
    this.quoteErrors = false;
    this.isAddquote = false;
    this.isAddCoupon = false;
    this.showRemoveCoupon = false;
    this.payMentGateWayTypes = [];
    this.paymentNoteModal = false;
    this.reservationData = [];
    this.couponAplied = [];
    this.quoteAplied = [];
    this.netBookingAmountBeforeCouponReturn = 0;
    this.netBookingAmountReturn = 0;
    this.discountAmountReturn = 0;
    this.pnrDiscountAmount = 0;
    this.pnrDiscountAplied = false;
    this.serviceTaxAmountReturn = 0;
    this.convenienceChargesAmountReturn = 0;
    this.transactionChargesAmountReturn = 0;
    this.totalBookingAmountReturn = 0;
    this.selectedRoute = [];
    this.origin = {};
    this.destination = {};
    this.moreDetailsOpen = false;
    this.moreDetailsFareOpen = false;
    this.bankingPayments = [];
    this.walletPayments = [];
    this.paymentOptionOpen = 'net';
    this.isOtp = false;
    this.otpShow = false;
    this.smartMilesDiscount = 0;
    this.bookOnline = true;
    this.phoneBooking = false;
    this.payFromWallet = false;
    this.isAppDiscount = false;
    this.isReturn = false;
    this.isBima = false;
    this.onwardSeatDetails = [];
    this.returnSeatDetails = [];
    this.seatDetails = [];
    this.walletMessage = "";
    this.walletNoteModal = false;
    this.emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    this.numberCheck = /^[0-9][0-9]{9}$/;
    this.pgChargesAmount = 0;
    this.pgType = {};
    this.smartMileCoupon = '';
    this.smartMiles = [];
    this.offerCoupons = [];
    this.promoCoupons = [];
    this.showOfferStatus = false;
    this.offerCouponAmount = 0;
    this.offerCouponAmountReturn = 0;
    this.discountBeforeCoupon = 0;
    this.discountBeforeCouponReturn = 0;
    this.offerCouponErrorMsg = "";
    this.childFareAmtLess = 0;
    this.taxCharges = [];
    this.showOfferCoupon = true;
    this.offersDropDown = [];
    this.isGstApplicable = false;
    this.convenienceChargePercentage = 0;
    this.walletBooking = false;
    this.convenienceChargePercentageReturn = 0;
    this.bookType = '1';
    this.isChargesInclusive = false;
    this.inclGSTAmount = 0;
    this.inclGSTAmountReturn = 0;
    this.firstTimeLoad = 0;
    this.gstDetails = false;
    this.fareBreakupDetails = {};
    this.moreLessOpt = false;
    this.privCardNumber = "";
    this.resultScript = "";
    this.viewTicket = false;
    this.paymentFailed = false;
    this.isShowWalletBtn = false;
    this.showCouponIdProof = false;
    this.idProofCnt = 0;
    this.wakeUpCall = false;
    this.isWPSwitchOn = false;
    this.nonpromobalance = '';
    this.promobalance = '';
    this.showWalletDets = false;
    this.customAlertOptions = {};
    this.showPhoneBookDets = false;
    this.value1 = [];
    this.value2 = [];
    this.value3 = [];
    this.value4 = [];
    // shoePayment: boolean = true;
    this.isPopupEnable = false;
    this.emailnumberValid = false;
    this.allow_cash_coupon_validation_with_phone_number = false;
    this.dddd = "WjI5MGIzVnlMWE4wWnpJeU1ESXlNREl5TlE9PXJ6cF90ZXN0X1BuMmpSWmJv\nWFZmMEZN";
    this.appliedcoupon1 = false;
    this.appliedcoupon2 = false;
    this.payTypeName = [];
    this.virtualAccHide = false;
    this.is_round_trip = false;
    this.roundTrip = false;
    this.returnmoreLessOpt = false;
    this.isOurbusChecked = true;
    this.isRadioGroupVisible = false;
    this.payment_page_banner = '';
    this.offerSelected = true;
    this.selectedText = 'Discount';
    this.specialcashDiscountValue = 'normal';
    this.is_special_discount_coupon = false;
    this.allow_to_create_special_discount_coupon = false;
    this.isIos = false;
    this.seatDetails_gender_age = [];
    this.inProgress = false;
    this.cbusPreviousPnrDiscount = 0;
    this.showCustomHeader = false;
    this.browser = null;
    this.alreadyReserved = false;
    this.previousBookType = '1';
    this.isProfileUpdateNeeded = false;
    this.pollingDuration = 5 * 60 * 1000; // 5 minutes
    this.pollingFrequency = 5000; // 5 seconds
    this.upiTransactionStatusUrl = '';
    this.pollingInterval = null;
    this.pollingTimeout = null;
    this.currentPnr = '';
    this.isTimerRunning = false;
    this.upiTransactionCheckStatusDialog = null;
    this.subscriptions = [];
    const platformnew = _capacitor_core__WEBPACK_IMPORTED_MODULE_8__.Capacitor.getPlatform();
    this.isIos = platformnew === 'ios' ? true : false;
    this.checkCancelProtect = true;
    this.metaData = this.commonStorage.localGet("metaData");
    this.roundedLogo = this.metaData.roundedLogo;
    this.allow_to_create_special_discount_coupon = this.metaData.allow_to_create_special_discount_coupon ? this.metaData.allow_to_create_special_discount_coupon : false;
    if (this.allow_to_create_special_discount_coupon) {
      this.specialcashDiscountValue = 'special';
    }
    this.localdata = this.commonStorage.localGet('locale');
    this.payment_page_banner = this.commonStorage.localGet('serviceDetails').payment_page_banner ? this.commonStorage.localGet('serviceDetails').payment_page_banner : '';
    if (this.pinCode) {
      this.pinCode = this.commonStorage.localGet('pinCode');
      this.gstCityName = this.commonStorage.localGet('gstCityName');
      this.gstStateName = this.commonStorage.localGet('gstStateName');
    }
    this.is_cancel_protect = this.metaData.showCancelProtect;
    this.is_cancel_protect_mandatory = this.metaData.isCancelProtectMandatory;
    this.datttttt = this.commonStorage.getItem('locale');
    if (this.datttttt.rb_virtual_banks) {
      this.virtualPaymentType = this.datttttt.rb_virtual_banks[0];
    }
    for (let i = 0; i <= this.metaData.payMentGateWayTypes.length - 1; i++) {
      this.payTypeName[i] = this.metaData.payMentGateWayTypes[i].id;
      this.pgLength = this.metaData.payMentGateWayTypes.length;
    }
    this.customAlertOptions = {
      cssClass: 'alertCustomCss'
    };
    this.wakeUpCall = this.commonStorage.localGet('wakeUpCall');
    this.isWPSwitchOn = this.commonStorage.localGet('isWPSwitchOn');
    this.isWPBooking = this.commonStorage.localGet('isWPBooking');
    this.route.queryParams.subscribe(params => {
      this.commonService.setGloblaData();
      this.isReturn = params["is_return_trip"];
      this.isProfileUpdateNeeded = params["is_profile_update_needed"];
      this.reservationId = this.globalData.RESERVATION_DATA.reserveId;
      this.defaultCall();
      this.validatePromoCoupons();
    });
    this.options = {
      toolbar: {
        height: 56,
        color: this.theme.primary
      },
      title: {
        color: '#ffffffff',
        staticText: 'Payment',
        showPageTitle: true
      },
      customButtons: [{
        wwwImage: 'assets/icon/back_button.png',
        wwwImagePressed: 'assets/icon/back_button.png',
        align: 'left',
        event: 'backPressed'
      }]
    };
    this.concessions_category = (_this$commonStorage$g = this.commonStorage.getItem('serviceDetails')) !== null && _this$commonStorage$g !== void 0 && _this$commonStorage$g.concessions_category ? (_this$commonStorage$g2 = this.commonStorage.getItem('serviceDetails')) === null || _this$commonStorage$g2 === void 0 ? void 0 : _this$commonStorage$g2.concessions_category : '';
    this.serviceDetail = this.commonStorage.getItem('serviceDetails');
    this.returnServiceDetails = this.commonStorage.localGet('returnServiceDetails');
  }
  emcription(serverDate, subdomain) {
    const [first, second] = serverDate.split('T');
    serverDate = first.replace('-', '');
    serverDate = serverDate.replace('-', '');
    var res = subdomain.concat(serverDate);
    var halfEncryptData = btoa(res);
    return halfEncryptData;
  }
  ngOnInit() {
    this.firebaseAnalyticsService.logCustomEvent('payment_details_page', {
      page: 'Payment Details Page'
    });
    this.appData.newTheme = this.util.getNewTheme();
    this.addCancelProtectCharge = parseFloat(this.fareBreakupDetails.ticket_fare) + parseFloat(this.fareBreakupDetails.service_tax_amount) + parseFloat(this.fareBreakupDetails.cancel_protect_charge);
    this.setupAppLifecycleListeners();
  }
  goBack() {
    this.navCtrl.pop();
  }
  defaultCall() {
    try {
      this.passengerDetails = this.commonStorage.localGet("passengerDetails");
      this.seatDetails_gender_age = this.passengerDetails.seat_details.map(({
        sex,
        age
      }) => ({
        sex,
        age
      }));
      this.reservationData = this.commonStorage.localGet("reservationData");
      this.selectedSeatsToBook = this.reservationData.selectedSeatsToBook;
      this.setPGs();
      this.metaData = this.commonStorage.localGet("metaData");
      this.showOfferCoupon = this.metaData.showOfferCoupons;
      this.offersDropDown = this.metaData.offersDropDown;
      console.log(this.offersDropDown, "this.offersDropDown");
      for (var k = 0; k < this.offersDropDown.length; k++) {
        if (this.offersDropDown[k].id == '7') {
          this.moreLessOffer = true;
          this.offerType = '7';
          break;
        } else if (this.offersDropDown[k].id == '5') {
          this.moreLessOffer = true;
          this.offerType = '5';
          break;
        } else {
          this.moreLessOffer = false;
          this.offerType = '0';
        }
      }
      this.offerCoupons = this.commonStorage.localGet('deals_for_res') ? this.commonStorage.localGet('deals_for_res')['Offer Coupon'] : null;
      this.getDeals = this.commonStorage.getItem('deals');
      this.e_ticket_discount = this.commonStorage.getItem('deals').e_ticket_discount ? true : false;
      this.promoCoupons = this.commonStorage.localGet('deals_for_res') ? this.commonStorage.localGet('deals_for_res')['Promotion Coupons'] : null;
      this.smartMiles = this.commonStorage.localGet('deals_for_res') ? this.commonStorage.localGet('deals_for_res')['Smart Miles'] : null;
      this.childFareAmtLess = this.commonStorage.localGet("childFareAmtLess");
      this.isBima = JSON.parse(localStorage.getItem('isBima'));
      this.isAppDiscount = this.metaData.isAllowFirstBookingDiscount;
      this.isChargesInclusive = this.metaData.chargesInclusive;
      this.selectedRoute = this.globalData.SELECTED_ROUTE;
      this.origin = this.globalData.SEARCH_DATA.originCity;
      this.destination = this.globalData.SEARCH_DATA.destCity;
      this.walletBooking = this.metaData.walletBooking;
      for (var i = 0; i < this.metaData.payMentGateWayTypes.length; i++) {
        if (this.metaData.payMentGateWayTypes[i].checked == true) {
          this.paymentType = this.metaData.payMentGateWayTypes[i].id;
        }
      }
      this.fareDetails = this.commonStorage.localGet("fareDetails");
      this.netBookingAmountBeforeCoupon = this.fareDetails.netBookingAmount;
      this.currencySym = this.metaData.currencySym;
      this.payMentGateWayTypes = this.metaData.payMentGateWayTypes;
      this.isOtp = this.metaData.isCouponValidateWithOtp;
      this.netBookingAmount = this.fareDetails.netBookingAmount;
      this.discountAmount = this.fareDetails.discountAmount;
      this.serviceTaxAmount = this.fareDetails.serviceTaxAmount;
      this.convenienceChargesAmount = this.fareDetails.convenienceChargesAmount;
      this.transactionChargesAmount = this.fareDetails.transactionChargesAmount;
      this.totalBookingAmount = this.fareDetails.totalBookingAmount;
      this.onwardSeatDetails = this.commonStorage.localGet("onwardSeatDetails");
      this.offerCoupon = this.commonStorage.getItem('appliedCoupon');
      this.inclGSTAmount = +(this.commonStorage.localGet("fareDetails") && this.commonStorage.localGet("fareDetails").inclGSTAmount ? this.commonStorage.localGet("fareDetails").inclGSTAmount : 0);
      if (this.auth.isLoggedIn() && this.walletBooking) {
        this.bookType = '3';
        this.getWalletDetails();
        this.bookTypeChanged(this.bookType);
        this.is_cancel_protect = true;
        this.bookOnline = false;
        this.phoneBooking = false;
        this.payFromWallet = true;
      }
      // if (!this.isBima) {
      //     this.bookType = '1';
      // }
      if (this.isReturn) {
        this.returnSeatDetails = this.commonStorage.localGet("returnSeatDetails");
        this.reservationDataReturn = this.commonStorage.localGet("reservationDataReturn");
        this.selectedRouteReturn = this.commonStorage.getItem('selectedRouteReturn');
        this.fareDetailsReturn = this.commonStorage.getItem("fareDetailsReturn");
        this.netBookingAmountReturn = this.fareDetailsReturn.netBookingAmount;
        this.discountAmountReturn = this.fareDetailsReturn.discountAmount;
        this.discountBeforeCouponReturn = this.discountAmountReturn;
        this.serviceTaxAmountReturn = this.fareDetailsReturn.serviceTaxAmount;
        this.convenienceChargesAmountReturn = this.fareDetails.convenienceChargesAmount + this.fareDetailsReturn.convenienceChargesAmount;
        this.transactionChargesAmountReturn = this.fareDetails.transactionChargesAmount + this.fareDetailsReturn.transactionChargesAmount;
        this.totalBookingAmountReturn = this.fareDetailsReturn.totalBookingAmount;
        this.netBookingAmountBeforeCouponReturn = this.netBookingAmount;
        this.inclGSTAmountReturn = +(this.commonStorage.getItem("fareDetailsReturn") && this.commonStorage.getItem("fareDetailsReturn").inclGSTAmount ? this.commonStorage.getItem("fareDetailsReturn").inclGSTAmount : 0);
      }
      this.discountBeforeCoupon = this.discountAmount;
      this.transactionChargesAmount = 0;
      this.prepareGateways(this.payMentGateWayTypes);
      this.passengerDetails.passenger_gst_details = {};
      let isServiceTaxApplicable = this.commonStorage.getItem("isServiceTaxApplicable");
      this.taxCharges = this.commonStorage.getItem("taxCharges");
      this.taxChargesReturn = this.commonStorage.getItem("taxChargesReturn");
      this.isGstApplicable = this.commonStorage.getItem("isGstApplicable");
      this.serviceTaxAmount = isServiceTaxApplicable ? this.commonService.calculateAmountByPercentage(this.netBookingAmount, this.taxCharges.serviceTaxPercentage) : 0;
      this.convenienceChargePercentage = this.taxCharges.convenienceChargePercentage;
      this.convenienceChargesAmount = this.commonService.calculateAmountByPercentage(this.getFareAmountCal(), this.convenienceChargePercentage);
      if (this.isReturn) {
        this.convenienceChargePercentageReturn = this.taxChargesReturn.convenienceChargePercentage;
        let isServiceTaxApplicable = this.commonStorage.getItem("isServiceTaxApplicableReturn");
        this.serviceTaxAmountReturn = isServiceTaxApplicable ? this.commonService.calculateAmountByPercentage(this.netBookingAmountReturn, this.taxChargesReturn.serviceTaxPercentage) : 0;
        this.convenienceChargesAmountReturn = this.commonService.calculateAmountByPercentage(this.getFareAmountCal(true), this.convenienceChargePercentageReturn);
      }
      if (!this.isOfferCoupons()) {}
    } catch (e) {}
    try {
      this.travelDate = this.commonStorage.localGet("travelDate");
      this.travelDateHeader = this.dateService.headerDate(this.travelDate.formattedDate);
      if (this.isReturn) {
        this.travelDateHeaderReturn = this.dateService.headerDate(this.commonStorage.getItem('travelDateReturn').formattedDate);
      }
    } catch (e) {}
    this.couponValidations();
    this.quoteValidations();
    this.paymentTypeValidation();
    this.checkOfferCoupon(this.offerCoupon);
    this.getFare();
  }
  ionViewWillEnter() {
    if (this.auth.isLoggedIn()) {
      this.apiFactory.getWalletBalance().subscribe(res => {
        if (res.success) {
          this.balance = res.body.balance.toFixed(2);
        }
      }, err => {});
    }
    // console.log(this.metaData.showCancelProtect,"myformat");
    ////this.commonService.gTrack("Payment Page ", "Entered Payment Screen");
    this.paymentType = this.payMentGateWayTypes[0].name.toUpperCase().indexOf("EBS") > -1 ? "" : this.payMentGateWayTypes[0].id + "";
    if (this.commonStorage.localGet("passengerGstInfo")) {
      this.gstDetails = true;
      this.passengerDetails.passenger_gst_details.gst_id = this.commonStorage.localGet("passengerGstInfo").cust_comp_gst_code;
      this.passengerDetails.passenger_gst_details.registration_name = this.commonStorage.localGet("passengerGstInfo").cust_comp_name;
    } else if (this.globalData.GST_ID != "") {
      if (this.metaData.msiteFolder == 'ourbustheme') {
        let getoggleBtn = this.commonStorage.localGet("businessTravelToggole");
        let gstIdORBS = this.commonStorage.localGet("gstIdOurbus");
        let gstNameOrbs = this.commonStorage.localGet("gstNameOurbus");
        if (getoggleBtn) {
          this.passengerDetails.passenger_gst_details.gst_id = gstIdORBS;
          this.passengerDetails.passenger_gst_details.registration_name = gstNameOrbs;
        } else {
          this.passengerDetails.passenger_gst_details = {};
        }
      } else {
        this.passengerDetails.passenger_gst_details.gst_id = this.globalData.GST_ID;
        this.passengerDetails.passenger_gst_details.registration_name = this.globalData.GST_NAME;
      }
    }
    if (!(this.offerCoupons && this.offerCoupons.length > 0 && this.isOfferCoup() && this.promoCoupons.length > 0)) {
      this.getFare();
    }
  }
  /**
   * validate coupon code method
   */
  checkCoupon() {
    this.firebaseAnalyticsService.logCustomEvent('coupon_click', {
      page: 'Payment Details Page'
    });
    if (!this.util.checkConnection()) {
      return false;
    }
    if (this.localdata.allow_cash_coupon_validation_with_phone_number) {
      if (this.emailCheck.test(this.emailNumber) || this.numberCheck.test(this.emailNumber)) {
        this.emailnumberValid = true;
      } else {
        this.util.showToast("Please enter the Email or 10 digit mobile no.", "bottom");
        this.emailnumberValid = false;
      }
    } else {
      if (this.emailCheck.test(this.emailNumber) || this.numberCheck.test(this.emailNumber)) {
        this.emailnumberValid = true;
      } else {
        this.util.showToast("Please enter the Email or 10 digit mobile no.", "bottom");
        this.emailnumberValid = false;
      }
    }
    if (this.couponFormIsValid() && this.emailnumberValid) {
      if (!this.isDuplicateCoupon()) {
        //check if this coupon is already added
        if (!this.isNetPayableAmountLessThanZero()) {
          //check if the net payeble amount is 0
          this.loaderService.showLoadingDefault();
          // console.log("hgfhbhf");
          this.apiFactory.validateCoupon(this.couponForm.value.couponCode, this.emailNumber, this.is_special_discount_coupon).subscribe(result => {
            this.loaderService.hideLoadingDefault();
            console.log("result----->result", result);
            if (!this.isOtp || result.code == 412) {
              if (result.message) {
                this.util.showToast(result.message);
              }
              console.log("result----->result", result);
              if (result.code) {
                // if there is some error code then show the message
                this.couponInvalidMsg = result.message;
                this.couponErrors = true;
                this.util.showToast(result.message, "bottom");
              } else {
                // else add the coupon and mins the net payable amount
                //push into the request data
                if (this.numberCheck.test(this.emailNumber)) {
                  this.passengerDetails.coupon_details.push({
                    coupon_code: this.couponForm.value.couponCode,
                    email: this.emailNumber,
                    is_special_discount_coupon: this.is_special_discount_coupon
                  });
                } else {
                  this.passengerDetails.coupon_details.push({
                    coupon_code: this.couponForm.value.couponCode,
                    email: this.emailNumber,
                    is_special_discount_coupon: this.is_special_discount_coupon
                  });
                }
                //push into the coupon applied array to show the coupon
                this.couponAplied.push({
                  couponCode: this.couponForm.value.couponCode,
                  couponAmount: result[0].coupon_amount
                });
                this.couponInvalidMsg = null;
                this.couponErrors = false;
                this.isAddCoupon = false;
                this.couponForm.controls["couponCode"].setValue(""); //reset coupon code after success
                this.calculatCouponAmount();
              }
            } else {
              this.couponOtpDetails = result[0];
              this.checkOtp();
            }
          }, err => {
            this.loaderService.hideLoadingDefault();
            if (!this.util.isConnected()) {
              this.util.showAlerts("Error Loading", "Internet not connected please connect the internect and try after again");
            } else {
              this.util.showAlerts("Error Loading", "Something went wrong please try after some time");
            }
            this.ex.call("PaymentDetailsPage", "checkCoupon() --> this.apiFactory.validateCoupon(this.couponForm.value.couponCode,this.couponForm.value.couponEmail,this.is_special_discount_coupon)", err, "");
          });
        }
      }
    } else {}
  }
  /**
   * validate quote PNR method
   */
  checkQuotePNR() {
    let seat_number;
    let seatNumberArray = [];
    for (let seat of this.selectedSeatsToBook) {
      seatNumberArray.push(seat.number);
    }
    seat_number = seatNumberArray.join(",");
    // console.log(seat_number);
    if (!this.util.checkConnection()) {
      return false;
    }
    if (this.quoteFormIsValid()) {
      //check if this coupon form is valid
      this.pnrDiscountAmount = 0;
      this.discountAmount = 0;
      this.discountAmountReturn = 0;
      this.loaderService.showLoadingDefault();
      this.apiFactory.validateQuotePNR(this.quotePnrForm.value.pnrnumber, this.reservationId, seat_number, this.quotePnrForm.value.mobileno).subscribe(result => {
        this.loaderService.hideLoadingDefault();
        if (result.code) {
          this.util.showToast(result.message);
        } else {
          this.pnrDiscountAmount = result[this.quotePnrForm.value.pnrnumber];
          this.pnrDiscountAplied = true;
          this.getFare();
        }
      }, err => {
        this.loaderService.hideLoadingDefault();
        if (!this.util.isConnected()) {
          this.util.showAlerts("Error Loading", "Internet not connected please connect the internect and try after again");
        } else {
          this.util.showAlerts("Error Loading", "Something went wrong please try after some time");
        }
        this.ex.call("PaymentDetailsPage", "checkCoupon() --> this.apiFactory.validateCoupon(this.couponForm.value.couponCode,this.couponForm.value.couponEmail,this.is_special_discount_coupon)", err, "");
      });
    } else {}
  }
  deletePnrDiscount() {
    this.pnrDiscountAplied = false;
    this.pnrDiscountAmount = 0;
    this.quotepnr = false;
    this.quotePnrForm.controls["pnrnumber"].setValue("");
    this.setDefaultDiscount();
    this.getFare();
  }
  /**
   * method shows coupon input boxes when clicking on add more coupons if coupon already added
   */
  addCoupon() {
    if (!this.isNetPayableAmountLessThanZero()) {
      //check if the net payeble amount is 0
      this.isAddCoupon = true;
      this.couponForm.controls["couponCode"].setValue("");
    }
  }
  /**
   * removes the coupon input below have cash coupons on clickng delete icon
   */
  removeCoupon() {
    this.isAddCoupon = false;
    this.couponErrors = false;
  }
  /**
     * removes the coupon input below have cash coupons on clickng delete icon
     */
  removeQuote() {
    this.isAddquote = false;
    this.quoteErrors = false;
    //this.pnrDiscountAplied=false;
    //this.getFare();
  }
  handleBackButton() {
    if (window.history.length > 1) {
      // If history is present, go back
      this.location.back();
    } else {
      // If no history, navigate to the home page
      this.router.navigate(['tabs/home']);
    }
  }
  /**
   * delet the copon code from the applied coupons
   */
  deleteCoupon(index) {
    this.passengerDetails.coupon_details.splice(index, 1);
    this.couponAplied.splice(index, 1);
    this.calculatCouponAmount();
    if (this.passengerDetails.length <= 0) {
      this.isAddCoupon = false;
    }
  }
  callCoupons() {
    this.haveCoupons = !this.haveCoupons;
    this.haveCouponsChange();
  }
  /**
   * this method is executed when have cahs coupon's  change event fires
   */
  haveCouponsChange() {
    // this.haveCoupons =!this.haveCoupons;
    // console.log("haveCouponsChange() > false", this.haveCoupons);
    if (!this.haveCoupons) {
      this.passengerDetails.coupon_details = [];
      this.couponAplied = [];
      this.isAddCoupon = false;
      this.couponErrors = false;
      this.couponInvalidMsg = null;
    } else {
      var _this$emailNumber;
      // console.log(this.couponForm);
      this.couponForm.controls["couponCode"].setValue("");
      //    this.couponForm.controls['couponEmail'].setValue('');
      (_this$emailNumber = this.emailNumber) === null || _this$emailNumber === void 0 || _this$emailNumber.setValue("");
      // console.log("haveCouponsChange() > false", this.haveCoupons);
    }
    this.calculatCouponAmount();
  }
  /**
   * this method is executed when have quotes for PNR change event fires
   */
  quotePNRChange() {
    if (!this.quotepnr) {
      this.quoteAplied = [];
      this.isAddquote = false;
      this.quoteErrors = false;
      this.quoteInvalidMsg = null;
      this.pnrDiscountAplied = false;
      this.setDefaultDiscount();
      this.getFare();
    } else {
      // console.log(this.quotePnrForm);
      this.quotePnrForm.controls['pnrnumber'].setValue('');
      // console.log('quotePNRChange() > false', this.quotepnr);
    }
  }
  /***
   * Check offer coupon method
   */
  validatePromoCoupons() {
    var Array1 = [];
    let thisDay = "";
    if (this.promoCoupons) {
      for (var i = 0; i < this.promoCoupons.length; i++) {
        let flag = 1;
        let serviceReturnId = this.commonStorage.localGet("SELECTED_ROUTE_RETURN") ? this.commonStorage.localGet("SELECTED_ROUTE_RETURN").id : "";
        let serviceId = this.commonStorage.localGet("SELECTED_ROUTE") ? this.commonStorage.localGet("SELECTED_ROUTE").id : "";
        let routesAllowed = this.promoCoupons[i].routes.split(",");
        let daysAllowed = this.promoCoupons[i].applicable_days.split(",");
        let travelDateOb = this.dateService.changeDateFormat(this.travelDate.formattedDate, "dd-mm-yyyy", "yyyy-mm-dd");
        let startDate = new Date(this.promoCoupons[i].start_date + "T00:00:00");
        let endDate = new Date(this.promoCoupons[i].end_date + "T00:00:00");
        let travelDate = new Date(travelDateOb + "T00:00:00");
        let skipDays = this.promoCoupons[i].skip_dates;
        let discountApplicablefor = this.promoCoupons[i].discount_applicable_on ? this.promoCoupons[i].discount_applicable_on : "";
        switch (travelDate.getDay()) {
          case 0:
            thisDay = "SUN";
            break;
          case 1:
            thisDay = "MON";
            break;
          case 2:
            thisDay = "TUE";
            break;
          case 3:
            thisDay = "WED";
            break;
          case 4:
            thisDay = "THU";
            break;
          case 5:
            thisDay = "FRI";
            break;
          case 6:
            thisDay = "SAT";
            break;
          default:
            thisDay = "";
        }
        let findDate = skipDays.find(element => {
          return element == travelDateOb;
        });
        if (findDate) {
          flag = 0;
        }
        let findDay = daysAllowed.find(function (element) {
          return element == thisDay;
        });
        if (this.isReturn) {
          let findId = routesAllowed.find(function (element) {
            return element == serviceReturnId;
          });
          if (findId == undefined) {
            flag = 0;
          }
        } else {
          let findId = routesAllowed.find(function (element) {
            return element == serviceId;
          });
          // if (findId == undefined) {
          //     flag = 0;
          // }
        }
        if (travelDate < startDate || travelDate > endDate) {
          flag = 0;
        }
        if (this.util.isWebApp() && discountApplicablefor.indexOf("Mobile Browser") == -1) {
          flag = 0;
        }
        if (this.util.isIos() && discountApplicablefor.indexOf("Mobile App (IOS & Android)") == -1) {
          flag = 0;
        }
        if (flag == 1) {
          Array1.push(this.promoCoupons[i]);
        }
      }
    }
    this.promoCoupons = Array1;
    if (this.promoCoupons.length <= 0) {
      var ary2 = this.offersDropDown.filter(element => {
        return element.name != "Promotion Coupons";
      });
      this.offersDropDown = ary2;
    }
  }
  checkSmartMileCoupon(smartMileCoupon) {
    if (this.isBima) {
      this.appliedOfferCoupon = null;
      this.showOfferStatus = false;
      this.offerCouponErrorMsg = "";
      this.smartMileCoupon = null;
      return;
    }
    if (smartMileCoupon) {
      this.pnrDiscountAmount = 0;
      this.appliedOfferCoupon = this.smartMiles.find(it => {
        let flag = 0;
        let coupon = null;
        if (smartMileCoupon == it.discount_amount) {
          flag = 1;
          coupon = it;
          return it;
        }
        if (flag == 1) {
          return coupon;
        }
      });
      if (this.appliedOfferCoupon) {
        let originId = 0;
        if (this.origin.id.toString().indexOf('@') > -1) {
          originId = this.origin.id.split('@')[0];
        } else {
          originId = this.origin.id;
        }
        let destinationId = 0;
        if (this.destination.id.toString().indexOf('@') > -1) {
          destinationId = this.destination.id.split('@')[0];
        } else {
          destinationId = this.destination.id;
        }
        if (this.appliedOfferCoupon) {}
      } else {
        if (smartMileCoupon) {
          this.offerCouponErrorMsg = "Offer coupon not valid";
          this.util.showToast(this.offerCouponErrorMsg);
        } else if (smartMileCoupon == '') {
          this.appliedOfferCoupon = null;
        } else {
          this.offerCouponErrorMsg = "";
        }
      }
    } else {
      this.appliedOfferCoupon = null;
      this.showOfferStatus = false;
      this.offerCouponErrorMsg = "";
    }
    this.offerCouponAmount = this.appliedOfferCoupon ? this.appliedOfferCoupon.discount_amount : 0;
    this.discountAmount = this.offerCouponAmount;
    if (this.netBookingAmountBeforeCoupon < this.discountAmount) {
      this.discountAmount = this.netBookingAmountBeforeCoupon;
    }
    this.smartMilesDiscount = this.discountAmount;
    if (this.couponAmount) {
      this.netBookingAmount = this.netBookingAmountBeforeCoupon - this.discountAmount - this.couponAmount < 0 ? 0 : this.netBookingAmountBeforeCoupon - this.discountAmount - this.couponAmount;
    } else {
      this.netBookingAmount = this.netBookingAmountBeforeCoupon - this.discountAmount;
    }
    this.convenienceChargesAmount = this.commonService.calculateAmountByPercentage(this.totalBookingAmount - this.discountAmount, this.convenienceChargePercentage);
    let isServiceTaxApplicable = this.commonStorage.getItem("isServiceTaxApplicable");
    this.serviceTaxAmount = isServiceTaxApplicable ? this.commonService.calculateAmountByPercentage(this.netBookingAmount, this.taxCharges.serviceTaxPercentage) : 0;
    if (this.isReturn) {
      this.offerCouponAmountReturn = this.appliedOfferCoupon.discount_amount;
      this.discountAmountReturn = this.offerCouponAmountReturn;
      if (this.couponAmount) {
        this.netBookingAmountReturn = this.totalBookingAmountReturn - this.discountAmountReturn - this.couponAmount < 0 ? 0 : this.netBookingAmountBeforeCoupon - this.discountAmount - this.couponAmount;
      } else {
        this.netBookingAmountReturn = this.totalBookingAmountReturn - this.discountAmountReturn;
      }
      this.convenienceChargesAmountReturn = this.commonService.calculateAmountByPercentage(this.totalBookingAmountReturn - this.discountAmountReturn, this.convenienceChargePercentageReturn);
      let isServiceTaxApplicable = this.commonStorage.getItem("isServiceTaxApplicableReturn");
      this.serviceTaxAmountReturn = isServiceTaxApplicable ? this.commonService.calculateAmountByPercentage(this.netBookingAmountReturn, this.taxChargesReturn.serviceTaxPercentage) : 0;
    }
    this.getFare();
  }
  unselectCoupon() {
    setTimeout(() => {
      this.promoCoupon = '';
      this.offerCoupon = '';
    }, 100);
  }
  checkpromoCoupon(promoCoupon, flag = false) {
    this.appliedcoupon1 = false;
    console.log(flag, promoCoupon, '=====');
    if (this.metaData['couponIdProofDetails'] && flag && promoCoupon) {
      this.showCouponIdProof = true;
    } else {
      this.idProof = '';
      if (promoCoupon == '') {
        this.selectedText = 'Discount';
      } else {
        this.selectedText = 'Offer Discount';
      }
      this.checkpromoCoupon1(promoCoupon, flag);
    }
  }
  checkpromoCoupon1(coupon, flag = false) {
    let promo = coupon.split(',');
    this.selectedPromoCouponDetails = this.promoCoupons[promo[1]];
    let promoCoupon = promo[0];
    if (coupon != "") {
      this.appliedofferCouponname = coupon;
    }
    if (this.isBima) {
      this.appliedOfferCoupon = null;
      this.showOfferStatus = false;
      this.offerCouponErrorMsg = "";
      this.promoCoupon = null;
      return;
    }
    if (promoCoupon) {
      this.pnrDiscountAmount = 0;
      this.appliedOfferCoupon = this.promoCoupons.find(it => {
        let flag = 0;
        let coupon = null;
        if (promoCoupon == it.coupon_code) {
          flag = 1;
          coupon = it;
          return it;
        }
        if (flag == 1) {
          return coupon;
        }
      });
      if (this.appliedOfferCoupon) {
        if (this.isReturn) {
          if (this.appliedOfferCoupon.is_round_trip == "true") {
            if (this.onwardSeatDetails.length < this.appliedOfferCoupon.no_of_seats || this.returnSeatDetails.length < this.appliedOfferCoupon.no_of_seats) {
              this.offerCouponErrorMsg = "This Offer Coupon is applicable for minimum " + this.appliedOfferCoupon.no_of_seats + " seats";
              this.util.showToast(this.offerCouponErrorMsg);
              this.unselectCoupon();
              this.appliedOfferCoupon = null;
            } else {
              this.offerCouponErrorMsg = "";
            }
          } else {
            this.util.showToast("This Offer Coupon is not applicable for round trip");
            this.unselectCoupon();
            this.appliedOfferCoupon = null;
            return false;
          }
        } else {
          if (this.appliedOfferCoupon.is_round_trip == "false") {
            if (this.passengerDetails.seat_details.length < this.appliedOfferCoupon.no_of_seats) {
              this.offerCouponErrorMsg = "This Offer Coupon is applicable for minimum " + this.appliedOfferCoupon.no_of_seats + " seats";
              this.util.showToast(this.offerCouponErrorMsg);
              this.unselectCoupon();
              this.appliedOfferCoupon = null;
            } else {
              this.offerCouponErrorMsg = "";
            }
          } else if (this.appliedOfferCoupon.is_oneway_trip == "false") {
            this.appliedOfferCoupon = null;
            this.util.showToast("This Offer Coupon is only applicable for round trip");
            this.unselectCoupon();
            return false;
          }
          if (this.appliedOfferCoupon && this.appliedOfferCoupon.applicable_bookings != null && this.appliedOfferCoupon.applicable_bookings.indexOf('irst') > -1) {
            if (!this.auth.isLoggedIn()) {
              this.offerCouponErrorMsg = "this offer coupon is applicable for logged in users for first booking";
              this.util.showToast(this.offerCouponErrorMsg);
              this.unselectCoupon();
              this.appliedOfferCoupon = null;
            }
          }
          if (this.appliedOfferCoupon && this.appliedOfferCoupon.applicable_bookings != null && this.appliedOfferCoupon.applicable_bookings.indexOf('1st') > -1) {
            if (!this.auth.isLoggedIn() && this.metaData.isAllowFirstBookingDiscount && !this.metaData.isAlreadyBooked) {
              this.offerCouponErrorMsg = "this offer coupon is applicable for logged in users for first booking";
              this.util.showToast(this.offerCouponErrorMsg);
              this.unselectCoupon();
              this.appliedOfferCoupon = null;
            }
          }
        }
        // -------------- for particular route coupons
        let originId = 0;
        if (this.origin.id.toString().indexOf('@') > -1) {
          originId = this.origin.id.split('@')[0];
        } else {
          originId = this.origin.id;
        }
        let destinationId = 0;
        if (this.destination.id.toString().indexOf('@') > -1) {
          destinationId = this.destination.id.split('@')[0];
        } else {
          destinationId = this.destination.id;
        }
        if (this.appliedOfferCoupon) {
          if (this.appliedOfferCoupon.origin_id > -1 && this.appliedOfferCoupon.destination_id > -1) {
            if (this.appliedOfferCoupon.origin_id != originId || this.appliedOfferCoupon.destination_id != destinationId) {
              this.offerCouponErrorMsg = "This Offer Coupon is not applicable for this route ";
              this.util.showToast(this.offerCouponErrorMsg);
              this.unselectCoupon();
              this.appliedOfferCoupon = null;
            }
          } else if (this.appliedOfferCoupon.origin_id > -1 || this.appliedOfferCoupon.destination_id > -1) {
            if (this.appliedOfferCoupon.origin_id != originId) {
              this.offerCouponErrorMsg = "This Offer Coupon is not applicable for this route ";
              this.util.showToast(this.offerCouponErrorMsg);
              this.unselectCoupon();
              this.appliedOfferCoupon = null;
            } else if (this.appliedOfferCoupon.destination_id != destinationId) {
              this.offerCouponErrorMsg = "This Offer Coupon is not applicable for this route ";
              this.util.showToast(this.offerCouponErrorMsg);
              this.unselectCoupon();
              this.appliedOfferCoupon = null;
            }
          }
        }
      } else {
        if (promoCoupon) {
          this.promoCode = promoCoupon;
          this.checkOfferCoupon(promoCoupon);
          // this.offerCouponErrorMsg = "Offer coupon not valid";
          // this.util.showToast(this.offerCouponErrorMsg);
        } else {
          this.offerCouponErrorMsg = "";
        }
      }
    } else {
      this.appliedOfferCoupon = null;
      this.showOfferStatus = false;
      this.offerCouponErrorMsg = "";
    }
    if (flag) {
      flag = false;
      this.getFare();
    }
  }
  applyIdPrrof(promoCoupon, flag = false) {
    this.showCouponIdProof = false;
    this.idProofCnt += this.idProofCnt + 1;
    this.checkpromoCoupon1(promoCoupon, flag);
  }
  cancelIdProof() {
    this.showCouponIdProof = false;
    this.unselectCoupon();
  }
  checkOfferCoupon(offerCoupon, flag = false) {
    if (!offerCoupon) {
      this.promoCode = null;
    }
    this.appliedcoupon2 = false;
    if (offerCoupon != '') {
      this.appliedofferCouponname = offerCoupon;
      this.appliedcoupon2 = true;
    }
    if (this.isBima) {
      this.appliedOfferCoupon = null;
      this.showOfferStatus = false;
      this.offerCouponErrorMsg = "";
      this.offerCoupon = null;
      return;
    }
    let offerCoupons = this.offerCoupons ? this.offerCoupons : [];
    if (offerCoupon) {
      this.pnrDiscountAmount = 0;
      this.appliedOfferCoupon = offerCoupons.find(it => {
        let flag = 0;
        let coupon = null;
        if (offerCoupon == it.coupon_code) {
          flag = 1;
          coupon = it;
          return it;
        }
        if (flag == 1) {
          return coupon;
        }
      });
      if (this.appliedOfferCoupon) {
        if (this.isReturn) {
          if (this.appliedOfferCoupon.is_round_trip == "true") {
            if (this.onwardSeatDetails.length < this.appliedOfferCoupon.no_of_seats || this.returnSeatDetails.length < this.appliedOfferCoupon.no_of_seats) {
              this.offerCouponErrorMsg = "This Offer Coupon is applicable for minimum " + this.appliedOfferCoupon.no_of_seats + " seats";
              this.util.showToast(this.offerCouponErrorMsg);
              this.unselectCoupon();
              this.appliedOfferCoupon = null;
            } else {
              this.offerCouponErrorMsg = "";
            }
          } else {
            this.util.showToast("This Offer Coupon is not applicable for round trip");
            this.unselectCoupon();
            this.appliedOfferCoupon = null;
            this.appliedofferCouponname = null;
          }
        } else {
          if (this.appliedOfferCoupon.is_round_trip == "false") {
            if (this.passengerDetails.seat_details.length < this.appliedOfferCoupon.no_of_seats) {
              this.offerCouponErrorMsg = "This Offer Coupon is applicable for minimum " + this.appliedOfferCoupon.no_of_seats + " seats";
              this.util.showToast(this.offerCouponErrorMsg);
              this.unselectCoupon();
              this.appliedOfferCoupon = null;
              this.appliedofferCouponname = null;
            } else {
              this.offerCouponErrorMsg = "";
            }
          } else if (this.appliedOfferCoupon.is_oneway_trip == "false") {
            this.util.showToast("This Offer Coupon is only applicable for round trip");
            this.unselectCoupon();
            this.appliedOfferCoupon = null;
            this.appliedofferCouponname = null;
          }
          if (this.appliedOfferCoupon && this.appliedOfferCoupon.applicable_for && this.appliedOfferCoupon.applicable_for.indexOf('irst') > -1) {
            if (!this.auth.isLoggedIn()) {
              this.offerCouponErrorMsg = "this offer coupon is applicable for logged in users for first booking";
              this.util.showToast(this.offerCouponErrorMsg);
              this.unselectCoupon();
              this.appliedOfferCoupon = null;
            }
          }
        }
        // -------------- for particular route coupons
        let originId = 0;
        if (this.origin.id.toString().indexOf('@') > -1) {
          originId = this.origin.id.split('@')[0];
        } else {
          originId = this.origin.id;
        }
        let destinationId = 0;
        if (this.destination.id.toString().indexOf('@') > -1) {
          destinationId = this.destination.id.split('@')[0];
        } else {
          destinationId = this.destination.id;
        }
        if (this.appliedOfferCoupon) {
          if (this.appliedOfferCoupon.origin_id != null && this.appliedOfferCoupon.destination_id != null && this.appliedOfferCoupon.origin_id > -1 && this.appliedOfferCoupon.destination_id > -1) {
            if (this.appliedOfferCoupon.origin_id != originId || this.appliedOfferCoupon.destination_id != destinationId) {
              this.offerCouponErrorMsg = "This Offer Coupon is not applicable for this route ";
              this.util.showToast(this.offerCouponErrorMsg);
              this.unselectCoupon();
              this.appliedOfferCoupon = null;
            }
          } else if (this.appliedOfferCoupon.origin_id > -1 || this.appliedOfferCoupon.destination_id > -1) {
            if (this.appliedOfferCoupon.origin_id != null && this.appliedOfferCoupon.origin_id != originId) {
              this.offerCouponErrorMsg = "This Offer Coupon is not applicable for this route ";
              this.util.showToast(this.offerCouponErrorMsg);
              this.unselectCoupon();
              this.appliedOfferCoupon = null;
            } else if (this.appliedOfferCoupon.destination_id != null && this.appliedOfferCoupon.destination_id != destinationId) {
              this.offerCouponErrorMsg = "This Offer Coupon is not applicable for this route ";
              this.util.showToast(this.offerCouponErrorMsg);
              this.unselectCoupon();
              this.appliedOfferCoupon = null;
            }
          }
        }
      } else {
        if (offerCoupon) {
          // this.appliedofferCouponname = null;
          // this.checkOfferCoupon(null)
          // this.offerCouponErrorMsg = "Offer coupon not valid";
          // this.util.showToast(this.offerCouponErrorMsg);
        } else {
          this.offerCouponErrorMsg = "";
        }
      }
    } else {
      this.appliedOfferCoupon = null;
      this.showOfferStatus = false;
      this.offerCouponErrorMsg = "";
    }
    this.offerCouponAmount = this.calculateOfferDiscount();
    this.discountAmount = this.offerCouponAmount;
    if (flag) {
      flag = false;
    }
    this.getFare();
  }
  calculateGst(isReturn = false) {
    if (this.isChargesInclusive && this.discountAmount + this.discountAmountReturn + this.pnrDiscountAmount <= 0) {
      if (!isReturn) {
        return this.commonStorage.getItem("fareDetails").inclGSTAmount;
      } else {
        return this.commonStorage.getItem("fareDetailsReturn") && this.commonStorage.getItem("fareDetailsReturn").inclGSTAmount ? this.commonStorage.getItem("fareDetailsReturn").inclGSTAmount : 0;
      }
    }
    if (!isReturn) {
      let isServiceTaxApplicable = this.commonStorage.getItem("isServiceTaxApplicable");
      if (isServiceTaxApplicable) {
        if (this.bookType == '1') {
          return +this.commonService.calculateAmountByPercentage(this.getFullFare() - this.discountAmount + this.discountAmountReturn + this.pnrDiscountAmount, this.taxCharges.serviceTaxPercentage).toFixed(2);
        } else {
          return +this.commonService.calculateAmountByPercentage(this.getFullFare() - this.discountAmount + this.discountAmountReturn + this.pnrDiscountAmount, this.taxCharges.serviceTaxPercentage).toFixed(2);
        }
      }
    } else {
      let isServiceTaxApplicable = this.commonStorage.getItem("isServiceTaxApplicableReturn");
      if (isServiceTaxApplicable) {
        if (this.bookType != '1') {
          return +this.commonService.calculateAmountByPercentage(this.getFullFare(true) - this.discountAmount + this.discountAmountReturn + this.pnrDiscountAmount, this.taxCharges.serviceTaxPercentage).toFixed(2);
        }
        let gst = +this.commonService.calculateAmountByPercentage(this.getFullFare(true) + this.calculateResTransactionCharges(true) - this.discountAmount + this.discountAmountReturn + this.pnrDiscountAmount, this.taxChargesReturn.serviceTaxPercentage).toFixed(2);
        if (gst) {
          return gst;
        }
      }
    }
    return 0;
  }
  calculateResTransactionCharges(isReturn = false) {
    this.loaderService.hideLoadingDefault();
    if (this.isChargesInclusive) {
      return 0;
    }
    if (!isReturn) {
      let resTransactionChargeType = this.commonStorage.getItem("resTransactionChargeType");
      if (resTransactionChargeType == '1') {
        return this.commonService.calculateAmountByPercentage(this.getFareAmountCal() - this.discountAmount, +this.commonStorage.getItem("resTransactionChargeAmount"));
      } else if (resTransactionChargeType == '2') {
        return +this.commonStorage.getItem("resTransactionChargeAmount");
      } else {
        return 0;
      }
    } else {
      let resTransactionChargeType = this.commonStorage.getItem("resTransactionChargeTypeReturn");
      if (resTransactionChargeType == '1') {
        return this.commonService.calculateAmountByPercentage(this.getFareAmountCal(true) - this.discountAmount, +this.commonStorage.getItem("resTransactionChargeAmountReturn"));
      } else if (resTransactionChargeType == '2') {
        return +this.commonStorage.getItem("resTransactionChargeAmountReturn");
      } else {
        return 0;
      }
    }
  }
  calculateOfferDiscount(isReturn = false) {
    // this.loaderService.hideLoadingDefault();
    if (this.appliedOfferCoupon) {
      if (!isReturn) {
        if (this.appliedOfferCoupon.deal_type == "Percentage") {
          let discount = +this.commonService.calculateAmountByPercentage(this.getFareAmountCal() + this.getFareAmountCal(true), +this.appliedOfferCoupon.discount.slice(0, -1)).toFixed(2);
          return discount > this.appliedOfferCoupon.max_discount && this.appliedOfferCoupon.max_discount > 0 ? this.appliedOfferCoupon.max_discount : discount;
        } else if (this.appliedOfferCoupon && this.appliedOfferCoupon.deal_type && this.appliedOfferCoupon.discount_type.toLowerCase() == "rs") {
          return this.appliedOfferCoupon.discount;
        }
      } else {
        if (this.appliedOfferCoupon.deal_type == "Percentage") {
          let discount = +this.commonService.calculateAmountByPercentage(this.getFareAmountCal() + this.getFareAmountCal(true), +this.appliedOfferCoupon.discount.slice(0, -1)).toFixed(2);
          return discount > this.appliedOfferCoupon.max_discount && this.appliedOfferCoupon.max_discount > 0 ? this.appliedOfferCoupon.max_discount : discount;
        } else if (this.appliedOfferCoupon.deal_type.toLowerCase() == "rs") {
          return this.appliedOfferCoupon.discount / 2;
        }
      }
    } else {
      if (!this.isBima) {
        if (this.bookType == '1') {
          if (!isReturn) {
            let dis = 0;
            for (let s of this.selectedSeatsToBook) {
              dis += s.discount_amount;
            }
            return dis;
          } else {
            let dis = 0;
            if (this.reservationDataReturn) for (let s of this.reservationDataReturn.selectedSeatsToBook) {
              dis += s.discount_amount;
            }
            return dis;
          }
        } else {
          if (!isReturn) {
            return +this.commonService.roundToXDigits(this.commonService.calculateAmountByPercentage(this.getFareAmountCal() + this.getFareAmountCal(true) + this.calculateGst() + this.calculateGst(true), this.commonStorage.getItem("fareDetails").E_TICKET_DISCOUNT) / this.selectedSeatsToBook.length, 0).toFixed(2) * this.selectedSeatsToBook.length;
          } else {
            return +this.commonService.roundToXDigits(this.commonService.calculateAmountByPercentage(this.getFareAmountCal() + this.getFareAmountCal(true) + this.calculateGst() + this.calculateGst(true), this.commonStorage.getItem("fareDetails").E_TICKET_DISCOUNT) / this.selectedSeatsToBook.length, 0).toFixed(2) * this.selectedSeatsToBook.length;
          }
        }
      } else return 0;
    }
  }
  selectOfferCoupon() {
    // let modal = this.modalCtrl.create(ModalOfferCouponPage, {
    //   offerCoupons: this.offerCoupons
    // });
    // modal.present();
    // modal.onDidDismiss((data) => {
    //   if (data) {
    //     this.offerCoupon = data.coupon_code;
    //     this.checkOfferCoupon(this.offerCoupon);
    //   }
    // });
  }
  isOfferCoupons() {
    let offerCoupons = this.offersDropDown.find(it => {
      return it.id == 5;
    });
    if (offerCoupons) {
      return true;
    }
    return false;
  }
  checkDefaultCoupon() {
    let cops = this.offerCoupons.filter(it => it.description);
    if (cops.length === 1) {
      this.offerCoupon = cops[0].coupon_code;
    }
  }
  bookTypeChanged(value) {
    var _this = this;
    return (0,_home_govindmane_Documents_ionic_customer_app_capacitor_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const oldBookType = _this.previousBookType;
      const newBookType = value;
      _this.loaderService.showLoadingDefault();
      try {
        if (value == 1) {
          _this.bookType = '1';
          _this.bookOnline = true;
          _this.phoneBooking = false;
          _this.payFromWallet = false;
          _this.is_cancel_protect = true;
          if (_this.firstTimeLoad > 0 && _this.metaData.msiteFolder != 'ourbustheme') {
            _this.util.showAlert('', 'Transaction charges are applicable in online booking');
          }
          yield _this.bookTypeChangeFareUpdate();
          _this.previousBookType = newBookType;
        } else if (value == 2) {
          _this.bookOnline = false;
          _this.phoneBooking = true;
          _this.payFromWallet = false;
          _this.is_cancel_protect = false;
          yield _this.bookTypeChangeFareUpdate();
          _this.previousBookType = newBookType;
        } else if (value == 3) {
          _this.bookType = value;
          yield _this.walletBookingPopup();
          _this.previousBookType = newBookType;
        }
      } catch (err) {
        //   console.error('Failed to update booking type:', err);
        //   this.util.showToast('Failed to update booking type. Please try again.');
        _this.bookType = oldBookType;
        if (oldBookType == '1') {
          _this.bookOnline = true;
          _this.phoneBooking = false;
          _this.payFromWallet = false;
        } else if (oldBookType == '2') {
          _this.bookOnline = false;
          _this.phoneBooking = true;
          _this.payFromWallet = false;
        } else {
          _this.bookOnline = false;
          _this.phoneBooking = false;
          _this.payFromWallet = true;
        }
      } finally {
        _this.loaderService.hideLoadingDefault();
      }
    })();
  }
  walletBookingPopup() {
    var _this2 = this;
    return (0,_home_govindmane_Documents_ionic_customer_app_capacitor_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // true
      if (_this2.selectedPromoCouponDetails && _this2.selectedPromoCouponDetails['exclude_wallet']) {
        let alert = yield _this2.alertCtrl.create({
          message: 'Coupon is invalid for wallet booking',
          buttons: [{
            text: 'Ok',
            handler: () => {
              _this2.bookOnline = false;
              _this2.phoneBooking = false;
              _this2.payFromWallet = true;
              _this2.bookTypeChangeFareUpdate();
            }
          }, {
            text: 'Cancel',
            role: 'cancel',
            cssClass: "alertCancel",
            handler: () => {
              if (_this2.bookOnline) {
                _this2.bookType = "1";
              } else if (_this2.phoneBooking) {
                _this2.bookType = "2";
              } else {
                _this2.payFromWallet = true;
              }
              return false;
            }
          }]
        });
        const alertElement = document.querySelector('.alert-message');
        if (alertElement && alert.message) {
          alertElement.innerHTML = alert.message.toString();
        }
        yield alert.present();
      } else {
        _this2.bookOnline = false;
        _this2.phoneBooking = false;
        _this2.payFromWallet = true;
        _this2.getFare();
        if (_this2.pnrDiscountAplied) {
          setTimeout(() => {
            _this2.checkQuotePNR();
          }, 500);
        }
        if (_this2.metaData.gst_tsrtc_enable) {
          if (_this2.payAmount > 0) {
            _this2.bookOnline = true;
          }
        }
      }
    })();
  }
  bookTypeChangeFareUpdate() {
    this.firstTimeLoad++;
    this.haveCoupons = false;
    this.getFare();
    this.haveCouponsChange();
    if (this.pnrDiscountAplied) {
      setTimeout(() => {
        this.checkQuotePNR();
      }, 500);
    }
  }
  /**
   * method executed when continues button is tapped
   */
  pay() {
    var _this3 = this;
    return (0,_home_govindmane_Documents_ionic_customer_app_capacitor_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this3.metaData.ispopupEnabled && _this3.commonStorage.getItem('SELECTED_SERVICE') != null) {
        let popUpData = _this3.commonStorage.getItem('SELECTED_SERVICE').popup_details;
        if (popUpData != null) {
          if (Object.keys(popUpData).length !== 0) {
            if (popUpData.id != null || popUpData.id != '') {
              let alertt = yield _this3.alertCtrl.create({
                header: popUpData.title,
                subHeader: popUpData.message,
                buttons: [{
                  text: 'Cancel',
                  handler: data => {}
                }, {
                  text: 'continue',
                  handler: function () {
                    var _ref = (0,_home_govindmane_Documents_ionic_customer_app_capacitor_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
                      _this3.popUpDetailsRoundTrip();
                    });
                    return function handler(_x) {
                      return _ref.apply(this, arguments);
                    };
                  }()
                }]
              });
              yield alertt.present();
            } else {
              _this3.popUpDetailsRoundTrip();
            }
          } else {
            _this3.popUpDetailsRoundTrip();
          }
        } else {
          _this3.popUpDetailsRoundTrip();
        }
      } else {
        _this3.popUpDetailsRoundTrip();
      }
    })();
  }
  popUpDetailsRoundTrip() {
    var _this4 = this;
    return (0,_home_govindmane_Documents_ionic_customer_app_capacitor_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this4.metaData.ispopupEnabled && _this4.commonStorage.getItem('SELECTED_SERVICE_RETURN') != null) {
        let popUpData = _this4.commonStorage.getItem('SELECTED_SERVICE_RETURN').popup_details;
        if (popUpData != null) {
          if (Object.keys(popUpData).length !== 0) {
            if (popUpData.id != null || popUpData.id != '') {
              let alertt = yield _this4.alertCtrl.create({
                header: popUpData.title,
                subHeader: popUpData.message,
                buttons: [{
                  text: 'Cancel',
                  handler: data => {}
                }, {
                  text: 'continue',
                  handler: function () {
                    var _ref2 = (0,_home_govindmane_Documents_ionic_customer_app_capacitor_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
                      _this4.pay1();
                    });
                    return function handler(_x2) {
                      return _ref2.apply(this, arguments);
                    };
                  }()
                }]
              });
              yield alertt.present();
            } else {
              _this4.pay1();
            }
          } else {
            _this4.pay1();
          }
        } else {
          _this4.pay1();
        }
      } else {
        _this4.pay1();
      }
    })();
  }
  handleCrossButtonClick(alert) {
    alert.dismiss(); // Dismiss the alert when the cross button is clicked
  }
  pay1() {
    var _this5 = this;
    return (0,_home_govindmane_Documents_ionic_customer_app_capacitor_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this5.util.checkConnection()) {
        return false;
      }
      if (_this5.offerCouponErrorMsg) {
        _this5.util.showToast(_this5.offerCouponErrorMsg);
        return false;
      }
      if (_this5.appliedOfferCoupon && (_this5.smartMileCoupon == '' || _this5.smartMileCoupon == undefined) && _this5.offerType != '7' && _this5.offerType != '2') {
        _this5.passengerDetails["offer_coupon_details"] = [{
          "coupon_code": _this5.appliedOfferCoupon.coupon_code
        }];
      } else if (_this5.appliedOfferCoupon && _this5.offerType != '2' && _this5.offerType == '7') {
        _this5.passengerDetails["promotion_coupon_details"] = {
          "coupon_code": _this5.appliedOfferCoupon.coupon_code,
          "id_proof_details": _this5.idProof
        };
      } else if (_this5.isWPBooking) {
        _this5.passengerDetails["whatsapp_number"] = _this5.commonStorage.localGet('wpMobileNo');
      } else if (_this5.smartMileCoupon != '' && _this5.smartMileCoupon != undefined && _this5.offerType == '2') {
        _this5.passengerDetails["smart_miles_details"] = {
          "discount_amount": _this5.smartMilesDiscount
        };
      } else {
        _this5.passengerDetails["offer_coupon_details"] = [];
        _this5.passengerDetails["smart_miles_details"] = [];
      }
      if (_this5.pnrDiscountAplied) {
        _this5.passengerDetails["previous_pnr_details"] = {
          "pnr_number": _this5.quotePnrForm.value.pnrnumber
        };
      } else {
        if (_this5.passengerDetails["previous_pnr_details"]) {
          delete _this5.passengerDetails["previous_pnr_details"];
        }
      }
      if (_this5.couponFormIsValid()) {
        if (_this5.couponIsValid()) {
          if (_this5.isCouponApplied()) {
            if (_this5.pnrFormValid()) {
              if (_this5.paymentFormIsValid()) {
                try {
                  let button;
                  if (_this5.metaData.msiteFolder == 'ourbustheme') {
                    button = [{
                      text: 'Ok',
                      cssClass: 'ourbus_ok_btn',
                      /** @note for new theme design */
                      handler: () => {
                        _this5.confirmBooking();
                      }
                    }, {
                      text: "Cancel",
                      cssClass: 'ourbus_cancel_btn',
                      /** @note for new theme design */
                      handler: () => {
                        console.log('Disagree clicked');
                      }
                    }];
                  } else {
                    button = [{
                      text: "Cancel",
                      cssClass: 'alert-button-cancel',
                      /** @note for new theme design */
                      handler: () => {
                        console.log('Disagree clicked');
                      }
                    }, {
                      text: 'Ok',
                      cssClass: 'alert-button-okay',
                      /** @note for new theme design */
                      handler: () => {
                        _this5.confirmBooking();
                      }
                    }];
                  }
                  var time = "20 min";
                  if (_this5.commonStorage.localGet('metaData').pgBlockTime.length > 0) {
                    try {
                      var splitTime = _this5.commonStorage.localGet('metaData').pgBlockTime.split(',');
                      var timeFilter = splitTime.filter(x => {
                        return x.split(':')[0] == _this5.paymentType.toString();
                      });
                      if (timeFilter.toString().split(':')[0] != _this5.paymentType.toString()) {
                        time = "20 min";
                      } else {
                        time = timeFilter.toString().split(':')[1];
                      }
                    } catch (error) {
                      time = "20 min";
                    }
                  } else {
                    time = "20 min";
                  }
                  if (_this5.phoneBooking) {
                    if (_this5.metaData.msiteFolder == 'seabirdTheme') {
                      const alert = yield _this5.alertCtrl.create({
                        header: 'Confirmation',
                        message: 'Note: You are proceeding to hold your booking on tentative blocking, Please confirm the ticket before the auto release, you will receive the details on your registered email id ' + _this5.passengerDetails.contact_detail.email + ' and number ' + _this5.passengerDetails.contact_detail.mobile_number,
                        buttons: button,
                        cssClass: 'seabird-alert'
                      });
                      const alertElement = document.querySelector('.alert-message');
                      if (alertElement && alert.message) {
                        alertElement.innerHTML = alert.message.toString();
                      }
                      yield alert.present();
                    } else if (_this5.metaData.msiteFolder == 'ourbustheme') {
                      const alert = yield _this5.alertCtrl.create({
                        header: 'Confirmation',
                        message: "Note: This booking is valid for " + '10 min ' + "only. Please complete the payment to avoid cancellation." + '<br><br>' + " On confirmation, you will receive the details on your email id " + _this5.passengerDetails.contact_detail.email + " and number " + _this5.passengerDetails.contact_detail.mobile_number,
                        buttons: button,
                        mode: 'md',
                        cssClass: 'ourbus-confirmation-modal'
                      });
                      const alertElement = document.querySelector('.alert-message');
                      if (alertElement && alert.message) {
                        alertElement.innerHTML = alert.message.toString();
                      }
                      yield alert.present();
                    } else if (_this5.metaData.msiteFolder == 'networktheme') {
                      const alert = yield _this5.alertCtrl.create({
                        header: `Confirmation`,
                        // subHeader:header,
                        // message:
                        //   "Note: Phone bookings will be Hold tentatively till the given time, please confirm or cancel the booking before auto cancellation to avoid charges, visit to TRIPS or WALLET Section."+'</br><br>'+" On confirmation, you will receive the details on your registered mail ID " +
                        //   '<strong>'+ this.passengerDetails.contact_detail.email +'</strong>'+
                        //   " and number " +
                        //   '<strong>'+  this.passengerDetails.contact_detail.mobile_number +'<strong>',
                        message: "Note: This booking is valid for " + '<strong>' + '10 min ' + '</strong>' + "only. Please complete the payment to avoid cancellation." + '</br><br>' + " On confirmation, you will receive the details on your email id " + '<strong>' + _this5.passengerDetails.contact_detail.email + '</strong>' + " and number " + '<strong>' + _this5.passengerDetails.contact_detail.mobile_number + '<strong>',
                        buttons: button,
                        cssClass: 'theme-2-confirmationAlert theme1'
                      });
                      const alertElement = document.querySelector('.alert-message');
                      if (alertElement && alert.message) {
                        alertElement.innerHTML = alert.message.toString();
                      }
                      yield alert.present().then(() => {
                        // alert-head sc-ion-alert-ios
                      });
                      const crossButton = document.createElement('ion-icon');
                      crossButton.setAttribute('name', 'close-outline'); // Replace with the desired icon
                      crossButton.classList.add('cross-button');
                      crossButton.addEventListener('click', () => {
                        _this5.handleCrossButtonClick(alert);
                      });
                      const header = document.querySelector('.alert-title');
                      if (header) {
                        header.appendChild(crossButton);
                      }
                    } else {
                      const alert = yield _this5.alertCtrl.create({
                        header: `Confirmation`,
                        message: `
                                          Note: This booking is valid for <strong>10 min</strong> only. Please complete the payment to avoid cancellation.<br><br>
                                          On confirmation, you will receive the details on your email ID
                                          <strong>${_this5.passengerDetails.contact_detail.email}</strong> and number
                                          <strong>${_this5.passengerDetails.contact_detail.mobile_number}</strong>.
                                        `,
                        buttons: button,
                        cssClass: 'theme-1-confirmationAlert theme1'
                      });
                      const alertElement = document.querySelector('.alert-message');
                      if (alertElement && alert.message) {
                        alertElement.innerHTML = alert.message.toString();
                      }
                      yield alert.present();
                      const crossButton = document.createElement('ion-icon');
                      crossButton.setAttribute('name', 'close-outline'); // Replace with the desired icon
                      crossButton.classList.add('cross-button');
                      crossButton.style.float = "right";
                      crossButton.addEventListener('click', () => {
                        _this5.handleCrossButtonClick(alert);
                      });
                      const header = document.querySelector('.alert-title');
                      if (header) {
                        header.appendChild(crossButton);
                      }
                    }
                  } else if (_this5.payFromWallet) {
                    if (_this5.metaData.msiteFolder == 'seabirdTheme') {
                      const alert = yield _this5.alertCtrl.create({
                        header: 'Confirmation',
                        message: 'Note: You have Selected Wallet as your payment mode, for more details refer to the wallet statement, you will receive the details on your registered email id ' + _this5.passengerDetails.contact_detail.email + ' and number ' + _this5.passengerDetails.contact_detail.mobile_number,
                        buttons: button,
                        cssClass: 'seabird-alert'
                      });
                      const alertElement = document.querySelector('.alert-message');
                      if (alertElement && alert.message) {
                        alertElement.innerHTML = alert.message.toString();
                      }
                      yield alert.present();
                    } else if (_this5.metaData.msiteFolder == 'ourbustheme') {
                      const alert = yield _this5.alertCtrl.create({
                        header: 'Confirmation',
                        message: "Note: This booking is valid for " + '10 min ' + "only. Please complete the payment to avoid cancellation." + '<br><br>' + " On confirmation, you will receive the details on your email id " + _this5.passengerDetails.contact_detail.email + " and number " + _this5.passengerDetails.contact_detail.mobile_number,
                        buttons: button,
                        mode: 'md',
                        cssClass: 'ourbus-confirmation-modal'
                      });
                      const alertElement = document.querySelector('.alert-message');
                      if (alertElement && alert.message) {
                        alertElement.innerHTML = alert.message.toString();
                      }
                      yield alert.present();
                    } else if (_this5.metaData.msiteFolder == 'networktheme') {
                      const alert = yield _this5.alertCtrl.create({
                        header: "Confirmation",
                        message: "Note: You have Selected Wallet as your payment mode, for more details refer to the wallet statement." + '</br></br>' + " On confirmation, you will receive the details on your registered email id " + '<strong>' + _this5.passengerDetails.contact_detail.email + '</strong>' + " and number " + '<strong>' + _this5.passengerDetails.contact_detail.mobile_number + '<strong>',
                        buttons: button,
                        cssClass: 'theme-2-confirmationAlert theme1'
                      });
                      const alertElement = document.querySelector('.alert-message');
                      if (alertElement && alert.message) {
                        alertElement.innerHTML = alert.message.toString();
                      }
                      yield alert.present();
                      const crossButton = document.createElement('ion-icon');
                      crossButton.setAttribute('name', 'close-outline'); // Replace with the desired icon
                      crossButton.classList.add('cross-button');
                      crossButton.addEventListener('click', () => {
                        _this5.handleCrossButtonClick(alert);
                      });
                      const header = document.querySelector('.alert-title');
                      if (header) {
                        header.appendChild(crossButton);
                      }
                    } else {
                      const alert = yield _this5.alertCtrl.create({
                        header: "Confirmation",
                        message: "Note: You have Selected Wallet as your payment mode, for more details refer to the wallet statement." + '<br><br>' + " On confirmation, you will receive the details on your registered email id " + '<strong>' + _this5.passengerDetails.contact_detail.email + '</strong>' + " and number " + '<strong>' + _this5.passengerDetails.contact_detail.mobile_number + '</strong>',
                        buttons: button,
                        cssClass: 'theme-1-confirmationAlert theme1'
                      });
                      const alertElement = document.querySelector('.alert-message');
                      if (alertElement && alert.message) {
                        alertElement.innerHTML = alert.message.toString();
                      }
                      yield alert.present();
                      const crossButton = document.createElement('ion-icon');
                      crossButton.setAttribute('name', 'close-outline'); // Replace with the desired icon
                      crossButton.classList.add('cross-button');
                      crossButton.style.float = "right";
                      crossButton.addEventListener('click', () => {
                        _this5.handleCrossButtonClick(alert);
                      });
                      const header = document.querySelector('.alert-title');
                      if (header) {
                        header.appendChild(crossButton);
                      }
                    }
                  } else {
                    if (_this5.metaData.msiteFolder == 'seabirdTheme') {
                      const alert = yield _this5.alertCtrl.create({
                        header: 'Confirmation',
                        message: 'Note: This booking is valid for ' + time + ' only. Please complete the payment to avoid cancellation. <br> <br>On confirmation, you will receive the details on your registered email id ' + _this5.passengerDetails.contact_detail.email + ' and number ' + _this5.passengerDetails.contact_detail.mobile_number,
                        buttons: button,
                        cssClass: 'seabird-alert'
                      });
                      const alertElement = document.querySelector('.alert-message');
                      if (alertElement && alert.message) {
                        alertElement.innerHTML = alert.message.toString();
                      }
                      yield alert.present();
                    } else if (_this5.metaData.msiteFolder == 'ourbustheme') {
                      const alert = yield _this5.alertCtrl.create({
                        header: 'Confirmation',
                        message: "Note: This booking is valid for " + '10 min ' + "only. Please complete the payment to avoid cancellation." + '<br><br>' + " On confirmation, you will receive the details on your email id " + _this5.passengerDetails.contact_detail.email + " and number " + _this5.passengerDetails.contact_detail.mobile_number,
                        buttons: button,
                        mode: 'md',
                        cssClass: 'ourbus-confirmation-modal'
                      });
                      const alertElement = document.querySelector('.alert-message');
                      if (alertElement && alert.message) {
                        alertElement.innerHTML = alert.message.toString();
                      }
                      yield alert.present();
                    } else if (_this5.metaData.msiteFolder == 'networktheme') {
                      const alert = yield _this5.alertCtrl.create({
                        header: "Confirmation",
                        message: "Note: This booking is valid for <strong>10 min</strong> only. Please complete the payment to avoid cancellation." + '</br></br>' + "On confirmation, you will receive the details on your registered email id " + '<strong>' + _this5.passengerDetails.contact_detail.email + '</strong>' + " and number " + '<strong>' + _this5.passengerDetails.contact_detail.mobile_number + '<strong>',
                        buttons: button,
                        cssClass: 'theme-2-confirmationAlert theme1'
                      });
                      const alertElement = document.querySelector('.alert-message');
                      if (alertElement && alert.message) {
                        alertElement.innerHTML = alert.message.toString();
                      }
                      yield alert.present();
                      const crossButton = document.createElement('ion-icon');
                      crossButton.setAttribute('name', 'close-outline'); // Replace with the desired icon
                      crossButton.classList.add('cross-button');
                      crossButton.addEventListener('click', () => {
                        _this5.handleCrossButtonClick(alert);
                      });
                      const header = document.querySelector('.alert-title');
                      if (header) {
                        header.appendChild(crossButton);
                      }
                    } else {
                      const alert = yield _this5.alertCtrl.create({
                        header: "Confirmation",
                        message: "Note: This booking is valid for <strong>10 min</strong> only. Please complete the payment to avoid cancellation." + '<br><br>' + "On confirmation, you will receive the details on your registered email id " + '<strong>' + _this5.passengerDetails.contact_detail.email + '</strong>' + " and number " + '<strong>' + _this5.passengerDetails.contact_detail.mobile_number + '</strong>',
                        buttons: button,
                        cssClass: 'theme-1-confirmationAlert theme1'
                      });
                      const alertElement = document.querySelector('.alert-message');
                      if (alertElement && alert.message) {
                        alertElement.innerHTML = alert.message.toString();
                      }
                      yield alert.present();
                      const crossButton = document.createElement('ion-icon');
                      crossButton.setAttribute('name', 'close-outline'); // Replace with the desired icon
                      crossButton.classList.add('cross-button');
                      crossButton.style.float = "right";
                      crossButton.addEventListener('click', () => {
                        _this5.handleCrossButtonClick(alert);
                      });
                      const header = document.querySelector('.alert-title');
                      if (header) {
                        header.appendChild(crossButton);
                      }
                    }
                  }
                } catch (e) {
                  _this5.ex.call("PaymentDetailsPage", "pay()", e);
                }
              } else {
                // console.log("pay 121");
              }
            } else {
              // console.log("pay 122");
            }
          } else {
            // console.log("pay 123");
          }
        } else {
          // console.log("pay 124");
        }
      } else {
        // console.log("pay 125");
      }
    })();
  }
  confirmBooking() {
    var _this6 = this;
    return (0,_home_govindmane_Documents_ionic_customer_app_capacitor_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let platformNumber;
      if (_this6.appData.isWEBAPP) {
        platformNumber = 6;
      } else if (_this6.appData.isIOS && !_this6.appData.isWEBAPP) {
        platformNumber = 9;
      } else {
        platformNumber = 10;
      }
      const isPayBitla = _this6.metaData.pgCharges.some(item => item.pay_gay_type_id === 32);
      if (_this6.metaData.msiteFolder == 'ourbustheme' && _this6.isProfileUpdateNeeded) {
        _this6.updateProfileApi();
      }
      if (_this6.metaData.msiteFolder == 'ourbustheme') {
        _this6.checkoutStartedEvent();
      }
      if (_this6.isReturn) {
        _this6.bookRoundTicket(platformNumber);
      } else {
        _this6.loaderService.showLoadingDefault();
        let pathForBooking = "reservation_id=" + _this6.reservationData.reserveId;
        pathForBooking += "&origin_id=" + _this6.reservationData.originId;
        pathForBooking += "&destination_id=" + _this6.reservationData.destinationId;
        pathForBooking += "&boarding_at=" + (_this6.reservationData.boardingStage ? _this6.reservationData.boardingStage.id : '');
        pathForBooking += "&drop_off=" + (_this6.reservationData.droppingStage ? _this6.reservationData.droppingStage.id : '');
        pathForBooking += "&no_of_seats=" + _this6.reservationData.selectedSeatsToBook.length;
        let hasUpiApps = _this6.upiCheckService.checkUpiAppsInstalled();
        //  if(await hasUpiApps){
        //     this.util.showToast("UPI apps are installed on your device");
        //  }else{
        //     this.util.showToast("No UPI apps found on your device");
        //  console.log("hasUpiApps", hasUpiApps);
        //  }
        if (_this6.paymentType) if (_this6.isWPBooking) {
          pathForBooking += "&referral_code=&pay_gay_type=" + 58;
          pathForBooking += "&native_app_type=" + 14;
        } else {
          pathForBooking += "&referral_code=&pay_gay_type=" + _this6.paymentType;
          if (_this6.appData.isWEBAPP || _this6.appData.isIOS) {
            pathForBooking += "&native_app_type=" + platformNumber;
          } else {
            pathForBooking += "&native_app_type=" + platformNumber + "&is_payment_intent_flow=true" + "&is_upi_app_present=" + ((yield hasUpiApps) ? 'true' : 'false');
          }
        }
        if (_this6.isBima) {
          pathForBooking += "&is_bima_ticket=true";
        }
        if (_this6.payFromWallet) {
          pathForBooking += "&is_wallet_booking=true";
        }
        if (_this6.phoneBooking) {
          pathForBooking += "&is_e_phone_booking=true";
          pathForBooking += "&is_wallet_booking=true";
        }
        if (_this6.metaData && _this6.metaData.is_wallet_promotional) {
          pathForBooking += "&is_wallet_promotional=true";
        }
        if (_this6.wakeUpCall) {
          pathForBooking += "&wake_up_call_applicable=true";
        }
        if (_this6.isWPSwitchOn) {
          pathForBooking += "&is_whatsapp_update=true";
        }
        if (_this6.isWPBooking) {
          pathForBooking += "&is_whatsapp_booking=true";
        }
        if (_this6.virtualPaymentType) {
          pathForBooking += "&v_bank=" + _this6.virtualId + ',' + _this6.sId;
        }
        if (_this6.is_cancel_protect == true && _this6.metaData.showCancelProtect) {
          pathForBooking += "&is_cancel_protect=" + _this6.checkCancelProtect;
        }
        if (isPayBitla) {
          pathForBooking += "&is_required_pay_flow=" + true;
        }
        pathForBooking += "&is_mobile_app=true";
        _this6.bookTicket(_this6.passengerDetails, pathForBooking);
      }
    })();
  }
  openInNewTab(url) {
    var link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.click();
  }
  /**
   * book ticket method
   */
  bookTicket(passengersData, pathForBooking) {
    var _this7 = this;
    let newBooking;
    if (!this.util.checkConnection()) {
      return false;
    }
    this.apiFactory.bookETicket(passengersData, pathForBooking).subscribe(/*#__PURE__*/function () {
      var _ref3 = (0,_home_govindmane_Documents_ionic_customer_app_capacitor_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (result) {
        console.log("Hello", result);
        _this7.loaderService.hideLoadingDefault();
        _this7.globalData.TICKET_DETAILS = result;
        _this7.globalData;
        let d = new Date(result.travel_date);
        result.travelDay = d.getDate();
        result.travelMonth = _this7.util.getMonthName(d.getMonth() + 1);
        result.travelYear = d.getFullYear();
        result.travelDate = result.travel_date ? _this7.dateService.changeDateFormat(result.travel_date, 'yyyy-mm-dd', 'dd/mm/yyyy') : '';
        if (result.passenger_details && _this7.bookType == '2') {
          _this7.viewTicket = true;
          if (_this7.metaData.msiteFolder == 'ourbustheme') {
            _this7.paymentSuccessEvent();
            _this7.firebaseAnalyticsService.logCustomEvent('phone_booking_payment_success', {
              page: 'Payment Details Page'
            });
            _this7.commonStorage.localSet('bookedTicketDetails', result);
            localStorage.setItem('bookingDetails', JSON.stringify(result));
            let navigationExtras = {
              queryParams: {
                new_booking: 'true',
                hideLocateTrackBus: false
              }
            };
            _this7.navigationExtras = navigationExtras;
            _this7.navCtrl.navigateRoot('booking-details', _this7.navigationExtras);
          } else {
            _this7.firebaseAnalyticsService.logCustomEvent('phone_booking_payment_success', {
              page: 'Payment Details Page'
            });
            _this7.commonStorage.localSet('bookedTicketDetails', result);
            localStorage.setItem('bookingDetails', JSON.stringify(result));
            let navigationExtras = {
              queryParams: {
                new_booking: true,
                hideLocateTrackBus: true
              }
            };
            _this7.navigationExtras = navigationExtras;
          }
          return;
        } else if (result !== null && result !== void 0 && result.payment_mode) {
          var _result$payment_mode;
          let isUPIAppPresent = _this7.upiCheckService.checkUpiAppsInstalled();
          if (result !== null && result !== void 0 && (_result$payment_mode = result.payment_mode) !== null && _result$payment_mode !== void 0 && _result$payment_mode.pg_name) {
            var _result$payment_mode2, _result$payment_mode3;
            let pgName = result === null || result === void 0 || (_result$payment_mode2 = result.payment_mode) === null || _result$payment_mode2 === void 0 ? void 0 : _result$payment_mode2.pg_name.toLowerCase();
            let upiLink = (_result$payment_mode3 = result.payment_mode) === null || _result$payment_mode3 === void 0 ? void 0 : _result$payment_mode3.upi_link;
            if (pgName == 'easebuzz') {
              var _result$payment_mode4;
              if ((_result$payment_mode4 = result.payment_mode) !== null && _result$payment_mode4 !== void 0 && _result$payment_mode4.access_key) {
                // this.easeBuzIntentFlow(result.payment_mode?.access_key);
                if (yield isUPIAppPresent) {
                  _this7.openUpiLink(upiLink, result.pnr_number);
                } else {
                  var _result$payment_mode5;
                  _this7.openEasebuzzSDK((_result$payment_mode5 = result.payment_mode) === null || _result$payment_mode5 === void 0 ? void 0 : _result$payment_mode5.access_key, result.pnr_number);
                }
              }
            } else if (pgName == 'paytm') {
              var _result$payment_mode6, _result$payment_mode7, _result$payment_mode8, _result$payment_mode9, _result$payment_mode0;
              console.log("Paytm Payment Mode", result.payment_mode);
              console.log("pgName", pgName);
              let orderId = result === null || result === void 0 || (_result$payment_mode6 = result.payment_mode) === null || _result$payment_mode6 === void 0 ? void 0 : _result$payment_mode6.orderId;
              let txnToken = result === null || result === void 0 || (_result$payment_mode7 = result.payment_mode) === null || _result$payment_mode7 === void 0 ? void 0 : _result$payment_mode7.txnToken;
              let mid = result === null || result === void 0 || (_result$payment_mode8 = result.payment_mode) === null || _result$payment_mode8 === void 0 ? void 0 : _result$payment_mode8.mid;
              let amount = result === null || result === void 0 || (_result$payment_mode9 = result.payment_mode) === null || _result$payment_mode9 === void 0 ? void 0 : _result$payment_mode9.amount;
              let callbackUrl = result === null || result === void 0 || (_result$payment_mode0 = result.payment_mode) === null || _result$payment_mode0 === void 0 ? void 0 : _result$payment_mode0.callback_url;
              if (orderId && txnToken && mid && amount && callbackUrl) {
                console.log("Paytm UPI Link", upiLink);
                if (yield isUPIAppPresent) {
                  //   let upiLink =   'upi://pay?pa=vishn630-1@oksbi&pn=vishakha%20nagarkar&aid=uGICAgIC1le-NSw&am=10'
                  _this7.openUpiLink(upiLink, result.pnr_number);
                } else {
                  // if(!this.appData.isWEBAPP){
                  _this7.openPaytmSDK(orderId, txnToken, mid, amount, callbackUrl, result.pnr_number);
                  // }else{
                  _this7.redirectToPaytm(result, newBooking = true);
                  // }
                }
              }
            }
          }
        } else if (result.passenger_details && _this7.bookType == '3') {
          _this7.firebaseAnalyticsService.logCustomEvent('wallet_booking_payment_success', {
            page: 'Payment Details Page'
          });
          localStorage.setItem('bookingDetails', JSON.stringify(result));
          _this7.commonStorage.localSet('bookedTicketDetails', result);
          _this7.viewTicket = true;
          if (_this7.metaData.msiteFolder == 'ourbustheme') {
            _this7.paymentSuccessEvent();
            let navigationExtras = {
              queryParams: {
                new_booking: 'true',
                hideLocateTrackBus: false
              }
            };
            _this7.navigationExtras = navigationExtras;
            _this7.navCtrl.navigateRoot('booking-details', _this7.navigationExtras);
          } else {
            let navigationExtras = {
              queryParams: {
                new_booking: true,
                hideLocateTrackBus: true
              }
            };
            _this7.navigationExtras = navigationExtras;
          }
          return;
        } else if ('is_razorpay_payment' in _this7.globalData.TICKET_DETAILS) {
          if (_this7.globalData.TICKET_DETAILS.is_razorpay_payment == true) {
            if (_this7.globalData.TICKET_DETAILS.amount != null && _this7.globalData.TICKET_DETAILS.merchant_id != null && _this7.globalData.TICKET_DETAILS.order_id != null && _this7.globalData.TICKET_DETAILS.secret_key != null) {
              _this7.payWithRazorpay(_this7.globalData.TICKET_DETAILS);
              // console.log("hi souvik sir");
            }
          }
        } else if (_this7.paymentType == "55") {
          // console.log("Go To Phonepe ------->")
          let self = _this7;
          if (result.code == 200) {
            if (_this7.appData.isWEBAPP) {
              // window.open(result.payment_link);
              _this7.openInNewTab(result.payment_link);
            } else if (_this7.appData.isIOS && !_this7.appData.isWEBAPP) {
              const browser = _this7.iab.create(result.payment_link + "", '_blank', _this7.options);
              browser.on('loadstart').subscribe(event => {
                if (event.url.indexOf('ticket-confirm') > -1) {
                  browser.close();
                  //this.commonService.gTrack('bookonlinesuccess', "ticket booking with online payment success");
                  _this7.firebaseAnalyticsService.logCustomEvent('payment_success', {
                    page: 'Payment Details Page'
                  });
                  _this7.commonStorage.localSet('bookedTicketDetails', result);
                  localStorage.setItem('bookingDetails', JSON.stringify(self.commonStorage.localGet('bookedTicketDetails')));
                  let navigationExtras = {
                    queryParams: {
                      new_booking: true
                    }
                  };
                  _this7.navigationExtras = navigationExtras;
                  _this7.viewTicket = true;
                  if (_this7.metaData.msiteFolder == 'ourbustheme') {
                    _this7.paymentSuccessEvent();
                    _this7.navCtrl.navigateRoot('booking-details', _this7.navigationExtras);
                  }
                } else if (event.url.indexOf('ticket-cancel') > -1) {
                  self.commonStorage.localRemove('bookedTicketDetails');
                  browser.close();
                  _this7.viewTicket = false;
                  _this7.paymentFailed = true;
                  if (_this7.metaData.msiteFolder == 'ourbustheme') {
                    _this7.paymentFailureEvent();
                  }
                  //this.commonService.gTrack('bookonlinefailure', "ticket not booked with online payment");
                  _this7.firebaseAnalyticsService.logCustomEvent('payment_failed', {
                    page: 'Payment Details Page'
                  });
                }
              });
            }
          } else {
            _this7.util.showToast(result.message);
          }
        } else if (_this7.paymentType == "57") {
          if (result.code == 200) {
            const popover = yield _this7.modalCtrl.create({
              component: _ease_buzz_page_ease_buzz_page_page__WEBPACK_IMPORTED_MODULE_5__.EaseBuzzPagePage,
              componentProps: {
                'result': result
              }
            });
            yield popover.present();
          } else {
            _this7.util.showToast(result.message);
          }
        } else if (_this7.paymentType == "29") {
          _this7.apiFactory.bookOnHoldETicket(result).subscribe(paysuccess => {
            if (paysuccess.code === 200) {
              //this.commonService.gTrack("phonebookingsuccess", "phonebooking is successful");
              let message = '<p>' + paysuccess.message + '</p><p>Ref Num: ' + paysuccess.ref_num + '</p><p>Exp Time: ' + paysuccess.exp_time + '</p>' + '<p>Fare: ' + paysuccess.amount + '</p><p>Available Banks: ' + paysuccess.avail_banks + '</p>';
              _this7.util.showAlerts('', message);
              if (_this7.metaData.msiteFolder == 'ourbustheme') {
                _this7.paymentSuccessEvent();
              }
            }
          }, err => {
            //this.commonService.gTrack('phonebookingfailure', "phonebooking failed");
            _this7.loaderService.hideLoadingDefault();
            if (_this7.metaData.msiteFolder == 'ourbustheme') {
              _this7.paymentFailureEvent();
            }
          });
        } else if (_this7.paymentType == '21') {
          if (result.pay_gay_url && !result.code || result.html_body_contents && !result.pay_gay_url) {
            _this7.goToCCavenuePayment(result);
          } else {
            _this7.util.showToast(result.message);
          }
        } else if (_this7.paymentType != "26" && _this7.paymentType != "37" && result.pay_gay_url && !result.code || result.html_body_contents && !result.pay_gay_url && _this7.paymentType != '21') {
          if (result.pay_flow) {
            const browser = _this7.iab.create(result.pay_flow, '_blank', {
              location: 'no',
              toolbar: 'no'
            });
            // Optional: Handle events
            //   browser.on('loadstop').subscribe(event => {
            //     console.log('Page loaded:', event.url);
            //   });
          } else {
            let form = document.getElementById('payMentGateWayForm');
            _this7.commonStorage.localSet('bookedTicketDetails', result);
            let formHtml = '';
            for (let key in result) {
              if (result.hasOwnProperty(key)) {
                let value = result[key];
                // console.log("bookTicket --> ", key, value)
                if (key == "passenger_contact_details" || key == "passengers_details") {
                  value = encodeURIComponent(value);
                }
                let value2 = '';
                if (value) {
                  value2 = value.toString().replace(/\n/g, '');
                }
                formHtml += '<input type="hidden" value="' + value2 + '" id="' + key + '" name="' + key + '"/>';
              }
            }
            if (!(_this7.paymentType == "31")) {
              form.innerHTML = formHtml;
            }
            let payScript = "var form = document.getElementById('ts-app-payment-form-redirect'); ";
            // for version 5 or less payment gateway issue this ` token not working
            //let versionNumber = this.platform && this.platform.version && this.platform.version() ? this.platform.version() : false;
            let dirtyEl = '<input type="hidden" id="page_is_dirty" value="no">';
            payScript += "form.innerHTML = `" + formHtml + dirtyEl + "`;";
            payScript += "form.action = `" + result.pay_gay_url + "`;";
            payScript += "form.method = 'POST';";
            payScript += `var e = document.getElementById("page_is_dirty");`;
            payScript += `if (e.value == "no") {e.value = "yes";form.submit();}`;
            payScript += `else {var retVal = confirm("Are you sure you want to go Back?");if( retVal == true ){window.location = "http://local-cancel";}else{form.submit();} }`;
            let payScript2 = "";
            payScript2 += "var form = document.getElementById('ts-app-payment-form-redirect');";
            payScript2 += "form.innerHTML = `" + formHtml + dirtyEl + "`;";
            payScript += "form.action = `" + result.pay_gay_url + "`;";
            payScript += "form.method = 'POST';";
            payScript2 += `var e = document.getElementById("page_is_dirty");`;
            payScript2 += `if (e.value == "yes") {e.value = "yes";form.submit();}`;
            payScript2 += `else {var retVal = confirm("Are you sure you want to go Back?");if( retVal == true ){window.location = "http://local-cancel";}else{form.submit();} }`;
            // InAppBrowser will work in the app
            if (result.html_body_contents && !result.pay_gay_url) {
              let parser = new DOMParser();
              let doc = parser.parseFromString(result.html_body_contents, "text/xml");
              let htmlStr = "";
              htmlStr += '<script src="https://www.paynimo.com/paynimocheckout/client/lib/jquery.min.js" type="text/javascript"></script>';
              payScript = "document.write(`" + htmlStr + result.html_body_contents + "<body></body>`);";
              payScript2 = payScript;
            }
            if (_this7.platform.is('android') || _this7.platform.is('ios')) {
              console.log("in paybitla form");
              const browser = _this7.iab.create(_this7.appData.BASE_URL + "bookings/payment_gateway_redirect_page", '_blank', _this7.options);
              let self = _this7;
              let track = 0;
              let prevUrl = '';
              browser.on('loadstart').subscribe(event => {
                // console.log("loadstart -->", event);
                //check the requested url if success the show success and ticket details
                if (event.url.indexOf("payment_gateway_redirect_page") > -1 && prevUrl.indexOf("payment_gateway_redirect_page") > -1) {
                  track = 0;
                  // console.log('1');
                  // console.log(event, "eventCalling")
                }
                if ((event.url.indexOf("status=0") > -1 || event.url.indexOf("pnr_number") > -1) && event.url.indexOf('payment_gateway_redirect_page') <= -1) {
                  let pnrNumber = self.commonStorage.localGet('bookedTicketDetails').pnr_number;
                  browser.close();
                  _this7.viewTicket = true;
                  if (_this7.metaData.msiteFolder == 'ourbustheme') {
                    _this7.navCtrl.navigateRoot('booking-details', _this7.navigationExtras);
                  }
                  //this.commonService.gTrack('bookonlinesuccess', "ticket booking with online payment success");
                  _this7.firebaseAnalyticsService.logCustomEvent('payment_success', {
                    page: 'Payment Details Page'
                  });
                  localStorage.setItem('bookingDetails', JSON.stringify(self.commonStorage.localGet('bookedTicketDetails')));
                  _this7.commonStorage.localSet('bookedTicketDetails', result);
                  let navigationExtras = {
                    queryParams: {
                      new_booking: true
                    }
                  };
                  _this7.navigationExtras = navigationExtras;
                  if (_this7.metaData.msiteFolder == 'ourbustheme') {
                    _this7.paymentSuccessEvent();
                  }
                } else if (event.url.indexOf("ticket_failure") > -1 || event.url.indexOf("status=1") > -1 || event.url.indexOf("customerCancellation") > -1 || event.url.indexOf("www.ticketsimply.com") > -1) {
                  self.commonStorage.localRemove('bookedTicketDetails');
                  browser.close();
                  _this7.viewTicket = false;
                  _this7.paymentFailed = true;
                  if (_this7.metaData.msiteFolder == 'ourbustheme') {
                    _this7.paymentFailureEvent();
                  }
                  //this.commonService.gTrack('bookonlinefailure', "ticket not booked with online payment");
                  _this7.firebaseAnalyticsService.logCustomEvent('payment_failed', {
                    page: 'Payment Details Page'
                  });
                } else if (event.url.indexOf("local-cancel") > -1) {
                  setTimeout(() => {
                    browser.close();
                  }, 500);
                }
              });
              //  on url load stop
              browser.on('loadstop').subscribe(event => {
                console.log("loadstop -->", event);
                console.log(event.url, "eventCalling");
                if (event.url.indexOf("payment_gateway_redirect_page") > -1) {
                  if (track <= 0) {
                    console.log("Payscript 1 -----------");
                    browser.executeScript({
                      code: payScript
                    });
                  } else {
                    console.log("Payscript 2 -----------");
                    browser.executeScript({
                      code: payScript2
                    });
                  }
                }
                track++;
                console.log("loadstart -->", event);
              });
              //on closing the browser
              browser.on('exit').subscribe(event => {
                browser.executeScript({
                  code: payScript
                });
                console.log("exit -->", event);
                console.log(event.url, "eventCalling");
              });
            } else {
              alert("Please use the app to make the payment");
              // web browser
              // console.log('web browser -->123');
              form.action = result.pay_gay_url;
              form.method = "POST";
              form.submit();
            }
          }
        } else if (_this7.paymentType == '45' && result.merchant_id && result.code != '443') {
          // console.log("techProcess");
          var halfKey = _this7.emcription(_this7.metaData.serverDate, _this7.metaData.subdomain);
          let marchantKey = atob(result.merchant_id);
          marchantKey = marchantKey.replace(halfKey, '');
          if (_this7.appData.isIOS) {
            var options = {
              "features": {
                "enableExpressPay": true,
                "enableInstrumentDeRegistration": true,
                "enableMerTxnDetails": true,
                "enableNewWindowFlow": false
              },
              "consumerData": {
                "deviceId": "iOSSH2",
                //supported values "ANDROIDSH1" or "ANDROIDSH2" for Android and supported values "iOSSH1" or "iOSSH2" for iOS
                //result.payment_mode
                "token": result.token,
                "paymentMode": "all",
                "merchantLogoUrl": "https://www.paynimo.com/CompanyDocs/company-logo-vertical-light.png",
                //provided merchant logo will be displayed
                "merchantId": marchantKey,
                "currency": "INR",
                "consumerId": result.consumer_id,
                "consumerMobileNo": result.consumer_mobile_no,
                "consumerEmailId": result.consumer_email_id,
                "txnId": result.txn_id,
                //Unique merchant transaction ID
                "items": [{
                  "itemId": "FIRST",
                  "amount": result.amount,
                  // "comAmt": result.Amount
                  // "amount": "8",
                  "comAmt": "0"
                }],
                "customStyle": {
                  "PRIMARY_COLOR_CODE": "#45beaa",
                  //merchant primary color code
                  "SECONDARY_COLOR_CODE": "#FFFFFF",
                  //provide merchant"s suitable color code
                  "BUTTON_COLOR_CODE_1": "#2d8c8c",
                  //merchant"s button background color code
                  "BUTTON_COLOR_CODE_2": "#FFFFFF" //provide merchant"s suitable color code for button text
                }
              }
            };
            // console.log(options, "worldlinepg")
            var paymentCallback = response => {
              let techSuccessMsg = JSON.parse(response).msg;
              let splitPnr = techSuccessMsg.split('|')[3];
              let msgCase = techSuccessMsg.split('|')[0];
              if (msgCase == '0300') {
                var halfKey = _this7.emcription(_this7.metaData.serverDate, _this7.metaData.subdomain);
                let message = btoa(techSuccessMsg);
                message = message.replace(halfKey, '');
                // console.log(message, "successMSg")
                let bookingDetails = {
                  "pnr_number": splitPnr
                };
                // console.log(bookingDetails, "bookingDetails")
                localStorage.setItem('bookingDetails', JSON.stringify(bookingDetails));
                let navigationExtras = {
                  queryParams: {
                    new_booking: true,
                    hideLocateTrackBus: false
                  }
                };
                _this7.navigationExtras = navigationExtras;
                _this7.viewTicket = true;
                if (_this7.metaData.msiteFolder == 'ourbustheme') {
                  _this7.paymentSuccessEvent();
                  _this7.navCtrl.navigateRoot('booking-details', _this7.navigationExtras);
                }
                _this7.paymentFailed = false;
                _this7.apiFactory.techProcessCall(splitPnr, message).subscribe(result => {}, err => {});
              } else if (msgCase != '0300' || !msgCase) {
                _this7.paymentFailed = true;
                _this7.viewTicket = false;
                if (_this7.metaData.msiteFolder == 'ourbustheme') {
                  _this7.paymentFailureEvent();
                }
              }
            };
            var errorCallback = error => {
              //   alert(error);
              _this7.paymentFailed = true;
              _this7.viewTicket = false;
              if (_this7.metaData.msiteFolder == 'ourbustheme') {
                _this7.paymentFailureEvent();
              }
            };
            WLCheckout.open(options, paymentCallback, errorCallback);
          } else if (_this7.appData.isWEBAPP) {
            var options = {
              "features": {
                "enableExpressPay": true,
                "enableInstrumentDeRegistration": true,
                "enableMerTxnDetails": true,
                "enableNewWindowFlow": true
              },
              "consumerData": {
                "deviceId": "WEBSH2",
                //supported values "ANDROIDSH1" or "ANDROIDSH2" for Android and supported values "iOSSH1" or "iOSSH2" for iOS
                //result.payment_mode
                "token": result.token,
                "paymentMode": "all",
                "merchantLogoUrl": "https://www.paynimo.com/CompanyDocs/company-logo-vertical-light.png",
                //provided merchant logo will be displayed
                "merchantId": marchantKey,
                "currency": "INR",
                "consumerId": result.consumer_id,
                "consumerMobileNo": result.consumer_mobile_no,
                "consumerEmailId": result.consumer_email_id,
                "txnId": result.txn_id,
                //Unique merchant transaction ID
                "items": [{
                  "itemId": "FIRST",
                  "amount": result.amount,
                  // "comAmt": result.Amount
                  // "amount": "8",
                  "comAmt": "0"
                }],
                "customStyle": {
                  "PRIMARY_COLOR_CODE": "#45beaa",
                  //merchant primary color code
                  "SECONDARY_COLOR_CODE": "#FFFFFF",
                  //provide merchant"s suitable color code
                  "BUTTON_COLOR_CODE_1": "#2d8c8c",
                  //merchant"s button background color code
                  "BUTTON_COLOR_CODE_2": "#FFFFFF" //provide merchant"s suitable color code for button text
                }
              }
            };
            // console.log(options, "worldlinepg")
            var paymentCallback = response => {
              // console.log(response, "worldlinepg");
              let techSuccessMsg = response.msg;
              // console.log(techSuccessMsg.split('|')[3]);
              let splitPnr = techSuccessMsg.split('|')[3];
              let msgCase = techSuccessMsg.split('|')[0];
              if (msgCase == '0300') {
                var halfKey = _this7.emcription(_this7.metaData.serverDate, _this7.metaData.subdomain);
                let message = btoa(techSuccessMsg);
                message = message.replace(halfKey, '');
                // console.log(message, "successMSg")
                let bookingDetails = {
                  "pnr_number": splitPnr
                };
                // console.log(bookingDetails, "bookingDetails")
                localStorage.setItem('bookingDetails', JSON.stringify(bookingDetails));
                let navigationExtras = {
                  queryParams: {
                    new_booking: true,
                    hideLocateTrackBus: false
                  }
                };
                _this7.navigationExtras = navigationExtras;
                _this7.paymentFailed = false;
                _this7.viewTicket = true;
                if (_this7.metaData.msiteFolder == 'ourbustheme') {
                  _this7.paymentSuccessEvent();
                  _this7.navCtrl.navigateRoot('booking-details', _this7.navigationExtras);
                }
                _this7.apiFactory.techProcessCall(splitPnr, message).subscribe(result => {}, err => {});
              } else if (msgCase != '0300' || !msgCase) {
                _this7.paymentFailed = true;
                _this7.viewTicket = false;
                if (_this7.metaData.msiteFolder == 'ourbustheme') {
                  _this7.paymentFailureEvent();
                }
              }
            };
            var errorCallback = error => {
              //   alert(error);
              _this7.paymentFailed = true;
              _this7.viewTicket = false;
              if (_this7.metaData.msiteFolder == 'ourbustheme') {
                _this7.paymentFailureEvent();
              }
            };
            WLCheckout.open(options, paymentCallback, errorCallback);
          }
        } else if (result.code == 200 && _this7.isWPBooking) {
          _this7.commonStorage.localRemove('isWPBooking');
          _this7.commonStorage.localRemove('wpMobileNo');
          // const phone = '9876543210';
          const url = `https://api.whatsapp.com/send/?phone=${_this7.metaData.operatorWPNum}`;
          window.location.href = url;
          // }, 1000);
        } else if (result.code == 422) {
          _this7.accountDeRegisterAlert("", result.message);
        } else if (result.code == 443 && _this7.isWPBooking) {
          _this7.util.showToast(result.message);
        } else if (_this7.paymentType == "26") {
          _this7.redirectToPaytm(result, newBooking = true);
        } else if (_this7.paymentType == "37") {
          _this7.redirectToPayU(result, newBooking = true);
        } else {
          _this7.loaderService.hideLoadingDefault();
          if (!result.code && result.ticket_number) {
            _this7.viewTicket = true;
            if (_this7.metaData.msiteFolder == 'ourbustheme') {
              _this7.paymentSuccessEvent();
              _this7.navCtrl.navigateRoot('booking-details', _this7.navigationExtras);
            }
            localStorage.setItem('bookingDetails', JSON.stringify(result));
            _this7.commonStorage.localSet('bookedTicketDetails', result);
            let navigationExtras = {
              queryParams: {
                new_booking: true
              }
            };
            _this7.navigationExtras = navigationExtras;
          } else if (result.code == 414) {
            _this7.util.showAlerts('', result.message);
          } else if (result.code == 443) {
            _this7.walletNoteModal = true;
            var msg = result.message;
            if (msg.indexOf("sufficient") !== -1) {
              // yes
              _this7.isShowWalletBtn = true;
            } else {
              _this7.isShowWalletBtn = false;
            }
            _this7.walletMessage = result.message;
            if (_this7.metaData.msiteFolder == 'ourbustheme') {
              _this7.paymentFailureEvent();
            }
            //this.commonService.gTrack('walletbookingfailure', "ticket booking with wallet payment failed");
            _this7.firebaseAnalyticsService.logCustomEvent('wallet_payment_failed', {
              page: 'Payment Details Page'
            });
          } else if (_this7.phoneBooking && result.code != 200) {
            if (_this7.appData.isWEBAPP) {
              _this7.firebaseAnalyticsService.logCustomEvent('payment_failed', {
                page: 'Payment Details Page'
              });
            }
            if (_this7.appData.isWEBAPP) {
              _this7.firebaseAnalyticsService.logCustomEvent('phone_booking_payment_failed', {
                page: 'Payment Details Page'
              });
            }
          } else {
            //this.commonService.gTrack('walletbookingfailure', "ticket booking with wallet payment failed");
            _this7.firebaseAnalyticsService.logCustomEvent('wallet_payment_failed', {
              page: 'Payment Details Page'
            });
            _this7.paymentFailed = false;
            _this7.util.showAlerts("Booking Failed", result.message);
            if (_this7.metaData.msiteFolder == 'ourbustheme') {
              _this7.paymentFailureEvent();
            }
          }
        }
      });
      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }(), err => {
      this.loaderService.hideLoadingDefault();
      if (!this.util.isConnected()) {
        this.util.showAlerts("Error Loading", "Internet not connected please connect the internect and try after again");
      } else {
        this.util.showAlerts("Error Loading", "Something went wrong please try after some time");
      }
      this.ex.call('PaymentDetailsPage', 'bookTicket() --> this.apiFactory.bookETicket(passengersData,pathForBooking)', err, '');
    });
  }
  submitToPaymentGateway(url, encRequest, accessCode) {
    console.log("Submitting to URL:", url);
    console.log("Access Code:", accessCode);
    console.log("encRequest (length):", encRequest.length);
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = url;
    form.target = '_self'; // or '_blank' if preferred
    const encRequestInput = document.createElement('input');
    encRequestInput.type = 'hidden';
    encRequestInput.name = 'encRequest';
    encRequestInput.value = encRequest;
    form.appendChild(encRequestInput);
    const accessCodeInput = document.createElement('input');
    accessCodeInput.type = 'hidden';
    accessCodeInput.name = 'access_code';
    accessCodeInput.value = accessCode;
    form.appendChild(accessCodeInput);
    document.body.appendChild(form);
    form.submit();
  }
  goToCCavenuePayment(data) {
    console.log("CC Avenue Payment Data: ", data);
    if (this.appData.isIOS) {
      this.startIospayment(data);
    } else if (this.appData.isWEBAPP) {
      this.startWebPayment(data);
    }
  }
  startIospayment(data) {
    const htmlContent = `
    <html>
      <body onload="document.forms[0].submit();">
        <form method="POST" action="${data.pay_gay_url}">
          <input type="hidden" name="encRequest" value="${data.encRequest}" />
          <input type="hidden" name="access_code" value="${data.access_code}" />
        </form>
      </body>
    </html>
  `;
    const browser = this.iab.create('data:text/html;base64,' + btoa(htmlContent), '_blank', {
      location: 'no',
      clearcache: 'yes',
      clearsessioncache: 'yes'
    });
    console.log("Browser opened for CC Avenue Payment");
    browser.on('loadstart').subscribe(event => {
      const url = event.url;
      if (url.includes('payment_success') || url.includes('ticket-confirm')) {
        browser.close();
        this.viewTicket = true;
        this.paymentFailed = false;
      } else if (url.includes('payment_failure') || url.includes('ticket-cancel') || url.includes('sessionTimeOut')) {
        browser.close();
        this.paymentFailed = true;
        this.viewTicket = false;
      }
    });
    browser.on('loadstop').subscribe(event => {
      console.log('Page loaded: ', event.url);
    });
    browser.on('exit').subscribe(() => {
      console.log('Browser closed');
    });
  }
  startWebPayment(data) {
    this.submitViaPopup(data.pay_gay_url, data.encRequest, data.access_code);
    // const form = document.createElement('form');
    // form.method = 'POST';
    // form.action = data.pay_gay_url;
    // form.style.display = 'none';
    // const fields:any = {
    //     encRequest: data.encRequest,
    //     access_code: data.access_code
    // };
    // for (const key in fields) {
    //     const input = document.createElement('input');
    //     input.type = 'hidden';
    //     input.name = key;
    //     input.value = fields[key] || '';
    //     form.appendChild(input);
    // }
    // document.body.appendChild(form);
    // form.submit();
  }
  submitViaPopup(url, encRequest, accessCode) {
    const formHtml = `
      <html>
        <body onload="document.forms[0].submit()">
          <form method="POST" action="${url}">
            <input type="hidden" name="encRequest" value="${encRequest}" />
            <input type="hidden" name="access_code" value="${accessCode}" />
          </form>
        </body>
      </html>
    `;
    const blob = new Blob([formHtml], {
      type: 'text/html'
    });
    const blobUrl = URL.createObjectURL(blob);
    // Open the new window with the blob URL
    const newWindow = window.open(blobUrl);
    if (!newWindow) {
      alert('Popup blocked. Please allow popups for this site.');
    }
  }
  gotoPaymentModal(url) {
    var _this8 = this;
    return (0,_home_govindmane_Documents_ionic_customer_app_capacitor_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let modal = yield _this8.modalController.create({
        component: _modal_payment_modal_payment_page__WEBPACK_IMPORTED_MODULE_1__.ModalPaymentPage,
        componentProps: {
          formHtml: _this8.resultScript,
          url: url
        }
      });
      yield modal.present();
    })();
  }
  /**
   * Book round trip method
   */
  bookRoundTicket(platformNumber) {
    var _this9 = this;
    const isPayBitla = this.metaData.pgCharges.some(item => item.pay_gay_type_id === 32);
    if (!this.util.checkConnection()) {
      return false;
    }
    let isEncryptesRes = this.commonStorage.localGet('isEncryptesRes');
    this.loaderService.showLoadingDefault();
    let pathForBooking = "reservation_id=" + this.reservationData.reserveId;
    pathForBooking += "&origin_id=" + this.reservationData.originId;
    pathForBooking += "&destination_id=" + this.reservationData.destinationId;
    pathForBooking += "&boarding_at=" + (this.reservationData.boardingStage ? this.reservationData.boardingStage.id : '');
    pathForBooking += "&drop_off=" + (this.reservationData.droppingStage ? this.reservationData.droppingStage.id : '');
    pathForBooking += "&no_of_seats=" + this.reservationData.selectedSeatsToBook.length;
    if (this.paymentType) if (this.isWPBooking) {
      pathForBooking += "&referral_code=&pay_gay_type=" + 58;
      pathForBooking += "&native_app_type=" + 14;
    } else {
      pathForBooking += "&referral_code=&pay_gay_type=" + this.paymentType;
      pathForBooking += "&native_app_type=" + platformNumber;
    }
    pathForBooking += "&return_reservation_id=" + this.reservationDataReturn.reserveId;
    pathForBooking += "&return_boarding_at=" + (this.reservationDataReturn.boardingStage ? this.reservationDataReturn.boardingStage.id : '');
    pathForBooking += "&return_drop_off=" + (this.reservationDataReturn.droppingStage ? this.reservationDataReturn.droppingStage.id : '');
    pathForBooking += "&no_of_seats_r=" + this.reservationDataReturn.selectedSeatsToBook.length;
    if (this.payFromWallet) {
      pathForBooking += "&is_wallet_booking=true";
    }
    if (this.phoneBooking) {
      pathForBooking += "&is_e_phone_booking=true";
      pathForBooking += "&is_wallet_booking=true";
    }
    if (this.metaData && this.metaData.is_wallet_promotional) {
      pathForBooking += "&is_wallet_promotional=true";
    }
    if (this.wakeUpCall) {
      pathForBooking += "&wake_up_call_applicable=true";
    }
    if (this.isWPSwitchOn) {
      pathForBooking += "&is_whatsapp_update=true";
    }
    if (this.isWPBooking) {
      pathForBooking += "&is_whatsapp_booking=true";
    }
    if (this.virtualPaymentType) {
      pathForBooking += "&v_bank=" + this.virtualId + ',' + this.sId;
    }
    if (this.is_cancel_protect && this.metaData.showCancelProtect) {
      pathForBooking += "&is_cancel_protect=" + this.checkCancelProtect;
    }
    if (isPayBitla) {
      pathForBooking += "&is_required_pay_flow=" + true;
    }
    this.apiFactory.bookETicketRoundTrip(this.passengerDetails, pathForBooking).subscribe(/*#__PURE__*/function () {
      var _ref4 = (0,_home_govindmane_Documents_ionic_customer_app_capacitor_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (result) {
        _this9.loaderService.hideLoadingDefault();
        // console.log("bookTicket ", result);
        if ('is_razorpay_payment' in result) {
          if (result.is_razorpay_payment == true) {
            if (result.amount != null && result.merchant_id != null && result.order_id != null && result.secret_key != null) {
              _this9.payWithRazorpay(result);
              // console.log("hi souvik sir");
            }
          }
        } else if (_this9.paymentType == "55" && !_this9.payFromWallet) {
          console.log("Go To Phonepe ------->");
          let self = _this9;
          if (result.code == 200) {
            if (_this9.appData.isWEBAPP) {
              // window.open(result.payment_link);
              _this9.openInNewTab(result.payment_link);
            } else if (_this9.appData.isIOS && !_this9.appData.isWEBAPP) {
              const browser = _this9.iab.create(result.payment_link + "", '_blank', _this9.options);
              browser.on('loadstart').subscribe(event => {
                // console.log("loadstart -->", event);
                // console.log(event.url, "eventCalling")
                if (event.url.indexOf('ticket-confirm') > -1) {
                  browser.close();
                  _this9.urlGet = event.url.split('?')[1];
                  //  alert(this.urlGet)
                  _this9.getData = _this9.urlGet.split('&');
                  //  alert(this.getData)
                  let obj = [];
                  for (let i = 0; i < _this9.getData.length; i++) {
                    let [firname, secname] = _this9.getData[i].split('=');
                    obj[firname] = secname;
                  }
                  _this9.pnrNumberr = obj.pnr_number.split('_');
                  _this9.is_round_trip = obj.is_round_trip.split('_');
                  if (!_this9.pnrNumberr[1]) {
                    _this9.splitPnr = _this9.pnrNumberr[0];
                  } else {
                    _this9.splitPnr = _this9.pnrNumberr[1];
                  }
                  //  alert(this.splitPnr)
                  if (!_this9.is_round_trip[1]) {
                    _this9.roundTrip = _this9.is_round_trip[0];
                  } else {
                    _this9.roundTrip = _this9.is_round_trip[1];
                  }
                  //  alert(this.roundTrip)
                  // alert()
                  if (_this9.roundTrip) {
                    _this9.clearReturnJourney();
                    if (_this9.metaData.msiteFolder == 'ourbustheme') {
                      _this9.paymentSuccessEvent();
                      _this9.navCtrl.navigateRoot('booking-details', _this9.navigationExtras);
                    }
                    let bookingDetails = {
                      "round_trip_number": _this9.splitPnr
                    };
                    console.log(bookingDetails, "bookingDetails");
                    _this9.commonStorage.localSet('bookedTicketDetails', JSON.stringify(bookingDetails));
                    localStorage.setItem('bookingDetails', _this9.commonStorage.localGet('bookedTicketDetails'));
                    let navigationExtras = {
                      queryParams: {
                        new_booking: true,
                        is_roundTrip: true,
                        hideLocateTrackBus: true
                      }
                    };
                    _this9.navCtrl.navigateRoot('booking-details', navigationExtras);
                  }
                } else if (event.url.indexOf('ticket-cancel') > -1) {
                  self.commonStorage.localRemove('bookedTicketDetails');
                  browser.close();
                  // self.navCtrl.setRoot(TicketDetailsPage, {
                  //   success: false
                  // });
                  // || customerCancellation
                  _this9.viewTicket = false;
                  _this9.paymentFailed = true;
                  if (_this9.metaData.msiteFolder == 'ourbustheme') {
                    _this9.paymentFailureEvent();
                  }
                  // this.util.showAlert("Booking Failed", result.message);
                  //this.commonService.gTrack('bookonlinefailure', "ticket not booked with online payment");
                }
              });
            }
          } else {
            _this9.util.showToast(result.message);
          }
        } else if (_this9.paymentType == "57" && !_this9.payFromWallet) {
          if (result.code == 200) {
            const popover = yield _this9.modalCtrl.create({
              component: _ease_buzz_page_ease_buzz_page_page__WEBPACK_IMPORTED_MODULE_5__.EaseBuzzPagePage,
              componentProps: {
                'result': result
              }
            });
            yield popover.present();
          } else {
            _this9.util.showToast(result.message);
          }
        } else if (_this9.paymentType == "29") {
          _this9.apiFactory.bookOnHoldETicket(result).subscribe(paysuccess => {
            if (paysuccess.code === 200) {}
          });
        } else if (_this9.paymentType != "26" && _this9.paymentType != "37" && result.pay_gay_url && !result.code || result.html_body_contents && !result.pay_gay_url) {
          let form = document.getElementById('payMentGateWayForm');
          // storing the value of response from server to get PNR and other details
          _this9.commonStorage.localSet('bookedTicketDetails', result);
          let formHtml = '';
          for (let key in result) {
            if (result.hasOwnProperty(key)) {
              let value = result[key];
              // console.log("bookTicket --> ", key, value)
              if (key == "passenger_contact_details" || key == "passengers_details") {
                value = encodeURIComponent(value);
              }
              let value2 = '';
              if (value) {
                value2 = value.toString().replace(/\n/g, '');
              }
              formHtml += '<input type="hidden" value="' + value2 + '" id="' + key + '" name="' + key + '"/>';
            }
          }
          if (!(_this9.paymentType == "31")) {
            form.innerHTML = formHtml;
          }
          //this script will be executedd in the InAppBrowser to submit the form
          let payScript = "var form = document.getElementById('ts-app-payment-form-redirect'); ";
          // for version 5 or less payment gateway issue this ` token not working
          //let versionNumber = this.platform && this.platform.version && this.platform.version() ? this.platform.version() : false;
          let dirtyEl = '<input type="hidden" id="page_is_dirty" value="no">';
          payScript += "form.innerHTML = `" + formHtml + dirtyEl + "`;";
          payScript += "form.action = `" + result.pay_gay_url + "`;";
          payScript += "form.method = 'POST';";
          payScript += `var e = document.getElementById("page_is_dirty");`;
          payScript += `if (e.value == "no") {e.value = "yes";form.submit();}`;
          payScript += `else {var retVal = confirm("Are you sure you want to go Back?");if( retVal == true ){window.location = "http://local-cancel";}else{form.submit();} }`;
          let payScript2 = "";
          payScript2 += "var form = document.getElementById('ts-app-payment-form-redirect');";
          payScript2 += "form.innerHTML = `" + formHtml + dirtyEl + "`;";
          payScript += "form.action = `" + result.pay_gay_url + "`;";
          payScript += "form.method = 'POST';";
          payScript2 += `var e = document.getElementById("page_is_dirty");`;
          payScript2 += `if (e.value == "yes") {e.value = "yes";form.submit();}`;
          payScript2 += `else {var retVal = confirm("Are you sure you want to go Back?");if( retVal == true ){window.location = "http://local-cancel";}else{form.submit();} }`;
          // InAppBrowser will work in the app
          if (result.html_body_contents && !result.pay_gay_url) {
            let parser = new DOMParser();
            let doc = parser.parseFromString(result.html_body_contents, "text/xml");
            payScript = "var form = document.getElementById('ts-app-payment-form-redirect-div');";
            payScript += "form.innerHTML = '" + doc + "';";
            payScript2 = payScript;
          }
          if ((_this9.platform.is('cordova') || _this9.platform.is('android') || _this9.platform.is('ios')) && !_this9.appData.isWEBAPP) {
            const browser = _this9.iab.create(_this9.appData.BASE_URL + "bookings/payment_gateway_redirect_page", '_blank', 'transitionstyle=fliphorizontal,location=no,toolbarposition=top,closebuttoncaption=X');
            let self = _this9;
            let track = 0;
            let prevUrl = '';
            browser.on('loadstart').subscribe(event => {
              if (event.url.indexOf("payment_gateway_redirect_page") > -1 && prevUrl.indexOf("payment_gateway_redirect_page") > -1) {
                track = 0;
              }
              //check the requested url if success the show success and ticket details
              if (event.url.indexOf("status=0") > -1 || event.url.indexOf("pnr_number") > -1) {
                // console.log('gate')
                let pnrNumber = self.commonStorage.localGet('bookedTicketDetails').round_trip_number;
                browser.close();
                _this9.viewTicket = true;
                if (_this9.metaData.msiteFolder == 'ourbustheme') {
                  _this9.paymentSuccessEvent();
                  _this9.navCtrl.navigateRoot('booking-details', _this9.navigationExtras);
                }
                _this9.commonStorage.localSet('bookedTicketDetails', result);
                //this.commonService.gTrack('bookonlinesuccess', "ticket booking with online payment success");
                _this9.firebaseAnalyticsService.logCustomEvent('payment_success', {
                  page: 'Payment Details Page'
                });
                localStorage.setItem('bookingDetails', JSON.stringify(self.commonStorage.localGet('bookedTicketDetails')));
                let navigationExtras = {
                  queryParams: {
                    new_booking: true,
                    is_roundTrip: true,
                    hideLocateTrackBus: true
                  }
                };
                _this9.navigationExtras = navigationExtras;
              } else if (event.url.indexOf("ticket_failure") > -1 || event.url.indexOf("status=1") > -1 || event.url.indexOf("customerCancellation") > -1 || event.url.indexOf("www.ticketsimply.com") > -1) {
                self.commonStorage.localRemove('bookedTicketDetails');
                browser.close();
                //this.commonService.gTrack('bookonlinefailure', "ticket not booked with online payment");
                _this9.firebaseAnalyticsService.logCustomEvent('payment_failed', {
                  page: 'Payment Details Page'
                });
                _this9.paymentFailed = true;
                _this9.viewTicket = false;
                if (_this9.metaData.msiteFolder == 'ourbustheme') {
                  _this9.paymentFailureEvent();
                }
              } else if (event.url.indexOf("local-cancel") > -1) {
                self.navCtrl.pop();
                setTimeout(() => {
                  browser.close();
                }, 500);
              }
            });
            //on url load stop
            browser.on('loadstop').subscribe(function (event) {
              browser.executeScript({
                code: "var key = 'hidden'; var keyval = 'yes'; localStorage.setItem('hidden',''); var button = document.createElement('Button'); button.innerHTML = 'Hide Map'; button.style = 'top:0;right:0;position:fixed;'; document.body.appendChild(button); button.setAttribute('onclick','localStorage.setItem(key,keyval);');"
              });
              var loop = setInterval(function () {
                browser.executeScript({
                  code: "localStorage.getItem( 'hidden' )"
                }), function (values) {
                  var hidden = values[0];
                  if (hidden === 'yes') {
                    clearInterval(loop);
                    browser.hide();
                  }
                };
              });
              prevUrl = event.url;
              if (self.platform.is('android')) browser.insertCSS({
                code: "input{-webkit-user-select: none !important;}input[type=submit],input[type=button]{-webkit-user-select: auto !important;}"
              });
              if (track <= 0) {
                browser.executeScript({
                  code: payScript
                });
              } else {
                browser.executeScript({
                  code: payScript2
                });
              }
              track++;
              // console.log("loadstart -->", event);
            });
            //on closing the browser
            browser.on('exit').subscribe(function (event) {
              browser.executeScript({
                code: payScript
              });
              // console.log("exit -->", event);
            });
          } else
            // web browser
            {
              // console.log('web browser -->');
              form.action = result.pay_gay_url;
              form.method = "POST";
              // console.log("form ", form.toString());
              form.submit();
            }
        } else if (_this9.paymentType == '45' && result.merchant_id && result.code != '443') {
          var halfKey = _this9.emcription(_this9.metaData.serverDate, _this9.metaData.subdomain);
          let marchantKey = atob(result.merchant_id);
          marchantKey = marchantKey.replace(halfKey, '');
          if (_this9.appData.isWEBAPP) {
            var options = {
              "features": {
                "enableExpressPay": true,
                "enableInstrumentDeRegistration": true,
                "enableMerTxnDetails": true,
                "enableNewWindowFlow": true
              },
              "consumerData": {
                "deviceId": "WEBSH2",
                //supported values "ANDROIDSH1" or "ANDROIDSH2" for Android and supported values "iOSSH1" or "iOSSH2" for iOS
                "token": result.token,
                "paymentMode": result.payment_mode,
                "merchantLogoUrl": "https://www.paynimo.com/CompanyDocs/company-logo-vertical-light.png",
                //provided merchant logo will be displayed
                "merchantId": marchantKey,
                "currency": "INR",
                "consumerId": result.consumer_id,
                "consumerMobileNo": result.consumer_mobile_no,
                "consumerEmailId": result.consumer_email_id,
                "txnId": result.txn_id,
                //Unique merchant transaction ID
                "items": [{
                  "itemId": "FIRST",
                  "amount": result.amount,
                  // "comAmt": result.Amount
                  // "amount": "10",
                  "comAmt": "0"
                }],
                "customStyle": {
                  "PRIMARY_COLOR_CODE": "#45beaa",
                  //merchant primary color code
                  "SECONDARY_COLOR_CODE": "#FFFFFF",
                  //provide merchant"s suitable color code
                  "BUTTON_COLOR_CODE_1": "#2d8c8c",
                  //merchant"s button background color code
                  "BUTTON_COLOR_CODE_2": "#FFFFFF" //provide merchant"s suitable color code for button text
                }
              }
            };
            var paymentCallback = response => {
              let techSuccessMsg = response.msg;
              let splitPnr = techSuccessMsg.split('|')[3];
              let msgCase = techSuccessMsg.split('|')[0];
              if (msgCase == '0300') {
                var halfKey = _this9.emcription(_this9.metaData.serverDate, _this9.metaData.subdomain);
                let message = btoa(techSuccessMsg);
                message = message.replace(halfKey, '');
                let bookingDetails = {
                  "round_trip_number": splitPnr
                };
                _this9.clearReturnJourney();
                _this9.viewTicket = true;
                if (_this9.metaData.msiteFolder == 'ourbustheme') {
                  _this9.paymentSuccessEvent();
                  _this9.navCtrl.navigateRoot('booking-details', _this9.navigationExtras);
                }
                _this9.commonStorage.localSet('bookedTicketDetails', JSON.stringify(bookingDetails));
                //this.commonService.gTrack('bookonlinesuccess', "ticket booking with online payment success");
                localStorage.setItem('bookingDetails', _this9.commonStorage.localGet('bookedTicketDetails'));
                let navigationExtras = {
                  queryParams: {
                    new_booking: true,
                    is_roundTrip: true
                  }
                };
                _this9.navigationExtras = navigationExtras;
                _this9.navigationExtras = navigationExtras;
                _this9.apiFactory.techProcessCall(splitPnr, message).subscribe(result => {}, err => {});
              } else if (msgCase != '0300' || !msgCase) {
                _this9.paymentFailed = true;
                _this9.viewTicket = false;
                if (_this9.metaData.msiteFolder == 'ourbustheme') {
                  _this9.paymentFailureEvent();
                }
              }
            };
            var errorCallback = error => {
              _this9.paymentFailed = true;
              _this9.viewTicket = false;
              if (_this9.metaData.msiteFolder == 'ourbustheme') {
                _this9.paymentFailureEvent();
              }
            };
            WLCheckout.open(options, paymentCallback, errorCallback);
          } else if (_this9.appData.isIOS) {
            var options = {
              "features": {
                "enableExpressPay": true,
                "enableInstrumentDeRegistration": true,
                "enableMerTxnDetails": true,
                "enableNewWindowFlow": false
              },
              "consumerData": {
                "deviceId": "iOSSH2",
                //supported values "ANDROIDSH1" or "ANDROIDSH2" for Android and supported values "iOSSH1" or "iOSSH2" for iOS
                "token": result.token,
                "paymentMode": result.payment_mode,
                "merchantLogoUrl": "https://www.paynimo.com/CompanyDocs/company-logo-vertical-light.png",
                //provided merchant logo will be displayed
                "merchantId": marchantKey,
                "currency": "INR",
                "consumerId": result.consumer_id,
                "consumerMobileNo": result.consumer_mobile_no,
                "consumerEmailId": result.consumer_email_id,
                "txnId": result.txn_id,
                //Unique merchant transaction ID
                "items": [{
                  "itemId": "FIRST",
                  "amount": result.amount,
                  // "comAmt": result.Amount
                  // "amount": "10",
                  "comAmt": "0"
                }],
                "customStyle": {
                  "PRIMARY_COLOR_CODE": "#45beaa",
                  //merchant primary color code
                  "SECONDARY_COLOR_CODE": "#FFFFFF",
                  //provide merchant"s suitable color code
                  "BUTTON_COLOR_CODE_1": "#2d8c8c",
                  //merchant"s button background color code
                  "BUTTON_COLOR_CODE_2": "#FFFFFF" //provide merchant"s suitable color code for button text
                }
              }
            };
            var paymentCallback = response => {
              let techSuccessMsg = JSON.parse(response).msg;
              let splitPnr = techSuccessMsg.split('|')[3];
              let msgCase = techSuccessMsg.split('|')[0];
              if (msgCase == '0300') {
                var halfKey = _this9.emcription(_this9.metaData.serverDate, _this9.metaData.subdomain);
                let message = btoa(techSuccessMsg);
                message = message.replace(halfKey, '');
                let bookingDetails = {
                  "round_trip_number": splitPnr
                };
                _this9.clearReturnJourney();
                _this9.viewTicket = true;
                if (_this9.metaData.msiteFolder == 'ourbustheme') {
                  _this9.paymentSuccessEvent();
                  _this9.navCtrl.navigateRoot('booking-details', _this9.navigationExtras);
                }
                _this9.commonStorage.localSet('bookedTicketDetails', JSON.stringify(bookingDetails));
                //this.commonService.gTrack('bookonlinesuccess', "ticket booking with online payment success");
                localStorage.setItem('bookingDetails', _this9.commonStorage.localGet('bookedTicketDetails'));
                let navigationExtras = {
                  queryParams: {
                    new_booking: true,
                    is_roundTrip: true
                  }
                };
                _this9.navigationExtras = navigationExtras;
                _this9.navigationExtras = navigationExtras;
                _this9.apiFactory.techProcessCall(splitPnr, message).subscribe(result => {}, err => {});
              } else if (msgCase != '0300' || !msgCase) {
                _this9.paymentFailed = true;
                _this9.viewTicket = false;
                if (_this9.metaData.msiteFolder == 'ourbustheme') {
                  _this9.paymentFailureEvent();
                }
              }
            };
            var errorCallback = error => {
              //   alert(error);
              _this9.paymentFailed = true;
              _this9.viewTicket = false;
              if (_this9.metaData.msiteFolder == 'ourbustheme') {
                _this9.paymentFailureEvent();
              }
            };
            WLCheckout.open(options, paymentCallback, errorCallback);
          }
        } else if (result.code == 200 && _this9.isWPBooking) {
          _this9.commonStorage.localRemove('isWPBooking');
          _this9.commonStorage.localRemove('wpMobileNo');
          // this.util.showAlert('', result.message)
          // const phone = '9876543210';
          // if(this.appData.isIndia){
          const url = `https://api.whatsapp.com/send/?phone=${_this9.metaData.operatorWPNum}`;
          window.location.href = url;
          // }
        } else if (result.code == 422) {
          _this9.accountDeRegisterAlert("", result.message);
        } else if (result.code == 443 && _this9.isWPBooking) {
          _this9.util.showToast(result.message);
        } else {
          if (!result.code && result.ticket_number) {
            _this9.clearReturnJourney();
            _this9.commonStorage.localSet('bookedTicketDetails', result);
            localStorage.setItem('bookingDetails', JSON.stringify(result));
            _this9.viewTicket = true;
            if (_this9.metaData.msiteFolder == 'ourbustheme') {
              _this9.paymentSuccessEvent();
              let navigationExtras = {
                queryParams: {
                  new_booking: 'true',
                  is_roundTrip: true
                }
              };
              _this9.navigationExtras = navigationExtras;
              _this9.navCtrl.navigateRoot('booking-details', _this9.navigationExtras);
            } else {
              let navigationExtras = {
                queryParams: {
                  new_booking: true,
                  is_roundTrip: true
                }
              };
              _this9.navigationExtras = navigationExtras;
              //   this.navCtrl.navigateRoot('booking-details', this.navigationExtras)
            }
          } else if (!result.code && result.is_mobile && result.ts_booking_type) {
            let navigationExtras = {
              queryParams: {
                new_booking: true,
                is_roundTrip: true,
                hideLocateTrackBus: true
              }
            };
            _this9.navigationExtras = navigationExtras;
          } else if (result.code == 443) {
            _this9.walletNoteModal = true;
            var msg = result.message;
            if (msg.indexOf("sufficient") !== -1) {
              // yes
              _this9.isShowWalletBtn = true;
            } else {
              _this9.isShowWalletBtn = false;
            }
            _this9.walletMessage = result.message;
          } else {
            _this9.paymentFailed = false;
            _this9.util.showAlerts("Booking Failed", result.message);
            if (_this9.metaData.msiteFolder == 'ourbustheme') {
              _this9.paymentFailureEvent();
            }
          }
        }
      });
      return function (_x4) {
        return _ref4.apply(this, arguments);
      };
    }(), err => {
      this.loaderService.hideLoadingDefault();
      if (!this.util.isConnected()) {
        this.util.showAlerts("Error Loading", "Internet not connected please connect the internect and try after again");
      } else {
        this.util.showAlerts("Error Loading", "Something went wrong please try after some time");
      }
      this.ex.call('PaymentDetailsPage', 'bookTicket() --> this.apiFactory.bookETicket(passengersData,pathForBooking)', err, '');
    });
  }
  /**
  * create validation rules for cooupon details
  */
  couponValidations() {
    this.couponForm = this.formBuilder.group({
      couponCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_27__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_27__.Validators.required])]
      // couponEmail: ['', Validators.compose([ValidatorService.emailValidator, Validators.required])],
    });
  }
  /**
    * create validation rules for cooupon details
    */
  quoteValidations() {
    try {
      this.quotePnrForm = this.formBuilder.group({
        mobileno: [+this.passengerDetails.contact_detail.mobile_number, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_27__.Validators.required])],
        pnrnumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_27__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_27__.Validators.required])]
      });
    } catch (e) {}
  }
  paymentTypeValidation() {
    this.paymentTypeForm = this.formBuilder.group({
      paymentType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_27__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_27__.Validators.required])]
    });
  }
  /**
   * coupon form validation
   */
  couponFormIsValid() {
    if (this.showCouponForm()) {
      if (this.couponForm.invalid) {
        this.couponErrors = true;
        if (this.couponForm.controls.couponCode.invalid) {
          if (this.localdata.allow_cash_coupon_validation_with_phone_number) {
            if (this.emailNumber == null || this.emailNumber == '') {
              this.util.showToast('Please enter the Coupon Code and Email or number ', 'bottom');
            }
          } else {
            if (this.emailNumber == null || this.emailNumber == '') {
              this.util.showToast('Please enter the Coupon Code and Email or number ', 'bottom');
            }
          }
          if (this.emailNumber && this.emailNumber !== null && this.emailNumber !== '') {
            if (this.couponForm.controls.couponCode.value == null || this.couponForm.controls.couponCode.value == '') {
              this.util.showToast('Please enter the Coupon Code');
            }
          }
        } else if (this.couponForm.controls.couponCode.invalid) {
          this.util.showToast('Please enter the Coupon Code ', 'bottom');
        }
        return false;
      }
      this.couponErrors = false;
    }
    return true;
  }
  /**
    * quote pnr form validation
    */
  quoteFormIsValid() {
    if (this.showQuotePnrForm()) {
      if (this.quotePnrForm.invalid) {
        this.quoteErrors = true;
        if (this.quotePnrForm.controls.pnrnumber.invalid) {
          this.util.showToast('Please enter the pnr number  ', 'bottom');
        } else if (this.quotePnrForm.controls.mobileno.invalid) {
          this.util.showToast('Please enter the mobile number ', 'bottom');
        }
        return false;
      }
      this.quoteErrors = false;
    }
    return true;
  }
  payWithRazorpay(ticketData) {
    var _this0 = this;
    return (0,_home_govindmane_Documents_ionic_customer_app_capacitor_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let imageUrl = '';
      if (_this0.metaData.msiteFolder == 'ourbustheme') {
        imageUrl = _this0.metaData.favicon ? _this0.metaData.favicon : 'https://i.imgur.com/3g7nmJC.png';
      } else {
        imageUrl = _this0.metaData.favicon ? _this0.metaData.favicon : 'https://i.imgur.com/3g7nmJC.png';
      }
      let halfKey = _this0.emcription(_this0.metaData.serverDate, _this0.metaData.subdomain);
      let merchantKey = atob(ticketData.merchant_id).replace(halfKey, '');
      let options = {
        description: 'Credits towards consultation',
        image: imageUrl,
        order_id: ticketData.order_id,
        currency: 'INR',
        key: merchantKey,
        amount: ticketData.amount,
        prefill: {
          email: ticketData.email_id,
          contact: ticketData.phone_no,
          name: ticketData.passenger_name
        },
        theme: {
          color: '#3399cc'
        }
      };
      console.log("options", options);
      try {
        const success = yield capacitor_razorpay__WEBPACK_IMPORTED_MODULE_7__.Checkout.open(options);
        console.log("Razorpay Success Response:", success);
        let successData;
        if (typeof success.response === 'string') {
          successData = JSON.parse(success.response); // Convert JSON string to object
        } else {
          successData = success.response;
        }
        const razorpayPaymentId = successData.razorpay_payment_id;
        if (!razorpayPaymentId) {
          throw new Error("Payment ID not received from Razorpay.");
        }
        _this0.firebaseAnalyticsService.logCustomEvent('razorpay_payment_success', {
          page: 'Payment Details Page'
        });
        _this0.apiFactory.paymentSuccessCall(ticketData.pnr_number, razorpayPaymentId).subscribe(result => {
          if (_this0.metaData.msiteFolder == 'ourbustheme') {
            _this0.paymentSuccessEvent();
          }
          console.log("Payment Success Logged");
        }, err => console.error("Payment Success Error", err));
        if (_this0.isReturn) {
          _this0.viewTicket = true;
          _this0.clearReturnJourney();
          _this0.commonStorage.localSet('bookedTicketDetails', ticketData);
          //this.commonService.gTrack('bookonlinesuccess', "ticket booking with online payment success");
          localStorage.setItem('bookingDetails', JSON.stringify(_this0.commonStorage.localGet('bookedTicketDetails')));
          if (_this0.metaData.msiteFolder == 'ourbustheme') {
            let navigationExtras = {
              queryParams: {
                new_booking: 'true',
                is_roundTrip: true
              }
            };
            _this0.navigationExtras = navigationExtras;
            _this0.navigationExtras = navigationExtras;
            _this0.navigateWithLoader();
          } else {
            let navigationExtras = {
              queryParams: {
                new_booking: true,
                is_roundTrip: true
              }
            };
            _this0.navigationExtras = navigationExtras;
            _this0.navigationExtras = navigationExtras;
            // this.navigateWithLoader();
          }
        } else {
          if (_this0.metaData.msiteFolder == 'ourbustheme') {
            localStorage.setItem('bookingDetails', JSON.stringify(ticketData));
            let navigationExtras = {
              queryParams: {
                new_booking: 'true',
                hideLocateTrackBus: false
              }
            };
            _this0.navigationExtras = navigationExtras;
          } else {
            localStorage.setItem('bookingDetails', JSON.stringify(ticketData));
            let navigationExtras = {
              queryParams: {
                new_booking: true,
                hideLocateTrackBus: false
              }
            };
            _this0.navigationExtras = navigationExtras;
          }
          _this0.paymentFailed = false;
          _this0.viewTicket = true;
          if (_this0.metaData.msiteFolder == 'ourbustheme') {
            _this0.navigateWithLoader();
          }
        }
      } catch (error) {
        console.error("Razorpay Payment Failed:", error);
        if (_this0.metaData.msiteFolder == 'ourbustheme') {
          _this0.paymentFailedLoader();
        } else {
          _this0.firebaseAnalyticsService.logCustomEvent('razorpay_payment_failed', {
            page: 'Payment Details Page'
          });
          _this0.paymentFailed = true;
        }
        _this0.viewTicket = false;
        _this0.apiFactory.paymentFailureCall(ticketData.pnr_number, ticketData.order_id).subscribe(result => {}, err => {});
      }
    })();
  }
  // old code
  // payWithRazorpay(ticketData:any) {
  //     let imageUrl = '';
  //     if(this.metaData.msiteFolder == 'ourbustheme'){
  //       imageUrl = this.metaData.favicon ? this.metaData.favicon : 'https://i.imgur.com/3g7nmJC.png';
  //     }else{
  //       imageUrl = this.metaData.favicon ? this.metaData.favicon : 'https://i.imgur.com/3g7nmJC.png';
  //     }
  //     var halfKey = this.emcription(this.metaData.serverDate, this.metaData.subdomain);
  //     let marchantKey = atob(ticketData.merchant_id);
  //     marchantKey = marchantKey.replace(halfKey, '');
  //     var options = {
  //         description: 'Credits towards consultation',
  //         image: imageUrl,
  //         order_id: ticketData.order_id,
  //         currency: 'INR',
  //         key: marchantKey,
  //         amount: ticketData.amount,
  //         prefill: {
  //             email: ticketData.email_id,
  //             contact: ticketData.phone_no,
  //             name: ticketData.passenger_name
  //         },
  //         theme: {
  //             color: '#3399cc'
  //         }
  //     }
  //     console.log("options",options);
  //     var successCallback = (success:any) => {
  //         this.firebaseAnalyticsService.logCustomEvent('razorpay_payment_success', { page: 'Payment Details Page' });
  //         this.apiFactory.paymentSuccessCall(ticketData.pnr_number, success.razorpay_payment_id)
  //             .subscribe(
  //                 result => {
  //                 },
  //                 err => {
  //                 }
  //             );
  //         var orderId = success.razorpay_order_id
  //         var signature = success.razorpay_signature
  //         if (this.isReturn) {
  //             this.viewTicket = true;
  //             this.clearReturnJourney();
  //             this.commonStorage.localSet('bookedTicketDetails', ticketData);
  //             //this.commonService.gTrack('bookonlinesuccess', "ticket booking with online payment success");
  //             localStorage.setItem('bookingDetails', JSON.stringify(this.commonStorage.localGet('bookedTicketDetails')));
  //             if(this.metaData.msiteFolder == 'ourbustheme'){
  //                 let navigationExtras: NavigationExtras = {
  //                     queryParams: {
  //                         new_booking: 'true',
  //                         is_roundTrip: true
  //                     }
  //                 };
  //                 this.navigationExtras = navigationExtras;
  //                 this.navigationExtras = navigationExtras;
  //                 this.navigateWithLoader();
  //             }else{
  //                 let navigationExtras: NavigationExtras = {
  //                     queryParams: {
  //                         new_booking: true,
  //                         is_roundTrip: true
  //                     }
  //                 };
  //                 this.navigationExtras = navigationExtras;
  //                 this.navigationExtras = navigationExtras;
  //                 this.navigateWithLoader();
  //             }
  //         }
  //          else {
  //             if(this.metaData.msiteFolder == 'ourbustheme'){
  //                 localStorage.setItem('bookingDetails', JSON.stringify(ticketData));
  //                 let navigationExtras: NavigationExtras = {
  //                     queryParams: {
  //                         new_booking: 'true',
  //                         hideLocateTrackBus: false
  //                     }
  //                 };
  //                 this.navigationExtras = navigationExtras;
  //             }else{
  //                 localStorage.setItem('bookingDetails', JSON.stringify(ticketData));
  //                 let navigationExtras: NavigationExtras = {
  //                     queryParams: {
  //                         new_booking: true,
  //                         hideLocateTrackBus: false
  //                     }
  //                 };
  //                 this.navigationExtras = navigationExtras;
  //             }
  //             this.paymentFailed = false;
  //             this.viewTicket = true;
  //             if(this.metaData.msiteFolder == 'ourbustheme'){
  //                 this.navigateWithLoader();
  //             }
  //         }
  //     }
  //     var cancelCallback = (error:any) => {
  //         if(this.metaData.msiteFolder == 'ourbustheme'){
  //             this.paymentFailedLoader();
  //         }else{
  //             this.firebaseAnalyticsService.logCustomEvent('razorpay_payment_failed', { page: 'Payment Details Page' });
  //             this.paymentFailed = true;
  //         }
  //         this.viewTicket = false;
  //         this.apiFactory.paymentFailureCall(ticketData.pnr_number, ticketData.order_id)
  //             .subscribe(
  //                 result => {
  //                 },
  //                 err => {
  //                 }
  //             );
  //     }
  //     RazorpayCheckout.on('payment.success', successCallback)
  //     RazorpayCheckout.on('payment.cancel', cancelCallback)
  //     RazorpayCheckout.open(options)
  // }
  navigateWithLoader() {
    var _this1 = this;
    return (0,_home_govindmane_Documents_ionic_customer_app_capacitor_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this1.loadingController.create({
        message: 'Please wait...',
        duration: 4000
      });
      yield loading.present();
      loading.onDidDismiss().then(() => {
        _this1.navCtrl.navigateRoot('booking-details', _this1.navigationExtras);
      });
    })();
  }
  paymentFailedLoader() {
    var _this10 = this;
    return (0,_home_govindmane_Documents_ionic_customer_app_capacitor_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this10.loadingController.create({
        message: 'Please wait...',
        duration: 2000
      });
      yield loading.present();
      loading.onDidDismiss().then(() => {
        _this10.cdr.detectChanges();
        _this10.firebaseAnalyticsService.logCustomEvent('razorpay_payment_failed', {
          page: 'Payment Details Page'
        });
        _this10.paymentFailed = true;
        _this10.paymentFailureEvent();
        _this10.cdr.detectChanges();
      });
    })();
  }
  /**
   * check if coupon  is  Already applied
   */
  isDuplicateCoupon() {
    // console.log("duplicate > ", this.couponForm, this.couponForm.value.couponCode);
    if (this.couponAplied.length > 0) {
      for (let coupon of this.couponAplied) {
        if (this.couponForm.value.couponCode == coupon.couponCode) {
          this.util.showToast('Coupon Already Added', 'bottom');
          this.couponErrors = true;
          return true;
        }
      }
    }
    return false;
  }
  /**
   * check if coupon  is  aplied
   */
  isCouponApplied() {
    if (this.showCouponForm()) {
      this.util.showToast('Please Click on apply Button (Button with Tick mark right to email) to apply coupon', 'bottom');
      return false;
    }
    return true;
  }
  /**
   * check if coopon  is valid
   */
  couponIsValid() {
    if (this.haveCoupons) {
      return !this.couponErrors;
    }
    return true;
  }
  /**
    * check if quote pnr  is  aplied
    */
  ispnrApplied() {
    if (this.showQuotePnrForm()) {
      this.util.showToast('Please Click on apply Button (Button with Tick mark right to email) to apply quote PNR', 'bottom');
      return false;
    }
    return true;
  }
  /**
   * check if quote pnr  is valid
   */
  pnrIsValid() {
    if (this.quotepnr) {
      return !this.quoteErrors;
    }
    return true;
  }
  pnrFormValid() {
    if (this.quotepnr && !this.pnrDiscountAplied) {
      if (this.quotePnrForm.controls.pnrnumber.invalid && this.quotePnrForm.controls.mobileno.invalid) {
        this.util.showToast('Please enter pnr and mobile number', 'bottom');
        return false;
      } else if (this.quotePnrForm.controls.pnrnumber.invalid) {
        this.util.showToast('Please enter the pnr number  ', 'bottom');
        return false;
      } else if (this.quotePnrForm.controls.mobileno.invalid) {
        this.util.showToast('Please enter the mobile number ', 'bottom');
        return false;
      }
      this.util.showToast('Please click on apply button (Button with Tick mark right to mobile number) to apply quote PNR', 'bottom');
      return false;
    }
    return true;
  }
  /**
   * check if payment form is valid
   */
  paymentFormIsValid() {
    if (this.bookOnline) {
      if (!this.paymentType) {
        this.util.showToast('Please select the Payment option', 'bottom');
        return false;
      }
      return true;
    }
    return true;
  }
  /**
   * calculat the coupon ammount
   */
  calculatCouponAmount() {
    let couponAmount = 0;
    for (let coupon of this.couponAplied) {
      couponAmount += coupon.couponAmount;
    }
    this.couponAmount = couponAmount;
    // console.log('calculatCouponAmount()', this.couponAplied);
    this.netBookingAmount = this.netBookingAmountBeforeCoupon - this.couponAmount < 0 ? 0 : this.netBookingAmountBeforeCoupon - this.couponAmount;
    this.calculatePgCharges(this.paymentType);
    if (this.offerType == '5') {
      this.checkOfferCoupon(this.offerCoupon);
      this.calculateOfferDiscount();
    }
    this.getFare();
    return couponAmount;
  }
  showCouponForm() {
    return (this.isAddCoupon || this.couponAplied.length <= 0) && this.haveCoupons;
  }
  showQuotePnrForm() {
    return this.quotepnr && !this.pnrDiscountAplied;
  }
  termsAndConditions() {
    // this.navCtrl.push(CancellationPoliciesPage, { className: 'termsClass' })
  }
  /**
   * check if payable amount less than 0. then not apply coupon
   */
  isNetPayableAmountLessThanZero() {
    if (this.fareDetails.netBookingAmount <= 0) {
      this.util.showToast('cannot apply coupon Net Payble amount is equal to zero', 'bottom');
      return true;
    }
    return false;
  }
  //open origin cities modal box
  openPaymentModel(formHtml, payUrl) {
    let navigationExtras = {
      queryParams: {
        new_booking: true
      }
    };
    this.viewTicket = true;
    if (this.metaData.msiteFolder == 'ourbustheme') {
      this.navCtrl.navigateRoot('booking-details', this.navigationExtras);
    }
    this.navigationExtras = navigationExtras;
  }
  moreLess() {
    this.moreDetailsOpen = !this.moreDetailsOpen;
  }
  prepareGateways(paymetTypes) {
    this.bankingPayments = paymetTypes.filter(it => it.id.indexOf('4') < 0);
    this.walletPayments = paymetTypes.filter(it => it.id.indexOf('4') >= 0);
  }
  isOpenPaymentOptions(type) {
    if (this.paymentOptionOpen == type) {
      return true;
    }
    return false;
  }
  OpenPaymentOptions(type) {
    if (this.paymentOptionOpen == type) {
      this.paymentOptionOpen = '';
    } else {
      this.paymentOptionOpen = type;
    }
  }
  moreLessFare() {
    this.moreDetailsFareOpen = !this.moreDetailsFareOpen;
  }
  //------------------------------------- methods for otp ------------------------------------
  checkOtp() {
    this.otpInput = null;
    this.otpShow = true;
  }
  resendOtp() {
    this.otpInput = null;
    this.loaderService.showLoadingDefault();
    this.apiFactory.resendOtp(this.couponForm.value.couponCode, this.emailNumber).subscribe(result => {
      this.loaderService.hideLoadingDefault();
      if (result[0].code == 201 || result[0].code == 200) {
        this.couponOtpDetails = result[0];
        this.util.showToast('Otp Sent');
      } else {
        // if there is some error code then show the message
        this.util.showToast(result.message);
      }
    }, err => {
      this.loaderService.hideLoadingDefault();
      if (!this.util.isConnected()) {
        this.util.showAlerts("Error Loading", "Internet not connected please connect the internect and try after again");
      } else {
        this.util.showAlerts("Error Loading", "Something went wrong please try after some time");
      }
      this.ex.call('PaymentDetailsPage', 'resendOtp() --> this.apiFactory.resendOtp(this.couponForm.value.couponCode,this.couponForm.value.couponEmail)', err, '');
    });
  }
  validateOtp() {
    if (this.otpInputIsValid()) {
      this.loaderService.showLoadingDefault();
      this.apiFactory.validateOtpCoupon(this.couponForm.value.couponCode, this.otpInput, this.couponOtpDetails.key).subscribe(result => {
        try {
          this.loaderService.hideLoadingDefault();
          if (result[0].code && result[0].code != 200) {
            // if there is some error code then show the message
            this.couponInvalidMsg = result.message;
            this.couponErrors = true;
            this.util.showAlerts('', result[0].message);
          } else {
            // else add the coupon and mins the net payable amount
            //push into the request data
            if (this.numberCheck.test(this.emailNumber)) {
              this.passengerDetails.coupon_details.push({
                coupon_code: this.couponForm.value.couponCode,
                phone_number: this.emailNumber
              });
            } else {
              this.passengerDetails.coupon_details.push({
                coupon_code: this.couponForm.value.couponCode,
                email: this.emailNumber
              });
            }
            // this.passengerDetails.coupon_details.push({
            //     coupon_code: this.couponForm.value.couponCode,
            //     email:this.emailNumber
            // });
            //push into the coupon applied array to show the coupon
            this.couponAplied.push({
              couponCode: this.couponForm.value.couponCode,
              couponAmount: result[0].coupon_amount
            });
            this.couponInvalidMsg = null;
            this.couponErrors = false;
            this.isAddCoupon = false;
            this.couponForm.controls['couponCode'].setValue(''); //reset coupon code after success
            this.calculatCouponAmount();
            this.otpShow = false;
          }
        } catch (e) {
          this.util.showToast('Failure');
        }
      }, err => {
        this.loaderService.hideLoadingDefault();
        if (!this.util.isConnected()) {
          this.util.showAlerts("Error Loading", "Internet not connected please connect the internect and try after again");
        } else {
          this.util.showAlerts("Error Loading", "Something went wrong please try after some time");
        }
        this.ex.call('PaymentDetailsPage', 'validateOtp() --> this.apiFactory.validateOtpCoupon(this.couponForm.value.couponCode,this.otpInput,this.couponOtpDetails.key)', err, '');
      });
    }
  }
  otpInputIsValid() {
    if (this.otpInput) {
      return true;
    }
    this.util.showToast('Please enter the otp');
    return false;
  }
  getMetaData() {}
  calculatePgCharges(id) {
    let pgCharges = this.metaData.pgCharges;
    this.pgType = pgCharges.find(it => {
      if (it.pay_gay_type_id == id) {
        return it;
      }
    });
    // console.log('this.pgType --------------------------->', this.pgType);
    if (this.pgType && this.pgType.transaction_type) {
      if (this.pgType.transaction_type.toUpperCase() == 'NONE') {
        this.pgChargesAmount = 0;
      } else if (this.pgType.transaction_type.toUpperCase() == 'PERCENTAGE') {
        this.pgChargesAmount = this.pgType.transaction_charges * this.netBookingAmount / 100;
      } else if (this.pgType.transaction_type.toUpperCase() == 'FIXED') {
        this.pgChargesAmount = this.pgType.transaction_charges;
      }
    }
  }
  virtualAccTransfer(id) {
    this.virtualId = id.Id, this.sId = id.S_Id;
  }
  isOfferCoup() {
    if (this.isBima) return false;
    if (this.offerCoupons) {
      for (let i = 0; i < this.offerCoupons.length; i++) {
        if (this.offerCoupons[i]['description']) return true;
      }
    }
    return false;
  }
  isPromoCoup() {
    if (this.isBima) {
      return false;
    }
    for (let i = 0; i < this.promoCoupons.length; i++) {
      if (this.promoCoupons[i]['description']) {
        return true;
      }
    }
    return true;
  }
  onPhoneChange(ev) {
    let mob = this.passengerDetails.passenger_gst_details.gst_id.toString();
    if (mob.length > 15) {
      this.passengerDetails.passenger_gst_details.gst_id = mob.substr(0, 15);
    }
  }
  getNetPayablePhoneBook() {
    let totalAmt = this.getFareAmount() + this.convenienceChargesAmount + this.convenienceChargesAmountReturn + this.pgChargesAmount + this.calculateGst() + this.calculateGst(true) - (this.discountAmount + this.discountAmountReturn + this.pnrDiscountAmount) - this.couponAmount;
    return this.commonService.roundToXDigits(this.commonService.calculateAmountByPercentage(totalAmt, 10), 0).toFixed(2);
  }
  getPayableAmount() {
    let amount = this.getFareAmount() + this.convenienceChargesAmount + this.convenienceChargesAmountReturn + this.pgChargesAmount + this.calculateGst() + this.calculateGst(true) - (this.discountAmount + this.discountAmountReturn + this.pnrDiscountAmount) - this.couponAmount;
    if (this.convenienceChargesAmount + this.convenienceChargesAmountReturn > 0) {
      return this.commonService.roundToXDigits(amount, 0).toFixed(2);
    }
    return this.commonService.roundToXDigits(amount, 0).toFixed(2);
  }
  getFareAmount() {
    let amount = this.totalBookingAmount + this.totalBookingAmountReturn - this.childFareAmtLess;
    if (this.bookType != '1') {
      amount = amount - this.commonStorage.getItem("fareDetails").inclTransactionChargesAmount;
      if (this.commonStorage.getItem("fareDetailsReturn")) {
        amount = amount - this.commonStorage.getItem("fareDetailsReturn").inclTransactionChargesAmount;
      }
    }
    return amount;
  }
  getBaseFareAmount(isReturn = false) {
    if (!isReturn) {
      if (this.bookType != '1') {
        return this.commonStorage.getItem("fareDetails").baseFare;
      } else {
        return this.commonStorage.getItem("fareDetails").baseFare + this.commonStorage.getItem("fareDetails").inclTransactionChargesAmount;
      }
    } else {
      if (this.bookType != '1') {
        return this.commonStorage.getItem("fareDetailsReturn") ? this.commonStorage.getItem("fareDetailsReturn").baseFare : 0;
      } else {
        return (this.commonStorage.getItem("fareDetailsReturn") ? this.commonStorage.getItem("fareDetailsReturn").baseFare : 0) + (this.commonStorage.getItem("fareDetailsReturn") ? this.commonStorage.getItem("fareDetailsReturn").inclTransactionChargesAmount : 0);
      }
    }
  }
  getFullFare(isReturn = false) {
    // this.loaderService.hideLoadingDefault();
    if (!isReturn) {
      return this.totalBookingAmount;
    } else {
      return this.totalBookingAmountReturn;
    }
  }
  getFareAmountCal(isReturn = false) {
    if (!isReturn) {
      let amount = this.totalBookingAmount;
      if (this.bookType != '1') {
        amount = amount - this.commonStorage.getItem("fareDetails").inclTransactionChargesAmount;
      }
      return amount;
    } else {
      let amount = this.totalBookingAmountReturn;
      if (this.bookType != '1') {
        if (this.commonStorage.getItem("fareDetailsReturn")) {
          amount = amount - this.commonStorage.getItem("fareDetailsReturn").inclTransactionChargesAmount;
        }
      }
      return amount;
    }
  }
  showChashCoupons() {
    let metaApp = this.commonStorage.localGet('metaData');
    if (this.bookType == "2") {
      return true;
    } else {
      if (this.appData.isIndonesia) {
        // console.log(!metaApp.isPrePostPone,metaApp.isCouponAllowed, "Testing Souvik")
        if (!metaApp.isPrePostPone || metaApp.isCouponAllowed) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    }
  }
  offerTypeChange(offerType) {
    if (offerType == '5') {
      // console.log("offerType == '5'" + offerType == '5')
      // if(this.appliedofferCouponname == true){
      this.appliedofferCouponname = null;
      this.removeOffer();
      // }
    }
    if (offerType == '7') {
      // console.log("offerType == '5'" + offerType == '7')
      // if(this.appliedofferCouponname == true){
      this.appliedofferCouponname = null;
      this.removeOffer7();
      // }
    }
    if (offerType != '7' || offerType != '5') {
      this.appliedofferCouponname = null;
      this.checkOfferCoupon(null, false);
      this.deletePnrDiscount();
    }
    this.appliedcoupon1 = false;
    this.appliedcoupon2 = false;
    if (offerType != 0) {
      this.offerSelected = true; // Set flag to true when an offer is selected
    } else {
      this.offerSelected = false; // Set flag to true when an offer is selected
      this.promoCoupon = '';
    }
    this.discountAmount = 0;
    this.discountAmountReturn = 0;
    this.pnrDiscountAplied = false;
    this.offerCoupon = null;
    this.appliedOfferCoupon = null;
    this.quotePnrForm.controls['pnrnumber'].setValue('');
    this.quotepnr = false;
    this.setDefaultDiscount();
  }
  removeOffer7() {
    // console.log('check');
    this.offerType = "7";
    this.checkOfferCoupon(null, false);
    this.deletePnrDiscount();
  }
  removeOffer() {
    // console.log('check');
    this.offerType = "5";
    this.checkOfferCoupon(null, false);
    // this.cancelPrivCardNumber();
    this.deletePnrDiscount();
  }
  setDefaultDiscount() {
    this.pnrDiscountAmount = 0;
    this.discountAmount = this.fareDetails.discountAmount;
    if (this.isReturn) {
      this.discountAmountReturn = this.fareDetailsReturn.discountAmount;
    }
  }
  ionViewDidEnter() {
    // //this.commonService.gTrack("PaymentDetailsPage");
  }
  setPGs() {
    let metaApp = this.commonStorage.localGet('metaData');
    if (this.commonStorage.getItem('serviceDetailPGs')) {
      metaApp.pgCharges = this.commonStorage.getItem('serviceDetailPGs');
    }
    this.commonStorage.setItem('metaData', metaApp);
  }
  applyPrivCardNumber() {
    if (this.privCardNumber && this.privCardNumber != '') {
      this.passengerDetails["privilege_card_details"] = {
        "card_number": this.privCardNumber
      };
      this.getFare();
    } else {
      this.util.showToast('Please enter card number');
    }
  }
  cancelPrivCardNumber() {
    if (this.privCardNumber) {
      this.privCardNumber = "";
      this.passengerDetails["priv_card_number"] = null;
      this.getFare();
    } else {
      return false;
    }
  }
  getFare() {
    if (this.inProgress) return;
    this.inProgress = true;
    let pathForBooking = "res_id=" + this.reservationId;
    if (this.appData.isWEBAPP) {
      pathForBooking += "&native_app_type=6";
    } else {
      if (this.appData.isIOS) {
        pathForBooking += "&native_app_type=9";
      } else {
        pathForBooking += "&native_app_type=10";
      }
    }
    pathForBooking += "&origin=" + this.origin.id;
    pathForBooking += "&destination=" + this.destination.id;
    pathForBooking += "&boarding_at=" + this.reservationData.boardingStage.id;
    pathForBooking += "&drop_off=" + (this.reservationData.droppingStage ? this.reservationData.droppingStage.id : '');
    pathForBooking += "&no_of_seats=" + this.onwardSeatDetails.length;
    if (this.paymentType) {
      pathForBooking += "&referral_code=&pay_gay_type=" + this.paymentType;
    }
    // pathForBooking += "&native_app_type=9";
    pathForBooking += "&is_mobile_app=true";
    if (this.isReturn) {
      pathForBooking += "&is_round_trip=true";
      pathForBooking += "&return_res_id=" + this.reservationDataReturn.reserveId;
    } else {
      pathForBooking += "&is_round_trip=false";
    }
    if (this.isBima) {
      pathForBooking += `&is_bima=true`;
    }
    if (this.payFromWallet) {
      pathForBooking += `&is_wallet=true`;
    }
    if (this.phoneBooking) {
      pathForBooking += `&is_e_phone_booking=true&is_wallet=true`;
    }
    if (this.is_cancel_protect && this.metaData.showCancelProtect) {
      pathForBooking += `&is_cancel_protect=${this.checkCancelProtect}`;
    }
    const seatNumbers = this.onwardSeatDetails.map(seat => seat.seat_number);
    const seatNumbersReturn = this.returnSeatDetails.map(seat => seat.seat_number);
    // const promoCoupon =
    //   this.idProof && this.metaData['couponIdProofDetails']
    //     ? { coupon_code: this.appliedOfferCoupon?.coupon_code || '', id_proof_details: this.idProof }
    //     : this.appliedOfferCoupon?.coupon_code || this.promoCode;
    let promoCoupon;
    if (this.idProof && this.metaData['couponIdProofDetails'] || this.idProofCnt > 0) {
      promoCoupon = {};
      this.idProofCnt = 0;
      promoCoupon['coupon_code'] = this.appliedOfferCoupon && this.offerType != '2' && this.offerType == '7' ? this.appliedOfferCoupon.coupon_code : '';
      // promoCoupon['id_card'] =  this.idProof;
      promoCoupon["id_proof_details"] = this.idProof;
      if (this.idProof != '') promoCoupon["id_proof_details"] = this.idProof;
    } else {
      promoCoupon = this.appliedOfferCoupon && this.offerType != '2' && this.offerType == '7' ? this.appliedOfferCoupon.coupon_code : '';
    }
    if (promoCoupon != '') {
      this.appliedCouponname = promoCoupon.coupon_code ? promoCoupon.coupon_code : promoCoupon;
      this.appliedcoupon1 = true;
    }
    // let data = {
    //   seat_numbers: seatNumbers,
    //   no_of_seats: this.onwardSeatDetails.length,
    //   return_seat_numbers: seatNumbersReturn,
    //   boarding_at: this.reservationData.boardingStage.id,
    //   drop_off: this.reservationData.droppingStage?.id || '',
    //   return_boarding_at: this.isReturn ? this.reservationDataReturn?.boardingStage.id : '',
    //   return_drop_off: this.isReturn ? this.reservationDataReturn?.droppingStage?.id || '' : '',
    //   promo_coupon: promoCoupon,
    //   use_smart_miles: this.smartMilesDiscount > 0,
    //   priv_card_number: this.privCardNumber,
    //   is_cancel_protect: this.checkCancelProtect,
    // };
    let data = {
      "seat_numbers": seatNumbers,
      "no_of_seats": this.onwardSeatDetails.length,
      "return_seat_numbers": seatNumbersReturn,
      "use_smart_miles": this.smartMilesDiscount && this.smartMilesDiscount > 0 ? true : false,
      "passenger_titles": {},
      "boarding_at": this.reservationData.boardingStage.id,
      "drop_off": this.reservationData.droppingStage ? this.reservationData.droppingStage.id : '',
      "return_boarding_at": this.isReturn ? this.reservationDataReturn.boardingStage.id : '',
      "return_drop_off": this.isReturn ? this.reservationDataReturn.droppingStage ? this.reservationDataReturn.droppingStage.id : '' : '',
      "offer_coupon": this.appliedOfferCoupon && (this.smartMileCoupon == '' || this.smartMileCoupon == undefined) && this.offerType != '7' && this.offerType != '2' ? this.appliedOfferCoupon.coupon_code : '',
      "promo_coupon": promoCoupon,
      "previous_pnr_details": this.pnrDiscountAplied ? {
        "previous_pnr": this.quotePnrForm.value.pnrnumber,
        "phone_number": this.quotePnrForm.value.mobileno
      } : {},
      "coupon_details": this.passengerDetails.coupon_details,
      "use_e_discount": this.e_ticket_discount,
      "priv_card_number": this.privCardNumber,
      "is_cancel_protect": this.checkCancelProtect,
      "seat_details": this.seatDetails_gender_age
    };
    if (promoCoupon != '') {
      data = Object.assign(data, {
        "contact_detail": this.passengerDetails.contact_detail
      });
    }
    this.apiFactory.fareBreakUp(data, pathForBooking).subscribe(res => {
      this.inProgress = false;
      // Save booking key if present
      if (res && res.booking_key) {
        const isEncryptesRes = res.booking_key;
        this.commonStorage.localSet('isEncryptesRes', isEncryptesRes);
      }
      // Handle specific error codes
      if (res.code === 412 || res.code === 400) {
        this.appliedofferCouponname = null;
        this.util.showToast(res.message);
        setTimeout(() => {
          this.checkOfferCoupon(null, false);
        }, 200);
      } else if (res.code === 422) {
        this.accountDeRegisterAlert('', res.message);
      } else if (res.total_fare !== undefined || res.total_fare === 0) {
        this.fareBreakupDetails = res;
        this.roundTripTicketFare = res.round_trip_ticket_fare ? res.round_trip_ticket_fare : res['Round Trip Ticket Fare'] ? res['Round Trip Ticket Fare'] : res.fare_break_up_hash['Round Trip Ticket Fare'] ? res.fare_break_up_hash['Round Trip Ticket Fare'] : '';
        this.payAmount = res.payble_amount || res['Payble Amount'] || (res.fare_break_up_hash ? res.fare_break_up_hash['Payble Amount'] : 0) || 0;
      } else {
        // General message handling
        if (res.message) {
          this.util.showToast(res.message);
          this.smartMilesDiscount = null;
          this.cancelPrivCardNumber();
          this.unselectCoupon();
        } else {
          this.fareBreakupDetails = res;
        }
      }
    }, err => {
      this.inProgress = false;
      console.error('Error fetching fare:', err);
    });
  }
  viewDetails() {
    this.moreLessOpt = !this.moreLessOpt;
  }
  enforceMaxLengthOtp(event) {
    const input = event.target;
    let sanitizedValue = input.value.replace(/[^0-9]/g, '');
    sanitizedValue = sanitizedValue.slice(0, 6);
    input.value = sanitizedValue;
    // const formControl = this.formData.get('emergencyPhoneNumber');
    // if (formControl) {
    //   formControl.setValue(sanitizedValue, { emitEvent: false });
    // }
  }
  viewreturnDetails() {
    this.returnmoreLessOpt = !this.returnmoreLessOpt;
  }
  termsCond() {
    this.navCtrl.navigateForward('term-conditions');
  }
  privacyPolicy() {
    this.navCtrl.navigateForward('privacy-policy');
  }
  viewTicketPage() {
    this.viewTicket = false;
    this.navCtrl.navigateRoot('booking-details', this.navigationExtras);
  }
  clearReturnJourney() {
    this.globalData.DEPARTURE_DATE_RETURN = {};
    this.commonStorage.setItem('travelDateReturn', {});
    // this.modalController.dismiss({});
  }
  //manoranjan remover comma from origin, destination
  commaSeparate(data) {
    if (data) {
      let city = data.split(',');
      return city[city.length - 1];
    } else {
      return '';
    }
  }
  //mano
  showDiscount(fareBreakupDetails) {
    let discount = 0;
    discount = (fareBreakupDetails.offer_discount ? fareBreakupDetails.offer_discount : 0) + (fareBreakupDetails.ebooking_discount ? fareBreakupDetails.ebooking_discount : 0) + (fareBreakupDetails.previous_pnr_discount ? fareBreakupDetails.previous_pnr_discount : 0) + (fareBreakupDetails.privilege_card_discount ? fareBreakupDetails.privilege_card_discount : 0);
    if (discount == 0) {
      return false;
    } else return true;
  }
  //end
  accountDeRegisterAlert(title, msg) {
    var _this11 = this;
    return (0,_home_govindmane_Documents_ionic_customer_app_capacitor_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this11.alertCtrl.create({
        header: title,
        message: msg,
        backdropDismiss: false,
        buttons: [{
          text: 'Ok',
          handler: () => {
            _this11.auth.logout();
            _this11.navCtrl.navigateForward('tabs/home');
          }
        }]
      });
      const alertElement = document.querySelector('.alert-message');
      if (alertElement && alert.message) {
        alertElement.innerHTML = alert.message.toString();
      }
      yield alert.present();
    })();
  }
  getWalletDetails() {
    this.apiFactory.getWalletBalance().subscribe(res => {
      // this.loader.hideLoadingDefault();
      if (res.success) {
        this.nonpromobalance = res.body.balance;
        this.promobalance = res.body.promotional_balance;
        // this.wallettransactions()
      } else if (res.code == 422) {
        this.accountDeRegisterAlert("", res.message);
      }
    }, err => {
      // console.log(err);
      // this.loader.hideLoadingDefault();
    });
  }
  showWalletBalance() {
    var _this12 = this;
    return (0,_home_govindmane_Documents_ionic_customer_app_capacitor_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // console.log('wallet details')
      let alert = yield _this12.alertCtrl.create({
        header: 'Wallet Balance',
        message: 'Promotional',
        buttons: [{
          text: 'Ok',
          handler: () => {}
        }, {
          text: 'Cancel',
          role: 'cancel',
          cssClass: "alertCancel",
          handler: () => {
            if (_this12.bookOnline) {
              _this12.bookType = "1";
            } else if (_this12.phoneBooking) {
              _this12.bookType = "2";
            } else {
              _this12.payFromWallet = true;
            }
            return false;
          }
        }]
      });
      const alertElement = document.querySelector('.alert-message');
      if (alertElement && alert.message) {
        alertElement.innerHTML = alert.message.toString();
      }
      yield alert.present();
    })();
  }
  showCancelProtect(ev) {
    if (ev = true) {
      this.is_cancel_protect = false;
      this.getFare();
    }
  }
  addMoney() {
    var _this13 = this;
    return (0,_home_govindmane_Documents_ionic_customer_app_capacitor_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this13.util.checkConnection()) {
        return false;
      }
      const modal = yield _this13.modalController.create({
        component: _add_money_wallet_add_money_wallet_page__WEBPACK_IMPORTED_MODULE_2__.AddMoneyWalletPage,
        componentProps: {
          "wallectBalance": _this13.payAmount
        }
      });
      yield modal.present();
      const {
        data
      } = yield modal.onDidDismiss();
      // console.log(data);
      if (data == 'success') {
        // console.log('fareGet',);
        _this13.payFromWallet = true;
        // this.is_cancel_protect = true;
        // this.walletBookingPopup();
        setTimeout(() => {
          _this13.getFare();
        }, 2000);
      }
    })();
  }
  /**
  * Open breakup modal for theme-1
  */
  openBreakupModal() {
    var _this14 = this;
    return (0,_home_govindmane_Documents_ionic_customer_app_capacitor_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this14.modalController.create({
        component: _theme_price_breakup_modal_theme_price_breakup_modal_component__WEBPACK_IMPORTED_MODULE_3__.ThemePriceBreakupModalComponent,
        cssClass: "priceBrackUpClass",
        componentProps: {
          pricetBreakupData: _this14.fareBreakupDetails,
          currencySym: _this14.currencySym,
          checkCancelProtect: _this14.checkCancelProtect,
          phoneBooking: _this14.phoneBooking,
          metaData: _this14.metaData,
          payAmount: _this14.payAmount
        }
      });
      yield modal.present();
    })();
  }
  /**
  * Open apply-coupon modal for theme-1
  */
  openApplyCouponModal() {
    var _this15 = this;
    return (0,_home_govindmane_Documents_ionic_customer_app_capacitor_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // console.log(this.offerCoupons, this.promoCoupons)
      const modal = yield _this15.modalController.create({
        component: _theme_apply_coupon_modal_theme_apply_coupon_modal_component__WEBPACK_IMPORTED_MODULE_4__.ThemeApplyCouponModalComponent,
        cssClass: "couponClass",
        initialBreakpoint: 0.4,
        breakpoints: [0.4, 0.7, 1],
        componentProps: {
          offerCoupons: _this15.metaData && _this15.metaData.isAllowPromoOffers == true ? _this15.promoCoupons : _this15.offerCoupons
        }
      });
      yield modal.present();
      modal.onDidDismiss().then(res => {
        // console.log("onDidDismiss called : ", res);
        if (res.data) {
          if (_this15.metaData.isAllowPromoOffers) {
            _this15.promoCoupon = res.data;
            _this15.checkpromoCoupon(res.data, true);
          } else {
            _this15.offerCoupon = res.data;
            _this15.checkOfferCoupon(res.data, true);
          }
        }
      }, error => {
        // console.log("modal close error :", error);
      });
    })();
  }
  /**
  * @note Apply smart coins for new theme-1 with ion-toggle.
  * @param event ion-toggle is on/off
  * @param discountAmount particular toggles discount amount.
  * @param index of particular smart-mile.
  */
  applySmartMiles(event, discountAmount, index) {
    this.smartMiles.forEach(toogle => {
      toogle.checked = false;
    });
    if (event) {
      this.smartMiles[index].checked = true;
      this.checkSmartMileCoupon(discountAmount); /** @note continue with old flow. */
    } else {
      this.checkSmartMileCoupon(""); /** @note continue with old flow. */
    }
  }
  cancellation() {
    this.navCtrl.navigateForward('cancellation-policies');
  }
  viewofferDetails() {
    this.moreLessOffer = !this.moreLessOffer;
    // console.log("moreless", this.passengerDetails);
  }
  /* open phone booking how work modal*/
  openphonebookinModal() {
    var _this16 = this;
    return (0,_home_govindmane_Documents_ionic_customer_app_capacitor_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this16.modalController.create({
        component: _modal_phonebooking_info_modal_phonebooking_info_page__WEBPACK_IMPORTED_MODULE_6__.ModalPhonebookingInfoPage,
        cssClass: "phoneBookingClass",
        componentProps: {
          metaData: _this16.metaData
        }
      });
      yield modal.present();
      modal.onDidDismiss().then(res => {
        // console.log("onDidDismiss", res);
      }, error => {
        // console.log("error :", error);
      });
    })();
  }
  tryAgain() {
    this.navCtrl.navigateForward('available-routes');
  }
  bckToHome() {
    this.navCtrl.navigateRoot('/tabs/home');
  }
  onCheckboxChange(event) {
    console.log('Checkbox is checked:', event.detail.checked);
    if (event.detail.checked == true) {
      this.isOurbusChecked = true;
    } else {
      this.isOurbusChecked = false;
    }
  }
  toggleRadioGroup() {
    if (this.offerType != 0) {
      this.offerSelected = true; // Set flag to true when an offer is selected
    } else {
      this.offerSelected = false; // Set flag to true when an offer is selected
    }
    this.isRadioGroupVisible = !this.isRadioGroupVisible; // Toggle visibility
  }
  removeOffers() {
    this.offerType = '';
    this.selectedText = 'Discount';
    this.promoCoupon = '';
    this.offerSelected = false;
  }
  removeCoupons() {
    this.promoCoupon = '';
  }
  specialCashDiscount() {
    if (this.specialcashDiscountValue != 'normal') {
      this.is_special_discount_coupon = true;
    } else {
      this.is_special_discount_coupon = false;
    }
    this.emailNumber = '';
    this.couponForm.controls["couponCode"].setValue("");
  }
  redirectToPayU(result, new_booking) {
    if (result.pay_gay_url && result.hash) {
      const isMobileApp = this.platform.is('cordova') || this.platform.is('capacitor');
      const isIOS = this.platform.is('ios');
      const formInputs = `
  <input type="hidden" name="key" value="${result.key}" />
  <input type="hidden" name="txnid" value="${result.txnid}" />
  <input type="hidden" name="amount" value="${result.amount}" />
  <input type="hidden" name="productinfo" value="${result.productinfo}" />
  <input type="hidden" name="firstname" value="${result.firstname}" />
  <input type="hidden" name="email" value="${result.email}" />
  <input type="hidden" name="phone" value="${result.phone}" />
  <input type="hidden" name="surl" value="${result.surl}" />
  <input type="hidden" name="furl" value="${result.furl}" />
  <input type="hidden" name="hash" value="${result.hash}" />
`;
      const htmlContent = `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <title>Redirecting to PayU...</title>
    ${isIOS ? `<style>body { -webkit-touch-callout: none; -webkit-user-select: none; }</style>` : ''}
  </head>
  <body onload="document.forms[0].submit();" style="margin:0;padding:0;">
    <form method="POST" action="${result.pay_gay_url}">
      ${formInputs}
    </form>
  </body>
  </html>
`;
      if (isMobileApp && isIOS && !this.appData.isWEBAPP) {
        const base64HTML = btoa(unescape(encodeURIComponent(htmlContent)));
        const dataUri = `data:text/html;base64,${base64HTML}`;
        const browser = this.iab.create(dataUri, '_blank', {
          location: 'no',
          toolbar: 'yes',
          closebuttoncaption: 'Cancel',
          hardwareback: 'yes',
          toolbarposition: 'top',
          hidespinner: 'no'
        });
        browser.on('loadstart').subscribe(event => {
          const currentUrl = event.url;
          console.log('currentURL', currentUrl);
          if (currentUrl.includes('ticket-already-reserved')) {
            this.alreadyReserved = true;
            this.viewTicket = false;
            browser.close();
            // console.log('Ticket Already Reserved URL Detected:', currentUrl);
            return;
          } else if (currentUrl.includes('conpay') || currentUrl.includes('status=success') || currentUrl.includes('OrderID=')) {
            setTimeout(() => {
              browser.close();
              if (!this.alreadyReserved) {
                this.handlePaymentSuccess(result, new_booking);
              }
            }, 1500);
            // console.log('Payment Success URL Detected:', currentUrl);
          } else if (currentUrl.includes('status=failure') || currentUrl.includes('payment-cancelled') || currentUrl.includes('ticket_failure') || currentUrl.includes('cancel')) {
            browser.close();
            this.paymentFailed = true;
            this.handlePaymentFailure();
            // console.log('Payment Failure URL Detected:', currentUrl);
          }
        });
        browser.on('exit').subscribe(() => {
          this.paymentFailed = true;
          this.handlePaymentFailure();
        });
        this.platform.backButton.subscribeWithPriority(10, () => {
          browser.close();
        });
      } else if (this.appData.isWEBAPP && !(this.appData.isIOS && isMobileApp)) {
        // Fallback for web
        const form = document.createElement('form');
        form.method = 'POST';
        form.action = result.pay_gay_url;
        form.style.display = 'none';
        const fields = {
          key: result.key,
          txnid: result.txnid,
          amount: result.amount,
          productinfo: result.productinfo,
          firstname: result.firstname,
          email: result.email,
          phone: result.phone,
          surl: result.surl,
          furl: result.furl,
          hash: result.hash
        };
        for (const key in fields) {
          const input = document.createElement('input');
          input.type = 'hidden';
          input.name = key;
          input.value = fields[key];
          form.appendChild(input);
        }
        document.body.appendChild(form);
        form.submit();
      }
    }
  }
  redirectToPaytm(result, newBoiking) {
    if (result.pay_gay_url && result.CHECKSUMHASH) {
      const isMobileApp = this.platform.is('cordova') || this.platform.is('capacitor');
      const isIOS = this.platform.is('ios');
      const formInputs = `
        <input type="hidden" name="CHANNEL_ID" value="${result.CHANNEL_ID}" />
        <input type="hidden" name="CUST_ID" value="${result.CUST_ID}" />
        <input type="hidden" name="EMAIL" value="${result.EMAIL}" />
        <input type="hidden" name="INDUSTRY_TYPE_ID" value="${result.INDUSTRY_TYPE_ID}" />
        <input type="hidden" name="MID" value="${result.MID}" />
        <input type="hidden" name="MOBILE_NO" value="${result.MOBILE_NO}" />
        <input type="hidden" name="ORDER_ID" value="${result.ORDER_ID}" />
        <input type="hidden" name="TXN_AMOUNT" value="${result.TXN_AMOUNT}" />
        <input type="hidden" name="WEBSITE" value="${result.WEBSITE}" />
        <input type="hidden" name="CALLBACK_URL" value="${result.CALLBACK_URL}" />
        <input type="hidden" name="CHECKSUMHASH" value="${result.CHECKSUMHASH}" />
      `;
      const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <title>Redirecting to Paytm...</title>
          ${isIOS ? `<style>body { -webkit-touch-callout: none; -webkit-user-select: none; }</style>` : ''}
        </head>
        <body onload="document.forms[0].submit();" style="margin:0;padding:0;">
          <form method="POST" action="${result.pay_gay_url}">
            ${formInputs}
          </form>
        </body>
        </html>
      `;
      if (isMobileApp && this.appData.isIOS && !this.appData.isWEBAPP) {
        const base64HTML = btoa(unescape(encodeURIComponent(htmlContent)));
        const dataUri = `data:text/html;base64,${base64HTML}`;
        // 👇 Important: Keep toolbar for iOS to allow manual Cancel
        const browser = this.iab.create(dataUri, '_blank', {
          location: 'no',
          toolbar: 'yes',
          closebuttoncaption: 'Cancel',
          hardwareback: 'yes',
          toolbarposition: 'top',
          hidespinner: 'no'
        });
        browser.on('loadstart').subscribe(event => {
          const currentUrl = event.url;
          if (currentUrl.includes('status=0') || currentUrl.includes('pnr_number')) {
            browser.close();
            this.handlePaymentSuccess(result, newBoiking);
          } else if (currentUrl.includes('ticket-already-reserved')) {
            this.alreadyReserved = true;
          } else if (currentUrl.includes('ticket_failure') || currentUrl.includes('status=1') || currentUrl.includes('customerCancellation') || currentUrl.includes('ticket-cancel') || currentUrl.includes('payment-cancelled')) {
            browser.close();
            this.paymentFailed = true;
            this.handlePaymentFailure();
          }
        });
        browser.on('exit').subscribe(() => {
          this.paymentFailed = true;
          this.handlePaymentFailure();
        });
        this.platform.backButton.subscribeWithPriority(10, () => {
          browser.close();
        });
      } else if (this.appData.isWEBAPP && !(this.appData.isIOS && isMobileApp)) {
        // WEB fallback
        const form = document.createElement('form');
        form.method = 'POST';
        form.action = result.pay_gay_url;
        form.style.display = 'none';
        const fields = {
          CHANNEL_ID: result.CHANNEL_ID,
          CUST_ID: result.CUST_ID,
          EMAIL: result.EMAIL,
          INDUSTRY_TYPE_ID: result.INDUSTRY_TYPE_ID,
          MID: result.MID,
          MOBILE_NO: result.MOBILE_NO,
          ORDER_ID: result.ORDER_ID,
          TXN_AMOUNT: result.TXN_AMOUNT,
          WEBSITE: result.WEBSITE,
          CALLBACK_URL: result.CALLBACK_URL,
          CHECKSUMHASH: result.CHECKSUMHASH
        };
        for (const key in fields) {
          const input = document.createElement('input');
          input.type = 'hidden';
          input.name = key;
          input.value = fields[key] || '';
          form.appendChild(input);
        }
        document.body.appendChild(form);
        form.submit();
      }
    }
  }
  handleBack() {
    if (this.browser) {
      this.browser.close();
      this.showCustomHeader = false;
    }
  }
  handlePaymentSuccess(result, new_booking) {
    this.commonStorage.localSet('bookedTicketDetails', result);
    this.viewTicket = true;
    this.paymentFailed = false;
    this.navCtrl.navigateRoot('booking-details', {
      queryParams: {
        new_booking: true,
        is_roundTrip: new_booking,
        hideLocateTrackBus: true
      }
    });
  }
  handlePaymentFailure() {
    this.commonStorage.localRemove('bookedTicketDetails');
    this.paymentFailed = true;
    this.viewTicket = false;
    //this.util.showToast('Payment failed. Please try again.');
  }
  updateProfileApi() {
    let namePartsList = this.passengerDetails.seat_details[0].name.trim().split(" ");
    let firstName;
    let lastName;
    if (namePartsList.length == 1) {
      if (this.passengerDetails.seat_details[0].sex == "Mr") {
        firstName = "Mr";
      } else {
        firstName = "Mrs";
      }
      lastName = namePartsList[0];
    } else {
      firstName = namePartsList[0];
      lastName = namePartsList.slice(1).join(" ");
    }
    let updateFormData = {
      "auth_token": this.auth.token,
      "email": this.passengerDetails.contact_detail.email,
      "emergency_phone": this.passengerDetails.contact_detail.mobile_number,
      "title": this.passengerDetails.seat_details[0].sex,
      "name": firstName,
      "last_name": lastName,
      "dob": "",
      "nationality_id": "",
      "state_code": "",
      "city_id": "",
      "address": "",
      "is_skip_validation": true
    };
    this.apiFactory.updateAllData(updateFormData).subscribe(data => {
      if (data.code == 200) {
        localStorage.setItem('savedformData', JSON.stringify(updateFormData));
        this.updateProfileCleverTap(firstName, lastName, this.passengerDetails.contact_detail.email, this.passengerDetails.contact_detail.mobile_number);
      } else {
        this.util.showToast(data.message, 'bottom');
      }
    }, error => {
      this.util.showToast(error, 'bottom');
    });
  }
  updateProfileCleverTap(fname, lname, email, phone) {
    // if(this.appData.isIOS){
    const profile = {
      First_Name: fname,
      Last_Name: lname,
      Email: email,
      Phone: "+91" + phone,
      lifetime_trip_count: "",
      supersaver_active: "",
      supersaver_type: "",
      supersaver_expiry_date: "",
      ota_converted: ""
    };
    this.util.cleverTapEvent("", profile, false, true);
    // }
  }
  getCoupontype() {
    if (this.appliedOfferCoupon) {
      if (this.offerType == 7) {
        return "Promotion Coupons";
      } else {
        return "Offer Coupons";
      }
    } else {
      return "Not applied";
    }
  }
  checkoutStartedEvent() {
    let platform = this.appData.isIOS ? 'IOS' : this.appData.isWEBAPP && this.platform.is('ios') ? 'Mobweb IOS' : this.appData.isWEBAPP && this.platform.is('android') ? 'Mobweb Android' : "MobWeb";
    // if(this.appData.isIOS){
    let data = {
      "departure_pick_stop_name": this.reservationData.boardingStage.name,
      "departure_drop_stop_name": this.reservationData.droppingStage.name,
      "return_pick_stop_name": this.isReturn ? this.reservationDataReturn.boardingStage.name : "Not selected",
      "return_drop_stop_name": this.isReturn ? this.reservationDataReturn.droppingStage.name : "Not selected",
      "departure_pick_time": this.reservationData.boardingStage.time,
      "departure_drop_time": this.reservationData.droppingStage.time,
      "return_pick_time": this.isReturn ? this.reservationDataReturn.boardingStage.time : "Not selected",
      "return_drop_time": this.isReturn ? this.reservationDataReturn.droppingStage.time : "Not selected",
      "departure_pick_date": this.reservationData.boardingStage.travel_date,
      "departure_drop_date": this.reservationData.droppingStage.travel_date,
      "return_pick_date": this.isReturn && this.reservationDataReturn.boardingStage.travel_date ? this.reservationDataReturn.boardingStage.travel_date : "Not selected",
      "return_drop_date": this.isReturn && this.reservationDataReturn.droppingStage.travel_date ? this.reservationDataReturn.droppingStage.travel_date : "Not selected",
      "departure_stop_combination": this.reservationData.boardingStage.name + " - " + this.reservationData.droppingStage.name,
      "return_stop_combination": this.isReturn ? this.reservationDataReturn.droppingStage.name + " - " + this.reservationDataReturn.droppingStage.name : "Not selected",
      "boarding_from": this.globalData.SEARCH_DATA.originCity.name,
      "dropping_to": this.globalData.SEARCH_DATA.destCity.name,
      "platform": platform,
      "coupon_code": this.appliedOfferCoupon ? this.appliedOfferCoupon.coupon_code : "Not applied",
      "coupon_applied": this.appliedOfferCoupon ? true : false,
      "coupon_code_type": this.fareBreakupDetails.ebooking_discount != 0 ? 'Eticket Discount' : this.getCoupontype(),
      "coupon_code_discount": this.fareBreakupDetails.ebooking_discount != 0 ? this.fareBreakupDetails.ebooking_discount + "" : this.appliedOfferCoupon ? this.fareBreakupDetails.offer_discount + "" : "0",
      "amount": this.fareBreakupDetails.total_fare + "",
      "trip_type": this.isReturn ? "round_trip" : "one_way",
      "passenger_count": this.commonStorage.localGet("ourbusPassengerCount")
    };
    this.util.cleverTapEvent("checkout_started", data);
    // }
  }
  paymentSuccessEvent() {
    let platform = this.appData.isIOS ? 'IOS' : this.appData.isWEBAPP && this.platform.is('ios') ? 'Mobweb IOS' : this.appData.isWEBAPP && this.platform.is('android') ? 'Mobweb Android' : "MobWeb";
    // if(this.appData.isIOS){
    let paymentMethod = "";
    if (this.bookType == "1") {
      const payName = this.payMentGateWayTypes.filter(item => item.id == this.paymentType);
      paymentMethod = "Book Online | " + payName[0].name;
    } else if (this.bookType == "2") {
      paymentMethod = "Phone Booking";
    } else if (this.bookType == "3") {
      paymentMethod = "Pay From Wallet";
    }
    let data = {
      "departure_pick_stop_name": this.reservationData.boardingStage.name,
      "departure_drop_stop_name": this.reservationData.droppingStage.name,
      "return_pick_stop_name": this.isReturn ? this.reservationDataReturn.boardingStage.name : "Not selected",
      "return_drop_stop_name": this.isReturn ? this.reservationDataReturn.droppingStage.name : "Not selected",
      "departure_pick_time": this.reservationData.boardingStage.time,
      "departure_drop_time": this.reservationData.droppingStage.time,
      "return_pick_time": this.isReturn ? this.reservationDataReturn.boardingStage.time : "Not selected",
      "return_drop_time": this.isReturn ? this.reservationDataReturn.droppingStage.time : "Not selected",
      "departure_pick_date": this.reservationData.boardingStage.travel_date,
      "departure_drop_date": this.reservationData.droppingStage.travel_date,
      "return_pick_date": this.isReturn && this.reservationDataReturn.boardingStage.travel_date ? this.reservationDataReturn.boardingStage.travel_date : "Not selected",
      "return_drop_date": this.isReturn && this.reservationDataReturn.droppingStage.travel_date ? this.reservationDataReturn.droppingStage.travel_date : "Not selected",
      "departure_stop_combination": this.reservationData.boardingStage.name + " - " + this.reservationData.droppingStage.name,
      "return_stop_combination": this.isReturn ? this.reservationDataReturn.droppingStage.name + " - " + this.reservationDataReturn.droppingStage.name : "Not selected",
      "boarding_from": this.globalData.SEARCH_DATA.originCity.name,
      "dropping_to": this.globalData.SEARCH_DATA.destCity.name,
      "platform": platform,
      "coupon_code": this.appliedOfferCoupon ? this.appliedOfferCoupon.coupon_code : "Not applied",
      "coupon_applied": this.appliedOfferCoupon ? true : false,
      "coupon_code_type": this.fareBreakupDetails.ebooking_discount != 0 ? 'Eticket Discount' : this.getCoupontype(),
      "coupon_code_discount": this.fareBreakupDetails.ebooking_discount != 0 ? this.fareBreakupDetails.ebooking_discount + "" : this.appliedOfferCoupon ? this.fareBreakupDetails.offer_discount + "" : "0",
      "amount": this.fareBreakupDetails.total_fare + "",
      "trip_type": this.isReturn ? "round_trip" : "one_way",
      "payment_method": paymentMethod,
      "passenger_count": this.commonStorage.localGet("ourbusPassengerCount")
    };
    this.util.cleverTapEvent("payment_success", data);
    // }
  }
  easeBuzIntentFlow(accessKey) {
    return (0,_home_govindmane_Documents_ionic_customer_app_capacitor_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const option = {
        access_key: accessKey,
        pay_mode: "production"
      };
      const data = yield easebuzz_capacitorjs_sdk__WEBPACK_IMPORTED_MODULE_9__.EasebuzzCheckout.proceedToPayment({
        option
      });
    })();
  }
  setupAppLifecycleListeners() {
    this.subscriptions.push(this.platform.resume.subscribe(() => {
      if (this.isTimerRunning && !this.upiTransactionCheckStatusDialog) {
        this.showDialog();
      }
    }), this.platform.pause.subscribe(() => {
      this.hideDialog();
    }), this.platform.backButton.subscribeWithPriority(10, () => {
      if (this.isTimerRunning) {
        this.showDialog();
      } else {
        this.navCtrl.back();
      }
    }));
  }
  // Easebuzz Payment
  openEasebuzzSDK(accessKey, pnr) {
    var _this17 = this;
    return (0,_home_govindmane_Documents_ionic_customer_app_capacitor_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this17.currentPnr = pnr;
        const option = {
          access_key: accessKey,
          pay_mode: 'production'
        };
        yield easebuzz_capacitorjs_sdk__WEBPACK_IMPORTED_MODULE_9__.EasebuzzCheckout.proceedToPayment({
          option
        });
        _this17.startTimer();
      } catch (error) {
        _this17.presentAlert('Payment Failed', 'Payment process failed to start.');
        _this17.showFailure();
      }
    })();
  }
  openUpiLink(upiLink, pnr) {
    var _this18 = this;
    return (0,_home_govindmane_Documents_ionic_customer_app_capacitor_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this18.currentPnr = pnr;
        const opened = window.open(upiLink, '_system');
        if (opened) {
          _this18.startTimer();
        } else {
          _this18.presentAlert('Error', 'Failed to open UPI payment link.');
          _this18.showFailure();
        }
      } catch (error) {
        _this18.presentAlert('Error', 'Something went wrong while opening the UPI app.');
        _this18.showFailure();
      }
    })();
  }
  // Paytm Payment
  openPaytmSDK(orderId, txnToken, mid, amount, callbackUrl, pnr) {
    var _this19 = this;
    return (0,_home_govindmane_Documents_ionic_customer_app_capacitor_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this19.currentPnr = pnr;
      const response = yield AllInOneSDK['startTransaction']({
        mid,
        amount,
        orderId,
        txnToken,
        callbackUrl,
        isStaging: false,
        restrictAppInvoke: true
      });
      // if (response?.STATUS === 'TXN_SUCCESS') {
      //     this.handleSuccess();
      // } else if (response?.STATUS === 'TXN_FAILURE') {
      //     this.presentToast('Payment Failed: ' + (response?.RESPMSG || 'Unknown Error'));
      //     this.showFailure();
      // } else if (response?.STATUS === 'PENDING') {
      //     this.startTimer();
      // } else {
      //     this.presentToast('Payment Cancelled or Unknown Status');
      //     this.showFailure();
      // }
    })();
  }
  startTimer() {
    this.isTimerRunning = true;
    this.pollingTimeout = setTimeout(() => {
      this.stopTimer(false);
    }, 5 * 60 * 1000);
    this.pollingInterval = setInterval(() => {
      this.checkPaymentStatus();
    }, 5000);
    this.checkPaymentStatus();
  }
  stopTimer(isSuccess) {
    if (!isSuccess) {
      this.presentToast('Payment Failed');
    }
    this.isTimerRunning = false;
    this.hideDialog();
    if (this.pollingTimeout) {
      clearTimeout(this.pollingTimeout);
      this.pollingTimeout = null;
    }
    if (this.pollingInterval) {
      clearInterval(this.pollingInterval);
      this.pollingInterval = null;
    }
  }
  checkPaymentStatus() {
    this.apiFactory.getUPITransactionStatus(this.currentPnr).subscribe({
      next: res => {
        if ((res === null || res === void 0 ? void 0 : res.code) === 200 || (res === null || res === void 0 ? void 0 : res.txnStatus) === 'SUCCESS') {
          this.handleSuccess();
        } else if ((res === null || res === void 0 ? void 0 : res.txnStatus) === 'FAILURE') {
          this.handleFailure();
        }
      },
      error: err => console.error('API error:', err)
    });
  }
  showDialog() {
    var _this20 = this;
    return (0,_home_govindmane_Documents_ionic_customer_app_capacitor_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this20.popoverCtrl.create({
        component: _upi_status_modal_upi_status_modal_component__WEBPACK_IMPORTED_MODULE_10__.UpiStatusModalComponent,
        backdropDismiss: false
      });
      yield modal.present();
      const {
        data
      } = yield modal.onDidDismiss();
      if (data !== null && data !== void 0 && data.cancelled) {
        _this20.stopTimer(false);
        _this20.currentPnr = '';
        _this20.showFailure();
      }
    })();
  }
  hideDialog() {
    var _this21 = this;
    return (0,_home_govindmane_Documents_ionic_customer_app_capacitor_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this21.upiTransactionCheckStatusDialog) {
        yield _this21.upiTransactionCheckStatusDialog.dismiss();
        _this21.upiTransactionCheckStatusDialog = null;
      }
    })();
  }
  // Handle success
  handleSuccess() {
    this.stopTimer(true);
    this.currentPnr = '';
    this.navCtrl.navigateRoot('booking-details', {
      queryParams: {
        new_booking: true,
        is_roundTrip: false
      }
    });
  }
  // Handle failure
  handleFailure() {
    this.stopTimer(false);
    this.currentPnr = '';
    this.showFailure();
  }
  showFailure() {
    this.showDialog();
    console.log('Payment failed or cancelled');
  }
  cleanup() {
    // this.stopTimer(false);
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
  presentAlert(header, message) {
    var _this22 = this;
    return (0,_home_govindmane_Documents_ionic_customer_app_capacitor_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this22.alertController.create({
        header,
        message,
        buttons: ['OK']
      });
      yield alert.present();
    })();
  }
  presentToast(message) {
    var _this23 = this;
    return (0,_home_govindmane_Documents_ionic_customer_app_capacitor_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this23.toastController.create({
        message,
        duration: 2000,
        position: 'bottom'
      });
      yield toast.present();
    })();
  }
  paymentFailureEvent(errorMsg = "Payment failed") {
    // if(this.appData.isIOS){
    let paymentMethod = "";
    if (this.bookType == "1") {
      const payName = this.payMentGateWayTypes.filter(item => item.id == this.paymentType);
      paymentMethod = "Book Online | " + payName[0].name;
    } else if (this.bookType == "2") {
      paymentMethod = "Phone Booking";
    } else if (this.bookType == "3") {
      paymentMethod = "Pay From Wallet";
    }
    // if(this.appData.isIOS){
    let data = {
      "departure_pick_stop_name": this.reservationData.boardingStage.name,
      "departure_drop_stop_name": this.reservationData.droppingStage.name,
      "return_pick_stop_name": this.isReturn ? this.reservationDataReturn.boardingStage.name : "Not selected",
      "return_drop_stop_name": this.isReturn ? this.reservationDataReturn.droppingStage.name : "Not selected",
      "departure_pick_time": this.reservationData.boardingStage.time,
      "departure_drop_time": this.reservationData.droppingStage.time,
      "return_pick_time": this.isReturn ? this.reservationDataReturn.boardingStage.time : "Not selected",
      "return_drop_time": this.isReturn ? this.reservationDataReturn.droppingStage.time : "Not selected",
      "departure_stop_combination": this.reservationData.boardingStage.name + " - " + this.reservationData.droppingStage.name,
      "return_stop_combination": this.isReturn ? this.reservationDataReturn.boardingStage.name + " - " + this.reservationDataReturn.droppingStage.name : "Not selected",
      "coupon_code": this.appliedOfferCoupon ? this.appliedOfferCoupon.coupon_code : "Not applied",
      "coupon_code_type": this.fareBreakupDetails.ebooking_discount != 0 ? 'Eticket Discount' : this.getCoupontype(),
      "coupon_code_discount": this.fareBreakupDetails.ebooking_discount != 0 ? this.fareBreakupDetails.ebooking_discount + "" : this.appliedOfferCoupon ? this.fareBreakupDetails.offer_discount + "" : "0",
      "amount": this.fareBreakupDetails.total_fare + "",
      "error": errorMsg,
      "payment_method": paymentMethod,
      "passenger_count": this.commonStorage.localGet("ourbusPassengerCount")
    };
    this.util.cleverTapEvent("payment_failed", data);
    // }
    // }
  }
  ngOnDestroy() {
    this.cleanup();
  }
}
_PaymentDetailsPage = PaymentDetailsPage;
_PaymentDetailsPage.ɵfac = function PaymentDetailsPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PaymentDetailsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_28__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_29__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_services_common_storage__WEBPACK_IMPORTED_MODULE_11__.CommonStorage), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_27__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_services_api_factory__WEBPACK_IMPORTED_MODULE_12__.ApiFactory), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_services_loader_service__WEBPACK_IMPORTED_MODULE_13__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_14__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_services_util_provider__WEBPACK_IMPORTED_MODULE_15__.UtilProvider), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_services_appdata__WEBPACK_IMPORTED_MODULE_16__.AppData), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_28__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_29__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_17__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_services_date_service__WEBPACK_IMPORTED_MODULE_18__.DateService), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_services_exception__WEBPACK_IMPORTED_MODULE_19__.ExceptionProvider), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_29__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_20__.InAppBrowser), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_services_authentication__WEBPACK_IMPORTED_MODULE_21__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_services_global_data_service__WEBPACK_IMPORTED_MODULE_22__.GlobalDataService), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_30__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_services_firebase_analytics_service__WEBPACK_IMPORTED_MODULE_23__.FirebaseAnalyticsService), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_29__.LoadingController), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_26__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_30__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_services_upi_check_service__WEBPACK_IMPORTED_MODULE_24__.UpiCheckService), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_31__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_29__.PopoverController), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_29__.ToastController), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_29__.AlertController));
};
_PaymentDetailsPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdefineComponent"]({
  type: _PaymentDetailsPage,
  selectors: [["app-payment-details"]],
  standalone: false,
  decls: 4,
  vars: 4,
  consts: [["myslider", ""], ["nogstrc", ""], ["noRoundTripDiscount", ""], [4, "ngIf"], [1, "theme1", 3, "ngStyle"], [1, "ion-margin-start", "ion-margin-end", "ion-margin-top", 2, "margin-left", "11px", "margin-right", "11px"], ["size", "1", 2, "display", "flex", "justify-content", "center", "align-items", "center", "padding-left", "0px"], ["mode", "md"], ["defaultHref", "", 2, "color", "#000"], ["size", "10", 2, "display", "flex", "justify-content", "center", "align-items", "center"], [1, "header-text"], ["size", "1", 2, "display", "flex", "justify-content", "center", "align-items", "center"], ["style", "--background: #fff;", "class", "theme1", 4, "ngIf"], ["class", "whole center", 4, "ngIf"], [1, "theme1", 2, "box-shadow", "0px 0px 14px 0px rgba(38, 38, 38, 0.10)", "padding-bottom", "8px"], [2, "padding", "0"], [1, "footer-coupen-row", "ion-padding-start", "ion-padding-end", 2, "background", "#3bad6926", "padding", "0px 7px"], ["size", "8", 2, "display", "flex", "align-items", "center"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["clip-path", "url(#clip0_142_3929)"], ["d", "M9 15L15 9", "stroke", "#3BAD69", "stroke-width", "1.75", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M9.5 10C9.77614 10 10 9.77614 10 9.5C10 9.22386 9.77614 9 9.5 9C9.22386 9 9 9.22386 9 9.5C9 9.77614 9.22386 10 9.5 10Z", "stroke", "#3BAD69", "stroke-width", "1.75", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M14.5 15C14.7761 15 15 14.7761 15 14.5C15 14.2239 14.7761 14 14.5 14C14.2239 14 14 14.2239 14 14.5C14 14.7761 14.2239 15 14.5 15Z", "stroke", "#3BAD69", "stroke-width", "1.75", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M5.00046 7.2C5.00046 6.61653 5.23225 6.05695 5.64483 5.64437C6.05741 5.23179 6.61698 5 7.20046 5H8.20046C8.78136 4.99967 9.33855 4.76961 9.75046 4.36L10.4505 3.66C10.6549 3.4544 10.898 3.29125 11.1657 3.17991C11.4334 3.06858 11.7205 3.01126 12.0105 3.01126C12.3004 3.01126 12.5875 3.06858 12.8552 3.17991C13.1229 3.29125 13.366 3.4544 13.5705 3.66L14.2705 4.36C14.6824 4.76961 15.2396 4.99967 15.8205 5H16.8205C17.4039 5 17.9635 5.23179 18.3761 5.64437C18.7887 6.05695 19.0205 6.61653 19.0205 7.2V8.2C19.0208 8.7809 19.2509 9.33809 19.6605 9.75L20.3605 10.45C20.5661 10.6545 20.7292 10.8975 20.8406 11.1652C20.9519 11.433 21.0092 11.7201 21.0092 12.01C21.0092 12.3 20.9519 12.587 20.8406 12.8548C20.7292 13.1225 20.5661 13.3656 20.3605 13.57L19.6605 14.27C19.2509 14.6819 19.0208 15.2391 19.0205 15.82V16.82C19.0205 17.4035 18.7887 17.9631 18.3761 18.3756C17.9635 18.7882 17.4039 19.02 16.8205 19.02H15.8205C15.2396 19.0203 14.6824 19.2504 14.2705 19.66L13.5705 20.36C13.366 20.5656 13.1229 20.7288 12.8552 20.8401C12.5875 20.9514 12.3004 21.0087 12.0105 21.0087C11.7205 21.0087 11.4334 20.9514 11.1657 20.8401C10.898 20.7288 10.6549 20.5656 10.4505 20.36L9.75046 19.66C9.33855 19.2504 8.78136 19.0203 8.20046 19.02H7.20046C6.61698 19.02 6.05741 18.7882 5.64483 18.3756C5.23225 17.9631 5.00046 17.4035 5.00046 16.82V15.82C5.00013 15.2391 4.77006 14.6819 4.36046 14.27L3.66046 13.57C3.45486 13.3656 3.2917 13.1225 3.18037 12.8548C3.06903 12.587 3.01172 12.3 3.01172 12.01C3.01172 11.7201 3.06903 11.433 3.18037 11.1652C3.2917 10.8975 3.45486 10.6545 3.66046 10.45L4.36046 9.75C4.77006 9.33809 5.00013 8.7809 5.00046 8.2V7.2Z", "stroke", "#3BAD69", "stroke-width", "1.75", "stroke-linecap", "round", "stroke-linejoin", "round"], ["id", "clip0_142_3929"], ["width", "24", "height", "24", "fill", "white"], ["style", "font-weight: 500;padding-left: 5px;", 3, "click", 4, "ngIf"], ["size", "4", 2, "display", "flex", "align-items", "center", "justify-content", "end"], ["name", "chevron-forward-outline", 3, "click", 4, "ngIf"], ["style", "color: #191966;text-align: right; font-family: Roboto;font-size: 14px;font-style: normal;font-weight: 500;line-height: 14px;text-decoration-line: underline;", 3, "click", 4, "ngIf"], [1, "ion-padding", 2, "padding", "16px", 3, "ngClass"], ["size", "4.5", 2, "display", "flex", "flex-direction", "column", "justify-content", "center"], ["id", "breakup-modal", 2, "margin-top", "4px", "font-weight", "500", 3, "click"], ["size", "7.5", 2, "display", "flex", "justify-content", "center", "align-items", "center"], [3, "click", "ngClass"], [1, "theme1", 2, "--background", "#fff"], ["size", "12"], [2, "margin", "4px 8px"], [1, "review-booking-card", 2, "overflow", "inherit", "margin", "0", "border", "1px solid #dfdfdf"], [1, "ion-padding", 2, "padding", "7px", 3, "ngClass"], ["size", "2", 2, "display", "flex", "justify-content", "center", "align-items", "center"], ["width", "33", "height", "34", "viewBox", "0 0 33 34", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 4, "ngIf"], ["style", "display: inline-block; height: 30px; width: 30px; top: 23%;", 3, "src", 4, "ngIf"], ["size", "8", 2, "display", "flex", "justify-content", "center", "align-items", "start", "flex-direction", "column"], ["size", "2", 2, "display", "flex", "justify-content", "center", "align-items", "center", "flex-direction", "column"], [1, "ion-padding-top", 2, "padding-bottom", "10px"], ["size", "4", 1, "ion-no-padding"], ["style", "margin: 0;font-weight: bold;color: #191966 !important", 4, "ngIf"], ["style", "margin: 0;font-weight: bold;color: #000 !important", 4, "ngIf"], [2, "margin-bottom", "0"], ["size", "4 ", 1, "ion-no-padding"], ["style", "margin: 0;font-weight: bold; color: #F2C21A !important", 4, "ngIf"], ["style", "margin: 0;font-weight: bold; color: #000 !important", 4, "ngIf"], [2, "color", "#A0A0A0"], ["size", "4", 2, "display", "flex", "align-items", "center", "padding", "0"], [3, "ngClass"], ["width", "24", "height", "8", "viewBox", "0 0 24 8", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 4, "ngIf"], ["style", "font-size: 12px;", 4, "ngIf"], [1, "", 2, "margin", "0", "color", "#333 !important", "font-size", "16px", "margin-top", "10px"], ["style", "\n                    margin: 0;\n                    position: absolute;\n                    left: 30%;\n                    top: 10px;\n                    font-size: 12px;\n                  ", 4, "ngIf"], [1, "devider_set"], ["size", "12", 2, "padding", "0px"], ["style", "display:contents ;", "src", "./assets/icon/devider.svg", 4, "ngIf"], ["style", "display:contents ;", "src", "./assets/icon/network_devider.svg", 4, "ngIf"], [1, "ion-margin-vertical", 2, "margin", "0"], ["size", "12", 3, "ngStyle"], [2, "font-weight", "bold", 3, "click", "ngClass"], ["name", "chevron-down-outline", "class", "ion-margin-start", "style", "height: 18px;width: 18px;margin-left: 4px;", 4, "ngIf"], ["name", "chevron-up-outline", "class", "ion-margin-start", "style", "height: 18px;width: 18px;margin-left: 4px;", 4, "ngIf"], ["style", "padding-bottom:0px", "class", "card-1 mr-tp-16", 4, "ngIf"], ["class", "ion-margin select-method-row", "style", "margin-left: 5px;margin-bottom: 0;", 4, "ngIf"], ["style", "min-height: 4px;", 4, "ngIf"], ["class", "card-1", "style", "padding: 16px 11px;", 4, "ngIf"], ["class", "ion-margin select-method-row", "style", "margin-left: 5px;", 4, "ngIf"], [1, "ion-margin", 2, "margin-left", "5px", 3, "click", "ngClass"], ["size", "11", 2, "display", "flex", "align-items", "center"], ["size", "1", 2, "display", "flex", "align-items", "center", "justify-content", "end"], ["name", "chevron-forward-outline"], [2, "min-height", "4px"], [1, "terms-row", "ion-margin", 2, "margin-left", "5px"], [3, "click"], ["id", "payMentGateWayForm", "name", "payMentGateWayForm"], ["width", "33", "height", "34", "viewBox", "0 0 33 34", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["x", "0.5", "y", "1", "width", "32", "height", "32", "rx", "16", "fill", "white", "stroke", "#DFDFDF"], ["d", "M10.9697 12.0437L8.16703 9.24097C4.21776 13.5087 4.21776 20.1333 8.16703 24.4648L10.9697 21.662C8.54921 18.923 8.54921 14.7827 10.9697 12.0437Z", "fill", "#FBAE17"], ["d", "M11.5429 22.2354L8.74023 25.0381C13.008 28.9873 19.6326 28.9873 23.964 25.0381L21.1613 22.2354C18.4223 24.6559 14.2819 24.6559 11.5429 22.2354Z", "fill", "#FBAE17"], ["d", "M21.7344 21.662L24.5371 24.4648C28.4863 20.197 28.4863 13.5724 24.5371 9.24097L21.7344 12.0437C24.1549 14.7827 24.1549 18.923 21.7344 21.662Z", "fill", "#BBBDBF"], ["d", "M21.1613 11.4704L23.964 8.6677C19.6963 4.71843 13.0717 4.71843 8.74023 8.6677L11.5429 11.4704C14.2819 9.04989 18.4223 9.04989 21.1613 11.4704Z", "fill", "#FBAE17"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M13.8362 18.4135C13.8999 18.0313 13.7725 17.7765 13.454 17.5854C13.1992 17.458 12.8807 17.458 12.6259 17.6491C12.3711 17.8402 12.2437 18.095 12.3074 18.4135H12.2437C11.7341 18.4135 11.2246 18.4135 10.6513 18.4135C10.4602 18.4135 10.3965 18.3498 10.3965 18.1587C10.3965 17.7765 10.3965 17.3306 10.3965 16.9484C10.3965 16.8847 10.3965 16.821 10.4602 16.821C10.5239 16.7573 10.5239 16.7573 10.5239 16.6936C10.5239 16.184 10.5876 15.7382 10.5876 15.2286C10.5876 15.1012 10.6513 15.0375 10.7787 15.0375C11.2246 15.0375 11.6704 15.0375 12.1163 15.0375C14.1547 15.0375 16.1293 15.0375 18.1676 15.0375C19.3142 15.0375 20.5244 15.0375 21.671 15.0375C21.9258 15.0375 22.1806 15.2286 22.2443 15.4834V15.5471C22.2443 16.3114 22.2443 17.0758 22.2443 17.9039C22.2443 17.9676 22.1806 18.0313 22.1169 18.0313C21.8621 18.095 21.5436 18.1587 21.2888 18.2224C20.9703 18.2861 20.5881 18.3498 20.2696 18.4135C20.1423 18.4135 19.9512 18.4772 19.7601 18.4772C19.7601 18.1587 19.6964 17.8402 19.3779 17.6491C19.2505 17.5854 19.0594 17.5217 18.932 17.5217C18.4861 17.5854 18.1676 17.9676 18.2313 18.4135C16.83 18.4135 15.3649 18.4135 13.8362 18.4135ZM15.9382 15.4834C15.6834 15.4834 15.3649 15.4834 15.1101 15.4834C14.9827 15.4834 14.8553 15.5471 14.8553 15.7382C14.8553 15.9292 14.8553 16.1203 14.8553 16.3751C14.8553 16.5662 14.919 16.6299 15.1101 16.6299C15.6834 16.6299 16.193 16.6299 16.7663 16.6299C16.8937 16.6299 17.0211 16.5662 17.0211 16.3751C17.0211 16.184 17.0211 15.9292 17.0211 15.7382C17.0211 15.6108 16.9574 15.4834 16.7663 15.4834C16.5115 15.4834 16.193 15.4834 15.9382 15.4834ZM13.454 15.4834C13.1992 15.4834 12.8807 15.4834 12.6259 15.4834C12.4985 15.4834 12.4348 15.5471 12.3711 15.6745C12.3711 15.8655 12.3711 16.1203 12.3711 16.3114C12.3711 16.4388 12.4348 16.5025 12.5622 16.5025C13.1355 16.5025 13.7088 16.5025 14.2821 16.5025C14.4094 16.5025 14.4731 16.4388 14.4731 16.3114C14.4731 16.1203 14.4731 15.8655 14.4731 15.6745C14.4731 15.4834 14.4094 15.4197 14.2184 15.4197C13.9636 15.4834 13.7088 15.4834 13.454 15.4834ZM18.4224 15.4834C18.1676 15.4834 17.8491 15.4834 17.5943 15.4834C17.4669 15.4834 17.4032 15.5471 17.4032 15.6745C17.4032 15.8655 17.4032 16.1203 17.4032 16.3114C17.4032 16.4388 17.4669 16.5025 17.5943 16.5025C18.1676 16.5025 18.7409 16.5025 19.3142 16.5025C19.4416 16.5025 19.5053 16.4388 19.5053 16.3114C19.5053 16.1203 19.5053 15.8655 19.5053 15.6745C19.5053 15.4834 19.4416 15.4197 19.2505 15.4197C18.9957 15.4834 18.6772 15.4834 18.4224 15.4834ZM20.9066 16.5662C21.1614 16.5662 21.4799 16.5662 21.7347 16.5662C21.8621 16.5662 21.9258 16.5025 21.9258 16.3751C21.9258 16.2477 21.9258 16.1203 21.9258 15.9292C21.9258 15.7382 21.8621 15.6108 21.671 15.5471C21.6073 15.4834 21.4799 15.4834 21.3525 15.4834C20.9066 15.4834 20.4607 15.4834 20.0149 15.4834C19.8238 15.4834 19.7601 15.5471 19.7601 15.7382C19.7601 15.9292 19.7601 16.1203 19.7601 16.3114C19.7601 16.5025 19.8238 16.5662 20.0149 16.5662C20.3333 16.5662 20.6518 16.5662 20.9066 16.5662ZM11.0972 16.7573C11.0972 17.0758 11.0972 17.458 11.0972 17.7765C11.0972 17.9039 11.1609 17.9676 11.2883 17.9676C11.4157 17.9676 11.543 17.9676 11.6704 17.9676C11.7978 17.9676 11.9252 17.9039 11.9252 17.7128C11.9252 17.0121 11.9252 16.3114 11.9252 15.6745C11.9252 15.5471 11.8615 15.4834 11.7341 15.4197C11.6067 15.4197 11.4793 15.4197 11.4156 15.4197C11.2246 15.4197 11.1609 15.4834 11.1609 15.6745C11.0972 16.1203 11.0972 16.4388 11.0972 16.7573Z", "fill", "#BBBDBF"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M12.498 18.2224C12.498 17.9039 12.8165 17.6491 13.135 17.6491C13.4535 17.6491 13.7083 17.9039 13.7083 18.2861C13.7083 18.6045 13.4535 18.8593 13.135 18.8593C12.7528 18.8593 12.498 18.6045 12.498 18.2224ZM13.3898 18.2861C13.3898 18.1587 13.2624 17.9676 13.135 17.9676C13.0076 17.9676 12.8802 18.095 12.8165 18.2224C12.8165 18.3498 12.9439 18.5408 13.0713 18.5408C13.2624 18.5408 13.3898 18.4135 13.3898 18.2861Z", "fill", "#BBBDBF"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M19.059 18.8593C18.7405 18.8593 18.422 18.6045 18.4857 18.2224C18.4857 17.9039 18.7405 17.6491 19.059 17.6491C19.3775 17.6491 19.6323 17.9039 19.6323 18.2861C19.696 18.6045 19.4412 18.8593 19.059 18.8593ZM19.3775 18.2224C19.3775 18.095 19.2501 17.9676 19.1227 17.9676C18.9953 17.9676 18.8679 18.095 18.8679 18.2861C18.8679 18.4135 18.9953 18.5408 19.1864 18.5408C19.2501 18.5408 19.3775 18.4135 19.3775 18.2224Z", "fill", "#BBBDBF"], [2, "display", "inline-block", "height", "30px", "width", "30px", "top", "23%", 3, "src"], [2, "margin", "0", "font-weight", "bold", "color", "#191966 !important"], [2, "margin", "0", "font-weight", "bold", "color", "#000 !important"], [2, "margin", "0", "font-weight", "bold", "color", "#F2C21A !important"], ["width", "24", "height", "8", "viewBox", "0 0 24 8", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M16.5085 6.42781C16.3873 5.70013 16.6298 5.21501 17.2362 4.85117C17.7213 4.60862 18.3277 4.60861 18.8128 4.97245C19.298 5.33629 19.5405 5.82141 19.4192 6.42781H19.5405C20.5108 6.42781 21.481 6.42781 22.5725 6.42781C22.9363 6.42781 23.0576 6.30653 23.0576 5.94269C23.0576 5.21501 23.0576 4.36606 23.0576 3.63838C23.0576 3.5171 23.0576 3.39582 22.9363 3.39582C22.8151 3.27454 22.8151 3.27454 22.8151 3.15326C22.8151 2.18303 22.6938 1.33407 22.6938 0.363838C22.6938 0.12128 22.5725 0 22.3299 0C21.481 0 20.632 0 19.7831 0C15.9021 0 12.1425 0 8.26154 0C6.07851 0 3.7742 0 1.59117 0C1.10605 0 0.620937 0.363838 0.499659 0.848955V0.970235C0.499659 2.42559 0.499659 3.88094 0.499659 5.45757C0.499659 5.57885 0.620934 5.70013 0.742214 5.70013C1.22733 5.82141 1.83373 5.94269 2.31885 6.06397C2.92525 6.18525 3.65292 6.30653 4.25932 6.42781C4.50187 6.42781 4.86571 6.54909 5.22955 6.54909C5.22955 5.94269 5.35083 5.33629 5.95723 4.97245C6.19979 4.85117 6.56362 4.7299 6.80618 4.7299C7.65514 4.85117 8.26154 5.57885 8.14026 6.42781C10.8084 6.42781 13.5978 6.42781 16.5085 6.42781ZM12.5063 0.848955C12.9914 0.848955 13.5978 0.848955 14.0829 0.848955C14.3255 0.848955 14.5681 0.970235 14.5681 1.33407C14.5681 1.69791 14.5681 2.06175 14.5681 2.54687C14.5681 2.9107 14.4468 3.03198 14.0829 3.03198C12.9914 3.03198 12.0212 3.03198 10.9297 3.03198C10.6871 3.03198 10.4446 2.9107 10.4446 2.54687C10.4446 2.18303 10.4446 1.69791 10.4446 1.33407C10.4446 1.09151 10.5658 0.848955 10.9297 0.848955C11.4148 0.848955 12.0212 0.848955 12.5063 0.848955ZM17.2362 0.848955C17.7213 0.848955 18.3277 0.848955 18.8128 0.848955C19.0554 0.848955 19.1767 0.970235 19.298 1.21279C19.298 1.57663 19.298 2.06175 19.298 2.42559C19.298 2.66815 19.1767 2.78943 18.9341 2.78943C17.8426 2.78943 16.7511 2.78943 15.6596 2.78943C15.417 2.78943 15.2957 2.66815 15.2957 2.42559C15.2957 2.06175 15.2957 1.57663 15.2957 1.21279C15.2957 0.848955 15.417 0.727677 15.7809 0.727677C16.266 0.848956 16.7511 0.848955 17.2362 0.848955ZM7.77642 0.848955C8.26154 0.848955 8.86793 0.848955 9.35305 0.848955C9.59561 0.848955 9.71689 0.970235 9.71689 1.21279C9.71689 1.57663 9.71689 2.06175 9.71689 2.42559C9.71689 2.66815 9.59561 2.78943 9.35305 2.78943C8.26154 2.78943 7.17002 2.78943 6.07851 2.78943C5.83595 2.78943 5.71467 2.66815 5.71467 2.42559C5.71467 2.06175 5.71467 1.57663 5.71467 1.21279C5.71467 0.848955 5.83595 0.727677 6.19979 0.727677C6.6849 0.848956 7.2913 0.848955 7.77642 0.848955ZM3.04652 2.91071C2.56141 2.91071 1.95501 2.91071 1.46989 2.91071C1.22733 2.91071 1.10605 2.78942 1.10605 2.54687C1.10605 2.30431 1.10605 2.06175 1.10605 1.69791C1.10605 1.33407 1.22733 1.09151 1.59117 0.970235C1.71245 0.848956 1.95501 0.848955 2.19757 0.848955C3.04652 0.848955 3.89548 0.848955 4.74443 0.848955C5.10827 0.848955 5.22955 0.970235 5.22955 1.33407C5.22955 1.69791 5.22955 2.06175 5.22955 2.42559C5.22955 2.78943 5.10827 2.91071 4.74443 2.91071C4.13804 2.91071 3.53164 2.91071 3.04652 2.91071ZM21.7235 3.27454C21.7235 3.88094 21.7235 4.60862 21.7235 5.21501C21.7235 5.45757 21.6023 5.57885 21.3597 5.57885C21.1171 5.57885 20.8746 5.57885 20.632 5.57885C20.3895 5.57885 20.1469 5.45757 20.1469 5.09373C20.1469 3.75966 20.1469 2.42559 20.1469 1.21279C20.1469 0.970235 20.2682 0.848956 20.5108 0.727677C20.7533 0.727677 20.9959 0.727677 21.1171 0.727677C21.481 0.727677 21.6023 0.848955 21.6023 1.21279C21.7235 2.06175 21.7235 2.66815 21.7235 3.27454Z", "fill", "#191966"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M19.0557 6.06396C19.0557 5.45756 18.4493 4.97244 17.8429 4.97244C17.2365 4.97244 16.7514 5.45756 16.7514 6.18524C16.7514 6.79163 17.2365 7.27675 17.8429 7.27675C18.5705 7.27675 19.0557 6.79163 19.0557 6.06396ZM17.3578 6.18524C17.3578 5.94268 17.6003 5.57884 17.8429 5.57884C18.0854 5.57884 18.328 5.8214 18.4493 6.06396C18.4493 6.30652 18.2067 6.67036 17.9642 6.67036C17.6003 6.67036 17.3578 6.42779 17.3578 6.18524Z", "fill", "#191966"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M6.56377 7.27675C7.17017 7.27675 7.77657 6.79163 7.65529 6.06396C7.65529 5.45756 7.17017 4.97244 6.56377 4.97244C5.95738 4.97244 5.47226 5.45756 5.47226 6.18524C5.35098 6.79163 5.8361 7.27675 6.56377 7.27675ZM5.95738 6.06396C5.95738 5.8214 6.19994 5.57884 6.4425 5.57884C6.68505 5.57884 6.92761 5.8214 6.92761 6.18524C6.92761 6.42779 6.68505 6.67036 6.32122 6.67036C6.19994 6.67036 5.95738 6.4278 5.95738 6.06396Z", "fill", "#191966"], [2, "font-size", "12px"], [2, "margin", "0", "position", "absolute", "left", "30%", "top", "10px", "font-size", "12px"], ["src", "./assets/icon/devider.svg", 2, "display", "contents"], ["src", "./assets/icon/network_devider.svg", 2, "display", "contents"], [1, "passanger-details", "ion-margin", 2, "margin-bottom", "10px", "margin-top", "10px"], ["class", "passanger-details ion-margin", "style", "margin-bottom: 10px; margin-top: 10px;", 4, "ngFor", "ngForOf"], [1, "passanger-details", "ion-margin", 2, "margin-top", "0px"], ["size", "1.5", 1, "ion-margin-top"], ["src", "./assets/icon/themeone_location.svg", "name", "navigate-circle-outline", "size", "large", 2, "height", "24px", "width", "24px"], ["size", "10.5", 1, "ion-margin-top"], [2, "line-height", "22px"], [1, "drop_board_address"], ["class", "drop_board_address", 4, "ngIf"], ["size", "1.5", 1, ""], ["src", "./assets/icon/theme1_dropicon.svg", "name", "navigate-circle-outline", "size", "large", 2, "height", "24px", "width", "24px"], ["size", "10.5", 1, ""], ["size", "6", 2, "padding", "0px 5px"], [2, "padding-bottom", "5px"], [2, "text-align", "right", "padding-bottom", "5px"], [2, "text-align", "right"], ["name", "chevron-down-outline", 1, "ion-margin-start", 2, "height", "18px", "width", "18px", "margin-left", "4px"], ["name", "chevron-up-outline", 1, "ion-margin-start", 2, "height", "18px", "width", "18px", "margin-left", "4px"], [1, "review-booking-card", 2, "margin", "3px"], ["name", "chevron-down-outline", "class", "ion-margin-start", "style", "height: 18px;width: 18px;", 4, "ngIf"], ["name", "chevron-up-outline", "class", "ion-margin-start", "style", "height: 18px;width: 18px;", 4, "ngIf"], ["name", "chevron-down-outline", 1, "ion-margin-start", 2, "height", "18px", "width", "18px"], ["name", "chevron-up-outline", 1, "ion-margin-start", 2, "height", "18px", "width", "18px"], [1, "card-1", "mr-tp-16", 2, "padding-bottom", "0px"], [1, "Contact-details", 2, "color", "#333333"], [1, "pay-box"], ["lines", "none"], ["slot", "start", 2, "margin", "-11px 15px -12px -13px", "--color", "var(--iconsAndButtonsColor)", 3, "ngModelChange", "ionChange", "ngStyle", "ngModel"], [1, "added-coupons"], ["class", "text-success applied-coupons-title ", 4, "ngIf"], ["class", "applied-coupons", 4, "ngIf"], ["class", "add-coupon text-success", 3, "click", 4, "ngIf"], ["class", "cash_couponcoupon_radio_cbus", "mode", "md", 3, "ngModel", "ngModelChange", "ionChange", 4, "ngIf"], ["class", "coupon-form", 3, "formGroup", "ngClass", 4, "ngIf"], [1, "text-success", "applied-coupons-title"], [1, "applied-coupons"], [4, "ngFor", "ngForOf"], [1, "code"], [1, "amount"], [1, "cancel-coupon"], ["color", "danger", "name", "trash", 3, "click"], [1, "add-coupon", "text-success", 3, "click"], [1, "label"], [1, "text-success"], ["name", "add", 1, "success-text"], ["mode", "md", 1, "cash_couponcoupon_radio_cbus", 3, "ngModelChange", "ionChange", "ngModel"], ["size", "7.2"], ["slot", "start", "value", "special", 3, "ngStyle"], ["size", "4.8"], ["slot", "start", "value", "normal", 3, "ngStyle"], [1, "coupon-form", 3, "formGroup", "ngClass"], [2, "--padding-start", "0px", 3, "ngClass"], ["position", "floating"], ["required", "", "formControlName", "couponCode", "type", "text"], ["size", "9", 2, "padding-left", "0"], ["no-padding", "", 2, "--padding-start", "0px"], ["type", "text", 3, "ngModelChange", "ngModelOptions", "ngModel"], ["size", "3", 2, "padding", "24px 0 0 0px", 3, "ngClass"], ["mode", "md", "expand", "block", 2, "--background", "var(--iconsAndButtonsColor)", "--color", "var(--primaryText)", 3, "click"], ["class", "remove-coupon text-danger", 4, "ngIf"], [1, "remove-coupon", "text-danger"], [1, "ion-margin", "select-method-row", 2, "margin-left", "5px", "margin-bottom", "0"], ["size", "12", 1, "ion-margin-bottom"], ["size", "6", 2, "padding", "0px"], ["size", "6", 2, "text-align", "end", "padding", "0px"], ["style", "font-size: 14px;color: var(--Type-Title, #333);font-weight: 500;", 3, "click", 4, "ngIf"], [1, "ion-margin-vertical", 2, "margin-bottom", "12px", "margin-top", "10px", 3, "click"], ["size", "10", 2, "padding", "0px 0px 5px 0px"], [1, "show-details", 2, "color", "var(--Type-Title, #333)", "font-weight", "500"], ["size", "2", 2, "padding", "0px"], ["name", "chevron-down-outline", "class", "ion-margin-start", "style", "float: right;", 4, "ngIf"], ["name", "chevron-up-outline", "class", "ion-margin-start", "style", "float: right;", 4, "ngIf"], ["style", "padding:0px;margin-top: -14px;", "class", "card-1 mr-tp-16", 4, "ngIf"], [2, "font-size", "14px", "color", "var(--Type-Title, #333)", "font-weight", "500", 3, "click"], ["name", "chevron-down-outline", 1, "ion-margin-start", 2, "float", "right"], ["name", "chevron-up-outline", 1, "ion-margin-start", 2, "float", "right"], [1, "card-1", "mr-tp-16", 2, "padding", "0px", "margin-top", "-14px"], ["mode", "md", 3, "ngModelChange", "ionCancel", "ionChange", "click", "ngModel"], [3, "ngStyle"], ["slot", "start", 3, "ngStyle", "value", 4, "ngIf"], ["slot", "start", 3, "ngStyle", "value"], [1, "card-1", 2, "padding", "16px 11px"], [2, "color", "#191966", 3, "ngClass"], ["col-12", ""], [2, "--padding-start", "0px"], ["type", "text", "label", "Card Number", "labelPlacement", "floating", 1, "txt-lbl", 3, "ngModelChange", "ngModel"], ["mode", "md", 1, "btn_outline", 2, "width", "48%", "color", "#191966", "font-weight", "600", 3, "click"], ["mode", "md", 2, "width", "48%", "--background", "#191966", "font-weight", "600", 3, "click"], [1, "pay-box", "qoute-pnr"], ["mode", "md", "style", "margin: -11px 15px -12px -13px;", "slot", "start", 3, "ngModel", "ngModelChange", "ionChange", 4, "ngIf"], ["mode", "md", "style", "margin: -11px 15px -12px -13px; --checkbox-background-checked : var(--bottomBarColor);", "slot", "start", 3, "ngModel", "ngModelChange", "ionChange", 4, "ngIf"], ["class", "invalid-coupon ", 4, "ngIf"], ["mode", "md", "slot", "start", 2, "margin", "-11px 15px -12px -13px", 3, "ngModelChange", "ionChange", "ngModel"], ["mode", "md", "slot", "start", 2, "margin", "-11px 15px -12px -13px", "--checkbox-background-checked", "var(--bottomBarColor)", 3, "ngModelChange", "ionChange", "ngModel"], [2, "width", "100%", 3, "ngClass"], ["required", "", "formControlName", "pnrnumber", "type", "text", "label", "PNR Number", "labelPlacement", "floating"], ["size", "9", 2, "padding", "6px 1px"], ["required", "", "formControlName", "mobileno", "type", "number", "label", "Mobile Number", "labelPlacement", "floating", 3, "readonly"], ["size", "3", 2, "padding", "24px 0px 0px 0px", 3, "ngClass"], ["mode", "md", "style", "    color: #191966;--background: #FFBD16;", "expand", "block", 3, "click", 4, "ngIf"], ["mode", "md", "style", "    color: var(--primaryText);--background: var(--iconsAndButtonsColor);", "expand", "block", 3, "click", 4, "ngIf"], ["mode", "md", "expand", "block", 2, "color", "#191966", "--background", "#FFBD16", 3, "click"], ["mode", "md", "expand", "block", 2, "color", "var(--primaryText)", "--background", "var(--iconsAndButtonsColor)", 3, "click"], [1, "invalid-coupon"], [1, "ion-margin", "select-method-row", 2, "margin-left", "5px"], ["mode", "md", 3, "ngModel", "ngModelChange", "ionChange", 4, "ngIf"], ["mode", "md", 3, "ngModelChange", "ionChange", "ngModel"], [1, "wall_item"], ["style", "  justify-content: start;", 4, "ngIf"], [1, "chartered_wall", 3, "ngStyle"], ["slot", "start", "value", "3", 3, "ngStyle"], ["slot", "start", "value", "1", 3, "ngStyle"], [2, "justify-content", "start"], ["name", "information-circle-outline", 2, "z-index", "50", "height", "18px", "width", "18px", "padding-left", "14px", 3, "click"], ["slot", "start", "value", "2", "checked", "true", 3, "ngStyle"], ["size", "12", "class", "ion-margin-bottom", 4, "ngIf"], [1, "Contact-details"], ["slot", "start", 3, "value", "ngStyle"], ["src", "../../assets/icon/Razorpay_Secure_Payment-1.png", "alt", "", 1, "razorpayImage"], [1, "whole", "center"], [1, "legend-box", 2, "position", "absolute", "bottom", "0", "width", "100% !important", "padding", "7px 16px 20px 16px"], [1, "ion-margin", "ion-padding-bottom", 2, "padding", "0px", "margin", "0px"], ["size", "10", 2, "display", "flex", "justify-content", "start", "align-items", "center", "padding-left", "0px"], [2, "color", "#333", "font-size", "18px", "font-weight", "600"], ["size", "2", 2, "display", "flex", "justify-content", "end", "align-items", "center", "color", "rgba(173, 173, 173, 1)"], ["name", "close-outline", "size", "large", 3, "click"], [1, "hr-border"], [2, "padding", "5px 0px"], [1, "cbusbold"], [1, "fare-txt", "txt-c22", 2, "color", "#333"], ["style", "padding: 5px 0px;", 4, "ngIf"], [2, "font-size", "16px", "font-weight", "bolder", "color", "#333"], [1, "fare-txt", "txt-c1"], [1, "fare-txt", "txt-c22"], [1, "legend-box", 2, "position", "absolute", "bottom", "0", "width", "100% !important", "padding", "12px"], ["size", "6", "style", "margin:0;font-size: 14px;font-weight: 600;", "class", "brws-txt", 4, "ngIf"], ["size", "6", 1, "dwn-txt", 2, "margin", "0", "font-size", "14px", "font-weight", "600", 3, "click", "ngStyle"], ["class", "container-m", 4, "ngIf"], [1, "container-m"], ["size", "2"], ["style", "height: 40px;", "src", "./assets/icon/rupee-indian.png", "alt", "", 4, "ngIf"], ["style", "height: 40px;filter: invert(100%) sepia(80%) saturate(4133%) hue-rotate(338deg) brightness(97%) contrast(94%);", "src", "./assets/icon/rupee-indian.png", "alt", "", 4, "ngIf"], ["size", "10", 1, "promo-txt-m"], [2, "font-size", "11px"], ["size", "6", 1, "brws-txt", 2, "margin", "0", "font-size", "14px", "font-weight", "600"], ["style", "height: 40px;", "src", "./assets/icon/calculator.png", "alt", "", 4, "ngIf"], ["style", "height: 40px;filter: invert(100%) sepia(80%) saturate(4133%) hue-rotate(338deg) brightness(97%) contrast(94%);", "src", "./assets/icon/calculator.png", "alt", "", 4, "ngIf"], ["src", "./assets/icon/calculator.png", "alt", "", 2, "height", "40px"], ["src", "./assets/icon/calculator.png", "alt", "", 2, "height", "40px", "filter", "invert(100%) sepia(80%) saturate(4133%) hue-rotate(338deg) brightness(97%) contrast(94%)"], ["src", "./assets/icon/rupee-indian.png", "alt", "", 2, "height", "40px"], ["src", "./assets/icon/rupee-indian.png", "alt", "", 2, "height", "40px", "filter", "invert(100%) sepia(80%) saturate(4133%) hue-rotate(338deg) brightness(97%) contrast(94%)"], [1, "legend-box", 2, "position", "absolute", "bottom", "0", "width", "100% !important"], ["size", "6", 1, "brws-txt", 2, "margin", "0"], ["size", "6", 1, "dwn-txt", 2, "margin", "0", 3, "click"], ["zoom", "", "pager", "false", 2, "height", "45%", 3, "options"], ["style", "background: #e4e5e6;", "class", " slide-card center", 4, "ngFor", "ngForOf"], ["size", "6", 1, "brws-txt"], ["style", "background: #e4e5e6;color:grey;font-size: 11px;font-weight: bold;border: none; margin:0;width:100%", "class", "container-m ", 4, "ngIf"], [1, "slide-card", "center", 2, "background", "#e4e5e6"], ["alt", "", 2, "width", "50%", 3, "src"], [2, "color", "grey", "font-size", "11px", "font-weight", "bold", "height", "50px"], [1, "container-m", 2, "background", "#e4e5e6", "color", "grey", "font-size", "11px", "font-weight", "bold", "border", "none", "margin", "0", "width", "100%"], [1, "theme-1-legend-box", 2, "padding-top", "0px"], [2, "height", "105px"], [1, "success_book", 2, "text-align", "center"], ["src", "./assets/icon/joy.gif", "alt", ""], ["size", "12", 2, "margin", "10px 0px"], [1, "cancel-txt-msg-hd"], ["size", "12", 3, "click"], ["fill", "clear", 1, "text-center", 3, "ngClass"], [2, "font-weight", "500", "padding-left", "5px", 3, "click"], ["name", "chevron-forward-outline", 3, "click"], [2, "color", "#191966", "text-align", "right", "font-family", "Roboto", "font-size", "14px", "font-style", "normal", "font-weight", "500", "line-height", "14px", "text-decoration-line", "underline", 3, "click"], [2, "z-index", "0"], ["mode", "md", 1, "bg-cl"], ["slot", "start"], [2, "color", "var(--placeholderColor)", 3, "click"], [1, "head"], [2, "--background", "#F1F7FA !important"], [2, "border", "1px solid #626262", "border-radius", "10px", "margin", "10px", "margin-bottom", "18%"], [1, "card-2", 2, "background", "#D1E6FF", "border-radius", "10px", "border-bottom", "1px solid #626262", 3, "ngClass"], [1, "wrap"], [1, "left"], [1, "txt-c1"], [2, "margin", "0px 0px 8px 0px", "width", "125px", "color", "var(--sectionHeaderTextColor) !important"], [1, "right"], [1, "txt-c1", 2, "color", "var(--sectionHeaderTextColor) !important"], [2, "align-items", "center"], ["name", "arrow-forward-outline", 1, "mr-md", 2, "font-size", "20px"], [2, "clear", "both"], [1, "wrap", 2, "padding-bottom", "30px"], [1, "center1"], ["style", "padding-top: 10px;", 4, "ngIf"], ["style", "color: #000 !important;", 4, "ngIf"], ["class", "Contact-details", "style", "font-size: 16px;font-weight: bold;-webkit-text-fill-color: var(--primaryText) !important ", 4, "ngIf"], [1, "pos", "center-hr", 2, "margin-top", "0px", 3, "click"], ["name", "chevron-down-outline", 4, "ngIf"], ["name", "chevron-up-outline", 4, "ngIf"], ["style", "padding-bottom:0px", "class", "card-1", 4, "ngIf"], ["style", "padding-bottom:0px; background: white;", "class", "card-1", 4, "ngIf"], ["style", "background: white;", "class", "card-1", 4, "ngIf"], ["class", "card-1", "style", "background: white;", 4, "ngIf"], ["class", "card-1", 4, "ngIf"], ["style", "background: white;", "id", "", "class", "card-1", 4, "ngIf"], [1, "card-1", 2, "margin-bottom", "5px", "background", "white"], [1, "terms-txt"], [1, "terms-click", 3, "click"], ["style", "position: fixed;bottom: 10px;width: 100%;", 4, "ngIf"], ["style", "position: fixed;bottom: 0;width: 100%;", 4, "ngIf"], ["class", "whole center", 3, "click", 4, "ngIf"], [2, "padding-top", "10px"], [2, "margin", "0px 0px 8px 0px"], ["name", "arrow-back-outline", 1, "mr-md", 2, "font-size", "20px"], [2, "color", "#000 !important"], [1, "pd-10"], [1, "txt-c4"], [2, "background-color", "gray"], [1, "txt-c11"], [1, "bold"], [2, "font-size", "16px", "font-weight", "bolder", "color", "var(--sectionHeaderTextColor)"], ["size", "6"], [2, "display", "flex", "align-items", "center", "justify-content", "end"], [1, "fare-txt", "txt-c3"], [2, "font-size", "14px", "font-weight", "bolder", "color", "var(--sectionHeaderTextColor)"], [1, "Contact-details", 2, "font-size", "16px", "font-weight", "bold", "-webkit-text-fill-color", "var(--primaryText) !important"], ["name", "chevron-down-outline"], ["name", "chevron-up-outline"], ["style", "font-size:10px", 4, "ngIf"], [2, "font-size", "10px"], [1, "card-1", 2, "padding-bottom", "0px"], ["checked", "", "slot", "start", 2, "--color", "var(--iconsAndButtonsColor)", 3, "ionChange", "ngModelChange", "disabled", "ngModel"], [1, "card-1", 2, "padding-bottom", "0px", "background", "white"], ["lines", "none", 2, "--background", "white"], ["slot", "start", 2, "--color", "var(--iconsAndButtonsColor)", 3, "ngModelChange", "ionChange", "ngModel"], [2, "--background", "white", 3, "ngClass"], ["required", "", "formControlName", "couponCode", "label", "Coupon Code", "labelPlacement", "floating", "type", "text"], [2, "--background", "white"], ["type", "text", "labelPlacement", "floating", 3, "ngModelChange", "ngModel", "label", "ngModelOptions"], ["color", "red", "mode", "md", "cancelText", "Clear offer type", "interface", "action-sheet", "placeholder", "Select offer type", 1, "coupon-txt", 3, "ngModelChange", "ionCancel", "ionChange", "click", "ngModel", "interfaceOptions"], ["class", "rmv-icn", 3, "value", 4, "ngIf"], [1, "rmv-icn", 3, "value"], [1, "card-1", 2, "background", "white"], ["type", "text", "label", "Enter Card No.", "labelPlacement", "floating", 1, "txt-lbl", 3, "ngModelChange", "ngModel"], ["mode", "md", "fill", "outline", "color", "red", 2, "width", "48%", 3, "click"], ["mode", "md", "color", "red", 2, "width", "48%", 3, "click"], ["slot", "start", "color", "red", 2, "margin", "-11px 15px -12px -13px", 3, "ngModelChange", "ionChange", "ngModel"], [2, "width", "100%", "--background", "white", 3, "ngClass"], ["required", "", "formControlName", "pnrnumber", "label", "PNR Number", "labelPlacement", "floating", "type", "number"], ["required", "", "formControlName", "mobileno", "label", "Mobile Number", "labelPlacement", "floating", "type", "number", 3, "readonly"], ["mode", "md", "expand", "block", "color", "red", 3, "click"], ["class", "newOffer", 4, "ngIf"], ["mode", "md", "color", "red", 3, "ngModelChange", "ionChange", "ngModel"], [1, "clear"], [1, "newOffer"], ["size", "8", 2, "padding", "0px"], ["lines", "none", 1, "appliedBox", 2, "--background", "white"], [2, "font-family", "NotoSans", "font-weight", "bold"], ["size", "4", 2, "padding", "0px"], ["lines", "none", 1, "new-label", 2, "--background", "white"], ["size", "1"], [2, "margin", "12px 0px 8px 0px", 3, "value"], ["size", "11"], ["lines", "none", 2, "--padding-start", "0px", "--background", "white"], [1, "offerDesign"], [3, "innerHTML"], ["size", "11", 2, "padding-left", "10px"], [1, "card-1"], ["class", "offersBox", 4, "ngFor", "ngForOf"], ["lines", "none", 1, "appliedBox"], ["lines", "none", 1, "new-label"], [1, "offersBox"], ["lines", "none", 2, "--padding-start", "0px"], [1, "small", "text-danger"], ["size", "6", 1, "center", 2, "text-align", "right"], ["tappable", "", "class", "select-coupon right", 3, "click", 4, "ngIf"], ["lines", "none", 4, "ngIf"], ["color", "red", "slot", "start", 2, "--ion-color-base", "var(--iconsAndButtonsColor) !important", 3, "value"], ["tappable", "", 1, "select-coupon", "right", 3, "click"], ["color", "red", "slot", "start", "value", "1", 2, "--ion-color-base", "var(--iconsAndButtonsColor) !important"], ["style", "--background: white;", 4, "ngIf"], ["name", "information-circle-outline", 2, "z-index", "50", 3, "click"], ["color", "red", "slot", "start", "value", "3", 2, "--ion-color-base", "var(--iconsAndButtonsColor) !important"], ["color", "red", "slot", "start", "value", "2", "checked", "true", 2, "--ion-color-base", "var(--iconsAndButtonsColor) !important"], ["mode", "md", "mode", "md", "color", "red", 3, "ngModelChange", "ionChange", "ngModel"], ["slot", "start", "color", "red", 2, "--ion-color-base", "#2B28CE !important", 3, "value"], ["src", "./assets/icon/Razorpay_Secure_Payment-1.png", 1, "razorpayImage"], ["id", "", 1, "card-1", 2, "background", "white"], ["slot", "start", "color", "red", 3, "value"], ["slot", "end", 1, "paymentOptLogo", 3, "src"], [2, "position", "fixed", "bottom", "10px", "width", "100%"], ["mode", "md", "expand", "block", 1, "seabird_routes-footer", "mr-tp-16", 2, "--border-radius", "50px", 3, "click"], [1, ""], [2, "position", "fixed", "bottom", "0", "width", "100%"], ["mode", "md", "mode", "md", "expand", "full", 1, "routes-footer", "mr-tp-16", 2, "border-radius", "0px", 3, "click"], [1, "center", "pay-txt-1"], [1, "legend-box"], ["src", "assets/icon/ic_right_icon.svg", "alt", "right icon", 1, "right-icon"], [1, "txt-msg"], ["size", "12", 1, "dwn-txt", 3, "click"], ["size", "7"], ["size", "5", 1, "dwn-txt", 3, "click"], [1, "whole", "center", 3, "click"], [1, "txt-msg-hd"], ["size", "5", 1, "brws-txt", 3, "click"], ["size", "5", 1, "brws-txt"], ["size", "5", 1, "seabird_dwn-txt", 3, "click"], ["placeholder", "Enter ID Proof", "type", "text", 3, "ngModelChange", "ngModel"], ["size", "4"], ["size", "4", 1, "brws-txt", 3, "click"], ["size", "4", 1, "seabird_dwn-txt", 3, "click"], [2, "text-align", "center", "font-size", "20px", "font-weight", "bold"], ["floating", ""], ["type", "text", "name", "otp", 3, "ngModelChange", "ngModel"], ["size", "3", 1, "brws-txt", 2, "text-align", "justify", 3, "click"], ["size", "5", 1, "brws-txt", 2, "text-align", "justify", 3, "click"], ["size", "4", 1, "seabird_dwn-txt", 2, "text-align", "justify", 3, "click"], ["size", "6", 1, "seabird_dwn-txt", 2, "margin", "0", 3, "click"], [2, "width", "50%", 3, "src"], [1, "bg-content"], [1, "card-2", "fixed-card", 2, "background", "var(--bookingDetailsBgColor) !important", 3, "ngClass"], [2, "color", "var(--primaryText)"], ["size", "4", 1, "boardingTime"], [2, "font-weight", "500 !important"], ["size", "4", 1, "droppingTime"], [1, "center1", 2, "color", "var(--primaryText)"], ["size", "4", 1, "timeDuration"], ["style", " color:var(--primaryText);", 4, "ngIf"], ["style", "color: black !important; height: 70%; max-height: 70vh; overflow-y: auto;", 3, "ngClass", 4, "ngIf"], ["size", "6", 4, "ngIf"], ["class", "Contact-details", "style", "font-size: 18px;font-weight: bold;-webkit-text-fill-color: var(--sectionHeaderTextColor) ", 4, "ngIf"], ["size", "6", 1, "pos", "viewBottom", 2, "text-align", "right", 3, "click"], [2, "margin-top", "36%", "margin-bottom", "18%"], ["class", "card-1 mr-tp-16", 4, "ngIf"], ["id", "", "class", "card-1 mr-tp-16", 4, "ngIf"], [1, "card-1", "mr-tp-16", 2, "margin-bottom", "16px"], [2, "color", "black !important", "height", "70%", "max-height", "70vh", "overflow-y", "auto", 3, "ngClass"], [1, "pd-10", 3, "ngClass"], [4, "ngIf", "ngIfElse"], [2, "font-size", "20px", "font-weight", "bolder", "color", "black"], [2, "font-size", "14px", "font-weight", "bolder", "color", "#3e3e52"], [1, "sPayment"], [2, "font-size", "18px"], [1, "Contact-details", 2, "font-size", "18px", "font-weight", "bold", "-webkit-text-fill-color", "var(--sectionHeaderTextColor)"], [1, "Contact-details", 3, "ngStyle"], ["class", "cash_couponcoupon_radio", "mode", "md", 3, "ngModel", "ngModelChange", "ionChange", 4, "ngIf"], ["mode", "md", 1, "cash_couponcoupon_radio", 3, "ngModelChange", "ionChange", "ngModel"], ["lines", "none", "size", "7.2"], ["value", "special", "slot", "start"], ["lines", "none", "size", "4.8"], ["value", "normal", "slot", "start"], ["no-padding", ""], ["type", "text", "label", "Email/Phone Number", "labelPlacement", "floating", 3, "ngModelChange", "ngModelOptions", "ngModel"], ["size", "3", 2, "padding", "16px 0 0 0px", 3, "ngClass"], ["name", "chevron-down-outline", 1, "selectIcon"], [1, "card-1", "mr-tp-16"], ["required", "", "formControlName", "pnrnumber", "type", "number", "label", "PNR Number", "labelPlacement", "floating"], ["color", "red", "slot", "start", 3, "value"], ["color", "red", "slot", "start", "value", "1"], ["color", "red", "slot", "start", "value", "3"], ["color", "red", "slot", "start", "value", "2", "checked", "true"], ["src", "./assets/icon/Razorpay_Secure_Payment-1.png", "alt", "", 1, "razorpayImage"], ["id", "", 1, "card-1", "mr-tp-16"], [1, ".continue-default", "pay-txt-1"], [1, "center", "pay-txt-1", 2, "padding-bottom", "0px !important"], [1, "circle"], [1, "circle1"], ["size", "4", 1, "dwn-txt", 3, "click"], ["size", "4", 1, "dwn-txt", 2, "text-align", "justify", 3, "click"], ["class", "ourbustheme", "style", "border-bottom: 1px solid #92949c", 4, "ngIf"], ["class", "ourbustheme", 4, "ngIf"], ["class", "ourbustheme ourbus-center-content", 4, "ngIf"], ["class", "whole center ourbustheme", 3, "click", 4, "ngIf"], ["class", "whole center ourbustheme", 4, "ngIf"], [1, "ourbustheme", 2, "border-bottom", "1px solid #92949c"], ["defaultHref", "passenger-details", 2, "color", "#000"], ["size", "8", 2, "display", "flex", "align-items", "center", "justify-content", "center"], [1, "ourbus_header_text"], [1, "ourbustheme"], ["style", "margin: 16px;", 4, "ngIf"], ["class", "ourbusCardSet", 4, "ngIf"], [1, "ourbusCardSet"], [2, "display", "flex", "align-items", "center"], [2, "--background-checked", "var(--sectionHeaderTextColor)", "--size", "18px", "--checkbox-background-checked", "var(--sectionHeaderTextColor)", 3, "ionChange", "ngModelChange", "ngModel"], [1, "ourbus_terms_text"], [1, "ourbus_terms_click", 2, "text-decoration", "underline", "color", "#0972EB", 3, "click"], [2, "margin-bottom", "16px"], [1, "ourbus_rowBg"], ["src", "././assets/icon/ourbus_tag.svg", 2, "width", "24px", "height", "24px"], [1, "ourbus_order_details"], [1, "ourbus_farebreakup_curr"], ["size", "6", 2, "text-align", "end"], ["style", "margin: 4px 8px;", 4, "ngIf"], [2, "border", "1px solid #D9D9D9", "margin-top", "8px"], [2, "padding", "8px"], [1, "ourbus_amount_payble"], [1, "ourbus_amount_paybl_amount"], ["style", "padding: 8px;", 4, "ngIf"], ["class", "ourbusCardSet", "style", "padding: 0px; margin: 10px 20px;", 4, "ngIf"], ["id", "", "class", "ourbusCardSet", 4, "ngIf"], [2, "margin-bottom", "20%"], ["style", "position: fixed;bottom: 0;width: 100%;padding: 10px;background: white;", 4, "ngIf"], [2, "margin", "16px"], ["alt", "", 3, "src"], [2, "display", "flex", "justify-content", "space-between"], ["class", "Contact-details", 3, "click", 4, "ngIf"], ["name", "chevron-down-outline", "style", "font-size:18px;", 3, "click", 4, "ngIf"], ["name", "chevron-up-outline", "style", "font-size:18px;", 3, "click", 4, "ngIf"], ["mode", "md", "color", "red", 3, "ngModel", "ngModelChange", "ionChange", "ionCancel", "click", 4, "ngIf"], [1, "Contact-details", 3, "click"], ["name", "chevron-down-outline", 2, "font-size", "18px", 3, "click"], ["name", "chevron-up-outline", 2, "font-size", "18px", 3, "click"], ["mode", "md", "color", "red", 3, "ngModelChange", "ionChange", "ionCancel", "click", "ngModel"], ["size", "12", 2, "display", "flex", "align-items", "center"], [3, "value"], [2, "margin-left", "8px", "color", "#3e3e52", 3, "id"], ["mode", "md", 1, "ourbus_custom_input", 2, "margin", "8px 0px"], ["fill", "outline", "type", "text", "label", "Enter Card No.", "labelPlacement", "floating", 1, "txt-lbl", 3, "ngModelChange", "ngModel"], ["mode", "md", "fill", "outline", 2, "width", "48%", "--background", "var(--primaryText)", "color", "var(--iconsAndButtonsColor)", "--border-color", "var(--iconsAndButtonsColor)", 3, "click"], ["mode", "md", 2, "width", "48%", "--background", "var(--iconsAndButtonsColor)", "color", "var(--primaryText)", 3, "click"], ["fill", "outline", "mode", "md", 1, "ourbus_custom_input", 2, "margin", "8px 0px"], ["mode", "md", 1, "ourbus_custom_input", 2, "width", "100%", "margin", "8px 0px", 3, "ngClass"], ["fill", "outline", "required", "", "formControlName", "pnrnumber", "type", "number", "label", "PNR Number", "labelPlacement", "floating"], ["fill", "outline", "required", "", "formControlName", "mobileno", "type", "number", "label", "Mobile Number", "labelPlacement", "floating", 3, "readonly"], ["fill", "outline", "mode", "md", 1, "appliedBox", "ourbus_custom_input", 2, "margin", "8px 0px"], ["fill", "outline", "mode", "md", 1, "ourbus_custom_input", 2, "margin", "8px 0px", "--padding-start", "0px"], ["style", "margin: 12px 0px 10px 0px;", 4, "ngIf"], [2, "margin", "12px 0px 10px 0px"], ["lines", "none", "mode", "md", 1, "ourbus_custom_input", 2, "--border-width", "0px", "--background", "#f8f8ff"], ["lines", "none", "mode", "md", 1, "ourbus_custom_input", "new-label", 2, "--background", "#f8f8ff", "--border-width", "0px"], ["size", "8", 2, "padding-left", "10px", "padding-bottom", "0px"], ["mode", "md", "lines", "none", 1, "ourbus_custom_input", 2, "--padding-start", "0px"], ["style", "margin: auto 0px;", 4, "ngIf"], [2, "margin", "auto 0px"], ["ion-button", "", 1, "removeText_ourbus", 3, "click"], ["size", "11", 2, "padding-left", "10px", "padding-top", "0px"], [1, "ourbusCardSet", 2, "padding", "0px", "margin", "10px 20px"], [3, "ngModelChange", "ionChange", "ngModel"], [1, "ourbusCardSet", "ourbus-payment-card", 3, "ngStyle"], ["lines", "none", "fill", "outline", "mode", "md", 1, "ourbus_custom_input", 2, "margin", "4px 0px", "--border-color", "#ffffff !important"], ["slot", "end", "value", "1", 2, "--color-checked", "var(--iconsAndButtonsColor)"], ["class", "ourbusCardSet ourbus-payment-card", 3, "ngStyle", 4, "ngIf"], ["fill", "outline", "mode", "md", "lines", "none", 1, "ourbus_custom_input", 2, "margin", "4px 0px", "--border-color", "#ffffff !important"], [1, "ourbus-div-payment"], ["name", "information-circle", 2, "z-index", "50", "padding", "2px 0px 0px 5px", "color", "#acacac", 3, "click"], ["slot", "end", "value", "3", 2, "--color-checked", "var(--iconsAndButtonsColor)"], ["slot", "end", "value", "2", "checked", "true", 2, "--color-checked", "var(--iconsAndButtonsColor)"], ["fill", "outline", "mode", "md", "class", "ourbus_custom_input", "style", "margin: 4px 0px;--border-color: #ffffff !important;", "lines", "none", 4, "ngIf"], ["slot", "end", 2, "--color-checked", "var(--iconsAndButtonsColor)", 3, "value"], ["id", "", 1, "ourbusCardSet"], [2, "position", "fixed", "bottom", "0", "width", "100%", "padding", "10px", "background", "white"], ["mode", "md", "mode", "md", "expand", "full", 1, "routes-footer", "mr-tp-16", 2, "height", "55px", "border-radius", "6px", "overflow", "hidden", 3, "click", "disabled"], [1, "pay-txt-1", 2, "font-size", "18px", "font-weight", "bold"], [1, "pay-txt-1"], [1, "ourbustheme", "ourbus-center-content"], [1, "content-container"], ["src", "././assets/icon/transaction-failed-ourbus.svg", 2, "width", "105.62px", "height", "80px"], [1, "ourbus_transaction_failed"], ["mode", "md", "expand", "block", 1, "ourbus-tryagain-btn", 3, "click"], ["mode", "md", "expand", "block", 1, "ourbus-bcktohome-btn", 3, "click"], [1, "whole", "center", "ourbustheme", 3, "click"], [1, "seabird-legend-box", 2, "width", "350px !important"], ["size", "5", 1, "ourbus_dwn-txt", 3, "click"], ["size", "5", 1, "ourbus_brws-txt", 3, "click"], [1, "whole", "center", "ourbustheme"], [1, "seabird-legend-box"], ["fill", "outline", "placeholder", "Enter ID Proof", "type", "text", 3, "ngModelChange", "ngModel"], ["fill", "outline", "inputmode", "numeric", "type", "tel", "label", "Enter OTP", "labelPlacement", "floating", "name", "otp", "maxlength", "6", 3, "ngModelChange", "ionChange", "ngModel"], [1, "seabird-legend-box", 2, "position", "absolute", "bottom", "0", "width", "100% !important"], ["size", "6", 1, "ourbus-brws-txt"], ["size", "6", 1, "ourbus-dwn-txt", 3, "click"], ["class", "ourbus-container-m", 4, "ngIf"], [1, "ourbus-container-m"], ["src", "./assets/icon/rupee-indian.png", "alt", "", 1, "img"], ["src", "./assets/icon/calculator.png", "alt", "", 1, "img"]],
  template: function PaymentDetailsPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](0, PaymentDetailsPage_ng_container_0_Template, 42, 18, "ng-container", 3)(1, PaymentDetailsPage_ng_container_1_Template, 83, 48, "ng-container", 3)(2, PaymentDetailsPage_ng_container_2_Template, 64, 37, "ng-container", 3)(3, PaymentDetailsPage_ng_container_3_Template, 9, 8, "ng-container", 3);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "cbustheme" || ctx.metaData.msiteFolder == "networktheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "seabirdTheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == null || ctx.metaData.msiteFolder == "");
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "ourbustheme");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_32__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_32__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_32__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_32__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_27__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_27__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.NgForm, _ionic_angular__WEBPACK_IMPORTED_MODULE_29__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_29__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_29__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_29__.IonCheckbox, _ionic_angular__WEBPACK_IMPORTED_MODULE_29__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_29__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_29__.IonFooter, _ionic_angular__WEBPACK_IMPORTED_MODULE_29__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_29__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_29__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_29__.IonImg, _ionic_angular__WEBPACK_IMPORTED_MODULE_29__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_29__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_29__.IonItemDivider, _ionic_angular__WEBPACK_IMPORTED_MODULE_29__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_29__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_29__.IonRadio, _ionic_angular__WEBPACK_IMPORTED_MODULE_29__.IonRadioGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_29__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_29__.IonSelect, _ionic_angular__WEBPACK_IMPORTED_MODULE_29__.IonSelectOption, _ionic_angular__WEBPACK_IMPORTED_MODULE_29__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_29__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_29__.BooleanValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_29__.NumericValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_29__.SelectValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_29__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_29__.IonBackButton, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_32__.UpperCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_32__.DecimalPipe, _pipes_filter_oculto_pipe__WEBPACK_IMPORTED_MODULE_25__.FilterOcultoPipe],
  styles: [".head[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n}\n\n.paymentOptLogo[_ngcontent-%COMP%] {\n  width: 20%;\n  height: 30px;\n}\n\n.bg-content[_ngcontent-%COMP%] {\n  --background: #e4e5e6;\n}\n\n.txt-msg-hd[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: bolder;\n  font-family: NotoSans;\n  color: rgba(0, 0, 0, 0.6);\n}\n\n.card-1[_ngcontent-%COMP%] {\n  padding: 16px 12px;\n  margin: 0;\n  box-shadow: rgba(0, 0, 0, 0) 0 0 0 0px, rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0) 0 0 0 0;\n  border-radius: 0;\n}\n\n.card-2[_ngcontent-%COMP%] {\n  padding: 16px 12px;\n  margin: 0;\n  box-shadow: rgba(0, 0, 0, 0) 0 0 0 0px, rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0) 0 0 0 0;\n  border-radius: 0;\n  background-color: var(--primary);\n  color: var(--sectionHeaderTextColor) !important;\n  -webkit-text-fill-color: var(--sectionHeaderTextColor) !important;\n}\n\nspan.txt-c1[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: bolder;\n  text-align: right;\n  color: var(--sectionHeaderTextColor) !important;\n}\n\n.txt-c2[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n  text-align: right;\n  color: #3e3e52;\n}\n\n.pos[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n  font-weight: 800;\n}\n\n.ios[_ngcontent-%COMP%]    > .s1[_ngcontent-%COMP%] {\n  margin-top: -8px;\n}\n\n.bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n  padding-bottom: 5px;\n}\n\n.bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n  padding-bottom: 5px;\n}\n\n.mr-md[_ngcontent-%COMP%] {\n  margin: 0 5px;\n}\n\n.mr-tp-2[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\n\n.mr-tp-16[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n\n.Contact-details[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: bold;\n  color: black;\n}\n\n.contact-details-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: bold;\n  color: var(--primaryText);\n}\n\n.hd-txt-2[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #7e7e8c;\n}\n\n.img-icn[_ngcontent-%COMP%] {\n  height: 32px;\n  width: 32px;\n}\n\n.routes-footer[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 100%;\n  --background: var(--iconsAndButtonsColor);\n  color: var(--primaryText);\n  font-weight: bolder;\n  font-size: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  bottom: 0;\n  margin: 0;\n  z-index: 999999;\n}\n\n.seabird_routes-footer[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  height: 50px;\n  width: 95%;\n  --background: var(--iconsAndButtonsColor);\n  color: var(--primaryText);\n  font-weight: bolder;\n  font-size: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  bottom: 0;\n  margin-bottom: 0;\n  z-index: 999999;\n}\n\n.pay-txt-1[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: bolder;\n  color: var(--viewBgColor);\n}\n\n.pay-txt-2[_ngcontent-%COMP%] {\n  font-size: 8px;\n}\n\n.mr-bt-34[_ngcontent-%COMP%] {\n  margin-bottom: 34px;\n}\n\n#payMentGateWayForm[_ngcontent-%COMP%] {\n  display: none;\n}\n\nh4[_ngcontent-%COMP%], \nh5[_ngcontent-%COMP%], \nh6[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\nion-item.item.item-block.item-radio[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   ion-label.label[_ngcontent-%COMP%] {\n  color: #000;\n  text-overflow: initial;\n  white-space: normal;\n}\n\n.pay-box[_ngcontent-%COMP%] {\n  background-color: #fff;\n  margin-bottom: 15px;\n}\n.pay-box[_ngcontent-%COMP%]   .item-ios[_ngcontent-%COMP%], \n.pay-box[_ngcontent-%COMP%]   .item-md[_ngcontent-%COMP%] {\n  padding-left: 7px;\n}\n.pay-box[_ngcontent-%COMP%]   .item-checkbox[_ngcontent-%COMP%] {\n  padding-left: 5px;\n}\n.pay-box[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  padding: 6px 8px;\n}\n.pay-box[_ngcontent-%COMP%]   a.show-more[_ngcontent-%COMP%] {\n  font-size: 20px;\n  display: block;\n  text-align: center;\n  padding: 4px;\n}\n.pay-box.payable[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n}\n.pay-box.payable[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  padding: 5px 6px;\n}\n.pay-box[_ngcontent-%COMP%]   .coupon-form[_ngcontent-%COMP%] {\n  padding: 5px;\n  border-top: 1px solid #ccc;\n}\n.pay-box[_ngcontent-%COMP%]   .coupon-form[_ngcontent-%COMP%]   ion-col.col[_ngcontent-%COMP%] {\n  padding: 2px;\n}\n.pay-box[_ngcontent-%COMP%]   .coupon-form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.2rem;\n  margin: 3px;\n  text-align: center;\n}\n.pay-box[_ngcontent-%COMP%]   .coupon-form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  font-size: 1.9em;\n}\n\n.pay-box.payable[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%] {\n  padding: 5px 0;\n  color: #000000;\n  transition: color 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n.pay-box.payable.open[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%] {\n  color: #215000;\n}\n\n.pay-box.box-2[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%] {\n  height: 0;\n  overflow: hidden;\n  transition: height 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  border: 0;\n}\n.pay-box.box-2.open[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%] {\n  height: 27px;\n  border-bottom: 0.4px solid #ddd;\n}\n\n.bottom-0[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.fare-details[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%] {\n  border-bottom: 0.4px solid #ddd;\n}\n.fare-details[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  margin: 10px 7px 0 0;\n  font-size: 1.7em;\n  padding: 20px 0 0;\n}\n.fare-details[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   .show-remove[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  margin-top: 0;\n  padding-top: 0;\n}\n.fare-details[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   .invalid-coupon-input[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%] {\n  border-bottom-color: #f00;\n  color: #f00;\n}\n.fare-details[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   .invalid-coupon-input[_ngcontent-%COMP%]   .ion-label[_ngcontent-%COMP%] {\n  color: #f00;\n}\n\n.fare-box[_ngcontent-%COMP%] {\n  background: transparent;\n  width: 100%;\n  text-align: left;\n  margin: 0;\n  padding: 0;\n}\n\nspan.invalid-coupon[_ngcontent-%COMP%] {\n  color: #f00;\n  display: flex;\n  margin: 10px 0 0;\n  padding: 0 10px;\n}\n\n[padding][_ngcontent-%COMP%]   .scroll-content[_ngcontent-%COMP%] {\n  padding-bottom: 50px;\n}\n\n.applied-coupons-title[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 10px 0 0;\n  padding: 0 10px;\n}\n\n.applied-coupons[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  border: 1px solid #eee;\n}\n.applied-coupons[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding: 5px;\n  border-bottom: 1px solid #eee;\n  display: flex;\n}\n.applied-coupons[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   span.code[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.applied-coupons[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   span.amount[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.applied-coupons[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   a.cancel-coupon[_ngcontent-%COMP%] {\n  padding: 0 10px;\n  margin-left: 10px;\n}\n\n.qoute-pnr[_ngcontent-%COMP%]   .applied-coupons[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n.qoute-pnr[_ngcontent-%COMP%]   .applied-coupons[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  border-bottom: 0;\n}\n\n.add-coupon[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 5px;\n}\n.add-coupon[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 4px;\n}\n.add-coupon[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 3px 6px;\n  border: 1px solid;\n  border-radius: 50px;\n  height: 25px;\n  display: inline-block;\n  width: 25px;\n}\n\n.brws-txt[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 14px;\n  font-weight: bolder;\n  letter-spacing: 1.25px;\n  text-align: center;\n  color: #4a4a4a;\n  margin-top: 28px;\n  width: 100%;\n  text-align: left;\n}\n\n.ourbus_brws-txt[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 12px;\n  font-weight: bolder;\n  letter-spacing: 1.25px;\n  text-align: center;\n  color: #ed3237;\n  margin-top: 28px;\n  width: 100%;\n}\n\n.coupon-form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n}\n.coupon-form[_ngcontent-%COMP%]   ion-item.item-block[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n.coupon-form[_ngcontent-%COMP%]   ion-item.item-block[_ngcontent-%COMP%]   .item-inner[_ngcontent-%COMP%] {\n  padding-right: 0;\n}\n\n@keyframes _ngcontent-%COMP%_MyAnimation {\n  0% {\n    transform: translateY(50px) scale(0.9) rotateX(-25deg);\n    opacity: 0.7;\n    margin-bottom: 15px;\n  }\n  100% {\n    transform: translateY(0px) scale(1) rotateX(0deg);\n    opacity: 1;\n    margin-bottom: 0;\n  }\n}\n.my-animation[_ngcontent-%COMP%] {\n  perspective: 250px;\n  animation: _ngcontent-%COMP%_MyAnimation 1s;\n}\n\n.item.item-md[_ngcontent-%COMP%]   .checkbox-md[_ngcontent-%COMP%] {\n  position: static;\n  display: block;\n  margin: 9px 6px 9px 4px;\n}\n\n.travel-details[_ngcontent-%COMP%] {\n  background-color: #fff;\n  margin-bottom: 15px;\n  text-align: center;\n  padding: 5px;\n  width: 100%;\n}\n.travel-details[_ngcontent-%COMP%]   .places[_ngcontent-%COMP%] {\n  padding: 3px;\n}\n.travel-details[_ngcontent-%COMP%]   .travel-date[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n.travel-details[_ngcontent-%COMP%]   .travel-date[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 20px;\n  border-bottom: 1px solid #ccc;\n  position: relative;\n  top: -3px;\n  margin: 0 5px;\n}\n.travel-details[_ngcontent-%COMP%]   .bus-type[_ngcontent-%COMP%] {\n  margin: 5px 0;\n  font-size: 1.12rem;\n}\n.travel-details[_ngcontent-%COMP%]   a.show-more[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.more-details[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ccc;\n  margin-bottom: 4px;\n}\n\n.more-details[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]::last-child   hr[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.more-details[_ngcontent-%COMP%]   .passenger-list[_ngcontent-%COMP%], \n.more-details[_ngcontent-%COMP%]   .stages[_ngcontent-%COMP%] {\n  display: block;\n  text-align: left;\n  margin-top: 0;\n  height: 0;\n  overflow: hidden;\n  transition: height 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n.more-details[_ngcontent-%COMP%]   .passenger-list[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%], \n.more-details[_ngcontent-%COMP%]   .stages[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.more-details[_ngcontent-%COMP%]   .passenger-list[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%], \n.more-details[_ngcontent-%COMP%]   .stages[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  float: left;\n  text-align: left;\n  max-width: 50%;\n}\n.more-details[_ngcontent-%COMP%]   .passenger-list[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%], \n.more-details[_ngcontent-%COMP%]   .stages[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  float: right;\n  text-align: right;\n  max-width: 50%;\n}\n.more-details[_ngcontent-%COMP%]   .passenger-list[_ngcontent-%COMP%]   .passenger-label[_ngcontent-%COMP%], \n.more-details[_ngcontent-%COMP%]   .passenger-list[_ngcontent-%COMP%]   span.stage-label[_ngcontent-%COMP%], \n.more-details[_ngcontent-%COMP%]   .stages[_ngcontent-%COMP%]   .passenger-label[_ngcontent-%COMP%], \n.more-details[_ngcontent-%COMP%]   .stages[_ngcontent-%COMP%]   span.stage-label[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  text-transform: uppercase;\n  color: #888;\n}\n.more-details[_ngcontent-%COMP%]   .passenger-list[_ngcontent-%COMP%]   .passenger[_ngcontent-%COMP%], \n.more-details[_ngcontent-%COMP%]   .passenger-list[_ngcontent-%COMP%]   .seat[_ngcontent-%COMP%], \n.more-details[_ngcontent-%COMP%]   .passenger-list[_ngcontent-%COMP%]   .stage[_ngcontent-%COMP%], \n.more-details[_ngcontent-%COMP%]   .stages[_ngcontent-%COMP%]   .passenger[_ngcontent-%COMP%], \n.more-details[_ngcontent-%COMP%]   .stages[_ngcontent-%COMP%]   .seat[_ngcontent-%COMP%], \n.more-details[_ngcontent-%COMP%]   .stages[_ngcontent-%COMP%]   .stage[_ngcontent-%COMP%] {\n  margin: 2px 0;\n  font-size: 1.3rem;\n}\n\n.more-details.open[_ngcontent-%COMP%]   .passenger-list[_ngcontent-%COMP%], \n.more-details.open[_ngcontent-%COMP%]   .stages[_ngcontent-%COMP%] {\n  height: 42px;\n}\n\n.payment[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  padding: 5px 0;\n}\n.payment[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  padding: 8px 8px 3px;\n  margin: 0;\n}\n.payment[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]   a.show-more[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin: 0;\n  padding: 0;\n}\n.payment[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  padding-left: 5px;\n}\n.payment[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.payment[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  padding-left: 5px;\n}\n.payment[_ngcontent-%COMP%]   ion-list.open[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  height: 50px;\n}\n\n.otpBackDrop[_ngcontent-%COMP%] {\n  background-color: #000;\n  z-index: -1;\n  opacity: 0;\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100vw;\n  transition: all 0.3s linear;\n}\n\n.otpBackDrop.show[_ngcontent-%COMP%] {\n  opacity: 0.4;\n  z-index: 9;\n}\n\n.couponOtp[_ngcontent-%COMP%] {\n  background-color: #fff;\n  position: fixed;\n  width: 300px;\n  left: 50%;\n  margin-left: -150px;\n  z-index: 10;\n  top: 100vh;\n  padding: 5px;\n  transition: top 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n.couponOtp[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin-top: 2px;\n  padding-bottom: 1px;\n  border-bottom: 0.5px solid #ccc;\n  margin-bottom: 7px;\n}\n.couponOtp[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 3px 0;\n  color: #777;\n  font-size: 1.3rem;\n}\n.couponOtp[_ngcontent-%COMP%]   div.buttons[_ngcontent-%COMP%] {\n  display: flex;\n}\n.couponOtp[_ngcontent-%COMP%]   div.buttons[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: center;\n}\n.couponOtp[_ngcontent-%COMP%]   div.buttons[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  padding: 5px;\n  color: #111;\n  border-radius: 3px;\n  \n\n  border: 0.3px solid #ccc;\n  font-size: 1.3rem;\n  margin: 5px 2px 0;\n}\n.couponOtp[_ngcontent-%COMP%]   div.buttons[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   a.activated[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n}\n\n.couponOtp.show[_ngcontent-%COMP%] {\n  top: 30vh;\n}\n\n.cash_couponcoupon_radio[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%] {\n  padding-left: 0px;\n}\n.cash_couponcoupon_radio[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --padding-start: 0px;\n}\n.cash_couponcoupon_radio[_ngcontent-%COMP%]   ion-radio[_ngcontent-%COMP%] {\n  margin: 12px 0px 8px 0px;\n}\n.cash_couponcoupon_radio[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  padding-left: 7%;\n}\n\n.offer-coupon[_ngcontent-%COMP%]   .pay-box[_ngcontent-%COMP%] {\n  padding: 6px 0;\n  position: relative;\n}\n.offer-coupon[_ngcontent-%COMP%]   .pay-box[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 15px;\n  font-size: 2em;\n  top: 7px;\n}\n.offer-coupon[_ngcontent-%COMP%]   .pay-box[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #eee;\n}\n.offer-coupon[_ngcontent-%COMP%]   .pay-box[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-size: 0.82em;\n  white-space: normal;\n}\n.offer-coupon[_ngcontent-%COMP%]   .pay-box[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.offer-coupon[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  \n\n}\n.offer-coupon[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin: 7px;\n}\n.offer-coupon[_ngcontent-%COMP%]   a.select-coupon[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 7px;\n  margin-right: 10px;\n  color: red;\n}\n\n.item[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]   .checkbox-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 13px;\n  top: 14px;\n}\n\n.gst-form[_ngcontent-%COMP%] {\n  padding-bottom: 14px;\n  border-top: 1px solid #ccc;\n  \n\n}\n.gst-form[_ngcontent-%COMP%]   ion-item.item.item-block[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n\n.select-offer-coupon[_ngcontent-%COMP%]   ion-select.select[_ngcontent-%COMP%] {\n  max-width: 100%;\n  width: 100%;\n  border-bottom: 0;\n  padding: 5px;\n}\n\n.coupon-txt[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #3e3e52;\n  padding: 0;\n  margin: 15px 0;\n}\n\n.radio-icn[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border: solid 1px #4b4b4b;\n  background-color: #ffffff;\n}\n\nion-select[_ngcontent-%COMP%]   ion-select-option[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 14px;\n  color: #3e3e52;\n}\nion-select[_ngcontent-%COMP%]   ion-select-option[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 14px;\n  color: #3e3e52;\n}\n\n.item[_ngcontent-%COMP%]   .sc-ion-label-md-h[_ngcontent-%COMP%], \n.item.sc-ion-label-md-h[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 14px;\n  color: #3e3e52;\n}\n\nion-radio-group[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 14px;\n  color: #3e3e52;\n}\n\n.terms-txt[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  color: #3e3e52;\n}\n\n.terms-click[_ngcontent-%COMP%] {\n  width: 152px;\n  height: 20px;\n  font-family: NotoSans;\n  font-size: 14px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.43;\n  letter-spacing: normal;\n  color: #4787ed;\n}\n\n.close[_ngcontent-%COMP%] {\n  height: 0;\n}\n.close[_ngcontent-%COMP%]   .open[_ngcontent-%COMP%] {\n  height: 50px;\n}\n\n.p2-hd[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 12px;\n  font-weight: bold;\n  color: #3e3e52;\n}\n\n.hr-border[_ngcontent-%COMP%] {\n  border-width: 1px;\n}\n\n.fare-txt[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 16px;\n}\n\n.whole[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 50;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.6);\n}\n\n.legend-box[_ngcontent-%COMP%] {\n  border-radius: 2px;\n  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 24px 38px 3px rgba(0, 0, 0, 0.14);\n  background-color: #ffffff !important;\n  opacity: 1 !important;\n  padding: 18px 16px;\n  width: 280px;\n  height: auto;\n}\n\n.seabird-legend-box[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 24px 38px 3px rgba(0, 0, 0, 0.14);\n  background-color: #ffffff !important;\n  opacity: 1 !important;\n  padding: 18px 16px;\n  width: 335px;\n  height: auto;\n}\n\n.txt-msg[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: normal;\n  text-align: justify;\n  letter-spacing: 0.25px;\n  color: rgba(0, 0, 0, 0.6);\n  margin-top: 10px;\n  width: 100%;\n}\n\n.dwn-txt[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 12px;\n  font-weight: bolder;\n  letter-spacing: 1.25px;\n  text-align: center;\n  color: #ed3237;\n  margin-top: 28px;\n  width: 100%;\n  text-align: right;\n}\n\n.ourbus_dwn-txt[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 14px;\n  font-weight: bolder;\n  letter-spacing: 1.25px;\n  text-align: center;\n  color: var(--iconsAndButtonsColor);\n  margin-top: 28px;\n  width: 100%;\n  text-align: right;\n}\n\n.seabird_dwn-txt[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 12px;\n  font-weight: bolder;\n  letter-spacing: 1.25px;\n  text-align: center;\n  color: var(--iconsAndButtonsColor) !important;\n  margin-top: 28px;\n  width: 100%;\n  text-align: right;\n}\n\n.right-icon[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n  fill: #7e7e8c; \n\n  color: #7e7e8c;\n  margin-right: 8px; \n\n}\n\n.circle[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  font-size: 20px;\n  color: #fff;\n  line-height: 25px;\n  text-align: center;\n  background: #52c328;\n}\n\n.circle1[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  font-size: 20px;\n  color: #fff;\n  line-height: 25px;\n  text-align: center;\n  background: #ed3237;\n}\n\n.wrap[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-bottom: 8px;\n}\n\n.left[_ngcontent-%COMP%] {\n  float: left;\n  text-align: initial;\n}\n\n.right[_ngcontent-%COMP%] {\n  float: right;\n  text-align: end;\n}\n\n.center1[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 0 auto !important;\n  display: inline-block;\n}\n\n.pd-10[_ngcontent-%COMP%] {\n  padding: 14px;\n  margin: 15px;\n  position: relative;\n  border-radius: 5px;\n  background: #fff;\n  -webkit-text-fill-color: black !important;\n}\n\n.txt-c11[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: bolder;\n  text-align: right;\n  color: var(--sectionHeaderTextColor) !important;\n  padding-bottom: 5px;\n  padding-top: 5px;\n}\n\n.txt-c22[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: bold;\n  text-align: right;\n  color: var(--sectionHeaderTextColor) !important;\n}\n\n.txt-c3[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: bolder;\n  text-align: right;\n  -webkit-text-fill-color: var(--primary);\n}\n\n.header-ios[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]:last-of-type {\n  --border-width: 0px;\n}\n\n.txt-c4[_ngcontent-%COMP%] {\n  font-size: 14px;\n  padding-top: 8px;\n  font-weight: bold;\n  text-align: right;\n  -webkit-text-fill-color: var(--sectionHeaderTextColor) !important;\n}\n\n.container-m[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 15px auto;\n  height: auto;\n  border: 1px solid grey;\n  background-color: #f5f5f5;\n  padding: 10px;\n}\n\n.promo-txt-m[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: darkslategrey;\n}\n\n.alertCustomCss[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  color: #58a618 !important;\n}\n\n.slide-card[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  margin: auto 5px;\n  width: 234px !important;\n  height: auto;\n  padding: 10px;\n  background-repeat: no-repeat;\n  background-size: contain, cover;\n}\n\n.appliedBox[_ngcontent-%COMP%] {\n  --background: #f1eeee;\n}\n\n.newOffer[_ngcontent-%COMP%] {\n  background-color: #f1eeee;\n  margin: 12px 0px 10px 0px;\n}\n\n.offersBox[_ngcontent-%COMP%] {\n  border-bottom: 0.5px solid #939393;\n  padding-bottom: 8px;\n}\n\n.new-label[_ngcontent-%COMP%] {\n  text-align: end;\n  --background: #f1eeee;\n}\n.new-label[_ngcontent-%COMP%]   ion-label.sc-ion-label-md-h.sc-ion-label-md-s.md.hydrated[_ngcontent-%COMP%] {\n  color: #e98864;\n  font-family: NotoSans;\n  font-weight: bold;\n}\n\n.new-label1[_ngcontent-%COMP%] {\n  text-align: start;\n}\n\n.offerDesign[_ngcontent-%COMP%] {\n  border: 1px solid orange;\n  padding: 4px 8px 4px 8px;\n  background-color: #fff2e1;\n  border-radius: 5px;\n  font-weight: bold;\n}\n\n.offerName[_ngcontent-%COMP%]   ion-item.item.md.item-lines-none.ion-focusable.item-label.hydrated[_ngcontent-%COMP%] {\n  --padding-start:0;\n}\n\n.fixed-card[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n}\n.fixed-card.ion-sticky[_ngcontent-%COMP%] {\n  position: sticky;\n}\n\n.alertCustomCss[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  color: #58a618 !important;\n}\n\n.slide-card[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  margin: auto 5px;\n  width: 234px !important;\n  height: auto;\n  padding: 10px;\n  background-repeat: no-repeat;\n  background-size: contain, cover;\n}\n\n.appliedBox[_ngcontent-%COMP%] {\n  --background: #f1eeee;\n}\n\n.newOffer[_ngcontent-%COMP%] {\n  background-color: #f1eeee;\n  margin: 12px 0px 10px 0px;\n}\n\n.offersBox[_ngcontent-%COMP%] {\n  border-bottom: 0.5px solid #939393;\n  padding-bottom: 8px;\n}\n\n.new-label[_ngcontent-%COMP%] {\n  text-align: end;\n  --background: #f1eeee;\n}\n.new-label[_ngcontent-%COMP%]   ion-label.sc-ion-label-md-h.sc-ion-label-md-s.md.hydrated[_ngcontent-%COMP%] {\n  color: #e98864;\n  font-family: NotoSans;\n  font-weight: bold;\n}\n\n.new-label1[_ngcontent-%COMP%] {\n  text-align: start;\n}\n\n.offerDesign[_ngcontent-%COMP%] {\n  border: 1px solid orange;\n  padding: 4px 8px 4px 8px;\n  background-color: #fff2e1;\n  border-radius: 5px;\n  font-weight: bold;\n}\n\n.offerName[_ngcontent-%COMP%]   ion-item.item.md.item-lines-none.ion-focusable.item-label.hydrated[_ngcontent-%COMP%] {\n  --padding-start: 0;\n}\n\n.header-text[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin: 0;\n  text-align: center;\n  font-weight: 700;\n}\n\n.review-booking-card[_ngcontent-%COMP%] {\n  margin: 3px;\n  position: relative;\n  box-shadow: none;\n  border: 1px solid #DFDFDF;\n  \n\n  overflow: inherit;\n  border-radius: 8px;\n}\n.review-booking-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 18px;\n  text-align: center;\n}\n.review-booking-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin: 0;\n  text-align: center;\n}\n.review-booking-card[_ngcontent-%COMP%]   .show-details[_ngcontent-%COMP%] {\n  margin: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #191966;\n  font-size: 14px;\n}\n.review-booking-card[_ngcontent-%COMP%]   .show-details_2[_ngcontent-%COMP%] {\n  margin: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #000;\n  font-size: 14px;\n}\n.review-booking-card[_ngcontent-%COMP%]   .passanger-details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  margin: 0;\n  text-align: left;\n  color: #333333;\n}\n.review-booking-card[_ngcontent-%COMP%]   .passanger-details[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #A0A0A0;\n  margin: 0;\n  font-size: 14px;\n  font-weight: 500;\n}\n.review-booking-card[_ngcontent-%COMP%]   .passanger-details[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #333333;\n  margin: 0;\n  font-size: 14px;\n  font-weight: 600;\n}\n.review-booking-card[_ngcontent-%COMP%]   .passanger-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 12px;\n  text-align: left;\n  font-weight: 400;\n  color: #333;\n}\n.review-booking-card[_ngcontent-%COMP%]   .review-booking-card-first-row[_ngcontent-%COMP%] {\n  border-radius: 8px 8px 0px 0px;\n  background-color: #191966;\n  color: #fff;\n}\n.review-booking-card[_ngcontent-%COMP%]   .review-booking-card-first-row[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin: 0;\n  font-weight: 500;\n  color: #fff;\n}\n.review-booking-card[_ngcontent-%COMP%]   .review-booking-card-first-row[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 10px;\n  margin: 0;\n  font-weight: 400;\n  color: #fff;\n}\n.review-booking-card[_ngcontent-%COMP%]   .review-booking-card-first-row[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin: 0;\n  font-weight: 500;\n  color: #fff;\n}\n.review-booking-card[_ngcontent-%COMP%]   .review-booking-card-first-row_2[_ngcontent-%COMP%] {\n  border-radius: 8px 8px 0px 0px;\n  background-color: var(--bottomBarColor);\n  color: #fff;\n}\n.review-booking-card[_ngcontent-%COMP%]   .review-booking-card-first-row_2[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin: 0;\n  font-weight: 500;\n  color: #fff;\n}\n.review-booking-card[_ngcontent-%COMP%]   .review-booking-card-first-row_2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 10px;\n  margin: 0;\n  font-weight: 400;\n  color: #fff;\n}\n.review-booking-card[_ngcontent-%COMP%]   .review-booking-card-first-row_2[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin: 0;\n  font-weight: 500;\n  color: #fff;\n}\n\n.save-more-row[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  color: #333333;\n  font-weight: 700;\n}\n.save-more-row[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #3BAD69;\n  font-size: 12px;\n  font-weight: 400;\n}\n\n.avl-balance-row[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 14px;\n  margin: 0;\n  color: #333333;\n  display: flex;\n  align-items: center;\n}\n.avl-balance-row[_ngcontent-%COMP%]   ion-toggle[_ngcontent-%COMP%]::part(handle) {\n  background: #191966;\n}\n.avl-balance-row[_ngcontent-%COMP%]   ion-toggle[_ngcontent-%COMP%]::part(track), \n.avl-balance-row[_ngcontent-%COMP%]   ion-toggle.toggle-checked[_ngcontent-%COMP%]::part(track) {\n  background: #fff;\n  border: 1px solid #191966;\n}\n.avl-balance-row[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #3BAD69;\n  font-size: 12px;\n  font-weight: 400;\n}\n\n.select-method-row[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.select-method-row[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 400;\n  color: #3e3e52;\n  margin: 0;\n}\n.select-method-row[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-right: 0;\n  color: #333333;\n  font-size: 16px;\n  font-family: \"Roboto\", sans-serif !important;\n  font-weight: 500;\n  line-height: 22px;\n  word-wrap: break-word;\n}\n.select-method-row[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 400;\n  margin: 0;\n  color: #3e3e52;\n  display: flex;\n  align-items: center;\n}\n.select-method-row[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n.select-method-row[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  margin: 0;\n  color: #191966;\n}\n\n.policy-row[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #191966;\n  font-size: 16px;\n  font-weight: 600;\n  margin: 0;\n}\n\n.policy-row-2[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: var(--bottomBarColor);\n  font-size: 16px;\n  font-weight: 600;\n  margin: 0;\n}\n\n.terms-row[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  color: #5F5F5F;\n  font-weight: 400;\n}\n.terms-row[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #191966;\n  text-decoration: underline;\n}\n\n.location-line[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 1px;\n  background-color: #dfdfdf;\n  position: relative;\n}\n\n.location-line[_ngcontent-%COMP%]::after {\n  content: \"\";\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  background-color: rgba(25, 25, 102, 0.2);\n  position: absolute;\n  left: -8px;\n  top: -8px;\n}\n\n.location-line[_ngcontent-%COMP%]::before {\n  content: \"\";\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  background-color: rgba(242, 194, 26, 0.2);\n  position: absolute;\n  top: -8px;\n  right: -8px;\n}\n\n.location-line_2[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 1px;\n  background-color: #dfdfdf;\n  position: relative;\n}\n\n.location-line_2[_ngcontent-%COMP%]::after {\n  content: \"\";\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  background-color: rgba(59, 173, 105, 0.2);\n  position: absolute;\n  left: -8px;\n  top: -8px;\n}\n\n.location-line_2[_ngcontent-%COMP%]::before {\n  content: \"\";\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  background-color: rgba(59, 173, 105, 0.2);\n  position: absolute;\n  top: -8px;\n  right: -8px;\n}\n\n.location-dot[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  background-color: #191966;\n  border-radius: 50%;\n  position: absolute;\n  left: -4px;\n  top: -4px;\n}\n\n.location-dot_2[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  background-color: #3BAD69;\n  border-radius: 50%;\n  position: absolute;\n  left: -4px;\n  top: -4px;\n}\n\n.location-dot-blue[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  background-color: #f2c21a;\n  border-radius: 50%;\n  position: absolute;\n  right: -4px;\n  top: -4px;\n}\n\n.location-dot-blue_2[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  background-color: #3BAD69;\n  border-radius: 50%;\n  position: absolute;\n  right: -4px;\n  top: -4px;\n}\n\n.location-bus[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -3px;\n  right: 40%;\n}\n\n.location-bus_2[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0px;\n  right: 30%;\n}\n\n.card-circular-corner[_ngcontent-%COMP%]::after {\n  content: \"\";\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background-color: #fff;\n  position: absolute;\n  bottom: -12px;\n  left: -12px;\n  border-bottom: 1px solid #DFDFDF;\n  border-top: 1px solid #DFDFDF;\n}\n\n.devider_set[_ngcontent-%COMP%] {\n  width: 100.7%;\n  position: relative;\n  background-color: #fff;\n  left: -1.2px;\n}\n\n.card-circular-corner[_ngcontent-%COMP%]::before {\n  content: \"\";\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background-color: #fff;\n  position: absolute;\n  right: -12px;\n  bottom: -12px;\n  border-bottom: 1px solid #DFDFDF;\n  border-top: 1px solid #DFDFDF;\n}\n\n.dash-line[_ngcontent-%COMP%] {\n  border-top: 1px dashed #dfdfdf;\n}\n\n.footer-coupen-row[_ngcontent-%COMP%] {\n  background-color: rgba(59, 173, 105, 0.368627451);\n}\n.footer-coupen-row[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  color: #3BAD69;\n  font-weight: 600;\n}\n.footer-coupen-row[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #3BAD69;\n}\n\n.footer-row[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 700;\n  color: #333333;\n}\n.footer-row[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #191966;\n  font-size: 12px;\n  font-weight: 600;\n}\n.footer-row[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --color: #191966;\n  --background: #FFBD16;\n  font-size: 16px;\n  width: 100%;\n  font-weight: 600;\n}\n\n.footer-row-2[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 700;\n  color: #333333;\n}\n.footer-row-2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #000;\n  font-size: 12px;\n  font-weight: 600;\n}\n.footer-row-2[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --color: #191966;\n  --background: #FFBD16;\n  font-size: 16px;\n  width: 100%;\n  font-weight: 600;\n}\n\n.continue-btn[_ngcontent-%COMP%] {\n  --color: #191966;\n  --background: #FFBD16;\n  font-size: 16px;\n  width: 100%;\n  font-weight: 600;\n}\n\nion-radio[_ngcontent-%COMP%] {\n  --color: #ddd;\n  --color-checked: #181d64;\n}\n\n.theme-1-legend-box[_ngcontent-%COMP%] {\n  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 24px 38px 3px rgba(0, 0, 0, 0.14);\n  background-color: #ffffff !important;\n  opacity: 1 !important;\n  padding: 18px 16px;\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  border-radius: 18px 18px 0px 0px;\n}\n\n.success_book[_ngcontent-%COMP%] {\n  background-image: url('check_done.0b47c74f8f46c607.gif');\n}\n\n.cancel-txt-msg-hd[_ngcontent-%COMP%] {\n  color: #333;\n  text-align: center;\n  font-family: Roboto;\n  font-size: 24px;\n  font-style: normal;\n  font-weight: 500;\n}\n\n.view-ticket-btn[_ngcontent-%COMP%] {\n  background: #f2c038;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 5px;\n  color: var(--Primary, #191966);\n  text-align: center;\n  font-family: Roboto;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 22px;\n}\n\n.themeone-view-ticket-btn[_ngcontent-%COMP%] {\n  background: var(--iconsAndButtonsColor);\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 5px;\n  color: var(--primaryText);\n  text-align: center;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 22px;\n}\n\n.alert-wrapper.ion-overlay-wrapper.sc-ion-alert-ios[_ngcontent-%COMP%]   button.alert-button.ion-focusable.ion-activatable.alert-button-cancel.sc-ion-alert-ios[_ngcontent-%COMP%] {\n  color: rgba(25, 25, 102, 0.5607843137);\n  font-size: 16px;\n  border-radius: 5px;\n  background: #EAEEF3;\n  border: none;\n  -webkit-text-fill-color: #191966;\n  \n\n  margin-right: 5px;\n  padding-bottom: 0px;\n  min-width: 47% !important;\n}\n.alert-wrapper.ion-overlay-wrapper.sc-ion-alert-ios[_ngcontent-%COMP%]   button.alert-button.ion-focusable.ion-activatable.alert-button-okay.sc-ion-alert-ios[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  background: #F2C21A;\n  border: none;\n  -webkit-text-fill-color: #191966;\n  color: #191966;\n  padding-bottom: 0px;\n  margin-left: 5px;\n  min-width: 47% !important;\n}\n.alert-wrapper.ion-overlay-wrapper.sc-ion-alert-ios[_ngcontent-%COMP%]   .alert-button-group.sc-ion-alert-ios[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\n.alert-wrapper.ion-overlay-wrapper.sc-ion-alert-md[_ngcontent-%COMP%]   button.alert-button.ion-focusable.ion-activatable.alert-button-cancel.sc-ion-alert-md[_ngcontent-%COMP%] {\n  color: rgba(25, 25, 102, 0.5607843137);\n  font-size: 16px;\n  border-radius: 5px;\n  background: #EAEEF3;\n  border: none;\n  -webkit-text-fill-color: #191966;\n  \n\n  margin-right: 5px;\n  padding-bottom: 0px;\n  min-width: 47% !important;\n}\n.alert-wrapper.ion-overlay-wrapper.sc-ion-alert-md[_ngcontent-%COMP%]   button.alert-button.ion-focusable.ion-activatable.alert-button-okay.sc-ion-alert-md[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  background: #F2C21A;\n  border: none;\n  -webkit-text-fill-color: #191966;\n  color: #191966;\n  padding-bottom: 0px;\n  margin-left: 5px;\n  min-width: 47% !important;\n}\n.alert-wrapper.ion-overlay-wrapper.sc-ion-alert-md[_ngcontent-%COMP%]   .alert-button-group.sc-ion-alert-md[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\nion-item-divider[_ngcontent-%COMP%] {\n  background: #EFEFEF;\n}\n\nion-checkbox[_ngcontent-%COMP%] {\n  --size: 23px;\n  --background-checked: #191966;\n}\n\nion-checkbox[_ngcontent-%COMP%]::part(container) {\n  border-radius: 0px;\n  border: 2px solid #191966;\n}\n\n.btn_outline[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  color: red;\n  --background: #fff;\n  border-radius: 3px;\n}\n\n.theme-1-confirmationAlert[_ngcontent-%COMP%]   .alert-wrapper.sc-ion-alert-ios[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  min-width: 100%;\n  max-width: var(--max-width);\n  height: var(--height);\n  min-height: var(--min-height);\n  max-height: var(--max-height);\n  background: #fff;\n  contain: content;\n  opacity: 0;\n  z-index: 10;\n  position: absolute;\n  bottom: 0;\n}\n\n.theme-1-confirmationAlert[_ngcontent-%COMP%]   .alert-wrapper.sc-ion-alert-md[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  min-width: 100%;\n  max-width: var(--max-width);\n  height: var(--height);\n  min-height: var(--min-height);\n  max-height: var(--max-height);\n  background: #fff;\n  contain: content;\n  opacity: 0;\n  z-index: 10;\n  position: absolute;\n  bottom: 0;\n}\n\n.cbusbold[_ngcontent-%COMP%] {\n  color: #333;\n}\n\n.drop_board_address[_ngcontent-%COMP%] {\n  display: block;\n  padding-top: 5px;\n}\n\n.chartered_wall[_ngcontent-%COMP%] {\n  color: #191966;\n  font-family: Roboto;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 22px;\n  letter-spacing: 0.14px;\n}\n\n.wall_item[_ngcontent-%COMP%] {\n  --inner-padding-end: 0;\n}\n\n.theme-1-confirmationAlert[_ngcontent-%COMP%]   .alert-wrapper.sc-ion-alert-ios[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  min-width: 100%;\n  max-width: var(--max-width);\n  height: var(--height);\n  min-height: var(--min-height);\n  max-height: var(--max-height);\n  background: #fff;\n  contain: content;\n  opacity: 0;\n  z-index: 10;\n  position: absolute;\n  bottom: 0;\n}\n\n.theme-1-confirmationAlert[_ngcontent-%COMP%]   .alert-wrapper.sc-ion-alert-md[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  min-width: 100%;\n  max-width: var(--max-width);\n  height: var(--height);\n  min-height: var(--min-height);\n  max-height: var(--max-height);\n  background: #fff;\n  contain: content;\n  opacity: 0;\n  z-index: 10;\n  position: absolute;\n  bottom: 0;\n}\n\n.ourbustheme[_ngcontent-%COMP%]   ion-checkbox[_ngcontent-%COMP%]::part(container) {\n  border-radius: 0px;\n  border: 2px solid var(--sectionHeaderTextColor) !important;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbusCardSet[_ngcontent-%COMP%]   ion-radio[_ngcontent-%COMP%] {\n  --color: var(--iconsAndButtonsColor);\n  --color-checked: var(--iconsAndButtonsColor);\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_order_details[_ngcontent-%COMP%] {\n  color: #2D2D2D;\n  font-size: 16px;\n  font-weight: bold;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbusCardSet[_ngcontent-%COMP%] {\n  margin: 8px 16px;\n  padding: 16px 12px;\n  border-radius: 8px;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_terms_click[_ngcontent-%COMP%] {\n  width: 152px;\n  height: 20px;\n  font-size: 12px;\n  font-weight: 300;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.43;\n  letter-spacing: normal;\n  color: #747474;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_terms_text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 300;\n  color: #747474;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_rowBg[_ngcontent-%COMP%] {\n  background-color: #EAF2FF;\n  padding: 8px;\n  display: flex;\n  align-items: center;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_farebreakup_curr[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 300;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_amount_payble[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 300;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_amount_paybl_amount[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n  color: #2d2d2d;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_header_text[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #2D2D2D;\n}\n\n.textend[_ngcontent-%COMP%] {\n  text-align: end !important;\n}\n\n.seabird_center[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.seabird-txt-msg[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 300;\n  text-align: center;\n  letter-spacing: 0.25px;\n  \n\n  margin-top: 10px;\n  width: 100%;\n  color: #2d2d2d;\n}\n\n.seabird-dwn-txt[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 500;\n  letter-spacing: 1.25px;\n  text-align: center;\n  \n\n  margin-top: 20px;\n  width: 100%;\n  \n\n  background: #4CAF50;\n  color: white;\n  border-radius: 8px;\n  padding: 16px;\n}\n\n.ourbus-div-payment[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #3e3e52;\n}\n\n.ourbus-payment-card[_ngcontent-%COMP%] {\n  margin: 12px 0px !important;\n  padding: 0 !important;\n}\n\n.ourbus-center-content[_ngcontent-%COMP%] {\n  text-align: center;\n  position: relative;\n}\n\n.content-container[_ngcontent-%COMP%] {\n  max-width: 90%;\n  width: 100%;\n  margin: 10px;\n  bottom: 50%;\n  position: absolute;\n  left: 2%;\n}\n\n.ourbus_transaction_failed[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #C30000;\n  margin: 8px 0px;\n  font-weight: 500;\n}\n\n.ourbus-tryagain-btn[_ngcontent-%COMP%] {\n  --background: var(--iconsAndButtonsColor);\n  --color: var(--primaryText);\n  font-size: 18px;\n  font-weight: 500;\n  height: 48px;\n  --border-radius: 8px;\n  margin: 8px 0px;\n}\n\n.ourbus-bcktohome-btn[_ngcontent-%COMP%] {\n  border: 1px solid var(--iconsAndButtonsColor);\n  --background: white;\n  --color: var(--iconsAndButtonsColor);\n  font-size: 18px;\n  font-weight: 500;\n  height: 48px;\n  border-radius: 6px;\n  margin: 8px 0px;\n}\n\n.ourbus-confirmation-modal[_ngcontent-%COMP%]   .alert-button-group[_ngcontent-%COMP%] {\n  flex-direction: column;\n  text-align: center;\n}\n\n.ourbus-confirmation-modal[_ngcontent-%COMP%]   .alert-button[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 5px 0; \n\n  text-align: center;\n}\n\n.ion-invalid.ion-touched[_ngcontent-%COMP%]   .label-floating.sc-ion-label-md-h[_ngcontent-%COMP%]:not(.ion-color) {\n  color: #3e3e52;\n}\n\n.ourbus-container-m[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 15px auto;\n  height: auto;\n  border: none;\n  background-color: #f5f5f5;\n  padding: 10px;\n}\n.ourbus-container-m[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  height: 40px;\n  filter: invert(50%) sepia(100%) saturate(800%) hue-rotate(85deg) brightness(90%);\n}\n\n.ourbus-brws-txt[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: bolder;\n  letter-spacing: 1.25px;\n  text-align: center;\n  color: #4a4a4a;\n  margin-top: 28px;\n  width: 100%;\n  text-align: left;\n  margin: 0px;\n}\n\n.ourbus-dwn-txt[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: bolder;\n  letter-spacing: 1.25px;\n  text-align: center;\n  color: #4CAF50;\n  margin-top: 28px;\n  width: 100%;\n  text-align: right;\n  margin: 0px;\n  font-weight: 700;\n}\n\n.removeText_ourbus[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: bold;\n  color: var(--sectionHeaderTextColor);\n  background: none;\n}\n\n.boardingTime[_ngcontent-%COMP%] {\n  text-align: left;\n  margin-bottom: 10px;\n  font-size: 15px;\n  font-weight: 700;\n}\n\n.droppingTime[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 10px;\n  font-size: 15px;\n  font-weight: 700;\n}\n\n.timeDuration[_ngcontent-%COMP%] {\n  text-align: right;\n  margin-bottom: 10px;\n  font-size: 15px;\n  font-weight: 700;\n}\n\n.full-height[_ngcontent-%COMP%] {\n  height: 90% !important;\n  overflow: auto;\n  margin-bottom: 40px;\n}\n\n.payment-card-height[_ngcontent-%COMP%] {\n  height: 70%;\n  overflow: auto;\n}\n\n.sPayment[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n\n.viewBottom[_ngcontent-%COMP%] {\n  vertical-align: bottom;\n  align-self: flex-end;\n  justify-content: flex-end;\n}\n\n.cash_couponcoupon_radio_cbus[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%] {\n  padding-left: 0px;\n}\n.cash_couponcoupon_radio_cbus[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --padding-start: 0px;\n}\n.cash_couponcoupon_radio_cbus[_ngcontent-%COMP%]   ion-radio[_ngcontent-%COMP%] {\n  margin: 7px 0px 8px 0px;\n}\n.cash_couponcoupon_radio_cbus[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  padding-left: 10px;\n}\n\n.ctp_theme1[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  background: #FFBD16;\n  --background-activated:#FFBD16;\n}\n\n.ctp_theme1_2[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  background: var(--iconsAndButtonsColor);\n  --background-activated:var(--iconsAndButtonsColor);\n  color: var(--primaryText);\n}\n\n.selectIcon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 20px;\n  top: 70%;\n  transform: translateY(-50%);\n  pointer-events: none;\n}\n\n.continue-default[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}"]
});

/***/ }),

/***/ 50470:
/*!**************************************************************************************************!*\
  !*** ./src/app/payment-details/theme-price-breakup-modal/theme-price-breakup-modal.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemePriceBreakupModalComponent: () => (/* binding */ ThemePriceBreakupModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 32881);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 70600);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/common-service */ 6036);
var _ThemePriceBreakupModalComponent;





function ThemePriceBreakupModalComponent_ion_row_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-row", 5)(1, "ion-col", 6)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Discount");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-col", 7)(5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r0.currencySym, "", ctx_r0.fareBreakupDetails ? (ctx_r0.fareBreakupDetails.offer_discount ? ctx_r0.fareBreakupDetails.offer_discount : 0) + (ctx_r0.fareBreakupDetails.ebooking_discount ? ctx_r0.fareBreakupDetails.ebooking_discount : 0) + (ctx_r0.fareBreakupDetails.previous_pnr_discount ? ctx_r0.fareBreakupDetails.previous_pnr_discount : 0) + (ctx_r0.fareBreakupDetails.privilege_card_discount ? ctx_r0.fareBreakupDetails.privilege_card_discount : 0).toFixed(2) : 0, "");
  }
}
function ThemePriceBreakupModalComponent_ion_row_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-row", 5)(1, "ion-col", 6)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Total snack price");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-col", 7)(5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.currencySym + "" + ctx_r0.fareBreakupDetails.total_snack_price.toFixed(2));
  }
}
function ThemePriceBreakupModalComponent_ion_row_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-row", 5)(1, "ion-col", 6)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Cash coupon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-col", 7)(5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.currencySym + "" + ctx_r0.fareBreakupDetails.cash_coupon.toFixed(2));
  }
}
function ThemePriceBreakupModalComponent_ion_row_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-row", 5)(1, "ion-col", 6)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Bus Operator GST");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-col", 7)(5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.currencySym + "" + ctx_r0.fareBreakupDetails.service_tax_amount.toFixed(2));
  }
}
function ThemePriceBreakupModalComponent_ion_row_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-row", 5)(1, "ion-col", 6)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Transaction Charge");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-col", 7)(5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.currencySym + "" + ctx_r0.fareBreakupDetails.transaction_charges.toFixed(2));
  }
}
function ThemePriceBreakupModalComponent_ion_row_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-row", 5)(1, "ion-col", 6)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "CC Charges");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-col", 7)(5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.currencySym + "" + ctx_r0.fareBreakupDetails.cc_charges.toFixed(2));
  }
}
function ThemePriceBreakupModalComponent_ion_row_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-row", 5)(1, "ion-col", 6)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Promotional Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-col", 7)(5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.currencySym + "" + ctx_r0.fareBreakupDetails.usable_promotional_balance.toFixed(2));
  }
}
function ThemePriceBreakupModalComponent_ion_row_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-row", 5)(1, "ion-col", 6)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Wallet Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-col", 7)(5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.currencySym + "" + ctx_r0.fareBreakupDetails.wallet_balance.toFixed(2));
  }
}
function ThemePriceBreakupModalComponent_ion_row_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-row", 5)(1, "ion-col", 6)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Refundable Booking Charges");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-col", 7)(5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.fareBreakupDetails.cancel_protect_charge.toFixed(2));
  }
}
function ThemePriceBreakupModalComponent_ion_row_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-row", 5)(1, "ion-col", 6)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Total Fare");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-col", 7)(5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r0.currencySym, "", ctx_r0.fareBreakupDetails.payble_amount.toFixed(2), "");
  }
}
function ThemePriceBreakupModalComponent_ion_row_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-row", 11)(1, "ion-col", 6)(2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Net Payable Phonebook(10%)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-col", 7)(5, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r0.currencySym, "", ctx_r0.fareBreakupDetails.net_payable_phonebook.toFixed(2), "");
  }
}
class ThemePriceBreakupModalComponent {
  constructor(params, commonService, modalController) {
    this.params = params;
    this.commonService = commonService;
    this.modalController = modalController;
    this.fareBreakupDetails = params.get('pricetBreakupData');
    this.currencySym = params.get('currencySym');
    this.checkCancelProtect = params.get('checkCancelProtect');
    this.phoneBooking = params.get('phoneBooking');
    this.metaData = params.get('metaData');
    this.payAmount = params.get('payAmount');
  }
  ngOnInit() {}
  showDiscount(fareBreakupDetails) {
    let discount = 0;
    discount = (fareBreakupDetails.offer_discount ? fareBreakupDetails.offer_discount : 0) + (fareBreakupDetails.ebooking_discount ? fareBreakupDetails.ebooking_discount : 0) + (fareBreakupDetails.previous_pnr_discount ? fareBreakupDetails.previous_pnr_discount : 0) + (fareBreakupDetails.privilege_card_discount ? fareBreakupDetails.privilege_card_discount : 0);
    if (discount == 0) {
      return false;
    } else return true;
  }
}
_ThemePriceBreakupModalComponent = ThemePriceBreakupModalComponent;
_ThemePriceBreakupModalComponent.ɵfac = function ThemePriceBreakupModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ThemePriceBreakupModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavParams), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_common_service__WEBPACK_IMPORTED_MODULE_0__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController));
};
_ThemePriceBreakupModalComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _ThemePriceBreakupModalComponent,
  selectors: [["app-theme-price-breakup-modal"]],
  inputs: {
    fareBreakupDetails: "fareBreakupDetails",
    currencySym: "currencySym",
    checkCancelProtect: "checkCancelProtect",
    phoneBooking: "phoneBooking",
    metaData: "metaData",
    payAmount: "payAmount"
  },
  decls: 33,
  vars: 14,
  consts: [[1, "applied-coupen-grid"], [1, "ion-margin", "ion-padding-bottom", 2, "border-bottom", "1px solid #d9d9d9"], ["size", "10", 2, "display", "flex", "justify-content", "start", "align-items", "center"], ["size", "2", 2, "display", "flex", "justify-content", "end", "align-items", "center"], ["name", "close-outline", "size", "large", 3, "click"], [1, "ion-margin"], ["size", "8", 2, "display", "flex", "justify-content", "start", "align-items", "center"], ["size", "4", 2, "display", "flex", "justify-content", "end", "align-items", "center"], ["class", "ion-margin", 4, "ngIf"], [1, "ion-margin", 2, "border-top", "1px solid #d9d9d9"], ["style", "margin-top: -22px;", "class", "ion-padding", 4, "ngIf"], [1, "ion-padding", 2, "margin-top", "-22px"]],
  template: function ThemePriceBreakupModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-content")(1, "ion-grid", 0)(2, "ion-row", 1)(3, "ion-col", 2)(4, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Price Breakup");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-col", 3)(7, "ion-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ThemePriceBreakupModalComponent_Template_ion_icon_click_7_listener() {
        return ctx.modalController.dismiss();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-row", 5)(9, "ion-col", 6)(10, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Base Fare");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-col", 7)(13, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ThemePriceBreakupModalComponent_ion_row_15_Template, 7, 2, "ion-row", 8)(16, ThemePriceBreakupModalComponent_ion_row_16_Template, 7, 1, "ion-row", 8)(17, ThemePriceBreakupModalComponent_ion_row_17_Template, 7, 1, "ion-row", 8)(18, ThemePriceBreakupModalComponent_ion_row_18_Template, 7, 1, "ion-row", 8)(19, ThemePriceBreakupModalComponent_ion_row_19_Template, 7, 1, "ion-row", 8)(20, ThemePriceBreakupModalComponent_ion_row_20_Template, 7, 1, "ion-row", 8)(21, ThemePriceBreakupModalComponent_ion_row_21_Template, 7, 1, "ion-row", 8)(22, ThemePriceBreakupModalComponent_ion_row_22_Template, 7, 1, "ion-row", 8)(23, ThemePriceBreakupModalComponent_ion_row_23_Template, 7, 1, "ion-row", 8)(24, ThemePriceBreakupModalComponent_ion_row_24_Template, 7, 2, "ion-row", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ion-row", 9)(26, "ion-col", 6)(27, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Total Amount Payable");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "ion-col", 7)(30, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, ThemePriceBreakupModalComponent_ion_row_32_Template, 7, 2, "ion-row", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.currencySym + "" + ctx.fareBreakupDetails.ticket_fare.toFixed(2));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showDiscount(ctx.fareBreakupDetails));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.fareBreakupDetails.total_snack_price);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.fareBreakupDetails.cash_coupon);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.commonService.isAbcApp());
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.fareBreakupDetails.transaction_charges);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.fareBreakupDetails.cc_charges);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.fareBreakupDetails.usable_promotional_balance);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.fareBreakupDetails.wallet_balance);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.checkCancelProtect && !ctx.phoneBooking && ctx.metaData.showCancelProtect);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.fareBreakupDetails.total_fare);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.currencySym, "", ctx.fareBreakupDetails.payble_amount.toFixed(2), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.fareBreakupDetails.net_payable_phonebook);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf],
  styles: [".applied-coupen-grid[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #333;\n  font-size: 18px;\n  font-weight: 600;\n  margin: 0;\n}\n.applied-coupen-grid[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #333;\n  font-size: 14px;\n  font-weight: 600;\n  margin: 0;\n}\n.applied-coupen-grid[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #333;\n  font-size: 16px;\n  font-weight: 700;\n  margin: 0;\n}"]
});

/***/ }),

/***/ 64967:
/*!***********************************************************!*\
  !*** ./src/app/payment-details/payment-details.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaymentDetailsPageModule: () => (/* binding */ PaymentDetailsPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 32881);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _payment_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment-details-routing.module */ 33278);
/* harmony import */ var _pipes_filter_oculto_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pipes/filter-oculto.pipe */ 43773);
/* harmony import */ var _payment_details_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./payment-details.page */ 34400);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 51670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 17705);
var _PaymentDetailsPageModule;








class PaymentDetailsPageModule {}
_PaymentDetailsPageModule = PaymentDetailsPageModule;
_PaymentDetailsPageModule.ɵfac = function PaymentDetailsPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PaymentDetailsPageModule)();
};
_PaymentDetailsPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: _PaymentDetailsPageModule
});
_PaymentDetailsPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  providers: [_awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__.InAppBrowser],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _payment_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.PaymentDetailsPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](PaymentDetailsPageModule, {
    declarations: [_payment_details_page__WEBPACK_IMPORTED_MODULE_2__.PaymentDetailsPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _payment_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.PaymentDetailsPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _pipes_filter_oculto_pipe__WEBPACK_IMPORTED_MODULE_1__.FilterOcultoPipe]
  });
})();

/***/ }),

/***/ 90426:
/*!************************************************************************************************!*\
  !*** ./src/app/payment-details/theme-apply-coupon-modal/theme-apply-coupon-modal.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemeApplyCouponModalComponent: () => (/* binding */ ThemeApplyCouponModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 32881);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 70600);
var _ThemeApplyCouponModalComponent;




function ThemeApplyCouponModalComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ThemeApplyCouponModalComponent_div_15_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.applyCoupon(ctx_r1.newCouponCode, true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Apply");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function ThemeApplyCouponModalComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Apply");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function ThemeApplyCouponModalComponent_div_17_ion_row_4_ion_col_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-col", 24)(1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 26)(3, "ion-label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const oCoupon_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", oCoupon_r4.coupon_code, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
function ThemeApplyCouponModalComponent_div_17_ion_row_4_ion_col_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-col", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const oCoupon_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", oCoupon_r4.description, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
function ThemeApplyCouponModalComponent_div_17_ion_row_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-row", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ThemeApplyCouponModalComponent_div_17_ion_row_4_Template_ion_row_click_0_listener() {
      const oCoupon_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.applyCoupon(oCoupon_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ThemeApplyCouponModalComponent_div_17_ion_row_4_ion_col_1_Template, 4, 1, "ion-col", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-col", 22)(3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Apply");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ThemeApplyCouponModalComponent_div_17_ion_row_4_ion_col_5_Template, 2, 1, "ion-col", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const oCoupon_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", oCoupon_r4.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", oCoupon_r4.description);
  }
}
function ThemeApplyCouponModalComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "div", 17)(2, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " More Offers ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ThemeApplyCouponModalComponent_div_17_ion_row_4_Template, 6, 2, "ion-row", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.offerCoupons);
  }
}
function ThemeApplyCouponModalComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "ion-row", 8)(2, "ion-col", 29)(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "No Offers");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
}
class ThemeApplyCouponModalComponent {
  constructor(modalController, params) {
    this.modalController = modalController;
    this.params = params;
    this.offerCoupons = [];
    this.offerCoupons = this.params.get('offerCoupons');
  }
  ngOnInit() {
    this.offerCoupons = this.params.get('offerCoupons');
    // console.log("this.offerCoupons : ", this.offerCoupons);
  }
  /**
   * @param coupon coupon code
   * @param isMenual true, if user enter coupo-code menually from input field.
   */
  applyCoupon(coupon, isMenual) {
    /** @note if user enter coupon-code menually */
    if (isMenual) {
      if (coupon && coupon.length) {
        this.modalController.dismiss(coupon);
      }
    } else {
      /** @note apply coupon from coupons-list. */
      this.modalController.dismiss(coupon.coupon_code);
    }
  }
}
_ThemeApplyCouponModalComponent = ThemeApplyCouponModalComponent;
_ThemeApplyCouponModalComponent.ɵfac = function ThemeApplyCouponModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ThemeApplyCouponModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavParams));
};
_ThemeApplyCouponModalComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _ThemeApplyCouponModalComponent,
  selectors: [["app-theme-apply-coupon-modal"]],
  inputs: {
    offerCoupons: "offerCoupons"
  },
  decls: 19,
  vars: 5,
  consts: [[1, "apply-coupon-grid", 2, "padding", "5px 0px"], [1, "ion-padding-horizontal", 2, "border-bottom", "1px solid #dadee3", "padding-bottom", "5px"], ["size", "11", 2, "display", "flex", "align-items", "center"], ["size", "1"], [2, "float", "right"], ["slot", "end"], ["mode", "md", 3, "click"], ["name", "close", 2, "color", "#ADADAD", "height", "24px", "width", "24px"], [1, "ion-padding"], ["size", "9", 1, "ion-no-padding"], ["placeholder", "Enter Coupon Code", 3, "ngModelChange", "ngModel"], ["size", "3", 1, "ion-no-padding", "apply-col", 2, "padding-right", "16px"], ["class", "apply", 3, "click", 4, "ngIf"], ["class", "apply2", 4, "ngIf"], [4, "ngIf"], [1, "apply", 3, "click"], [1, "apply2"], [2, "padding", "0px 16px"], [2, "color", "#333", "font-family", "Roboto", "font-size", "16px", "font-style", "normal", "font-weight", "500", "line-height", "normal"], ["class", "ion-padding", 3, "click", 4, "ngFor", "ngForOf"], [1, "ion-padding", 3, "click"], ["size", "8", "style", "display: flex; justify-content: start; align-items: center; padding: 0px;", 4, "ngIf"], ["size", "4", 2, "display", "flex", "justify-content", "end", "align-items", "center", "padding", "0px 5px"], ["size", "12", "style", "border-bottom: 1px solid #dadee3; padding-bottom: 16px;padding-left: 3px;", 4, "ngIf"], ["size", "8", 2, "display", "flex", "justify-content", "start", "align-items", "center", "padding", "0px"], [1, "coupon-code-btn"], ["src", "./././assets/apply_coupon_offer.svg", "alt", "", 2, "padding-right", "3px"], [3, "innerHTML"], ["size", "12", 2, "border-bottom", "1px solid #dadee3", "padding-bottom", "16px", "padding-left", "3px"], ["size", "12"]],
  template: function ThemeApplyCouponModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-content")(1, "ion-grid", 0)(2, "ion-row", 1)(3, "ion-col", 2)(4, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Apply Coupon");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-col", 3)(7, "span", 4)(8, "ion-buttons", 5)(9, "ion-button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ThemeApplyCouponModalComponent_Template_ion_button_click_9_listener() {
        return ctx.modalController.dismiss();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "ion-icon", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ion-row", 8)(12, "ion-col", 9)(13, "ion-input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function ThemeApplyCouponModalComponent_Template_ion_input_ngModelChange_13_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.newCouponCode, $event) || (ctx.newCouponCode = $event);
        return $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ion-col", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ThemeApplyCouponModalComponent_div_15_Template, 2, 0, "div", 12)(16, ThemeApplyCouponModalComponent_div_16_Template, 2, 0, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ThemeApplyCouponModalComponent_div_17_Template, 5, 1, "div", 14)(18, ThemeApplyCouponModalComponent_div_18_Template, 5, 0, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.newCouponCode);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.newCouponCode);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.newCouponCode);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.offerCoupons.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.offerCoupons.length <= 0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
  styles: [".apply-coupon-grid[_ngcontent-%COMP%]   .apply[_ngcontent-%COMP%] {\n  color: #333;\n  text-align: right;\n  \n\n  font-family: Roboto;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 14px;\n}\n.apply-coupon-grid[_ngcontent-%COMP%]   .apply2[_ngcontent-%COMP%] {\n  color: #999999;\n  text-align: right;\n  \n\n  font-family: Roboto;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 14px;\n}\n.apply-coupon-grid[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #333;\n  font-family: Roboto;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n  margin: 0;\n}\n.apply-coupon-grid[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%] {\n  border-top-left-radius: 12px;\n  border-bottom-left-radius: 12px;\n  --background: #F2F6F8;\n  --padding-top: 16px;\n  --padding-end: 16px;\n  --padding-bottom: 16px;\n  --padding-start: 16px;\n}\n.apply-coupon-grid[_ngcontent-%COMP%]   .apply-col[_ngcontent-%COMP%] {\n  background: #f2f6f8;\n  border-top-right-radius: 12px;\n  border-bottom-right-radius: 12px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.apply-coupon-grid[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #333;\n  font-size: 16px;\n  font-weight: 600;\n}\n.apply-coupon-grid[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n  color: #191966;\n  font-weight: 600;\n  margin: 0;\n}\n.apply-coupon-grid[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #333;\n  font-size: 14px;\n  font-weight: 600;\n  margin: 0;\n}\n.apply-coupon-grid[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #5F5F5F;\n  font-size: 12px;\n  font-weight: 400;\n  margin: 0;\n}\n.apply-coupon-grid[_ngcontent-%COMP%]   .coupen-row[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #DADEE3;\n}\n.apply-coupon-grid[_ngcontent-%COMP%]   .coupon-code-btn[_ngcontent-%COMP%] {\n  display: flex;\n  background: #e8f9f0;\n  color: #00bb6b;\n  padding: 8px 10px 7px 10px;\n  font-weight: 600;\n  border-radius: 12px;\n  align-items: center;\n}"]
});

/***/ }),

/***/ 95199:
/*!***********************************************************************!*\
  !*** ./node_modules/easebuzz-capacitorjs-sdk/dist/esm/definitions.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=definitions.js.map

/***/ })

}]);