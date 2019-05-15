import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-health';

  name:String;
  password:String;
  constructor(private router: Router) { 
      }
  // loginPatient(){
  //     console.log(this.name);
  //        if(this.name==="admin" && this.password === "admin")
  //        {
  //         this.router.navigate(['list-patients']);
  //       }
  //       else
  //       {
  //         this.router.navigate(['app.component'])
  //       }
  // }

}

