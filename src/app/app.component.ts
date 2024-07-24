import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormModule } from './form/form.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {}
