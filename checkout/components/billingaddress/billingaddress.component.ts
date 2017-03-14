import { Component,Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {CheckoutService} from "../../services/checkout.service";
import {FormHelper} from "../../helper/form.helper";



@Component({
    moduleId: module.id,
    selector: 'billingaddress',
    templateUrl: 'billingaddress.html'
})
export class BillingaddressComponent {

  public billingForm: FormGroup;
   isLoaderActive: boolean = false;
  
  @Output() billingaddressdetails = new EventEmitter();
  constructor(private _fb: FormBuilder, private _formHelper: FormHelper, private _checkoutservice: CheckoutService){
    // console.log(this.childNav);
  }

   ngOnInit() {  
     this.createbillingForm();
     if(this._formHelper.getbillingaddress()){
       console.log(this._formHelper.getbillingaddress());
       var billingaddressvalue = this._formHelper.getbillingaddress();
       this.billingForm.setValue(billingaddressvalue);
     }
   }

   billingaddresssubmit(model: any, isValid: boolean){
       this.isLoaderActive = true;
      var billingdata =  JSON.parse(JSON.stringify(model));
       billingdata.street = [model.street];
       billingdata.saveInAddressBook = 1;

        this._checkoutservice.postbillingaddress(billingdata).subscribe(
                data => {
                 console.log('success in posting');
                 this.isLoaderActive=false;
                  this._formHelper.setbillingaddress(model);
                 this.billingaddressdetails.emit(model);
                },
                error => {
                console.log('error in posting');
                this.isLoaderActive=false;
                }
            ); 

   /*  this._formHelper.setbillingaddress(model);
      this.billingaddressdetails.emit(model); */
   }

    createbillingForm(){
      this.billingForm = this._fb.group({
            email: ['', Validators.compose([Validators.required, this._formHelper.mailFormat])],
            firstname: ['', [<any>Validators.required]],
            lastname: ['', [<any>Validators.required]],
            street: ['', [<any>Validators.required]],
            city: ['', [<any>Validators.required]],
            company: [''],
            region: ['', [<any>Validators.required]],
            postcode: ['', [<any>Validators.required]],
            country_id: ['', [<any>Validators.required]],
            telephone: ['',Validators.compose([Validators.required,this._formHelper.phoneFormat])],
            usebillingasshipping: [true],
        });
   }

}