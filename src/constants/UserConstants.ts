export const PasswordParams = {
  MinLength: 6,
  MaxLength: 20,
  RegexComplexity: '/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/',
}

export const UsernameParams = {
  MinLength: 2,
  MaxLength: 100,
}
