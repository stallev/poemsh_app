'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input";
import { modules, formats } from '@/constants/RichTextEditorSettings';
import { RoutePath } from '@/constants/RoutePath';
import { PostFormDefaultValues } from './constants/FormValues';
import { Locale } from '@/i18n.config';
import { PostFormErrorsTypes } from './types';
import { createPostAction } from '@/app/actions/contentActions/postActions';
import { createClientPostFormSchema, ClientPostFormValues } from './schemas/postFormSchema';
import { isErrorResult, isSuccessResult } from '@/lib/typingGuardRequestResult';
// import { MultiSelect } from '../CustomSharedUI/MultiSelect/MultiSelect';
import 'react-quill/dist/quill.snow.css';

import { PostType } from '@/types/Post';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

interface PostFormProps {
  data: PostType | null
  lang: Locale
  author: string | undefined
  translations: {
    post_form: {
      categories: Record<string, string>,
      errors: PostFormErrorsTypes
    }
    languages: Record<Locale, string>
  }
}

export const PostForm = ({ data, lang, translations, author }: PostFormProps) => {
  const router = useRouter();
  // const session = useSession();
  // console.log('session', session);

  const clientFormSchema = createClientPostFormSchema(translations.post_form.errors);

  const categoryOptions = Object.entries(translations.post_form.categories).map(([key, value]) => ({
    label: value as string,
    value: key
  }));
  // console.log(translations)

  const form = useForm<ClientPostFormValues>({
    resolver: zodResolver(clientFormSchema),
    defaultValues: {
      title: data ? data?.title : PostFormDefaultValues.title,
      // categories: data ? data?.categories : [],
      languageCode: data ? data?.languageCode : lang,
      content: data ? data?.description : PostFormDefaultValues.description,
      imageUrl: data ? data?.imageUrl : PostFormDefaultValues.image_url,
    },
  });

  const onSubmit = async (values: ClientPostFormValues) => {
    if(!author) return null;

    try {
      const results = await createPostAction(values, author);
  
      if (isSuccessResult(results)) {
        router.push(`${RoutePath.Poems}/${results.data.id}`)
      } else if(isErrorResult(results)) {
        console.log('Error creating post:', results.error);
      }
    } catch (error) {
      // Обработка неожиданных ошибок
      console.error('Unexpected error:', error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Заголовок</FormLabel>
              <FormControl>
                <Input placeholder="Введите заголовок" {...field} />
              </FormControl>
              <FormDescription>
                Это заголовок вашего поста.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="languageCode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Язык контента</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a language of the content" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {Object.entries(translations.languages).map(([key, value]) => (
                    <SelectItem key={key} value={key}>
                      {value}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormDescription>
                Выберите язык контента для вашего поста.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* <FormField
          control={form.control}
          name="categories"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Категории</FormLabel>
              <FormControl>
                <MultiSelect
                  options={categoryOptions}
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  placeholder="Выберите категории"
                />
              </FormControl>
              <FormDescription>
                Выберите одну или несколько категорий для вашего поста.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        /> */}

        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Описание</FormLabel>
              <FormControl>
                <ReactQuill
                  theme="snow"
                  value={field.value}
                  onChange={field.onChange}
                  modules={modules}
                  formats={formats}
                  style={{ height: '200px', marginBottom: '50px' }}
                />
              </FormControl>
              <FormDescription>
                Подробное описание вашего поста.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="imageUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>URL изображения</FormLabel>
              <FormControl>
                <Input placeholder="Введите URL изображения" {...field} />
              </FormControl>
              <FormDescription>
                URL изображения для вашего поста.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Сохранить изменения</Button>
      </form>
    </Form>
  );
};
