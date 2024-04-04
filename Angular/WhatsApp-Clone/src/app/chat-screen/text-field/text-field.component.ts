import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss']
})
export class TextFieldComponent implements OnChanges {
     
     @Input() selectedThemeMode: string = '';
     getLocalStorage: string = '';
     
     ngOnChanges(changes: SimpleChanges): void {
          this.getLocalStorage = localStorage.getItem('themeMode');
     }
}
