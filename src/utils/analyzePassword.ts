export const analyzePassword = (password: string) => {
  const hasLetters = /[a-zA-Z]/.test(password);
  const hasDigits = /\d/.test(password);
  const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  if (password.length < 8) {
    return 'invalid';
  }

  if (hasDigits && hasLetters && hasSymbols) {
    return 'strong';
  }

  const lettersAndDigits = hasLetters && hasDigits;
  const lettersAndSymbols = hasLetters && hasSymbols;
  const digitsAndSymbols = hasDigits && hasSymbols;

  if (lettersAndDigits || lettersAndSymbols || digitsAndSymbols) {
    return 'medium';
  }

  const onlyLetters = hasLetters && !hasDigits && !hasSymbols;
  const onlyDigits = !hasLetters && hasDigits && !hasSymbols;
  const onlySymbols = !hasLetters && !hasDigits && hasSymbols;

  if (onlyLetters || onlyDigits || onlySymbols) {
    return 'easy';
  }

  return '';
}
