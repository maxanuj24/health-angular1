import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routingModule } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// TODO: Add http client module

import { AppComponent } from './app.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { ListPatientsComponent } from './list-patients/list-patients.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { SearchbyfirstnamePipe } from './searchbyfirstname.pipe';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPatientComponent,
    ListPatientsComponent,
    UpdatePatientComponent,
    SearchbyfirstnamePipe,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    routingModule,
    FormsModule,
    // TODO: Add http cliet module here...
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
