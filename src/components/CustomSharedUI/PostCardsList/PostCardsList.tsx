import React from 'react';
import { PostCard } from '../PostCard/PostCard';
import { PostListType } from '@/types/Post';


export const PostCardsList: React.FC<PostListType> = ({ data, lang }) => {
  return (
    <div className='custom-lg-cards-grid'>
      {data.map((post) =>
        <PostCard
          key={post.id}
          title={post.title}
          description={post.description}
          imageUrl={post.imageUrl}
          author={post.author}
          createdAt={post.createdAt}
          slug={post.slug}
          lang={lang}
        />
      )}
    </div>
  );
};
