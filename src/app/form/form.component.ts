import { Component, ElementRef, ViewChild } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})

export class AppForm {
  public userForm: FormGroup;
  isPasswordVisible = false;

  constructor() {
    this.userForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    })
  }

  togglePasswordVisibility = () => {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  get isEmailEmpty(): boolean {
    return !this.userForm.get('email')?.value;
  }

  get isPasswordEmpty(): boolean {
    return !this.userForm.get('password')?.value;
  }

  get passwordType(): string {
    return this.isPasswordVisible ? 'text' : 'password';
  }
}
