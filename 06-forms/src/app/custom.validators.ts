import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from "@angular/forms"

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

    public static withMessageValidator(message: string, validator: ValidatorFn): ValidatorFn {
        return (control: AbstractControl) => {
            const validationResult = validator(control);

            if (validationResult === null) {
                return null;
            }
            
            return {
                [Object.keys(validationResult)[0]]: {
                    ...validationResult,
                    message
                }
            };
        }
    }
}