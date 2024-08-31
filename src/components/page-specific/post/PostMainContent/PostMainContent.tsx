import React from 'react';
import PostControlButtons from '../components/PostControlButtons/PostControlButtons';
import { PostContent } from '../components/PostContent/PostContent';
import { PostMainContentDataProps } from './types';

export const PostMainContent:React.FC<PostMainContentDataProps> = ({ data, lang }) => {
  return (
    <div className='flex flex-col gap-y-6'>
      <PostControlButtons
        postId={data?.slug && data.slug}
        lang={lang}
      />
      
      <PostContent data={data} />
    </div>
  )
}
