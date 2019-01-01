import { Component, OnInit } from '@angular/core';
import {TestimonyModal} from './TestimonyModal';

@Component({
  selector: 'app-testimony',
  templateUrl: './testimony.component.html',
  styleUrls: ['./testimony.component.css']
})
export class TestimonyComponent implements OnInit {
lists:TestimonyModal[]=[];

  constructor() { }

  ngOnInit() {
    var test1:TestimonyModal={name:'Suchismit Gupta',company:'GENPACT',linkedin:'https://in.linkedin.com/in/suchismit-gupta-20252139/?ppe=1',testimony:'It is the best institute for analytics . The study material, mock test and industry exposure are really helpful to get into analytics both for fresher and experienced. I have recently placed in Genpact and would like to thanks faculty for their continuous guideline'}
    var test2:TestimonyModal={name:'Ramkrushna Panda',company:'Aussie',linkedin:'https://in.linkedin.com/in/ramkrushna/?ppe=1',testimony:'I think I came to the right place, doubts get cleared fast and precise. Looking forward for a goodtime in the future even with Study Analytics. Training will be helpful for certification and job'}
    var test3:TestimonyModal={name:'Saurabh Sinha',company:'Amazon',linkedin:'https://in.linkedin.com/in/saurabh-sinha-03494919/?ppe=1',testimony:'It was a great session regarding banking. Learnt new concepts and process involved in banking. The instructor has a good knowledge and has explained and cleared all the doubts'}
    this.lists.push(test3);
    this.lists.push(test2);
    this.lists.push(test1);
  }

}
