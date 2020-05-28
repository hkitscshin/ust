import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormControlBaseComponent } from '@dminine/ng-lib';
import { Timestamp } from '../../../types';
import { firestoreTimestampFromDate } from '../../../utils';

@Component({
  selector: 'ust-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatepickerComponent),
      multi: true
    }
  ]
})
export class DatepickerComponent extends FormControlBaseComponent {
  @Input() placeholder: string;

  constructor() {
    super(new Date());
  }

  protected convertToControlValue(value: Timestamp): Date {
    if (value && value.toDate) {
      return value.toDate();
    }
    return null;
  }

  protected convertToEmitValue(value: Date): Timestamp {
    return firestoreTimestampFromDate(value);
  }
}
