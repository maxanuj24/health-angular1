import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent implements OnInit {

  id: any;
  patient: any;
  firstName: '';
  lastName: '';
  age: '';
  gender: '';
  address: '';
  phone: '';
  consultedBy: '';
  complains: '';
  prescription: '';
  results: '';

  constructor(private route: ActivatedRoute, private patientService: PatientService, private router: Router) { 
    this.route.params.subscribe(params => this.id = params['id']);
  }

  ngOnInit() {
    //getPatient(this.id);
    console.log("init Id",this.id);


    
  this.patientService.getPatient(this.id).subscribe((data) => {
      console.log(data._id);
      console.log(data);
      this.patient =data;
     // this.patient=data;
      this.firstName = data.firstName;
      this.lastName = data.lastName;
      this.age = data.age;
      this.gender = data.gender;
      this.address = data.address;
      this.phone = data.phone;
      this.consultedBy = data.consultedBy;
      this.complains = data.complains;
      this.prescription = data.prescription;
      this.results = data.results;
   })  
}

openDialog(): void { 
     //this.firstName = this.firstName;
   // console.log('First Name: ', this.firstName);
   
  }
// updatePatient(){
//   this.patientService.updatePatient(this.patient).subscribe((data)=>{
//       console.log("data",data);
//        this.patient=data;
//       this.firstName = data.firstName;
//       console.log(this.firstName);
//       this.lastName = data.lastName;
//       this.age = data.age;
//       this.gender = data.gender;
//       this.address = data.address;
//       this.phone = data.phone;
//       this.consultedBy = data.consultedBy;
//       this.complains = data.complains;
//       this.prescriptions = data.prescription;
//       this.results = data.results;
//   });
// }

  getPatient(id:string) {
   this.patientService.getPatient(id).subscribe((data) => {
      console.log(data.patient.id);
     // this.patient=data;
      this.firstName = data.patient.firstName;
      this.lastName = data.patient.lastName;
      this.age = data.patient.age;
      this.gender = data.patient.gender;
      this.address = data.patient.address;
      this.phone = data.patient.phone;
      this.consultedBy = data.patient.consultedBy;
      this.complains = data.patient.complains;
   })
  }

  updatePatient(): void {
    let patient = {
      firstName: this.firstName,
      lastName:  this.lastName,
      age: this.age,
      gender: this.gender,
      address: this.address,
      phone: this.phone,
      consultedBy: this.consultedBy,
      complains: this.complains,
      results: this.results,
      prescription: this.prescription
    }
     console.log(this.firstName);
     console.log("patient  --------",patient);
    this.patientService.updatePatient(patient,this.id).subscribe((data)=>{ 
      this.router.navigate(['/list-patients']);
      
       }, (err) => {
       console.log(err);
       })
     // console.log("data",data);
  }
    // TODO: make request to update patient, redirect to patient list on success this.patientService.addPatient(this.newPatient).subscribe((response) => {
     // this.router.navigate(['/list-patients']);
  //  }, (err) => {
//console.log(err);
 //   })
    //redirectTo('/list-patients');
 }


