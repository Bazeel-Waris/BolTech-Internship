import { inject } from "@angular/core"
import { AuthService } from "./Services/auth.services"
import { Router } from "@angular/router";
import { CourseService } from "./Services/course.service";

export const canActivate = () => {

     const authService = inject(AuthService);
     const router = inject(Router);

     if(authService.isAuthenticated()) {
          return true;
     } else {
          router.navigate(['/login']);
          return false;
     }
     
}

export const canActivateChild = () => {
     canActivate();
}

export const resolve = () => {
     
     const courseService = inject(CourseService);
     return courseService.getAllcourses();  

}