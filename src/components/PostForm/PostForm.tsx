'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { useForm, Controller } from 'react-hook-form';
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
import { Input } from "@/components/ui/input";
import { modules, formats } from '@/constants/RichTextEditorSettings';
import { PostFormDefaultValues } from './constants/FormValues';
import { Locale } from '@/i18n.config';
import 'react-quill/dist/quill.snow.css';

import { PostType } from '@/types/Post';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const formSchema = z.object({
  title: z.string().min(1, { message: "Заголовок обязателен" }).max(100, { message: "Заголовок не должен превышать 100 символов" }),
  description: z.string().max(10000, { message: "Описание не должно превышать 10000 символов" }).optional(),
  imageUrl: z.string().url({ message: "Введите корректный URL изображения" }).optional(),
});

interface PostFormProps {
  data: PostType | null
  lang: Locale
}

export const PostForm = ({ data, lang }: PostFormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: data ? data.title : PostFormDefaultValues.title,
      description: data ? data.description : PostFormDefaultValues.description,
      imageUrl: data ? data.imageUrl : PostFormDefaultValues.image_url,
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
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Описание</FormLabel>
              <FormControl>
                <Controller
                  name="description"
                  control={form.control}
                  render={({ field }) => (
                    <ReactQuill 
                      theme="snow"
                      value={field.value}
                      onChange={field.onChange}
                      modules={modules}
                      formats={formats}
                      style={{ height: '200px', marginBottom: '50px' }}
                    />
                  )}
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
