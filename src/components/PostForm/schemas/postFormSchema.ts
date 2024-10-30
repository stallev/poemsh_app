import * as z from 'zod';
import { PostFormErrorsTypes } from '../types';
import { PostTitleParams, PostContentParams } from '../constants/FormValues';

export const createClientPostFormSchema = (errors: PostFormErrorsTypes) => {
  return z.object({
    title: z.string()
      .min(PostTitleParams.MinLength, { message: errors.title_required_message })
      .max(PostTitleParams.MaxLength, { message: errors.title_max_length_message }),
    // categories: z.array(z.string()).nonempty({ message: "Должна быть выбрана хотя бы одна категория" }),
    languageCode: z.string().max(2, { message: errors.choosing_lang_message }),
    content: z.string()
      .min(PostContentParams.MinLength, { message: errors.content_min_length_message }),
    imageUrl: z.string().url({ message: errors.image_url_message }).optional(),
  });
};

export const ServerPostFormSchema = z.object({
  title: z.string()
    .min(PostTitleParams.MinLength, { message: "title_required_message" })
    .max(PostTitleParams.MaxLength, { message: "title_max_length_message" }),
  // categories: z.array(z.string()).nonempty({ message: "Должна быть выбрана хотя бы одна категория" }),
  languageCode: z.string().max(2, { message: "choosing_lang_message" }),
  content: z.string()
    .min(PostContentParams.MinLength, { message: "description_min_length_message" }),
  imageUrl: z.string().url({ message: "image_url_message" }).optional(),
  authorId: z.string().min(PostTitleParams.MinLength, { message: "authorId_required_message" })
});

export type ClientPostFormValues = z.infer<ReturnType<typeof createClientPostFormSchema>>;
