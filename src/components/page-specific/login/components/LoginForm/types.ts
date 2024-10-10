export interface LoginFormProps {
  translations: LoginFormTranslations
}

export interface LoginFormTranslations {
  labels: LoginFormLabels,
  errors: LoginFormErrors
}
export interface LoginFormLabels {
  title: string;
  email: string;
  password: string;
  submit_button_text: string;
}

export interface LoginFormErrors {
  email_invalid: string;
  password_min_length: string;
  password_max_length: string;
  password_complexity: string;
  wrong_creds: string;
  something_went_wrong: string
}