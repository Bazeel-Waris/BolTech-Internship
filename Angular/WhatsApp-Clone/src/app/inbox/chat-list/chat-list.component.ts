import { AfterViewInit, Component, ElementRef, ViewChildren, QueryList, inject, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/Models/User';
import { UserService } from 'src/app/Services/UserService.service';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent {
     userService: UserService = inject(UserService);

     @Output()
     openChatClicked: EventEmitter<User> = new EventEmitter<User>();

     onClickChatCard(person: User) {
          this.openChatClicked.emit(person);
          // console.log(person);
     }
     // @ViewChildren('chatCard') chatCard: QueryList<ElementRef>;

     // chats;
     // ngAfterViewInit() {
     //      this.chats = this.chatCard;
     //      console.log(this.chatCard);
     // }
     // displayChat(val){
     //      console.log(val.target.parentElement.parentElement);
     // }
     
}
