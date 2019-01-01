import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  

  constructor() { }

  ngOnInit() {
    let height='';
    let width='';
    let paddingTop='2%';
    let paddingBottom='2%';
    if(window.innerWidth<600){
      height='32';
      width='58';
      paddingTop='2%'
      paddingBottom='4%';

      console.log("i am currently on mobile screen!");
    }
    var companies= document.getElementById('company');
    let html='<div>';
    let div='';
    for(let i=0;i<24;i++){
      
      if(i==0){
        html+="<div class='row' style='padding-top:"+paddingTop+"; padding-bottom:"+paddingBottom+"'><div class='col-md-2 col-4'><img src='/src/assets/Company_logos/analytics-jobs-at-"+(i+1)+".png'"+" height="+height+" width="+width+"></div>"
      }
      else if(i%6==0 && i!=0){
        html+="</div><div class='row' style='padding-top:"+paddingTop+"; padding-bottom:"+paddingBottom+"'><div class='col-md-2 col-4'><img src='/src/assets/Company_logos/analytics-jobs-at-"+(i+1)+".png'"+" height="+height+" width="+width+"></div>"
      }
      else{
      html+="<div class='col-md-2 col-4'><img src='/src/assets/Company_logos/analytics-jobs-at-"+(i+1)+".png'"+" height="+height+" width="+width+"></div>";
      }

    }
    html+="</div>";
    console.log(html);
    companies.innerHTML=html;
  }


}
