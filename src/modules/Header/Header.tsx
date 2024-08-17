'use client'

import React from 'react';
import { MainNav } from '@/components/MainNav/MainNav';
import { Container } from '@/containers/Container/Container';
import { Logo } from '@/components/CustomSharedUI/Logo/Logo';
import { MobileMainNav } from '@/components/MainNav/MobileMainNav';
// import { isTabletWindowSize } from '@/hooks/useWindowSizeType';
// import useWindowDimensions from '@/hooks/useWindowDimensions';

export const Header = () => {
  // const windowSize = useWindowDimensions();
  // const isTablet = isTabletWindowSize(windowSize.width);

  return (
    <Container>
      <div className='flex h-16 items-center justify-between px-4 md:px-6'>
        <Logo/>
        {/* {isTablet ? <MobileMainNav /> : <MainNav />} */}
        <MainNav />
        <MobileMainNav />
      </div>
    </Container>
  )
}
