
import {DerivedAddress} from './derived-address.interface'

export interface Address{

   sourceAddress : String ;
	 formatedForNomintimAddress : String;
	 derivedAddresses : DerivedAddress[];
	 error : String;
}