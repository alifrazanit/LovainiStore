import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appSelectMenu]'
})
export class SelectMenuDirective {
  @HostBinding('class.active') isActive = false;

  constructor() { }
  @HostListener('click') onMouseHover(){
    this.isActive = !this.isActive;
   }
}
