import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { debounce, debounceTime, skipUntil } from 'rxjs';

let initialFirstName = '';
let initialLastName = '';
let initialEmail = '';
let initialNumber = '';
let initialMessage = '';
const savedForm = window.localStorage.getItem('saved-query-form');
if (savedForm) {
  const loadedForm = JSON.parse(savedForm);
  (initialFirstName = loadedForm.FirstName),
    (initialLastName = loadedForm.LastName),
    (initialEmail = loadedForm.Email),
    (initialNumber = loadedForm.PhoneNumber),
    (initialMessage = loadedForm.Message);
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit {
  private destroyRef = inject(DestroyRef);
  private fb = inject(FormBuilder);

  form!: FormGroup;

  ngOnInit() {
    this.form = this.fb.group({
      firstName: new FormControl(initialFirstName, [Validators.required]),
      lastName: new FormControl(initialLastName, [Validators.required]),
      email: new FormControl(initialEmail, [
        Validators.required,
        Validators.email,
      ]),
      phoneNumber: new FormControl(initialNumber, [
        Validators.required,
        Validators.minLength(10),
      ]),
      message: new FormControl(initialMessage, [
        Validators.required,
        Validators.minLength(10),
      ]),
      source: new FormArray([
        new FormControl(false),
        new FormControl(false),
        new FormControl(false),
      ]),
    });

    console.log(this.form);

    const subscription = this.form.valueChanges
      .pipe(debounceTime(500))
      .subscribe({
        next: (value) => {
          window.localStorage.setItem(
            'saved-query-form',
            JSON.stringify({
              FirstName: value.firstName,
              LastName: value.lastName,
              Email: value.email,
              PhoneNumber: value.phoneNumber,
              Message: value.message,
            })
          );
        },
      });

    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }

  submitted = false;
  notReset = true;

  onSubmit() {
    // this.valid = true
    console.log(this.form);
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      console.log('invalid form');
      return;
    }

    this.form.reset();
    this.submitted = true;
  }
  onReset() {
    this.submitted = false;
    this.notReset = false
    window.localStorage.clear();
    this.notReset = false;
  }
}

// get firstNameIsInvalid() {
//   return (
//     this.form.controls.firstName.touched &&
//     this.form.controls.firstName.dirty &&
//     this.form.controls.firstName.invalid
//   );
// }
// get lastNameIsInvalid() {
//   return (
//     this.form.controls.lastName.touched &&
//     this.form.controls.lastName.dirty &&
//     this.form.controls.lastName.invalid
//   );
// }
// get emailIsInvalid() {
//   return (
//     this.form.controls.email.touched &&
//     this.form.controls.email.dirty &&
//     this.form.controls.email.invalid
//   );
// }
// get phoneNumberIsInvalid() {
//   return (
//     this.form.controls.phoneNumber.touched &&
//     this.form.controls.phoneNumber.dirty &&
//     this.form.controls.phoneNumber.invalid
//   );
// }
// get messageIsInvalid() {
//   return (
//     this.form.controls.message.touched &&
//     this.form.controls.message.dirty &&
//     this.form.controls.message.invalid
//   );
// }
