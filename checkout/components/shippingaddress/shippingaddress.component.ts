import { Component,Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {FormHelper} from "../../helper/form.helper";



@Component({
    moduleId: module.id,
    selector: 'shippingaddress',
    templateUrl: 'shippingaddress.html'
})
export class ShippingaddressComponent {

  public shippingForm: FormGroup;
  
  @Output() shippingaddressdetails = new EventEmitter();
  constructor(private _fb: FormBuilder, private _formHelper: FormHelper){
    // console.log(this.childNav);
  }

   ngOnInit() {  
     this.createshippingForm();
     if(this._formHelper.getshippingaddress()){
      var shippingaddressvalue = this._formHelper.getshippingaddress();
        this.shippingForm.setValue(shippingaddressvalue);
     }
   }

   shippingaddresssubmit(model: any, isValid: boolean){
     this._formHelper.setshippingaddress(model);
      this.shippingaddressdetails.emit(model);
   }

   createshippingForm(){
      this.shippingForm = this._fb.group({
            firstname: ['', [<any>Validators.required]],
            lastname: ['', [<any>Validators.required]],
            street: ['', [<any>Validators.required]],
            city: ['', [<any>Validators.required]],
            company: [''],
            region: ['', [<any>Validators.required]],
            postcode: ['', [<any>Validators.required]],
            country_id: ['', [<any>Validators.required]],
            telephone: ['',Validators.compose([Validators.required,this._formHelper.phoneFormat])],
        });
   }

}