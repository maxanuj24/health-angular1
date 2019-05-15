import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = "http://localhost:5000/patients";
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }
  baseUrl:String ="http://localhost:8000";
  msg: String ="";
  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  getPatients(): Observable<any> {
    // TODO: Make request to API to get patients
    return this.http.get(this.baseUrl+"/patient");
  }

  getPatient(id:string):any {
    // TODO: Make request to API to get patient by id
    console.log("asdfasd----------------------",id);   
   return this.http.get(this.baseUrl+"/patient/"+id+'');//.subscribe((response)=>console.log("GET METHOD"));
  }

    addPatient(patient): Observable<any> {
      return this.http.post(this.baseUrl+"/patient",patient);
    //   return this.http.post<any>(endpoint, JSON.stringify(patient), httpOptions).pipe(
    //    tap((patient) => console.log(`added patient w id ${patient.id}`)),
    //    catchError(this.handleError<any>('addPatient'))
    //  );
    
  }

  updatePatient(patient,id):any
  {

   console.log("patient._id",id); 
  return this.http.put(this.baseUrl+"/patient/"+id+'',patient);
  }

   deletePatient(id:String){
    console.log(id+'34334343');
      this.http.delete(this.baseUrl+'/patient/'+id).subscribe((response)=>console.log("deleted"));
    }






/*
  updatePatient(id, patient): Observable<any> {
    // TODO: Make request to API to update patient by id
  }*/

 








//  deletePatient(id): Observable<any> {
//     TODO: Make request to API to delete patient by id  app.delete('/patient/:patientId', patient.delete);
//    msg: String:

//   this.msg = return this.http.delete(this.baseUrl+'/patient/'+id);
//  this.msg= this.http.delete(this.baseUrl+'/patient/'+id).subscribe((response)=>console.log("deleted"));
// }   
   
  

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }


 
}
