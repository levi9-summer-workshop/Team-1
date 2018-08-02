import { Component, OnInit } from '@angular/core';
import { NgForm } from '../../../node_modules/@angular/forms';
import { HttpHeaders } from '../../../node_modules/@angular/common/http';
import { EmailService } from '../email-service.service';

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
    error: Error;

  constructor(private emailService: EmailService) { }

  ngOnInit() {
  }

  onLogin(form: NgForm, headers: HttpHeaders) {
    const email = form.value.email;
    this.emailService.sendForgottenEmail(email, this.headers).subscribe();
}
}
