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

     allMessages;
     ngOnChanges() {
          console.log(this.openChat);
          this.allMessages = this.openChat?.allMessages;
     }
}
