import PostApiService from "@/services/api/PostsAPI";
import { Locale } from "@/i18n.config";
import { PostForm } from "@/components/PostForm/PostForm";

interface Params {
  params: {
    id: string
    lang: Locale
  }
}

const UpdatePost = ({ params: { id, lang } }: Params) => {
  const postData = PostApiService.getSinglePost(id);
  if(!postData) return;
  return(
    <div className='flex flex-col gap-6'>
      <h1>{`Post id is ${id}, current language - ${lang}`}</h1>
      <p>{postData?.description && postData?.description}</p>
      <PostForm data={postData} />
    </div>
  )
}

export async function generateStaticParams() {
  return []
}

export default UpdatePost;
