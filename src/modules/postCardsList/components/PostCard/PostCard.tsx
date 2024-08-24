import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { RoutePath } from '@/constants/RoutePath';
import { PostCardProps } from './types';

export const PostCard: React.FC<PostCardProps> = ({
  title,
  description,
  imageUrl = '',
  author,
  createdAt,
  slug,
}) => {
  return (
    <div className='flex flex-col w-60 lg:w-72 items-center gap-4 px-4 py-4 border-2 rounded shadow-lg'>
      <div className='relative w-full h-44 rounded overflow-hidden'>
        <Image
          src={imageUrl}
          fill
          alt={`Picture of the ${title}`}
          sizes="(max-width: 768px) 30vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      
      <Link
        href={`/posts/${slug}`}
        tabIndex={0}
        aria-label='To post page'
        className='font-bold text-xl underline'>
        {title}
      </Link>

      <p>{description}</p>
      <div className='inline-flex mt-auto self-start'>
        <p>Автор:</p>
        &nbsp;
        <Link
          href={`${RoutePath.Authors}/${author}`}
          className='underline'
        >
          {author}
        </Link>
      </div>
    </div>
  )
}
