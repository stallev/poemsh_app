import React, { ReactNode } from 'react';
import Link from 'next/link';
import { slugSelector } from '@/lib/slugSelector';

interface ListItemProps {
  children: ReactNode | string
  title?: string
  href?: string
  lang: string
}

export const ListItem: React.FC<ListItemProps> = ({
  children,
  title = '',
  href = '',
  lang
}) => {
  return (
    <Link href={slugSelector(lang, href)} title={title}>
      {children}
    </Link>
  )
}
