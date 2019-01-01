import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NavService } from '../navbar/nav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements  OnInit {

  navLinks: Array<{ link: String, menu: Array<{ name: string, id: string}>}>;
collapse = true;
  constructor(private navService: NavService) {
  }

  ngOnInit() {
    this.navLinks = this.navService.navLinks;
  }


 
}
