import { prismaClient } from "@/lib/prismaClient";
import { PostsListData } from "@/constants/mocks/Posts";

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
};

export default PostApiService;
