import { Component } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})

export class AppForm {
  public userForm: FormGroup;

  constructor() {
    this.userForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    })
  }

  get isEmailEmpty(): boolean {
    return !this.userForm.get('email')?.value;
  }

  get isPasswordEmpty(): boolean {
    return !this.userForm.get('password')?.value;
  }
}
