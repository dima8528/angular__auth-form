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

  firstSectionClasses(): any {
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

    return {
      'is-red': isInvalid || (isValid && isEasy),
      'is-yellow': isValid && isMedium,
      'is-green': isValid && isStrong
    };
  }

  secondSectionClasses(): any {
    if (!this.form) {
      return {};
    }

    const passwordControl = this.form.get('password');
    const passwordValue = passwordControl?.value;

    const isInvalid = passwordControl?.invalid && (passwordControl.dirty || passwordControl.touched);
    const isValid = passwordControl?.valid && !passwordControl.pristine;
    const isMedium = analyzePassword(passwordValue) === 'medium';
    const isStrong = analyzePassword(passwordValue) === 'strong';

    return {
      'is-red': isInvalid,
      'is-yellow': isValid && isMedium,
      'is-green': isValid && isStrong
    };
  }

  thirdSectionClasses(): any {
    if (!this.form) {
      return {};
    }

    const passwordControl = this.form.get('password');
    const passwordValue = passwordControl?.value;

    const isInvalid = passwordControl?.invalid && (passwordControl.dirty || passwordControl.touched);
    const isValid = passwordControl?.valid && !passwordControl.pristine;
    const isStrong = analyzePassword(passwordValue) === 'strong';

    return {
      'is-red': isInvalid,
      'is-green': isValid && isStrong
    };
  }
}

