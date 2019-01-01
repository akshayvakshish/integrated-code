import { Course } from "../service/data-service/models/course";
import { Injectable } from "@angular/core";
import { AppDataService } from "../service/data-service/app-data.service";

@Injectable({
  providedIn: 'root'
})
export class NavService {
  courses:any[]=[];
  navLinks: Array<{ link: String, menu: Array<{ name: string, id: string }> }> = [];
  menu: Array<{ name: string, id: string }> = [];

  constructor(private appDataService: AppDataService) {
    this.appDataService.getCourses().subscribe((courses)=>
   { this.courses=courses;
    this.courses.forEach((link) => {
      this.menu.push({name: link.courseName, id: link.id.toString()});
    });
    this.navLinks.push({ link: 'Courses', menu: this.menu });
    this.navLinks.push({ link: 'Corporate', menu: [] });
    this.navLinks.push({ link: 'Testimonials', menu: [] });
    this.navLinks.push({ link: 'Contact-Us', menu: [] });
    this.navLinks.push({ link: 'Blog', menu: [] });
   }
    , (error)=>console.log("Some errorssss occured!"));
    
    
  }
}