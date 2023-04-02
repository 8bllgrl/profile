import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[scrollAnimationBlur]'
})
export class ScrollAnimationDirectiveBlur {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
    this.renderer.setStyle(this.el.nativeElement, 'filter', 'blur(25px)');
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateY(50px)');
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'all 1s');
  }

  onWindowScroll() {
    const elementPosition = this.el.nativeElement.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (elementPosition < screenPosition) {
      this.renderer.setStyle(this.el.nativeElement, 'filter', 'blur(0px)');
      this.renderer.setStyle(this.el.nativeElement, 'opacity', '1');
    }
  }

  @HostListener('window:scroll', [])
  checkScroll() {
    this.onWindowScroll();
  }
}
