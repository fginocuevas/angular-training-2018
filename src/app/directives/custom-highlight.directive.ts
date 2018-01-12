import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomHighlight]'
})
export class CustomHighlightDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor= "blue";    
    el.nativeElement.style.color= "white";    
  }

}
