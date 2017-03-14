import { Component,Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {FormHelper} from "../../helper/form.helper";



@Component({
    moduleId: module.id,
    selector: 'shippingmethod',
    templateUrl: 'shippingmethod.html'
})
export class ShippingmethodComponent {

  public shippingmethodForm: FormGroup;
  
  @Output() shippingmethoddetails = new EventEmitter();
  constructor(private _fb: FormBuilder, private _formHelper: FormHelper){
    // console.log(this.childNav);
  }

   ngOnInit() {  
     this.createshippingmethodForm();
     if(this._formHelper.getshippingmethod()){
      var shippingmethodvalue = this._formHelper.getshippingmethod();
        this.shippingmethodForm.setValue(shippingmethodvalue);
     }
   }

   shippingmethodsubmit(model: any, isValid: boolean){
     console.log(model);
     this._formHelper.setshippingmethod(model);
      this.shippingmethoddetails.emit(model);
   }

   createshippingmethodForm(){
        this.shippingmethodForm = this._fb.group({
            shippingmethod: ['freeshipping_freeshipping',[<any>Validators.required]],
        });
   }

}