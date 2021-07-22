import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver(){
    this.backgroundColor = 'green'
  }


  @HostListener('mouseleave') onMouseLeave(){
    this.backgroundColor = 'white'
  }

  @HostBinding('style.backgroundColor') backgroundColor: string | undefined

  constructor() { }

}
