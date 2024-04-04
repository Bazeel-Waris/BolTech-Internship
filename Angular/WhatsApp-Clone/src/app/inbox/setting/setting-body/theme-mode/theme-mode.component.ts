import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-theme-mode',
  templateUrl: './theme-mode.component.html',
  styleUrls: ['./theme-mode.component.scss']
})
export class ThemeModeComponent implements OnChanges{
     
     @Output()
     onClosePopUp: EventEmitter<boolean> = new EventEmitter<boolean>();

     @Output()
     onChangeMode: EventEmitter<string> = new EventEmitter<string>();

     closePopUp() {
          this.onClosePopUp.emit(false);
     }

     selectedThemeMode: string = '';
     recievedValue: string;
     getLocalStorage: string = '';

     ngOnChanges(changes: SimpleChanges): void {
          // this.getLocalStorage = localStorage.getItem('themeMode');
     }

     save(event: any){
          let value = event.target.value;
          if(value){
               this.recievedValue = value;
          }
     }

     changeMode() {
          this.selectedThemeMode = this.recievedValue;       
          this.onClosePopUp.emit(false);

          // Would get undefined Value if user don't save the mode setting after opening the popUp
          this.onChangeMode.emit(this.selectedThemeMode);
          if(localStorage.getItem('themeMode')) {
               localStorage.removeItem('themeMode');
          } 
          localStorage.setItem('themeMode', this.selectedThemeMode);
     }

}
