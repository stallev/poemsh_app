import PostFormLayout from "@/containers/PostFormLayout/PostFormLayout";
import { Locale } from "@/i18n.config";

interface Params {
  params: {
    lang: Locale
  }
}

const NewPost = ({ params: { lang } }: Params) => {
  return(
    <div className='flex flex-col gap-6'>
      <h1 className='text-3xl font-bold'>New post</h1>
      
      <PostFormLayout
        data={null}
        lang={lang}
      />
    </div>
  )
}

export async function generateStaticParams() {
  return []
}

export default NewPost;
