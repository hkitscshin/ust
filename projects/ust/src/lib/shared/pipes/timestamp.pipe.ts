import { formatDate } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timestamp'
})
export class TimestampPipe implements PipeTransform {

  transform(value: any, format = 'mediumDate', timezone?: string, locale?: string): string | null {
    if (!value) {
      return null;
    } else if (value.toMillis) {
      return formatDate(value.toMillis(), format, locale || 'en', timezone);
    } else if (value instanceof Date) {
      return formatDate(value, format, locale || 'en', timezone);
    } else {
      return value;
    }
  }
}
