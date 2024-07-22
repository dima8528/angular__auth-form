import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppForm } from './form/form.component';
import { FormModule1 } from './form/form.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormModule1],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'password-form';
}
