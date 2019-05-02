import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule, MatTableModule,MatToolbar} from '@angular/material';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ReactiveFormsModule} from "@angular/forms";


import { AppComponent } from './app.component';
import {AddressSearchComponent} from '../app/country/address-search.component';
import {AddressSearchService} from '../app/country/country.service'
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    AddressSearchComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MDBBootstrapModule,
    MatTableModule,
    MatToolbar,
    ReactiveFormsModule
  ],
  providers: [AddressSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
