import {Injectable} from "@angular/core";
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Injectable()
export class FormHelper {
  public billingaddressset: Object;
  public shippingaddressset: Object;
  public shippingmethodset: Object;
  public paymentmethodset: Object;
  public cartitems:Object;

   constructor() { }

  mailFormat(control: FormControl): any {
    var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    if (control.value != "" && (!EMAIL_REGEXP.test(control.value))) {
      return { "incorrectMailFormat": true };
    }
    return null;
  }

    phoneFormat(control: FormControl): any {
    var PHONE_REGEXP = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
    if (control.value != "" && (!PHONE_REGEXP.test(control.value))) {
      return { "incorrectPhoneFormat": true };
    }
    return null;
  }

  clearcheckoutform(){
    delete this.billingaddressset;
    delete this.shippingaddressset;
    delete this.shippingmethodset;
    delete this.paymentmethodset;
  }

  setcartitems(model:any){
    this.cartitems = model;
  }

  getcartitems(){
    return this.cartitems;
   // return JSON.parse(localStorage.getItem('cartitems'))
  }

  setbillingaddress(model:any){
    this.billingaddressset = model;
  }

  getbillingaddress(){
     return this.billingaddressset;
  //  return JSON.parse(localStorage.getItem('billingaddress'))
  }

   setshippingaddress(model:any){
    this.shippingaddressset = model;
  }

  getshippingaddress(){
   return this.shippingaddressset;
    //return JSON.parse(localStorage.getItem('shippingaddress'))
  }

   setshippingmethod(model:any){
    this.shippingmethodset = model;
  }

  getshippingmethod(){
    return this.shippingmethodset;
   //  return JSON.parse(localStorage.getItem('shippingmethod'))
  }

   setpaymentmethod(model:any){
    this.paymentmethodset = model;
  }

  getpaymentmethod(){
    return this.paymentmethodset;
     // return JSON.parse(localStorage.getItem('paymentmethod'))
  }

}