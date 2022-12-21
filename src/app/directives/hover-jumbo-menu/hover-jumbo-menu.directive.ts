import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHoverJumboMenu]'
})
export class HoverJumboMenuDirective {
  @HostBinding('class.open') isOpen = false;
  constructor() { }
     @HostListener('mouseover') onMouseHover(){
      console.log('hover');
      this.isOpen = !this.isOpen;
     }
}
