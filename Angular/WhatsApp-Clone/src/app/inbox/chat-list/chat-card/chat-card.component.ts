import { Component, Input} from '@angular/core';
import { User } from 'src/app/Models/User';

@Component({
  selector: 'app-chat-card',
  templateUrl: './chat-card.component.html',
  styleUrls: ['./chat-card.component.scss']
})
export class ChatCardComponent {
     @Input()
     person: User;

     @Input() selectedThemeMode:  string = '';

     getLocalStorage: string = localStorage.getItem('themeMode');
}
