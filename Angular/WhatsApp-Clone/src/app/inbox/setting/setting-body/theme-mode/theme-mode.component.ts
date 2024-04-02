import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-theme-mode',
  templateUrl: './theme-mode.component.html',
  styleUrls: ['./theme-mode.component.scss']
})
export class ThemeModeComponent {
     // @Input()
     // light: string = '';
   
     // @Input()
     // dark: string = '';

     @Output()
     onClosePopUp: EventEmitter<boolean> = new EventEmitter<boolean>();

     closePopUp() {
          this.onClosePopUp.emit(false);
     }

     selectedThemeMode: string = '';

     changeMode() {
          console.log(this.selectedThemeMode);
     }
}
