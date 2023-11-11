import { AbstractControl, FormControl, ValidationErrors } from "@angular/forms"

export class CustomValidators {
    public static customRequired(control: AbstractControl<string>): ValidationErrors | null {
        const trimmed = control.value.trim();

        return trimmed.length ? null : {
            required: true
        }
    }

    public static mustEqual(control: AbstractControl): ValidationErrors | null {
        const areEqual = control.value.password === control.value.repeatPassword;

        return areEqual ? null : { areEqual: true }
    }
}