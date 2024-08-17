import React from 'react';
import { Button } from '../../components/ui/button';
import { MainNav } from '@/components/MainNav/MainNav';
import { Container } from '@/containers/Container/Container';

export const Header = () => {
  return (
    <Container>
      <MainNav />
    </Container>
  )
}
