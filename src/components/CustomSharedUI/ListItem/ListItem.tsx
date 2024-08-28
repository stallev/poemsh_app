import React, { ReactNode } from 'react';
import Link from 'next/link';

interface ListItemProps {
  children: ReactNode | string
  title?: string
  href?: string
}

export const ListItem: React.FC<ListItemProps> = ({
  children,
  title = '',
  href = ''
}) => {
  return (
    <Link href={href} title={title}>
      {children}
    </Link>
  )
}
