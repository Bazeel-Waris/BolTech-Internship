import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-setting-top',
  templateUrl: './setting-top.component.html',
  styleUrls: ['./setting-top.component.scss']
})
export class SettingTopComponent implements OnChanges {
     
     @Output() 
     onClickCloseSetting: EventEmitter<boolean> = new EventEmitter<boolean>();
     
     @Input()
     selectedThemeMode: string = '';

     getLocalStorage: string = localStorage.getItem('themeMode');

     clickCloseSetting() {
          this.onClickCloseSetting.emit(false);
     }

     ngOnChanges(changes: SimpleChanges): void {
          this.getLocalStorage = localStorage.getItem('themeMode');          
     }

}
