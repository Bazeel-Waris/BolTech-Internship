import { Component, Input } from '@angular/core';
import { User } from 'src/app/Models/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

     @Input()
     openChat: User;

     @Input() selectedThemeMode: string = '';
     getLocalStorage: string = localStorage.getItem('themeMode');
     
}
