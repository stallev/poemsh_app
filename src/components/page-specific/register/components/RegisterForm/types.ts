export interface RegistrationFormProps {
  translations: RegistrationFormTranslations
}

export interface RegistrationFormTranslations {
  labels: RegistrationFormLabels,
  errors: RegistrationFormErrors
}
export interface RegistrationFormLabels {
  title: string;
  name: string;
  email: string;
  password: string;
  submit_button_text: string;
}

export interface RegistrationFormErrors {
  name_required: string;
  name_max_length: string;
  email_invalid: string;
  password_min_length: string;
  password_max_length: string;
  password_complexity: string;
  user_already_exists: string;
}