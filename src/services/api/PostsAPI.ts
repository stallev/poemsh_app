import { PostsListData } from "@/constants/mocks/Posts";

class PostApiService {
  static getSinglePost(slug: string) {
    const postData = PostsListData.find(item => item.slug == slug);
    
    return postData?.title ? postData : PostsListData[0];
  }
};

export default PostApiService;
