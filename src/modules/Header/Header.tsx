import { auth } from '@/auth';
import { MainNav } from '@/components/MainNav/MainNav';
import { Container } from '@/containers/Container/Container';
import { Logo } from '@/components/CustomSharedUI/Logo/Logo';
import { MobileMainNav } from '@/components/MainNav/MobileMainNav';
import { UserMenu } from '@/components/UserMenu/UserMenu';
import LocaleSwitcher from '@/components/LocaleSwitcher/LocaleSwitcher';
import { Locale } from '@/i18n.config';

export const Header = async ({ lang }: {lang: Locale}) => {
  const session = await auth();

  return (
    <Container>
      <div className='flex h-16 items-center justify-between px-4 md:px-6'>
        <Logo lang={lang}/>
        <MainNav lang={lang} session={session} />
        <MobileMainNav lang={lang} />
        <LocaleSwitcher />
        <UserMenu session={session} />
      </div>
    </Container>
  )
}
