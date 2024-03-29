import { AfterContentInit, Component } from '@angular/core';
import { User } from './Models/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentInit{
  title = 'WhatsApp-Clone';

  passUserToScreen: User;

  getChatFromInbox(event: User) {
     // console.log(event);
     this.passUserToScreen = event;
     // console.log(this.passUserToScreen);
  }

  ngAfterContentInit(): void {
    
  }

}
