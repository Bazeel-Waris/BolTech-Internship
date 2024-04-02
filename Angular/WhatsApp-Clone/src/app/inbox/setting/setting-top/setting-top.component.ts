import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-setting-top',
  templateUrl: './setting-top.component.html',
  styleUrls: ['./setting-top.component.scss']
})
export class SettingTopComponent {

     @Output() 
     onClickCloseSetting: EventEmitter<boolean> = new EventEmitter<boolean>();

     clickCloseSetting() {
          this.onClickCloseSetting.emit(false);
     }
}
