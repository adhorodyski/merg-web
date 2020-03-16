import { Directive } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Directive({
    selector: '[appPatternValidator]',
})
export class PatternValidatorDirective {
    constructor() {}

    static patternValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
        return (control: AbstractControl): { [key: string]: boolean } => {
            if (!control.value) {
                return null;
            }

            const valid = regex.test(control.value);
            return valid ? null : error;
        };
    }
}
