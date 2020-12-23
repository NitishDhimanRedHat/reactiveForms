import { FormGroup } from '@angular/forms';

export function PasswordChecker(controlName: string, confirmControlName: string) {
    return (formGroup: FormGroup) => {
        const password = formGroup.controls[controlName];
        const confPassword = formGroup.controls[confirmControlName];
        if(password.value !== confPassword.value) {
            confPassword.setErrors({mustmatch: true});
        } else {
            confPassword.setErrors(null)
        }
    }
}