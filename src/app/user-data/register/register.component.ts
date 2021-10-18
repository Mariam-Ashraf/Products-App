import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Validators, AbstractControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: any; //FormGroup
  addressArray: any;
  emailPattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  letterPattern = /^[A-Za-z]+$/;
  letterORNumberPattern = /^[a-zA-Z0-9]*$/;

  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formbuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      username: ['', [Validators.required, Validators.maxLength(8)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(this.passwordPattern)]],
      confirmpassword: ['', [Validators.required, Validators.minLength(8), Validators.pattern(this.passwordPattern), this.confirmPassword()]],
      addressArray: this.formbuilder.array([]),
    });

    this.addAddress();
  }

  confirmPassword(): ValidatorFn {
    return (controls: AbstractControl) => {
      const password = controls.value;
      const confirmPassword = controls.root.value.password;
      return password === confirmPassword ? null : { passwordNotMatch: true };
    };
  }

  deleteAddress(itemIndex: any) {
    this.addressArray = this.registerForm.get('addressArray') as FormArray;
    this.addressArray.removeAt(itemIndex);
  }

  addAddress() {
    this.addressArray = this.registerForm.get('addressArray') as FormArray;
    this.addressArray.push(this.formbuilder.group({
      address: ['', [Validators.required, Validators.pattern(this.letterORNumberPattern)]],
      street: ['', [Validators.required, Validators.pattern(this.letterORNumberPattern)]],
      city: ['', [Validators.required, Validators.pattern(this.letterPattern)]],
      country: ['', [Validators.required, Validators.pattern(this.letterPattern)]]
    }));
  }

  get registerFormControls() {
    return this.registerForm.controls;
  }

  submitRegisterForm() {
    window.sessionStorage.setItem('newUser',
      JSON.stringify({ "email": this.registerForm.value.email, "password": this.registerForm.value.password }));
    alert("Welcome, " + this.registerForm.value.name);
  }
}