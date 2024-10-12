import { prismaClient } from "@/lib/prismaClient";
import { PostsListData } from "@/constants/mocks/Posts";
// import { Post, Prisma } from "@prisma/client";

class PostApiService {
  static getSinglePost(slug: string) {
    const postData = PostsListData.find(item => item.slug == slug);

    return postData?.title ? postData : PostsListData[0];
  }

  static async getPosts() {
    const posts = await prismaClient.post.findMany({
      include: {
        author: {
          select: { name: true }
        },
      },
      orderBy: {
        createdAt: 'desc'
      }
    })
    return posts
  }

  // static async createPost(data: Prisma.PostCreateInput): Promise<Post> {
  //   try {
  //     const newPost = await prismaClient.post.create({
  //       data: {
  //         title: data.title,
  //         content: data.content,
  //         author: {
  //           connect: { id: data.author.connect?.id }
  //         },
  //         image: data.image,
  //         status: data.status || 'PUBLISHED',
  //         languageCode: data.languageCode,
  //         categories: {
  //           create: Array.isArray(data.categories)
  //             ? data.categories.map(categorySlug => ({
  //               category: {
  //                 connect: { slug: categorySlug }
  //               }
  //             }))
  //             : [{
  //               category: {
  //                 connect: { slug: 'other' }
  //               }
  //             }]
  //         }
  //       },
  //       include: {
  //         author: true,
  //         categories: {
  //           include: {
  //             category: true
  //           }
  //         }
  //       }
  //     });
  //     return newPost;
  //   } catch (error) {
  //     console.error('Error creating post:', error);
  //     throw error;
  //   }
  // }

  // static async updatePost(id: string, data: Prisma.PostUpdateInput): Promise<Post> {
  //   try {
  //     const updatedPost = await prismaClient.post.update({
  //       where: { id },
  //       data: {
  //         title: data.title,
  //         content: data.content,
  //         image: data.image,
  //         status: data.status,
  //         languageCode: data.languageCode,
  //         categories: {
  //           deleteMany: {},
  //           create: Array.isArray(data.categories) && data.categories.length > 0
  //             ? data.categories.map((categorySlug: string) => ({
  //               category: {
  //                 connect: { slug: categorySlug }
  //               }
  //             }))
  //             : [{
  //               category: {
  //                 connect: { slug: 'other' }
  //               }
  //             }]
  //         }
  //       },
  //       include: {
  //         author: true,
  //         categories: {
  //           include: {
  //             category: true
  //           }
  //         }
  //       }
  //     });
  //     return updatedPost;
  //   } catch (error) {
  //     console.error('Error updating post:', error);
  //     throw error;
  //   }
  // }
}

export default PostApiService;
