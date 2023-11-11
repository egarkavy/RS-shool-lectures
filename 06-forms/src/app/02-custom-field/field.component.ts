import { AfterContentInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, Directive, DoCheck, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, NgControl } from '@angular/forms';

@Directive({
  selector: 'app-error',
  standalone: true
})
export class FieldErrorDirective {

}

@Component({
  selector: 'app-field',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FieldComponent implements DoCheck {
  @ContentChild(NgControl) control: NgControl | null = null;

  private readonly cdr: ChangeDetectorRef = inject(ChangeDetectorRef)

  public showError = false;

  ngDoCheck(): void {
    console.log((this.control as any)?.form);

    this.showError = Boolean(this.control?.touched || this.control?.invalid)

    this.cdr.markForCheck();
  }
}
