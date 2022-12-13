import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
export function passwordValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value = control.value;
        if (!value) {
            return null;
        }
        const passwordMinStrenght = /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(value);
        const passwordValid = passwordMinStrenght;
        return !passwordValid ? { passwordValid: true } : null;
    }
}