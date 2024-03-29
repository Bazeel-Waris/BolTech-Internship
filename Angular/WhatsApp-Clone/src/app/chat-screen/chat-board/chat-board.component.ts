import { Component, Input } from '@angular/core';
import { User } from 'src/app/Models/User';

@Component({
  selector: 'app-chat-board',
  templateUrl: './chat-board.component.html',
  styleUrls: ['./chat-board.component.scss']
})
export class ChatBoardComponent {
     @Input()
     openChat: User;
}
