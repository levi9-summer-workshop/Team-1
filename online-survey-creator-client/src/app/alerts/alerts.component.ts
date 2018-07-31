import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'survey-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {
  @Input() message: {bootstrapClassAlert, animateIn, animateOut, text};
  
  constructor() { }

  ngOnInit() {
  }

}
