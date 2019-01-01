import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'study-analytics-webclient';
  hide = true;
  constructor(private route: Router) { }
  ngOnInit() {
    
   console.log(this.route.url);
  }
}
