import { Component,Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {FormHelper} from "../../helper/form.helper";



@Component({
    moduleId: module.id,
    selector: 'orderreview',
    templateUrl: 'orderreview.html'
})
export class OrderreviewComponent {

  public billingaddress:Object;
  public shippingaddress:Object;
  public shippingmethod:Object;
  public paymentmethod:Object;
  public cartitems:Object;

  @Output() createorder = new EventEmitter();
  constructor(private _fb: FormBuilder, private _formHelper: FormHelper){
    // console.log(this.childNav);
  }

  ngOnInit() {  
    this.cartitems = this._formHelper.getcartitems();
    this.billingaddress = this._formHelper.getbillingaddress();
    this.shippingaddress = this._formHelper.getshippingaddress();
    this.shippingmethod = this._formHelper.getshippingmethod();
    this.paymentmethod = this._formHelper.getpaymentmethod();
  }

  placeorderclick(){
     this.createorder.emit(1);
  }

}