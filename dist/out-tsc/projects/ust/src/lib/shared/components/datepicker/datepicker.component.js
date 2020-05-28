var DatepickerComponent_1;
import { __decorate } from "tslib";
import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormControlBaseComponent } from '@dminine/ng-lib';
import { firestoreTimestampFromDate } from '../../../utils';
let DatepickerComponent = DatepickerComponent_1 = class DatepickerComponent extends FormControlBaseComponent {
    constructor() {
        super(new Date());
    }
    convertToControlValue(value) {
        if (value && value.toDate) {
            return value.toDate();
        }
        return null;
    }
    convertToEmitValue(value) {
        return firestoreTimestampFromDate(value);
    }
};
__decorate([
    Input()
], DatepickerComponent.prototype, "placeholder", void 0);
DatepickerComponent = DatepickerComponent_1 = __decorate([
    Component({
        selector: 'ust-datepicker',
        templateUrl: './datepicker.component.html',
        styleUrls: ['./datepicker.component.scss'],
        providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => DatepickerComponent_1),
                multi: true
            }
        ]
    })
], DatepickerComponent);
export { DatepickerComponent };
//# sourceMappingURL=datepicker.component.js.map