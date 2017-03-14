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
var ShippingmethodComponent = (function () {
    function ShippingmethodComponent(_fb, _formHelper) {
        this._fb = _fb;
        this._formHelper = _formHelper;
        this.shippingmethoddetails = new core_1.EventEmitter();
        // console.log(this.childNav);
    }
    ShippingmethodComponent.prototype.ngOnInit = function () {
        this.createshippingmethodForm();
        if (this._formHelper.getshippingmethod()) {
            var shippingmethodvalue = this._formHelper.getshippingmethod();
            this.shippingmethodForm.setValue(shippingmethodvalue);
        }
    };
    ShippingmethodComponent.prototype.shippingmethodsubmit = function (model, isValid) {
        console.log(model);
        this._formHelper.setshippingmethod(model);
        this.shippingmethoddetails.emit(model);
    };
    ShippingmethodComponent.prototype.createshippingmethodForm = function () {
        this.shippingmethodForm = this._fb.group({
            shippingmethod: ['freeshipping_freeshipping', [forms_1.Validators.required]],
        });
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ShippingmethodComponent.prototype, "shippingmethoddetails", void 0);
    ShippingmethodComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'shippingmethod',
            templateUrl: 'shippingmethod.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, form_helper_1.FormHelper])
    ], ShippingmethodComponent);
    return ShippingmethodComponent;
}());
exports.ShippingmethodComponent = ShippingmethodComponent;
//# sourceMappingURL=shippingmethod.component.js.map