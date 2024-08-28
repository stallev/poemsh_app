import { MainNav } from '@/components/MainNav/MainNav';
import { Container } from '@/containers/Container/Container';
import { Logo } from '@/components/CustomSharedUI/Logo/Logo';
import { MobileMainNav } from '@/components/MainNav/MobileMainNav';
import LocaleSwitcher from '@/components/LocaleSwitcher/LocaleSwitcher';
import { Locale } from '@/i18n.config';

export const Header = ({ lang }: {lang: Locale}) => {
  return (
    <Container>
      <div className='flex h-16 items-center justify-between px-4 md:px-6'>
        <Logo/>
        <MainNav lang={lang} />
        <MobileMainNav lang={lang} />
        <LocaleSwitcher />
      </div>
    </Container>
  )
}
