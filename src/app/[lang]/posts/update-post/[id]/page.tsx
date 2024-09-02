import PostFormLayout from "@/containers/PostFormLayout/PostFormLayout";
import PostApiService from "@/services/api/PostsAPI";
import { Locale } from "@/i18n.config";

interface Params {
  params: {
    id: string
    lang: Locale
  }
}

const UpdatePost = ({ params: { id, lang } }: Params) => {
  const postData = PostApiService.getSinglePost(id);
  return(
    <div className='flex flex-col gap-6'>
      <h1 className='text-3xl font-bold'>Update post</h1>

      <PostFormLayout
        data={postData}
        lang={lang}
      />
    </div>
  )
}

export async function generateStaticParams() {
  return []
}

export default UpdatePost;
