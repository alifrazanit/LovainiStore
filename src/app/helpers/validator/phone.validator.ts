import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
export function phoneValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value = control.value;
        if (!value) {
            return null;
        }
        const indonesianPhoneFormat = /^(\+62|62)?[\s-]?0?8[1-9]{1}\d{1}[\s-]?\d{4}[\s-]?\d{2,5}$/.test(value);
        const phoneValid = indonesianPhoneFormat;
        return !phoneValid ? { phoneFormatValid: true } : null;
    }
}