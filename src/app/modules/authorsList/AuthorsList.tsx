import React from 'react'
import { AuthorCard } from './components/AuthorCard/AuthorCard';
import { authors } from '@/constants/mocks/authors';

export const AuthorsList = () => {
  return (
    <div className='flex flex-col gap-6'>
      <h2 className='text-center font-bold text-3xl'>Авторы</h2>

      <div className='flex justify-center gap-3 flex-wrap'>
        {authors.map((author, index) =>
          <AuthorCard
            index={index}
            key={author.id}
            firstName={author.firstName}
            lastName={author.lastName}
            slug={author.id}
            imageUrl={author.imageUrl}
          />
        )}
      </div>
    </div>
  )
}
