import { NgModule } from "@angular/core";

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PopularComponent } from './home/popular/popular.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from "./login/login.component";
import { CheckoutComponent } from "./checkout/checkout.component";
// import { AuthGuardService } from "./Services/authguard.services";
import { canActivate, canActivateChild, resolve} from "./auth.guard";

// Defining Routes
const routes: Routes = [
     // {path: '', redirectTo: 'home', pathMatch: 'full'},
     {path: '', component: HomeComponent},
     {path: 'home', component: HomeComponent},
     {path: 'about', component: AboutComponent},
     {path: 'contact', component: ContactComponent},
     // {path: 'courses/course/:id', component: CourseDetailComponent},
     {path: 'courses', component: CoursesComponent, resolve: {courses: resolve} },
     {path: 'courses', canActivateChild: [canActivateChild], children: [
          {path: 'course/:id', component: CourseDetailComponent},
          { path: 'popular', component: PopularComponent},
          { path: 'checkout', component: CheckoutComponent},
     ]},
     {path: 'login', component: LoginComponent},
     {path: '**', component: NotFoundComponent},
];
      
@NgModule({
        imports: [
                RouterModule.forRoot(routes, {enableTracing: true}), // Defining that this route is available for whole Angular Application, not for specific Module
        ],
        exports: [RouterModule]
})

export class RoutingModule {

}