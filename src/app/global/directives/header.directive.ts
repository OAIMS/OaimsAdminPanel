import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[gloablSectionHeader]'
})
export class HeaderDirective {
  domElement: any;

  constructor(private renderer: Renderer2, private element: ElementRef) {
    let el = this.element.nativeElement;
    this.domElement = this.element.nativeElement;
    const requiredStyles: any = {
      'font-size': '38px',
      'margin': '0',
      'color': '#012970',
      'width': '100%',
      'text-align': 'center',
      'padding-bottom': '40px',
      'letter-spacing': '1px',
      'font-weight': '700',
      'text-transform': 'uppercase',
      //...and so on
    };

    Object.keys(requiredStyles).forEach((newStyle: any) => {
      this.renderer.setStyle(
        this.domElement, `${newStyle}`, requiredStyles[newStyle]
      );
    });
  }
}
