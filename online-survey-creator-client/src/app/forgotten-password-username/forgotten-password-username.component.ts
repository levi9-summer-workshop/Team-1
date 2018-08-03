import { Component, OnInit } from '@angular/core';
import { NgForm } from '../../../node_modules/@angular/forms';
import { HttpHeaders } from '../../../node_modules/@angular/common/http';
import { EmailService } from '../email-service.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'survey-forgotten-password-username',
  templateUrl: './forgotten-password-username.component.html',
  styleUrls: ['./forgotten-password-username.component.css']
})
export class ForgottenPasswordUsernameComponent implements OnInit {
  base64Credential = btoa("admin" + ':' + "admin");
  headers = new HttpHeaders({
      authorization: 'Basic ' + this.base64Credential
    });
    message = {
      bootstrapClassAlert: 'alert-success',
      text: 'We send you an email with your credentials',
      animateIn:'',
      animateOut:'',
      visibility: 'hidden',
      footerMessage: 'redirecting to login page.'

    };
    error: Error;

  constructor(private emailService: EmailService, private router: Router) { }

  ngOnInit() {
  }

  onLogin(form: NgForm, headers: HttpHeaders) {
    const email = form.value.email;
    this.emailService.sendForgottenEmail(email, this.headers).subscribe(
      any  => { this.message.animateIn = 'fadeIn';
      this.message.visibility = 'visible';
      setTimeout(() => {
        this.message.animateOut = 'fadeOut';
        this.message.visibility ='hidden';
        this.router.navigate(["/login"])
      }, 3000);
      },
    error => this.error = error);
}
}
