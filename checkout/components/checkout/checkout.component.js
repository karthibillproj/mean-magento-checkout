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
var router_1 = require("@angular/router");
var CheckoutComponent = (function () {
    // @ViewChild('step2link') step2link:ElementRef;
    function CheckoutComponent(_router, _checkoutservice, renderer, _fb) {
        this._router = _router;
        this._checkoutservice = _checkoutservice;
        this.renderer = renderer;
        this._fb = _fb;
        this.isLoaderActive = false;
        this.mainloader = false;
        this.cartitems = [];
        this.disablebillingaddressclass = false;
        this.disableshipaddressclass = true;
        this.disableshippingmethodclass = true;
        this.diablepaymetmethodclass = true;
        this.activebillingaddressclass = true;
        this.activeshipaddressclass = false;
        this.activeshippingmethodclass = false;
        this.activepaymentmethodcalss = false;
        this.showbillingaddress = true;
        this.showshippingaddress = false;
        this.showshippingmethod = false;
        this.showpaymentmethod = false;
        // console.log(this.childNav);
    }
    CheckoutComponent.prototype.ngOnInit = function () {
        this.getcartitems();
        this.createbillingForm();
        this.createshippingForm();
        this.createshippingmethodForm();
        this.createpaymentmethodForm();
    };
    CheckoutComponent.prototype.getcartitems = function () {
        var _this = this;
        this.mainloader = true;
        this.customer_token = localStorage.getItem('customer_token');
        this._checkoutservice.getcartitems(this.customer_token)
            .subscribe(function (data) {
            _this.mainloader = false;
            if (data.cartContent.items.length !== 0) {
                for (var i = 0; i < data.cartContent.items.length; i++) {
                    var item = { "product_sku": data.cartContent.items[i]['product_sku'],
                        "product_qty": data.cartContent.items[i]['product_qty']
                    };
                    _this.cartitems.push(item);
                }
            }
            else {
                _this._router.navigate(['/cart']);
            }
        }, function (error) {
            console.log('error in getting cart items');
            console.log(error);
        });
    };
    CheckoutComponent.prototype.createbillingForm = function () {
        this.billingForm = this._fb.group({
            email: ['', forms_1.Validators.compose([forms_1.Validators.required, this.mailFormat])],
            firstname: ['', [forms_1.Validators.required]],
            lastname: ['', [forms_1.Validators.required]],
            street: ['', [forms_1.Validators.required]],
            city: ['', [forms_1.Validators.required]],
            region: ['', [forms_1.Validators.required]],
            postcode: ['', [forms_1.Validators.required]],
            country_id: ['', [forms_1.Validators.required]],
            telephone: ['', forms_1.Validators.compose([forms_1.Validators.required, this.phoneFormat])],
        });
    };
    CheckoutComponent.prototype.createshippingForm = function () {
        this.shippingForm = this._fb.group({
            firstname: ['', [forms_1.Validators.required]],
            lastname: ['', [forms_1.Validators.required]],
            street: ['', [forms_1.Validators.required]],
            city: ['', [forms_1.Validators.required]],
            region: ['', [forms_1.Validators.required]],
            postcode: ['', [forms_1.Validators.required]],
            country_id: ['', [forms_1.Validators.required]],
            telephone: ['', forms_1.Validators.compose([forms_1.Validators.required, this.phoneFormat])],
        });
    };
    CheckoutComponent.prototype.createshippingmethodForm = function () {
        this.shippingmethodForm = this._fb.group({
            shippingmethod: ['freeshipping_freeshipping', [forms_1.Validators.required]],
        });
    };
    CheckoutComponent.prototype.createpaymentmethodForm = function () {
        this.paymentmethodForm = this._fb.group({
            paymentmethod: ['checkmo', [forms_1.Validators.required]],
        });
    };
    CheckoutComponent.prototype.mailFormat = function (control) {
        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        if (control.value != "" && (!EMAIL_REGEXP.test(control.value))) {
            return { "incorrectMailFormat": true };
        }
        return null;
    };
    CheckoutComponent.prototype.phoneFormat = function (control) {
        var PHONE_REGEXP = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
        if (control.value != "" && (!PHONE_REGEXP.test(control.value))) {
            return { "incorrectPhoneFormat": true };
        }
        return null;
    };
    CheckoutComponent.prototype.billingsave = function (model, isValid) {
        // console.log(model);
        localStorage.setItem("billingaddress", JSON.stringify(model));
        this.shippingaddressshow();
        // console.log(JSON.parse(localStorage.getItem('billingaddress')));
        /*   let event = new MouseEvent('click', {bubbles: true});
            this.renderer.invokeElementMethod(
            this.step2link.nativeElement, 'dispatchEvent', [event]); */
    };
    CheckoutComponent.prototype.shippingsave = function (model, isValid) {
        console.log(model);
        localStorage.setItem("shippingaddress", JSON.stringify(model));
        this.shippingmethodshow();
    };
    CheckoutComponent.prototype.shippingmethodsave = function (model, isValid) {
        //  console.log(model);
        localStorage.setItem("shippingmethod", JSON.stringify(model));
        this.paymentmethodshow();
    };
    CheckoutComponent.prototype.paymentmethodsave = function (model, isValid) {
        // console.log(model);
        localStorage.setItem("paymentmethod", JSON.stringify(model));
        this.placeorder();
    };
    CheckoutComponent.prototype.placeorder = function () {
        var _this = this;
        this.isLoaderActive = true;
        this.billingaddressobject = JSON.parse(localStorage.getItem('billingaddress'));
        this.email = this.billingaddressobject['email'];
        delete this.billingaddressobject['email'];
        this.shippingddressobject = JSON.parse(localStorage.getItem('shippingaddress'));
        this.shippingmethodobject = JSON.parse(localStorage.getItem('shippingmethod'));
        this.paymentmethodobject = JSON.parse(localStorage.getItem('paymentmethod'));
        this.order = {
            "currency_id": "USD",
            "email": this.email,
            "billing_address": this.billingaddressobject,
            "shipping_address": this.shippingddressobject,
            "shipping_method": this.shippingmethodobject['shippingmethod'],
            "payment_method": this.paymentmethodobject['paymentmethod'],
            "items": this.cartitems
        };
        this._checkoutservice.postOrder(this.order)
            .subscribe(function (data) {
            console.log('success in posting');
            _this.isLoaderActive = false;
        }, function (error) {
            console.log('error in posting');
            _this.isLoaderActive = false;
        });
        this._router.navigate(['/checkout/success']);
    };
    CheckoutComponent.prototype.billingaddressshow = function () {
        this.activebillingaddressclass = true;
        this.activeshipaddressclass = false;
        this.activeshippingmethodclass = false;
        this.activepaymentmethodcalss = false;
        this.showbillingaddress = true;
        this.showshippingaddress = false;
        this.showshippingmethod = false;
        this.showpaymentmethod = false;
    };
    CheckoutComponent.prototype.shippingaddressshow = function () {
        this.disableshipaddressclass = false;
        this.activebillingaddressclass = false;
        this.activeshipaddressclass = true;
        this.activeshippingmethodclass = false;
        this.activepaymentmethodcalss = false;
        this.showbillingaddress = false;
        this.showshippingaddress = true;
        this.showshippingmethod = false;
        this.showpaymentmethod = false;
    };
    CheckoutComponent.prototype.shippingmethodshow = function () {
        this.disableshippingmethodclass = false;
        this.activebillingaddressclass = false;
        this.activeshipaddressclass = false;
        this.activeshippingmethodclass = true;
        this.activepaymentmethodcalss = false;
        this.showbillingaddress = false;
        this.showshippingaddress = false;
        this.showshippingmethod = true;
        this.showpaymentmethod = false;
    };
    CheckoutComponent.prototype.paymentmethodshow = function () {
        this.diablepaymetmethodclass = false;
        this.activebillingaddressclass = false;
        this.activeshipaddressclass = false;
        this.activeshippingmethodclass = false;
        this.activepaymentmethodcalss = true;
        this.showbillingaddress = false;
        this.showshippingaddress = false;
        this.showshippingmethod = false;
        this.showpaymentmethod = true;
    };
    CheckoutComponent.prototype.ngAfterViewInit = function () {
        //        $(document).ready(function() {
        //     var navListItems = $('ul.setup-panel li a'),
        //         allWells = $('.setup-content');
        //     allWells.hide();
        //     navListItems.click(function(e:any)
        //     {  
        //         e.preventDefault();
        //         var $target = $($(this).attr('href')),
        //             $item = $(this).closest('li');
        //         if (!$item.hasClass('disabled')) {
        //             navListItems.closest('li').removeClass('active');
        //             $item.addClass('active');
        //             allWells.hide();
        //             $target.show();
        //         }
        //     });
        //     $('ul.setup-panel li.active a').trigger('click');
        //     $('#activate-step-2').on('click', function(e:any) {
        //         $('ul.setup-panel li:eq(1)').removeClass('disabled');
        //         $('ul.setup-panel li a[href="#step-2"]').trigger('click');
        //     })
        //     $('#activate-step-3').on('click', function(e:any) {
        //         $('ul.setup-panel li:eq(2)').removeClass('disabled');
        //         $('ul.setup-panel li a[href="#step-3"]').trigger('click');
        //     })
        //     $('#activate-step-4').on('click', function(e:any) {
        //         $('ul.setup-panel li:eq(3)').removeClass('disabled');
        //         $('ul.setup-panel li a[href="#step-4"]').trigger('click');
        //     }) 
        // });
    };
    CheckoutComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'checkout',
            templateUrl: 'checkout.html',
            providers: [checkout_service_1.CheckoutService],
        }), 
        __metadata('design:paramtypes', [router_1.Router, checkout_service_1.CheckoutService, core_1.Renderer, forms_1.FormBuilder])
    ], CheckoutComponent);
    return CheckoutComponent;
}());
exports.CheckoutComponent = CheckoutComponent;
//# sourceMappingURL=checkout.component.js.map