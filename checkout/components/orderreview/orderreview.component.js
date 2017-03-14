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
var OrderreviewComponent = (function () {
    function OrderreviewComponent(_fb, _formHelper) {
        this._fb = _fb;
        this._formHelper = _formHelper;
        this.createorder = new core_1.EventEmitter();
        // console.log(this.childNav);
    }
    OrderreviewComponent.prototype.ngOnInit = function () {
        this.cartitems = this._formHelper.getcartitems();
        this.billingaddress = this._formHelper.getbillingaddress();
        this.shippingaddress = this._formHelper.getshippingaddress();
        this.shippingmethod = this._formHelper.getshippingmethod();
        this.paymentmethod = this._formHelper.getpaymentmethod();
    };
    OrderreviewComponent.prototype.placeorderclick = function () {
        this.createorder.emit(1);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], OrderreviewComponent.prototype, "createorder", void 0);
    OrderreviewComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'orderreview',
            templateUrl: 'orderreview.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, form_helper_1.FormHelper])
    ], OrderreviewComponent);
    return OrderreviewComponent;
}());
exports.OrderreviewComponent = OrderreviewComponent;
//# sourceMappingURL=orderreview.component.js.map