import PostApiService from "@/services/api/PostsAPI";

interface Params {
  params: {
    slug: string
  }
}

const Post = ({ params: { slug } }: Params) => {
  const postData = PostApiService.getSinglePost(slug);
  return(
    <div>{postData?.title}</div>
  )
}

export default Post;
