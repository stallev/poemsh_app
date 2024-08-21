import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
    <div className='flex flex-col w-44 lg:w-60 items-center gap-4 px-2 py-3 border-2 rounded'>
      <div className='relative w-full h-44 rounded overflow-hidden'>
        <Image
          src={imageUrl}
          fill
          alt={`Picture of the ${title}`}
          sizes="(max-width: 768px) 30vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <p>{description}</p>
      <p>Автор: {author}</p>
      <span>{createdAt.toDateString()}</span>
      <Link href={`/posts/${slug}`} tabIndex={0} aria-label='To post page' className='font-bold text-xl'>{title}</Link>
    </div>
  )
}
