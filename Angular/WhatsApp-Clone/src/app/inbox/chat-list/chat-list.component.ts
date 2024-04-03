import { Component, inject, Output, EventEmitter, OnChanges, SimpleChanges, Input } from '@angular/core';
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

     getLocalStorage: string = localStorage.getItem('themeMode');
     
     @Input()
     selectedThemeMode: string = '';

     @Input()
     searchContactName: string = '';

     ngOnChanges(changes: SimpleChanges): void {
          this.filteredUsers = this.userService.users.filter(p => p.name.toLowerCase().includes(this.searchContactName.toLowerCase()));
     }

     @Output()
     openChatClicked: EventEmitter<User> = new EventEmitter<User>();

     onClickChatCard(person: User) {
          this.openChatClicked.emit(person);
     }
      
}
