import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name: string;
  password: string;
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

     loginPatient()
     {
      console.log(this.name);
         if(this.name==="admin" && this.password === "admin")
         {
          this.router.navigate(['list-patients']);
        }
        else
        {
          this.router.navigate(['login'])
        }
  }
}
