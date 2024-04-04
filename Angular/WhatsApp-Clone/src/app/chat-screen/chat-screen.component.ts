import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { User } from '../Models/User';

@Component({
  selector: 'app-chat-screen',
  templateUrl: './chat-screen.component.html',
  styleUrls: ['./chat-screen.component.scss']
})
export class ChatScreenComponent implements OnChanges{

     @Input() userChat: User;
     
     @Input() selectedThemeMode: string = '';
     getLocalStorage: string = '';

     ngOnChanges(changes: SimpleChanges): void {
          this.getLocalStorage = localStorage.getItem('themeMode');
     }

     ngOnInit() {
          console.log(this.userChat);          
     }
}
