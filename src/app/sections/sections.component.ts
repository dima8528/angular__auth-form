import { Component, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { analyzePassword } from "../../utils/analyzePassword";

@Component({
  selector: 'form-sections',
  standalone: false,
  templateUrl: './sections.component.html',
  styleUrl: './sections.component.scss'
})

export class FormSections {
  @Input() form!: FormGroup;

  getSectionClass(section: 1 | 2 | 3): object {
    if (!this.form) {
      return {};
    }

    const passwordControl = this.form.get('password');
    const passwordValue = passwordControl?.value;

    const isInvalid = passwordControl?.invalid && (passwordControl.dirty || passwordControl.touched);
    const isValid = passwordControl?.valid && !passwordControl.pristine;
    const isEasy = analyzePassword(passwordValue) === 'easy';
    const isMedium = analyzePassword(passwordValue) === 'medium';
    const isStrong = analyzePassword(passwordValue) === 'strong';

    switch (section) {
      case 1:
        return {
          'is-red': isInvalid || (isValid && isEasy),
          'is-yellow': isValid && isMedium,
          'is-green': isValid && isStrong
        };

      case 2:
        return {
          'is-red': isInvalid,
          'is-yellow': isValid && isMedium,
          'is-green': isValid && isStrong
        };

      case 3:
        return {
          'is-red': isInvalid,
          'is-green': isValid && isStrong
        };

      default:
        return {}
    }
  }
}

