import React from 'react'
import { AuthorCard } from '../AuthorCard/AuthorCard';
import { AuthorType } from '@/types/Post';

export const AuthorsList = ({ data, lang }: { data: AuthorType[], lang: string }) => {
  return (
    <div className='custom-small-cards-grid'>
      {data.map((author, index) =>
        <AuthorCard
          index={index}
          key={author.id}
          firstName={author.firstName}
          lastName={author.lastName}
          slug={author.id}
          imageUrl={author.imageUrl}
          lang={lang}
        />
      )}
    </div>
  )
}
