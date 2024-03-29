import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/app/Models/User';

@Component({
  selector: 'app-chat-card',
  templateUrl: './chat-card.component.html',
  styleUrls: ['./chat-card.component.scss']
})
export class ChatCardComponent {
     @Input()
     person: User;

     
}
