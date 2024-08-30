import React from 'react'
import { AuthorsList } from "@/components/CustomSharedUI/AuthorsList/AuthorsList";
import { PostCardsList } from "@/components/CustomSharedUI/PostCardsList/PostCardsList";
import { AuthorsData } from "@/constants/mocks/authors";
import { PostsListData } from "@/constants/mocks/Posts";
import { LandingMainContentProps } from './types';

export const LandingMainContent: React.FC<LandingMainContentProps> = ({ lang }) => {
  const lastPosts = PostsListData
    .sort((a, b) => (new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()))
    .slice(0, 6);

  const selectedAuthors = AuthorsData.slice(0, 6);
  return (
    <div id="#maincontent" className='flex flex-col gap-10'>
      <div className='flex flex-col gap-6'>
        <h2 className='text-center font-bold text-3xl'>Авторы</h2>

        <AuthorsList data={selectedAuthors} lang={lang} />
      </div>

      <div className='flex flex-col gap-6'>
        <h2 className='text-center font-bold text-3xl'>Посты</h2>

        <PostCardsList data={lastPosts} lang={lang} />
      </div>
    </div>
  )
}

export default LandingMainContent;