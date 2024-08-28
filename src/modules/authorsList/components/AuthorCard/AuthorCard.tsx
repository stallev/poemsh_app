import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { AuthorCardProps } from './types'

export const AuthorCard: React.FC<AuthorCardProps> = ({
  firstName,
  lastName,
  slug,
  imageUrl = '',
  index
}) => {
  const authorName = `${firstName} ${lastName}`;
  const priorityImageLoading = index < 6 ? true : false;

  return (
    <div className='flex flex-col w-44 lg:w-60 items-center gap-4 px-2 py-3 border-2 rounded'>
      <div className='relative w-full h-44 rounded overflow-hidden'>
        <Image
          src={imageUrl}
          fill
          alt={`Picture of the ${authorName}`}
          sizes="(max-width: 768px) 30vw, (max-width: 1200px) 50vw, 33vw"
          priority={priorityImageLoading}
        />
      </div>
      
      <Link
        href={`/authors/${slug}`}
        tabIndex={0}
        aria-label='To author page'
        className='font-bold'
      >
        {authorName}
      </Link>
    </div>
  )
}
