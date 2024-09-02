import React from 'react';
import { PostForm } from '@/components/PostForm/PostForm';
import { PostType } from '@/types/Post';
import { Locale } from '@/i18n.config';

interface PostFormLayoutProps {
  data?: PostType | null;
  lang: Locale;
}

const PostFormLayout = ({ data, lang }: PostFormLayoutProps) => {
  const formProps: { data?: PostType; lang: Locale } = { lang };

  if (data !== null) {
    formProps.data = data;
  }

  return (
    <PostForm data={data ? data : null} lang={lang} />
  );
};

export default PostFormLayout;
