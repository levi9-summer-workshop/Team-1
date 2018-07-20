import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../login/auth-service.service';

@Component({
  selector: 'library-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  

  constructor(private router: Router, public authService: AuthService) { }

  ngOnInit() {
  }

  redirect(redirectPath: string) {
    this.router.navigate([redirectPath]);
  }

}
