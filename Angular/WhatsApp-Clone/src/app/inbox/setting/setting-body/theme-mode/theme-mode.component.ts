import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-theme-mode',
  templateUrl: './theme-mode.component.html',
  styleUrls: ['./theme-mode.component.scss']
})
export class ThemeModeComponent {

     getLocalStorage: string = localStorage.getItem('themeMode');
     
     @Output()
     onClosePopUp: EventEmitter<boolean> = new EventEmitter<boolean>();

     @Output()
     onChangeMode: EventEmitter<string> = new EventEmitter<string>();

     closePopUp() {
          this.onClosePopUp.emit(false);
     }

     selectedThemeMode: string = '';
     recievedValue:string;

     save(e:any){
          let value = e.target.value;
          if(value){
               this.recievedValue = value;
          }
     }

     changeMode() {
          this.selectedThemeMode = this.recievedValue;          
          this.onClosePopUp.emit(false);
          this.onChangeMode.emit(this.selectedThemeMode);
          if(localStorage.getItem('themeMode')) {
               localStorage.removeItem('themeMode');
          }
          localStorage.setItem('themeMode', this.selectedThemeMode);
     }

}
