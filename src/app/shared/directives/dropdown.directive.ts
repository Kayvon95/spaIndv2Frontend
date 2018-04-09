import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  //standard false
  @HostBinding('class.open') isOpen = false;
  //switch boolean on click event
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
