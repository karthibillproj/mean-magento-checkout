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
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var checkout_service_1 = require("../../services/checkout.service");
var form_helper_1 = require("../../helper/form.helper");
var BillingaddressComponent = (function () {
    function BillingaddressComponent(_fb, _formHelper, _checkoutservice) {
        this._fb = _fb;
        this._formHelper = _formHelper;
        this._checkoutservice = _checkoutservice;
        this.isLoaderActive = false;
        this.billingaddressdetails = new core_1.EventEmitter();
        // console.log(this.childNav);
    }
    BillingaddressComponent.prototype.ngOnInit = function () {
        this.createbillingForm();
        if (this._formHelper.getbillingaddress()) {
            console.log(this._formHelper.getbillingaddress());
            var billingaddressvalue = this._formHelper.getbillingaddress();
            this.billingForm.setValue(billingaddressvalue);
        }
    };
    BillingaddressComponent.prototype.billingaddresssubmit = function (model, isValid) {
        var _this = this;
        this.isLoaderActive = true;
        var billingdata = JSON.parse(JSON.stringify(model));
        billingdata.street = [model.street];
        billingdata.saveInAddressBook = 1;
        this._checkoutservice.postbillingaddress(billingdata).subscribe(function (data) {
            console.log('success in posting');
            _this.isLoaderActive = false;
            _this._formHelper.setbillingaddress(model);
            _this.billingaddressdetails.emit(model);
        }, function (error) {
            console.log('error in posting');
            _this.isLoaderActive = false;
        });
        /*  this._formHelper.setbillingaddress(model);
           this.billingaddressdetails.emit(model); */
    };
    BillingaddressComponent.prototype.createbillingForm = function () {
        this.billingForm = this._fb.group({
            email: ['', forms_1.Validators.compose([forms_1.Validators.required, this._formHelper.mailFormat])],
            firstname: ['', [forms_1.Validators.required]],
            lastname: ['', [forms_1.Validators.required]],
            street: ['', [forms_1.Validators.required]],
            city: ['', [forms_1.Validators.required]],
            company: [''],
            region: ['', [forms_1.Validators.required]],
            postcode: ['', [forms_1.Validators.required]],
            country_id: ['', [forms_1.Validators.required]],
            telephone: ['', forms_1.Validators.compose([forms_1.Validators.required, this._formHelper.phoneFormat])],
            usebillingasshipping: [true],
        });
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], BillingaddressComponent.prototype, "billingaddressdetails", void 0);
    BillingaddressComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'billingaddress',
            templateUrl: 'billingaddress.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, form_helper_1.FormHelper, checkout_service_1.CheckoutService])
    ], BillingaddressComponent);
    return BillingaddressComponent;
}());
exports.BillingaddressComponent = BillingaddressComponent;
//# sourceMappingURL=billingaddress.component.js.map