import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
// import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import { checkoutRouting } from './checkout.routing'; 
import { CommonsModule } from '../common/common.module';
import {FormHelper} from "./helper/form.helper";
import {CheckoutService} from "./services/checkout.service";



/* customer module components import i.e. login,register */
import { CheckoutComponent }  from './components/checkout/checkout.component';
import { BillingaddressComponent }  from './components/billingaddress/billingaddress.component';
import { ShippingaddressComponent }  from './components/shippingaddress/shippingaddress.component';
import { ShippingmethodComponent }  from './components/shippingmethod/shippingmethod.component';
import { PaymentmethodComponent }  from './components/paymentmethod/paymentmethod.component';
import { OrderreviewComponent }  from './components/orderreview/orderreview.component';
import { CheckoutsuccessComponent }  from './components/success/checkoutsuccess.component';

@NgModule({
  imports:      [ CommonsModule, checkoutRouting],
  exports: [],
  declarations: [
                  CheckoutComponent,
                  CheckoutsuccessComponent,
                  BillingaddressComponent,
                  ShippingaddressComponent,
                  ShippingmethodComponent,
                  PaymentmethodComponent,
                  OrderreviewComponent
                ],
  providers:    [FormHelper,CheckoutService]
})
export class CheckoutModule { }