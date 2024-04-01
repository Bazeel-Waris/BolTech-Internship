import { AfterViewInit, Component, ElementRef, ViewChildren, QueryList, inject, Output, EventEmitter, OnChanges, SimpleChanges, Input } from '@angular/core';
import { User } from 'src/app/Models/User';
import { UserService } from 'src/app/Services/UserService.service';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent implements OnChanges{

     userService: UserService = inject(UserService);
     filteredUsers: User[];
     @Input()
     searchContactName: string = '';

     ngOnChanges(changes: SimpleChanges): void {
          this.filteredUsers = this.userService.users.filter(p => p.name.toLowerCase().includes(this.searchContactName.toLowerCase()));
          console.log(this.filteredUsers);
     }

     @Output()
     openChatClicked: EventEmitter<User> = new EventEmitter<User>();

     onClickChatCard(person: User) {
          this.openChatClicked.emit(person);
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
