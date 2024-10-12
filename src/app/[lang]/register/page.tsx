import { getDictionary } from '@/lib/getDictionary';
import { RegistrationForm } from '@/components/page-specific/register/components/RegisterForm/RegisterForm';
import { StaticPageParams } from '@/types/staticPagesTypes';

const Register = async({ params: { lang } }: StaticPageParams) => {
  const { registration_form } = await getDictionary(lang);

  return (
    <>
      <RegistrationForm translations={registration_form} />
    </>
  );
}

export default Register
