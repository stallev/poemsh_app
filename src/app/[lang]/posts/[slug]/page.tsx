import PostApiService from "@/services/api/PostsAPI";
import { PostMainContent } from "@/components/page-specific/post/PostMainContent/PostMainContent";
import { Locale } from "@/i18n.config";
interface Params {
  params: {
    slug: string
    lang: Locale
  }
}

const Post = ({ params: { slug, lang } }: Params) => {
  const postData = PostApiService.getSinglePost(slug);
  return(
    <div className='flex flex-col gap-6'>
      <PostMainContent data={postData} lang={lang}/>
    </div>
  )
}

export async function generateStaticParams() {
  return []
}

export default Post;
