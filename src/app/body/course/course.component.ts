import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Course } from './models/course';
import { AppDataService } from 'src/app/service/data-service/app-data.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courseData: Course[] = [];
  skillCourse: Course[] = [];
  bootCourse: Course[] = [];
  isCourse = false;
  hider1 = true;
  hider2 = true;
  constructor(private appDataService: AppDataService) {

  }

  ngOnInit() {

    this.appDataService.getCourses().subscribe((courses: Course[]) => {
      this.courseData = courses;

      this.courseData.forEach((course) => {
        if (course.courseType === 'SkillBased') {
          this.skillCourse.push(course);
        } else if (course.courseType === 'BootCamp') {
          this.bootCourse.push(course);
        }
        this.isCourse = true;

      });
    }, (error) => console.log('Some error occured!'));

  }

}
