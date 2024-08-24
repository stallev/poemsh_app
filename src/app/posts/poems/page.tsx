import { PostCardsList } from "@/modules/postCardsList/PostCardsList";
import { PostsListData } from "@/constants/mocks/Posts";

export default function Poems() {
  return (
    <>
      <PostCardsList data={PostsListData} />
    </>
  );
}
