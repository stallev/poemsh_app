import React from 'react';
import { PostContentProps } from './types';

export const PostContent:React.FC<PostContentProps> = ({ data }) => {
  return (
    <div>
      <h1 className='mb-4 font-bold text-3xl'>{data.title}</h1>
      <div className='mb-3'>{data.description}</div>
      <div className='italic'>{data.content}</div>
    </div>
  )
}
