import { Component, OnInit } from '@angular/core';
import { AppDataService } from 'src/app/service/data-service/app-data.service';
import { Course } from '../models/course';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courseData:Course[]=[];
  skillCourse:Course[]=[];
  bootCourse:Course[]=[];
  constructor(private appDataService: AppDataService){
    
  } 
  
  ngOnInit() {
    this.appDataService.getCourses().subscribe((courses:Course[])=>{
    this.courseData=courses;    
    this.courseData.forEach((course)=>
    {
      if(course.courseType==='SkillBased')
      {
        this.skillCourse.push(course);
      }
      else if(course.courseType==='BootCamp')
      {
        this.bootCourse.push(course);
      }
      
    
    })}, (error)=>console.log("Some error occured!"));
   
  }
  
}