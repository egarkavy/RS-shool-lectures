import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserApiService } from 'src/app/api.service';
import { AbstractControl, FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/custom.validators';
import { BehaviorSubject, timer } from 'rxjs';
import { FieldComponent, FieldErrorDirective } from "../../02-custom-field/field.component";

type SignUpForm = {
  email: FormControl<string | null>,
  password: FormGroup<{
    password: FormControl<string | null>,
    repeatPassword: FormControl<string | null>
  }>,
  name: FormControl<string | null>,
  fruits: FormArray<AbstractControl<string | null>>;
}



@Component({
    selector: 'app-reactive-forms-root',
    standalone: true,
    templateUrl: './reactive-forms-root.component.html',
    styleUrls: ['./reactive-forms-root.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, ReactiveFormsModule, FieldComponent, FieldErrorDirective]
})
export class ReactiveFormsRootComponent implements OnInit {
  
  private userApiService: UserApiService = inject(UserApiService);

  public resetTimer = timer(5000);

  public emailSource$ = new BehaviorSubject<string>('');

  public singUpForm = new FormGroup({
    email: new FormControl<string>('', { nonNullable: true, validators: [
      CustomValidators.withMessageValidator('Email should be valid', Validators.email), 
      CustomValidators.withMessageValidator('Email is required', Validators.required),
      CustomValidators.withMessageValidator('Email must be at least 10 characters long', Validators.minLength(10))
    ]}),
    password: new FormGroup({
      password: new FormControl<string>('', [Validators.required]),
      repeatPassword: new FormControl<string>('', [Validators.required]),
    }, {
      validators: [CustomValidators.mustEqual]
    }),
    name: new FormControl<string>('', [CustomValidators.customRequired]),
    fruits: new FormArray([
      new FormControl<string>('', [Validators.required]),
      new FormControl<string>('', [Validators.required])
    ], { validators: [Validators.required]})
  });

  public get emailControl(): FormControl<string> {
    return this.singUpForm.controls.email
  }

  public get passwordControl(): FormControl<string | null> {
    return this.singUpForm.controls.password.controls.password
  }

  // public emailControl = new FormControl<string>('example@ex.com');
  // public passwordControl = new FormControl<string>('', { nonNullable: true });

  ngOnInit(): void {
    this.singUpForm.controls.password.valueChanges.subscribe(({password, repeatPassword}) => {
      console.log(password, repeatPassword)
    })

    this.resetTimer.subscribe(() => {
      this.singUpForm.patchValue({
        fruits: [
          'apple', 'Steeve jobs'
        ]
      })
    })

    this.emailSource$.subscribe((email) => {
      console.log('Changed')
      this.emailControl.setValue(email, { emitEvent: false });
    })

    this.emailControl.valueChanges.subscribe((value) => {
      this.emailSource$.next(value)
    })
  }

  public login(): void {
    console.log(this.singUpForm.value);

    if (this.singUpForm.invalid) {
      return;
    }

    this.userApiService.create();
  }

  public randomEmail(): void {
    this.emailSource$.next(`${Math.random()}`)
  }

  public addFruit(): void {
    this.singUpForm.controls.fruits.push(new FormControl('', { validators: [Validators.required]}));
  }
}
