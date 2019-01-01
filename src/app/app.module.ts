import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NgbdTooltipContainer } from './tooltip-container/tooltip-container.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { LoaderComponent } from './loader/loader.component';
import { HeaderImageComponent } from './body/header-image/header-image.component';
import { FeaturedCoursesComponent } from './body/featured-courses/featured-courses.component';
import { SearchBarComponent } from './body/search-bar/search-bar.component';
import { NavDropdownComponent } from './navbar/nav-dropdown/nav-dropdown.component';
import { Routes, RouterModule } from '@angular/router';
import { CourseComponent } from './body/course/course.component';
import { CourseListComponent } from './body/course-list/course-list.component';
import { CoursesComponent } from './body/course/list-of-courses/courses.component';
import { CarouselComponent } from './header-body/carousel/carousel.component';
import { CourseCardComponent } from './body/course/list-of-courses/course-card/course-card.component';
import { ContactUsComponent } from './route-pages/contact-us/contact-us.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { RegistrationComponent } from './registration/registration.component';
import { RegistrationFooterComponent } from './registration-footer/registration-footer.component';
import { ServiceInterceptor } from './interceptors/service-interceptor';
import { TestimonialComponent } from './testimonial/testimonial.component';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header-body/header.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { BarGraphsComponent } from './introduction/bar-graphs/bar-graphs.component';
import { GraphsComponent } from './introduction/graphs/graphs.component';
import { PieChartsComponent } from './introduction/pie-charts/pie-charts.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { TestimonyComponent } from './testimony/testimony.component';




const appRoutes: Routes = [
  {
    path: '', component: IntroductionComponent
  }, {
    path: 'courselist', component: CourseListComponent
  }, {
    path: 'data-science-courses-in-bangalore', component: CourseComponent
  }, {
    path: 'courses/:id', component: CarouselComponent
  }, {
    path: 'data-science-courses-in-bangalore/contact-us', component: ContactUsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NgbdTooltipContainer,
    NavbarComponent,
    FooterComponent,
    BodyComponent,
    LoaderComponent,
    
    HeaderImageComponent,
    FeaturedCoursesComponent,
    SearchBarComponent,
    NavDropdownComponent,
    CourseComponent,
    CourseListComponent,
    CoursesComponent,
    CourseCardComponent,
    CarouselComponent,
    ContactUsComponent,
    RegistrationComponent,
    RegistrationFooterComponent,
    HeaderComponent,
    CarouselComponent,
    IntroductionComponent,
    TestimonialComponent,
    
    BarGraphsComponent,
    GraphsComponent,
    PieChartsComponent,
    TestimonyComponent,
    

  ],
  imports: [
    ChartsModule,BrowserModule, NgbModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(appRoutes), AngularFontAwesomeModule, HttpClientModule
  ],
  providers: [ServiceInterceptor,
    {provide: HTTP_INTERCEPTORS, useClass: ServiceInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
