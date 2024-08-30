import { PostCardsList } from "@/components/CustomSharedUI/PostCardsList/PostCardsList";
import { PostsListData } from "@/constants/mocks/Posts";
import { Locale } from "@/i18n.config";

export default function Posts({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  return (
    <>
      <PostCardsList data={PostsListData} lang={lang} />
    </>
  );
}
