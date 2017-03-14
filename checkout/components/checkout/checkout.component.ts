import { Component, AfterViewInit, OnInit, Renderer, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {CheckoutService} from "../../services/checkout.service";
import {Router} from "@angular/router";
import {FormHelper} from "../../helper/form.helper";
declare var $:any;

@Component({
    moduleId: module.id,
    selector: 'checkout',
    templateUrl: 'checkout.html',
    providers:[],
})

export class CheckoutComponent  {

  public billingForm: FormGroup;
  public shippingForm: FormGroup;
  public shippingmethodForm: FormGroup;
  public paymentmethodForm: FormGroup;
  isLoaderActive: boolean = false;
  mainloader: boolean = false;
  successmessage:string;
  errormessage:string;
  customer_token : string;
  email:string;
  cartitems: any[] = [];
  billingaddressobject:Object;
  shippingddressobject:Object;
  shippingmethodobject:Object;
  paymentmethodobject:Object;
  order:Object;
  setshippingaddressdata:Object;

  disablebillingaddressclass: boolean = false;
  disableshipaddressclass: boolean = true;
  disableshippingmethodclass: boolean = true;
  diablepaymetmethodclass: boolean = true;
  diableorderreviewclass: boolean = true;

  activebillingaddressclass: boolean = true;
  activeshipaddressclass: boolean = false;
  activeshippingmethodclass: boolean = false;
  activepaymentmethodcalss: boolean = false;
  activeorderreviewcalss: boolean = false;

  showbillingaddress: boolean = true;
  showshippingaddress: boolean = false;
  showshippingmethod: boolean = false;
  showpaymentmethod: boolean = false;
  showorderreview: boolean = false;

   openbillingaddresstab: boolean = true;
   openshippingaddresstab: boolean = false;
   openshippingmethodtab: boolean = false;
   openpaymentmethodtab: boolean = false;
   openorderreviewtab: boolean = false;


 // @ViewChild('step2link') step2link:ElementRef;

  constructor(private _router: Router,private _checkoutservice: CheckoutService, private renderer:Renderer, private _fb: FormBuilder, private _formHelper: FormHelper){
    // console.log(this.childNav);
    console.log('tees');
  }

  ngOnInit() {  
          this.getcartitems();  
          this._formHelper.clearcheckoutform();
   }

   getcartitems(){
       this.mainloader = true;
       this.customer_token = localStorage.getItem('customer_token'); 
        this._checkoutservice.getcartitems(this.customer_token)
            .subscribe(
                data => {
                    this.mainloader = false;
                     this._formHelper.setcartitems(data);
                    // localStorage.setItem("cartitems", JSON.stringify(data));
                    if(data.cartContent.items.length !== 0){
                        for (var i=0; i<data.cartContent.items.length; i++){
                            var item = { "product_sku" : data.cartContent.items[i]['product_sku'],
                            "product_qty":  data.cartContent.items[i]['product_qty']
                            };
                            this.cartitems.push(item);
                        }
                    }else{
                        this._router.navigate(['/cart']);
                    }
                },
                error => {
                console.log('error in getting cart items');
                console.log(error);
                }
            ); 

   }

   billingsave(model: any) {
         localStorage.setItem("billingaddress", JSON.stringify(model));
     if(model['usebillingasshipping']){
          this.setshippingaddressdata = JSON.parse(JSON.stringify(model));
         delete this.setshippingaddressdata['email'];
         delete this.setshippingaddressdata['usebillingasshipping'];
         this._formHelper.setshippingaddress(this.setshippingaddressdata);
         this.disableshipaddressclass = false;
         this.openshippingaddresstab = true;
         this.shippingmethodshow(true);
       }else{
         this.shippingaddressshow(true);
       }   
    }

    shippingsave(model: any, isValid: boolean){
      // console.log(model);
        localStorage.setItem("shippingaddress", JSON.stringify(model));
        this.shippingmethodshow(true);
    }

    shippingmethodsave(model: any, isValid: boolean){
      // console.log(model);
        localStorage.setItem("shippingmethod", JSON.stringify(model));
        this.paymentmethodshow(true);
    }

    paymentmethodsave(model: any, isValid: boolean){
       // console.log(model);
        localStorage.setItem("paymentmethod", JSON.stringify(model));
        this.orderreviewshow(true);
      //  this.placeorder();
    }

    placeorder(model:any){
        this.isLoaderActive=true;
        this.billingaddressobject = JSON.parse(localStorage.getItem('billingaddress'));
        this.email = this.billingaddressobject['email'];
        delete this.billingaddressobject['email'];
        this.shippingddressobject = JSON.parse(localStorage.getItem('shippingaddress'));
        this.shippingmethodobject = JSON.parse(localStorage.getItem('shippingmethod'));
        this.paymentmethodobject = JSON.parse(localStorage.getItem('paymentmethod'));
        this.order = {
            "currency_id" : "USD",
            "email" : this.email,
            "billing_address" : this.billingaddressobject,
            "shipping_address" : this.shippingddressobject,
            "shipping_method" : this.shippingmethodobject['shippingmethod'],
            "payment_method" : this.paymentmethodobject['paymentmethod'],
            "items" : this.cartitems
        }

        this._checkoutservice.postOrder(this.order)
            .subscribe(
                data => {
                 console.log('success in posting');
                 this.isLoaderActive=false;
                },
                error => {
                console.log('error in posting');
                this.isLoaderActive=false;
                }
            ); 
          this._router.navigate(['/checkout/success']);
    }
  
   billingaddressshow(){
        this.activebillingaddressclass = true;
        this.activeshipaddressclass = false;
        this.activeshippingmethodclass = false;
        this.activepaymentmethodcalss = false;
        this.activeorderreviewcalss = false;
        this.showbillingaddress = true;
        this.showshippingaddress = false;
        this.showshippingmethod = false;
        this.showpaymentmethod = false;
        this.showorderreview = false;
    }

    shippingaddressshow(enableform : boolean = false){
        if(enableform){
            this.disableshipaddressclass = false;
            this.activebillingaddressclass = false;
            this.activeshipaddressclass = true;
            this.activeshippingmethodclass = false;
            this.activepaymentmethodcalss = false;
            this.activeorderreviewcalss = false;
            this.showbillingaddress = false;
            this.showshippingaddress = true;
            this.showshippingmethod = false;
            this.showpaymentmethod = false;
            this.showorderreview = false;
            this.openshippingaddresstab = true;
        }
    }

    shippingmethodshow(enableform : boolean = false){
         if(enableform){
            this.disableshippingmethodclass = false;
            this.activebillingaddressclass = false;
            this.activeshipaddressclass = false;
            this.activeshippingmethodclass = true;
            this.activepaymentmethodcalss = false;
            this.activeorderreviewcalss = false;
            this.showbillingaddress = false;
            this.showshippingaddress = false;
            this.showshippingmethod = true;
            this.showpaymentmethod = false;
            this.showorderreview = false;
            this.openshippingmethodtab = true;
        }
    }

    paymentmethodshow(enableform : boolean = false){
        if(enableform){
            this.diablepaymetmethodclass = false;
            this.activebillingaddressclass = false;
            this.activeshipaddressclass = false;
            this.activeshippingmethodclass = false;
            this.activepaymentmethodcalss = true;
            this.activeorderreviewcalss = false;
            this.showbillingaddress = false;
            this.showshippingaddress = false;
            this.showshippingmethod = false;
            this.showpaymentmethod = true;
            this.showorderreview = false;
            this.openpaymentmethodtab = true;
        }
    }

     orderreviewshow(enableform : boolean = false){
           if(enableform){
            this.diableorderreviewclass = false;
            this.activebillingaddressclass = false;
            this.activeshipaddressclass = false;
            this.activeshippingmethodclass = false;
            this.activepaymentmethodcalss = false;
            this.activeorderreviewcalss = true;
            this.showbillingaddress = false;
            this.showshippingaddress = false;
            this.showshippingmethod = false;
            this.showpaymentmethod = false;
            this.showorderreview = true;
            this.openorderreviewtab = true;
        }
    }




}