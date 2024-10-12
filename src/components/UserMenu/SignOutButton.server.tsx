import React from 'react'
import { signOut } from '@/auth';
import { Button } from '@/components/ui/button';

export const SignOutButton = () => {
  return (
    <Button
      onClick={async () => {
        'use server';
        await signOut();
      }}
    >
      SignOut
    </Button>
  );
};