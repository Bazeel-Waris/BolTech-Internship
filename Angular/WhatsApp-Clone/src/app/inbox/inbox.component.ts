import { Component, EventEmitter, Output } from '@angular/core';
import { User } from '../Models/User';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent {
     
     searchedContactName: string = '';

     @Output()
     openChatToApp: EventEmitter<User> = new EventEmitter<User>();

     getClickedChat(event: User) {
          this.openChatToApp.emit(event);          
     }

     getSearchedName(event) {
          this.searchedContactName = event;
          // console.log(this.searchedContactName);
     }
}
