import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-setting-top',
  templateUrl: './setting-top.component.html',
  styleUrls: ['./setting-top.component.scss']
})
export class SettingTopComponent {

     getLocalStorage: string = localStorage.getItem('themeMode');
     
     @Output() 
     onClickCloseSetting: EventEmitter<boolean> = new EventEmitter<boolean>();
     
     @Input()
     selectedThemeMode: string = ''

     clickCloseSetting() {
          this.onClickCloseSetting.emit(false);
     }
}
