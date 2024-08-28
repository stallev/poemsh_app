import { AuthorsList } from "@/modules/authorsList/AuthorsList";
import { PostCardsList } from "@/modules/postCardsList/PostCardsList";
import { PostsListData } from "@/constants/mocks/Posts";

export default function Home() {
  return (
    <>
      <AuthorsList />

      <PostCardsList data={PostsListData} />
    </>
  );
}
