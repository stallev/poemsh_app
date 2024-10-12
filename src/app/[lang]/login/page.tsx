import { getDictionary } from '@/lib/getDictionary';
import { LoginForm } from '@/components/page-specific/login/components/LoginForm/LoginForm';
import { StaticPageParams } from '@/types/staticPagesTypes';

const Login = async({ params: { lang } }: StaticPageParams) => {
  const { login_form } = await getDictionary(lang);

  return (
    <>
      <LoginForm translations={login_form} />
    </>
  );
}

export default Login
