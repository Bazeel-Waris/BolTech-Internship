import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { User } from '../Models/User';

@Component({
  selector: 'app-chat-screen',
  templateUrl: './chat-screen.component.html',
  styleUrls: ['./chat-screen.component.scss']
})
export class ChatScreenComponent implements OnChanges{

     @Input()
    userChat: User;
     ngOnChanges(changes: SimpleChanges): void {
          // console.log(changes);
          // console.log(this.userChat);
          
     }
}
