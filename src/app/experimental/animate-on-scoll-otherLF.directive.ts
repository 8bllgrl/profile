import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[animateOnScrollOtherLF]'
})
export class AnimateOnScrollOtherLFDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    const childElements = this.elementRef.nativeElement.children;
    for (let i = 0; i < childElements.length; i++) {
      const child = childElements[i];
      child.style.opacity = '0';
      child.style.transform = 'translateX(-60px)';
      child.style.transition = 'all 2s';
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          entry.target.classList.add('show');
          const showChildElements = entry.target.children;
          for (let i = 0; i < showChildElements.length; i++) {
            const child = showChildElements[i] as HTMLElement;
            child.style.opacity = '1';
            child.style.transform = 'translateY(0)';
            child.style.transitionDelay = `${i * 0.2 + 0.2}s`;
          }
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach(el => observer.observe(el));
    observer.observe(this.elementRef.nativeElement);
  }
}
