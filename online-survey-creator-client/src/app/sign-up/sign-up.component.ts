import { Component, OnInit } from '@angular/core';
import { NgForm } from '../../../node_modules/@angular/forms';
import { UsersService } from '../users/users-service.service';
import { SurveyUser } from '../users/survey-user.model';
import { Router } from '../../../node_modules/@angular/router';
import { AuthService } from '../login/auth-service.service';
import { HttpHeaders } from '../../../node_modules/@angular/common/http';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'survey-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  error: Error;

  constructor(public surveyUserService: UsersService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSignUp(ngForm: NgForm) {
    let userToSave = new SurveyUser(null,ngForm.value.username, ngForm.value.password, ngForm.value.email, false);
        console.log(userToSave);
    userToSave = JSON.parse(JSON.stringify(userToSave));
    console.log(userToSave);
    const base64Credential = btoa("user" + ':' + "user");
    const headers = new HttpHeaders({
      authorization: 'Basic ' + base64Credential
    });
    this.surveyUserService.registerUser(userToSave, headers).subscribe(
         any => {
           this.authService.login(userToSave.username, userToSave.password)
            .subscribe(any =>{
              this.router.navigate(["/home"]),
              (error) => this.error = error
            })
        }
    );

    
  }
}
