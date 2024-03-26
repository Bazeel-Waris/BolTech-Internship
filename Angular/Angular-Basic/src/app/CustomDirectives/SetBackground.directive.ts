import { Directive, ElementRef, Renderer2 } from "@angular/core";

@Directive({
     selector: '[setBackground]'
})
export class SetBackground {
     constructor(private element: ElementRef, private renderer: Renderer2) {
          // element.nativeElement.style.backgroundColor = 'grey';
          // element.nativeElement.style.color = 'orange';
          this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', '#36454f')
          this.renderer.setStyle(this.element.nativeElement, 'color', 'orange')
     }
}