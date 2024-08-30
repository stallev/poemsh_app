import { PostCardsList } from "@/components/CustomSharedUI/PostCardsList/PostCardsList";
import { PostsListData } from "@/constants/mocks/Posts";
import { Locale } from "@/i18n.config";

export default function Poems({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  return (
    <>
      <h1 className='text-center font-bold text-3xl'>Посты</h1>

      <PostCardsList data={PostsListData} lang={lang} />
    </>
  );
}
