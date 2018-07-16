import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth-service.service';

@Component({
  selector: 'survey-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: string = 'username';

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
