import React from 'react';
import Link from 'next/link';
import { RoutePath } from '@/constants/RoutePath';
import { getDictionary } from '@/lib/getDictionary';
import { PostControlButtonProps } from './types';

const PostControlButtons:React.FC<PostControlButtonProps> = async ({
  lang, postId
}) => {
  const { pages: { post } } = await getDictionary(lang);
  return (
    <div className='flex gap-6 mb-6 p-3 shadow-lg rounded-2xl'>
      <Link
        href={`${RoutePath.EditPoem}/${postId}`}
        className='bg-gray-900 text-white p-3 rounded-md'
      >
        {post.edit_btn}
      </Link>
    </div>
  )
}

export default PostControlButtons