import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
// import { } from '@types/googlemaps';
import { AppDataService } from '../service/data-service/app-data.service';
import { Lead } from '../registration/Lead';

@Component({
  selector: 'app-registration-footer',
  templateUrl: './registration-footer.component.html',
  styleUrls: ['./registration-footer.component.css']
})
export class RegistrationFooterComponent implements OnInit {
  @ViewChild('f') signupForm:NgForm;
  // isStudent=['Student', 'Professional'];

    constructor(private appDataService:AppDataService) { }
  
    ngOnInit() {
     }
  
    onSubmit(){
     console.log(this.signupForm.value.username+"Akshay");
     var lead:Lead={
      
      "name":this.signupForm.value.username,
      
      "mobile":this.signupForm.value.contact,
      "email":this.signupForm.value.email}
      this.signupForm.reset();
      this.appDataService.postLead(lead).subscribe((response)=>console.log(response),(error)=>console.log(error));
    }
  }