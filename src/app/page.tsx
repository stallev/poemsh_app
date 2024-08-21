import { AuthorsList } from "./modules/authorsList/AuthorsList";
import { PostCardsList } from "./modules/postCardsList/PostCardsList";
import { PostsListData } from "@/constants/mocks/Posts";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-8 p-24">
      <AuthorsList/>
      
      <PostCardsList data={PostsListData}/>
    </main>
  );
}
