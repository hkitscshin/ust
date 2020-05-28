import { __decorate } from "tslib";
import { formatDate } from '@angular/common';
import { Pipe } from '@angular/core';
let TimestampPipe = class TimestampPipe {
    transform(value, format = 'mediumDate', timezone, locale) {
        if (!value) {
            return null;
        }
        else if (value.toMillis) {
            return formatDate(value.toMillis(), format, locale || 'en', timezone);
        }
        else if (value instanceof Date) {
            return formatDate(value, format, locale || 'en', timezone);
        }
        else {
            return value;
        }
    }
};
TimestampPipe = __decorate([
    Pipe({
        name: 'timestamp'
    })
], TimestampPipe);
export { TimestampPipe };
//# sourceMappingURL=timestamp.pipe.js.map