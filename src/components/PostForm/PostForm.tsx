'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
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
import { PostFormDefaultValues } from './constants/FormValues';
import { Locale } from '@/i18n.config';
import { MultiSelect } from '../CustomSharedUI/MultiSelect/MultiSelect';
import 'react-quill/dist/quill.snow.css';

import { PostType } from '@/types/Post';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const formSchema = z.object({
  title: z.string().min(1, { message: "Заголовок обязателен" }).max(100, { message: "Заголовок не должен превышать 100 символов" }),
  categories: z.array(z.string()).nonempty({ message: "Должна быть выбрана хотя бы одна категория" }),
  languageCode: z.string().max(2, { message: "Выберите язык контента" }),
  description: z.string().max(10000, { message: "Описание не должно превышать 10000 символов" }).optional(),
  imageUrl: z.string().url({ message: "Введите корректный URL изображения" }).optional(),
});
interface PostFormProps {
  data: PostType | null
  lang: Locale
  translations: {
    post_form: {
      categories: Record<string, string>
    }
    languages: Record<Locale, string>
  }
}

export const PostForm = ({ data, lang, translations }: PostFormProps) => {
  const categoryOptions = Object.entries(translations.post_form.categories).map(([key, value]) => ({
    label: value as string,
    value: key
  }));

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: data ? data?.title : PostFormDefaultValues.title,
      categories: data ? data?.categories : [],
      languageCode: data ? data?.languageCode : lang,
      description: data ? data?.description : PostFormDefaultValues.description,
      imageUrl: data ? data?.imageUrl : PostFormDefaultValues.image_url,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values)
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

        <FormField
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
        />

        <FormField
          control={form.control}
          name="description"
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
