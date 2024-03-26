import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseover') onMouseEnter() {
     this.renderer.addClass(this.element.nativeElement, 'highlight-product');
     this.renderer.addClass(this.element.nativeElement, '.hello');
  }

  @HostListener('mouseot') onMouseOut() {
     this.renderer.removeClass(this.element.nativeElement, '.hello');
  }
}
