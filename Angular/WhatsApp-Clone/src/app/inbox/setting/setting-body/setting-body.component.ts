import { Component, EventEmitter, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-setting-body',
  templateUrl: './setting-body.component.html',
  styleUrls: ['./setting-body.component.scss']
})
export class SettingBodyComponent implements OnChanges {
     popUp: boolean = false;

     selectedThemeMode: string = '';
     getLocalStorage: string = localStorage.getItem('themeMode');
     
     
     @Output()
     onChangeModeSetting: EventEmitter<string> = new EventEmitter<string>();
     
     cancelPopUp(cancelPopUp: boolean) {
          this.popUp = cancelPopUp;
     }

     changeMode(modeValue: string) {
          this.selectedThemeMode = modeValue;
          this.onChangeModeSetting.emit(this.selectedThemeMode)
     }

     ngOnChanges(changes: SimpleChanges): void {
          this.getLocalStorage = localStorage.getItem('themeMode');
          console.log('LocalStorage Setting Body ' + this.getLocalStorage);
          
     }
}
