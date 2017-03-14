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
var form_helper_1 = require("../../helper/form.helper");
var ShippingaddressComponent = (function () {
    function ShippingaddressComponent(_fb, _formHelper) {
        this._fb = _fb;
        this._formHelper = _formHelper;
        this.shippingaddressdetails = new core_1.EventEmitter();
        // console.log(this.childNav);
    }
    ShippingaddressComponent.prototype.ngOnInit = function () {
        this.createshippingForm();
        if (this._formHelper.getshippingaddress()) {
            var shippingaddressvalue = this._formHelper.getshippingaddress();
            this.shippingForm.setValue(shippingaddressvalue);
        }
    };
    ShippingaddressComponent.prototype.shippingaddresssubmit = function (model, isValid) {
        this._formHelper.setshippingaddress(model);
        this.shippingaddressdetails.emit(model);
    };
    ShippingaddressComponent.prototype.createshippingForm = function () {
        this.shippingForm = this._fb.group({
            firstname: ['', [forms_1.Validators.required]],
            lastname: ['', [forms_1.Validators.required]],
            street: ['', [forms_1.Validators.required]],
            city: ['', [forms_1.Validators.required]],
            company: [''],
            region: ['', [forms_1.Validators.required]],
            postcode: ['', [forms_1.Validators.required]],
            country_id: ['', [forms_1.Validators.required]],
            telephone: ['', forms_1.Validators.compose([forms_1.Validators.required, this._formHelper.phoneFormat])],
        });
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ShippingaddressComponent.prototype, "shippingaddressdetails", void 0);
    ShippingaddressComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'shippingaddress',
            templateUrl: 'shippingaddress.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, form_helper_1.FormHelper])
    ], ShippingaddressComponent);
    return ShippingaddressComponent;
}());
exports.ShippingaddressComponent = ShippingaddressComponent;
//# sourceMappingURL=shippingaddress.component.js.map