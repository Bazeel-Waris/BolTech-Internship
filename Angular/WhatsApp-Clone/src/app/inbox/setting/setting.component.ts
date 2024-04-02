import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent {

     @Output() onClickCloseBtn: EventEmitter<boolean> = new EventEmitter<boolean>();

     clickCloseBtn(value: boolean) {
          this.onClickCloseBtn.emit(value)
     }

}
