import {Injectable, Inject} from '@angular/core';
import  {HttpClient, HttpHeaders, HttpParams}  from '@angular/common/http';
import {Address} from './address.interface';


@Injectable()
export class AddressSearchService {

    private _service_url = "http://localhost:8084";

 constructor( private  _http : HttpClient){
console.log('Initialize the AddressSearchService component..');
}

getDerivedAddress( resource : string, qParams:string){
    console.log('Component AddressSearchService --> getDerivedAddress() method..');
    let resourceUrl;
    let params = qParams ? {params : new HttpParams().set('address', qParams)} :{};
    if (resource!= 'undefined' && resource !=null){
        resourceUrl = this._service_url +'/'+resource
    }

    console.log('resourceUrl: ',resourceUrl);

    return this._http.get<Address>(resourceUrl, params);
}



}
