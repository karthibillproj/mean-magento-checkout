"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var FormHelper = (function () {
    function FormHelper() {
    }
    FormHelper.prototype.mailFormat = function (control) {
        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        if (control.value != "" && (!EMAIL_REGEXP.test(control.value))) {
            return { "incorrectMailFormat": true };
        }
        return null;
    };
    FormHelper.prototype.phoneFormat = function (control) {
        var PHONE_REGEXP = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
        if (control.value != "" && (!PHONE_REGEXP.test(control.value))) {
            return { "incorrectPhoneFormat": true };
        }
        return null;
    };
    FormHelper.prototype.clearcheckoutform = function () {
        delete this.billingaddressset;
        delete this.shippingaddressset;
        delete this.shippingmethodset;
        delete this.paymentmethodset;
    };
    FormHelper.prototype.setcartitems = function (model) {
        this.cartitems = model;
    };
    FormHelper.prototype.getcartitems = function () {
        return this.cartitems;
        // return JSON.parse(localStorage.getItem('cartitems'))
    };
    FormHelper.prototype.setbillingaddress = function (model) {
        this.billingaddressset = model;
    };
    FormHelper.prototype.getbillingaddress = function () {
        return this.billingaddressset;
        //  return JSON.parse(localStorage.getItem('billingaddress'))
    };
    FormHelper.prototype.setshippingaddress = function (model) {
        this.shippingaddressset = model;
    };
    FormHelper.prototype.getshippingaddress = function () {
        return this.shippingaddressset;
        //return JSON.parse(localStorage.getItem('shippingaddress'))
    };
    FormHelper.prototype.setshippingmethod = function (model) {
        this.shippingmethodset = model;
    };
    FormHelper.prototype.getshippingmethod = function () {
        return this.shippingmethodset;
        //  return JSON.parse(localStorage.getItem('shippingmethod'))
    };
    FormHelper.prototype.setpaymentmethod = function (model) {
        this.paymentmethodset = model;
    };
    FormHelper.prototype.getpaymentmethod = function () {
        return this.paymentmethodset;
        // return JSON.parse(localStorage.getItem('paymentmethod'))
    };
    FormHelper = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], FormHelper);
    return FormHelper;
}());
exports.FormHelper = FormHelper;
//# sourceMappingURL=form.helper.js.map