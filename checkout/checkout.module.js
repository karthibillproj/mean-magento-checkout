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
// import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
var checkout_routing_1 = require('./checkout.routing');
var common_module_1 = require('../common/common.module');
/* customer module components import i.e. login,register */
var checkout_component_1 = require('./components/checkout/checkout.component');
var checkoutsuccess_component_1 = require('./components/success/checkoutsuccess.component');
var CheckoutModule = (function () {
    function CheckoutModule() {
    }
    CheckoutModule = __decorate([
        core_1.NgModule({
            imports: [common_module_1.CommonsModule, checkout_routing_1.checkoutRouting],
            exports: [],
            declarations: [
                checkout_component_1.CheckoutComponent,
                checkoutsuccess_component_1.CheckoutsuccessComponent
            ],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], CheckoutModule);
    return CheckoutModule;
}());
exports.CheckoutModule = CheckoutModule;
//# sourceMappingURL=checkout.module.js.map