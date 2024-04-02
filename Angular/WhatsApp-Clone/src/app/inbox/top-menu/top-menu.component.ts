import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent {
     // setting: boolean = false;

     @Output() onClickSettingIcon: EventEmitter<boolean> = new EventEmitter<boolean>();

     clickSetting() {
          // this.setting = true;
          this.onClickSettingIcon.emit(true)
     }
}
