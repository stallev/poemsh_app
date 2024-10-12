import * as z from 'zod';
import { RegistrationFormErrors } from '../components/RegisterForm/types';

export const createRegistrationSchema = (translations: {
  errors: RegistrationFormErrors
}) => {
  return z.object({
    name: z.string()
      .min(1, { message: translations.errors.name_required })
      .max(100, { message: translations.errors.name_max_length }),
    email: z.string().email({ message: translations.errors.email_invalid }),
    password: z.string()
      .min(8, { message: translations.errors.password_min_length })
      .max(100, { message: translations.errors.password_max_length })
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, {
        message: translations.errors.password_complexity,
      }),
  });
};

export type RegistrationFormValues = z.infer<ReturnType<typeof createRegistrationSchema>>;