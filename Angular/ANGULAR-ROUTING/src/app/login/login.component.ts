import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { AuthService } from '../Services/auth.services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
     @ViewChild('username') username: ElementRef;
     @ViewChild('password') password: ElementRef;

     authService: AuthService = inject(AuthService);
     router: Router = inject(Router);
     activateRoute: ActivatedRoute = inject(ActivatedRoute);

     ngOnInit() {
          this.activateRoute.queryParamMap.subscribe(queryParam => {
               const logout = Boolean(queryParam.get('logout'));

               if(logout) {
                    this.authService.logout();
                    alert(`You are now Logged Out! IsLogged = ${this.authService.isLogged}`);
               }
          })
     }

     onLoginClicked() {
          const username = this.username.nativeElement.value;
          const password = this.password.nativeElement.value;

          const user = this.authService.login(username, password);

          if(user === undefined) {
               alert(`The login credentials you have entered is not correct!`);
          } else {
               alert(`Welcome ${user.name}. You are logged In!`)
               this.router.navigate(['/courses']);
          }
     }
}
