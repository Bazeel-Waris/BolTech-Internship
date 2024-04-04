import { AfterViewInit, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-setting-body',
  templateUrl: './setting-body.component.html',
  styleUrls: ['./setting-body.component.scss']
})
export class SettingBodyComponent implements OnChanges {
     popUp: boolean = false;

     @Input() selectedThemeMode: string = '';
     getLocalStorage: string = '';
     
     
     @Output()
     onChangeModeSetting: EventEmitter<string> = new EventEmitter<string>();
     
     cancelPopUp(cancelPopUp: boolean) {
          this.popUp = cancelPopUp;
     }

     changeMode(modeValue: string) {
          this.selectedThemeMode = modeValue;
          this.onChangeModeSetting.emit(this.selectedThemeMode)
     }

     ngOnChanges(): void {
          this.getLocalStorage = localStorage.getItem('themeMode');
          // console.log('LocalStorage Setting Body ' + this.getLocalStorage);
     }
}
