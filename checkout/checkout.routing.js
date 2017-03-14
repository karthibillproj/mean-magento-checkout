"use strict";
var router_1 = require('@angular/router');
var checkout_component_1 = require('./components/checkout/checkout.component');
var checkoutsuccess_component_1 = require('./components/success/checkoutsuccess.component');
var auth_guard_1 = require('../shared/helper/auth.guard');
var routes = [
    { path: 'checkout', component: checkout_component_1.CheckoutComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'checkout/success', component: checkoutsuccess_component_1.CheckoutsuccessComponent, canActivate: [auth_guard_1.AuthGuard] }
];
exports.checkoutRouting = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=checkout.routing.js.map