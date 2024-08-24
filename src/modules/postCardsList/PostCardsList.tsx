import React from 'react';
import { PostCard } from './components/PostCard/PostCard';
import { PostListType } from '@/types/Post';


export const PostCardsList: React.FC<PostListType> = ({ data }) => {
  return (
    <div className='flex flex-col gap-6'>
      <h2 className='text-center font-bold text-3xl'>Посты</h2>

      <div className='flex justify-center gap-5 flex-wrap'>
        {data.map((post) =>
          <PostCard
            key={post.id}
            title={post.title}
            description={post.description}
            imageUrl={post.imageUrl}
            author={post.author}
            createdAt={post.createdAt}
            slug={post.slug}
          />
        )}
      </div>
    </div>
  );
};
