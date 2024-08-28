import { PostCardsList } from "@/modules/postCardsList/PostCardsList";
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
