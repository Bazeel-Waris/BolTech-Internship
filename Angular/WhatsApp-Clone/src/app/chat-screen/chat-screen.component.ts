import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { User } from '../Models/User';

@Component({
  selector: 'app-chat-screen',
  templateUrl: './chat-screen.component.html',
  styleUrls: ['./chat-screen.component.scss']
})
export class ChatScreenComponent {

     @Input() userChat: User;
     
     @Input() selectedThemeMode: string = '';
     getLocalStorage: string = localStorage.getItem('themeMode');

     ngOnInit() {
          console.log(this.userChat);          
     }
}
