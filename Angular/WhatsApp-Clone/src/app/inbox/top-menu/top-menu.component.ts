import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent {

     @Input() selectedThemeMode: string = '';
     getLocalStorage: string = localStorage.getItem('themeMode');

     @Output() onClickSettingIcon: EventEmitter<boolean> = new EventEmitter<boolean>();

     clickSetting() {
          this.onClickSettingIcon.emit(true)
     }
}
