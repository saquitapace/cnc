import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[customMatTableCell]'
})
export class CustomMatTableCellDirective {

    @Input('value') value;

    constructor(private el: ElementRef) { }

    @HostListener('click') onClick() {
        if (this.el.nativeElement.children[0].localName !== 'mat-form-field') {
            this.el.nativeElement.innerHTML = `
            <mat-form-field appearance="outline">
                <input matInput value="${this.value}">
            </mat-form-field>`;
            this.el.nativeElement.focus();
        }

    }

}