import { Component,Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {FormHelper} from "../../helper/form.helper";



@Component({
    moduleId: module.id,
    selector: 'paymentmethod',
    templateUrl: 'paymentmethod.html'
})
export class PaymentmethodComponent {

  public paymentmethodForm: FormGroup;
  
  @Output() paymentmethoddetails = new EventEmitter();
  constructor(private _fb: FormBuilder, private _formHelper: FormHelper){
    // console.log(this.childNav);
  }

   ngOnInit() {  
     this.createpaymentmethodForm();
     if(this._formHelper.getpaymentmethod()){
      var paymentmethodvalue = this._formHelper.getpaymentmethod();
        this.paymentmethodForm.setValue(paymentmethodvalue);
     }
   }

   paymentmethodsubmit(model: any, isValid: boolean){
     console.log(model);
     this._formHelper.setpaymentmethod(model);
      this.paymentmethoddetails.emit(model);
   }

   createpaymentmethodForm(){
        this.paymentmethodForm = this._fb.group({
            paymentmethod: ['checkmo',[<any>Validators.required]],
        });
   }

}