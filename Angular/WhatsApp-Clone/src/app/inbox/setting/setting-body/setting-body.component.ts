import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-setting-body',
  templateUrl: './setting-body.component.html',
  styleUrls: ['./setting-body.component.scss']
})
export class SettingBodyComponent {
     popUp: boolean = false;

     selectedThemeMode: string = '';
     getLocalStorage: string = localStorage.getItem('themeMode');
     
     @Output()
     onChangeModeSetting: EventEmitter<string> = new EventEmitter<string>();
     
     cancelPopUp(cancelPopUp: boolean) {
          this.popUp = cancelPopUp;
     }

     changeMode(modeValue: string) {
          console.log('setting body ' + modeValue);
          this.selectedThemeMode = modeValue;
          this.onChangeModeSetting.emit(this.selectedThemeMode)
     }
}
