import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesService } from './Services/services.service';
import { CourseService } from './Services/course.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './home/banner/banner.component';
import { PopularComponent } from './home/popular/popular.component';
import { ServicesComponent } from './home/services/services.component';
import { TestimonyComponent } from './home/testimony/testimony.component';
import { ContactUsComponent } from './home/contact-us/contact-us.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RoutingModule } from './routing.module';
import { LoginComponent } from './login/login.component';

// Defining Routes
// const routes: Routes = [
//   // {path: '', redirectTo: 'home', pathMatch: 'full'},
//   {path: '', component: HomeComponent},
//   {path: 'home', component: HomeComponent},
//   {path: 'about', component: AboutComponent},
//   {path: 'contact', component: ContactComponent},
//   {path: 'courses', component: CoursesComponent},
//   // {path: 'courses/course/:id', component: CourseDetailComponent},
//   {path: 'courses', children: [
//     {path: 'course/:id', component: CourseDetailComponent},
//     { path: 'popular', component: PopularComponent}
//   ]},
//   {path: '**', component: NotFoundComponent},
// ];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BannerComponent,
    PopularComponent,
    ServicesComponent,
    TestimonyComponent,
    ContactUsComponent,
    AboutComponent,
    ContactComponent,
    CoursesComponent,
    CourseDetailComponent,
    NotFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [ServicesService, CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
