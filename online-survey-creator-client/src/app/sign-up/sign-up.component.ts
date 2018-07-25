import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from '../users/users-service.service';
import { SurveyUser } from '../users/survey-user.model';
import { Router } from '@angular/router';
import { AuthService } from '../login/auth-service.service';
import { HttpHeaders } from '@angular/common/http';
import { LoginComponent } from '../login/login.component';
import { EmailService } from '../email-service.service';

@Component({
  selector: 'survey-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  error: Error;

  constructor(public surveyUserService: UsersService, private authService: AuthService, private router: Router, private emailService: EmailService) { }

  ngOnInit() {
  }

  onSignUp(ngForm: NgForm) {
    let userToSave = new SurveyUser(ngForm.value.username, ngForm.value.password, ngForm.value.email, false);
        // console.log(userToSave);
    userToSave = JSON.parse(JSON.stringify(userToSave));
    // console.log(userToSave);
    const base64Credential = btoa("admin" + ':' + "admin");
    const headers = new HttpHeaders({
      authorization: 'Basic ' + base64Credential
    });
    this.surveyUserService.registerUser(userToSave, headers).subscribe(
         any => {
           this.authService.login(userToSave.username, userToSave.password)
            .subscribe(any => {
              this.router.navigate(["/home"])
              this.emailService.sendEmail(userToSave).subscribe(),
              (error) => this.error = error
            })
        },
        error => this.error = error
    );

    
  }
}
