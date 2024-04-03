import { Component, Input } from '@angular/core';
import { User } from './Models/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WhatsApp-Clone';

  passUserToScreen: User;

  selectedThemeMode: string = '';

  getChatFromInbox(event: User) {
     this.passUserToScreen = event;
     console.log(event);
     
  }

  changeMode(modeValue: string) {
     this.selectedThemeMode = modeValue;
  }

}
