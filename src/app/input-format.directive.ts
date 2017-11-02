import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  constructor(private el: ElementRef) { }
  // @Input('appInputFormat') указывает на соотв. элемент в app.component.html
  @Input('appInputFormat') format;

  @HostListener('focus') onFocus() {
    console.log('В фокусе!!!');
  }

  @HostListener('blur') onBlur() {
    let value: string = this.el.nativeElement.value;
    if (this.format == 'lowercase') {
      this.el.nativeElement.value = value.toLowerCase();
    } else {
      this.el.nativeElement.value = value.toUpperCase();
    }
  }

}
