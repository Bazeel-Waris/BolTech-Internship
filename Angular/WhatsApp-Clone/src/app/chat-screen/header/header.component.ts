import { Component, Input, OnChanges } from '@angular/core';
import { User } from 'src/app/Models/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnChanges{

     @Input()
     openChat: User;

     @Input() selectedThemeMode: string = '';
     getLocalStorage: string = '';
     
     ngOnChanges() {
          // console.log('selectedThemeMode of Top-Header-Chat ' + this.selectedThemeMode);
          this.getLocalStorage = localStorage.getItem('themeMode');
     }
     
}
