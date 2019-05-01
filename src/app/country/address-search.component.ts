import {Component} from '@angular/core';
import {Address} from './address.interface';
import {AddressSearchService} from './country.service';
import {DerivedAddress} from './derived-address.interface'

@Component({
    selector:'address-search',
    templateUrl:'./address-search.component.html'
})

export class AddressSearchComponent{

    returnedAddresses : Address;
    derivedAddresses : DerivedAddress[];
    bestMatchAddr : any;
    address : string;

    constructor( private _cdService : AddressSearchService ){
console.log('Initialize the App Component..');
    }
    
    doSearch(address :string ){
        console.log('Component AddressSearchComponent --> method doSearch().. ', address);

   this._cdService.getDerivedAddress('countries',address).subscribe(
       (res : Address) => {
   console.log('Response Retrieved..', res);
                  this.returnedAddresses =  res; //{... res};
                 // Get the first 5 addresses.
                  this.derivedAddresses = this.returnedAddresses.derivedAddresses.slice(0,5);

                  this.bestMatchAddr = this.derivedAddresses.length >0 ?  this.derivedAddresses [0] : {};
                  
       }),
       (error) =>{
           console.log('error thrown');
           console.log(error.status, error.statusText, error.message);
           console.log(error);
       }


    }

    doClear(){
        console.log('Component AddressSearchComponent --> method clear()');
        this.address='';
       this.returnedAddresses = null;
        this.derivedAddresses = null;
       this.bestMatchAddr = null;
    }
}