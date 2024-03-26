import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appSample]'
})
export class SampleDirective {

     // @HostBinding('value') inputValue: string = 'Hi There';

     constructor() { }

     @HostListener('focus') logMessage() {
          console.log('Event Happend & Clicked!');
     }
}
