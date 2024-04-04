import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent {

     @Output() onClickCloseBtn: EventEmitter<boolean> = new EventEmitter<boolean>();

     @Output() onChangeMode: EventEmitter<string> = new EventEmitter<string>();

     selectedThemeMode: string = '';

     clickCloseBtn(value: boolean) {
          this.onClickCloseBtn.emit(value)
     }

     getModeValue(modeValue: string) {
          this.selectedThemeMode = modeValue;
          this.onChangeMode.emit(modeValue);
     }
}
