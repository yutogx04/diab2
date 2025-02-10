import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators,ReactiveFormsModule, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-signup',
  imports: [RouterLink ,ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss','../../styles.css'],
})
export class SignupComponent {
  SignupForm = new FormGroup({
      firstName: new FormControl('',Validators.required),
      lastName: new FormControl('',Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('',Validators.required)
    },{validators : this.passwordValidator()}
  );
    passwordValidator(): ValidatorFn {
      return (control:AbstractControl,): ValidationErrors | null => {
        const password = control.get("password");
        const confirmPassword = control.get("confirmPassword");
        return password && confirmPassword && password.value===confirmPassword.value ?{
          samePassword:true,
        }:null;
      }
    }
    signup() {
      if (this.SignupForm.invalid) return;

      alert('Calling backend to login');
    }
}
