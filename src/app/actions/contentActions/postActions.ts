'use server';

import { prismaClient } from '@/lib/prismaClient';
import { ActionResult } from '@/types';
import { Post } from '@prisma/client';
import { RequestErrors, RequestStatuses } from '@/constants/RequestStatusesErrors';
import { ServerPostFormSchema, ClientPostFormValues } from '@/components/PostForm/schemas/postFormSchema';

export async function createPostAction(data: ClientPostFormValues, author: string): Promise<ActionResult<Post>> {

  try {
    const validated = ServerPostFormSchema.safeParse({ ...data, authorId: author });

    if (!validated.success) {
      throw new Error('Validation failed');
    }

    const { data: { title, content, imageUrl, languageCode, authorId } } = validated;

    const newPost = await prismaClient.post.create({
      data: {
        title,
        content,
        image: imageUrl,
        languageCode,
        authorId,
      }
    });

    return {
      status: RequestStatuses.success,
      data: newPost
    };
  } catch (error) {
    console.error('Post creation error:', error);

    return { status: RequestStatuses.error, error: RequestErrors.something_wents_wrong };
  }
}

export const getAuthorsPosts = async(authorId: string): Promise<ActionResult<Post[]>> => {
  try {
    const postsList = await prismaClient.post.findMany({
      where: {
        authorId
      }
    });

    return {
      status: RequestStatuses.success,
      data: postsList,
    };
  } catch (error) {
    console.error('Post list fetching error:', error);

    return { status: RequestStatuses.error, error: RequestErrors.something_wents_wrong };
  }
}
