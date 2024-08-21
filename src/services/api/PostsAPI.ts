import { PostsListData } from "@/constants/mocks/Posts";

class PostApiService {
  static getSinglePost(slug: string) {
    return PostsListData.find(item => item.slug == slug)
  }
};

export default PostApiService;