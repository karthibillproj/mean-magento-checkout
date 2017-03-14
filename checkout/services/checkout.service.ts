import {Injectable} from "@angular/core";
import {Http,Headers,Response} from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import {Observable} from 'rxjs/Rx';

@Injectable()
export class CheckoutService{

    constructor(private _http: Http){

    }

    getcartitems(customer_token : string){
        var headers = new Headers();
        headers.append('Content-Type','application/json')
        headers.append('customer_token',customer_token)
        return this._http.get(
                            'api/dataservice/cart',
                            {headers:headers}
                            )
            .map(res=>res.json())
            .catch(this.handleError)
            ;
    }

    postOrder(order:any){
        var headers = new Headers();
        headers.append('Content-Type','application/json');
        
        return this._http.post(
                            'api/dataservice/createorder',
                            JSON.stringify(order),
                            {headers:headers}
                            )
            .map(res=>res.json())
            .catch(this.handleError)
            ; 
    }

    postbillingaddress(billingdata : any){
         var headers = new Headers();
        headers.append('Content-Type','application/json');
        
        return this._http.post(
                            'api/dataservice/magentocartbilling',
                            JSON.stringify(billingdata),
                            {headers:headers}
                            )
            .map(res=>res.json())
            .catch(this.handleError)
            ; 
    }
     handleError(error:Response){
        return Observable.throw(error || "Server error")
    }

    getcountries(){
        var headers = new Headers();
        headers.append('Content-Type','application/json');
        return this._http.get('http://localhost/api/country.json',{headers:headers})
        .map(res=>res.json())
        .catch(this.handleError);
    }

 
}
