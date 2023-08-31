import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: 'img:not([loading])'
})
export class ImageLazyLoadDirective {

  constructor(el: ElementRef) {
    el.nativeElement.setAttribute('loading', 'lazy')
  }

}
