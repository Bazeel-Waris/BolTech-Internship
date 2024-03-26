import { Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Resolve, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.services";
import { CourseService } from "./course.service";
import { Course } from "../Models/course";

@Injectable({
     providedIn: 'root'
})
export class AuthGuardService implements CanActivate, Resolve<Course[]>{
     authService: AuthService = inject(AuthService);
     router: Router = inject(Router);

     courseService: CourseService = inject(CourseService);

     canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
          
          if(this.authService.isAuthenticated()) {
               return true;
          } else {
               this.router.navigate(['/login']);
               return false;
          }
          
     }

     resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Course[] | Observable<Course[]> | Promise<Course[]> {
          return this.courseService.getAllcourses();          
     }
}