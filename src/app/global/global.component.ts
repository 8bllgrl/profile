import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-global',
  template: ''
})
export class GlobalComponent {

  @HostListener('document:click', ['$event'])
  onLinkClick(event: MouseEvent) {
    if (event.target instanceof HTMLAnchorElement) {
      event.preventDefault();
      window.open(event.target.href, '_blank');
    }
  }

}
