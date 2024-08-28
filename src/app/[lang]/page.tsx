import { AuthorsList } from "@/modules/authorsList/AuthorsList";
import { PostCardsList } from "@/modules/postCardsList/PostCardsList";
import { PostsListData } from "@/constants/mocks/Posts";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/getDictionary";

export default async function Home({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { pages: { home } } = await getDictionary(lang)
  return (
    <>
      <h1 className="font-bold text-5xl mb-9">{home.title}</h1>

      <AuthorsList />

      <PostCardsList data={PostsListData} />
    </>
  );
}
