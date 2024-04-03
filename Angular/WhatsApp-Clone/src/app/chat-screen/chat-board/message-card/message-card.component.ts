import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Message } from 'src/app/Models/Message';
import { User } from 'src/app/Models/User';

@Component({
  selector: 'app-message-card',
  templateUrl: './message-card.component.html',
  styleUrls: ['./message-card.component.scss']
})
export class MessageCardComponent implements OnChanges{

     @Input() selectedThemeMode: string = '';
     getLocalStorage: string = localStorage.getItem('themeMode');

     @Input()
     message;

     ngOnChanges(changes: SimpleChanges): void {
          console.log(this.message.writtenByMe);
          
     }
}
