import { Component, Input, OnChanges } from '@angular/core';
import { User } from 'src/app/Models/User';

@Component({
  selector: 'app-chat-board',
  templateUrl: './chat-board.component.html',
  styleUrls: ['./chat-board.component.scss']
})
export class ChatBoardComponent implements OnChanges{
     
     @Input()
     openChat: User;

     @Input() selectedThemeMode: string = '';
     getLocalStorage: string = localStorage.getItem('themeMode');

     allMessages;
     ngOnChanges() {
          this.allMessages = this.openChat?.allMessages;
     }
}
