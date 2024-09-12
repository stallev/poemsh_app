import React from 'react';
import { PostForm } from '@/components/PostForm/PostForm';
import { getDictionary } from '@/lib/getDictionary';
import { PostType } from '@/types/Post';
import { Locale } from '@/i18n.config';

interface PostFormLayoutProps {
  data?: PostType | null;
  lang: Locale;
}

const PostFormLayout = async ({ data, lang }: PostFormLayoutProps) => {
  const formProps: { data?: PostType; lang: Locale } = { lang };
  const { post_form, app_settings: { languages } } = await getDictionary(lang);
  const translations = {
    post_form,
    languages
  };

  if (data !== null) {
    formProps.data = data;
  }

  return (
    <PostForm
      data={data ? data : null}
      lang={data ? data?.languageCode : lang}
      translations={translations}
    />
  );
};

export default PostFormLayout;
