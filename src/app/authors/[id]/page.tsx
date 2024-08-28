import AuthorsApiService from "@/services/api/AuthorsAPI";

interface Params {
  params: {
    id: string
  }
}

const Author = ({ params: { id } }: Params) => {
  const authorData = AuthorsApiService.getSingleAuthor(id);
  return(
    <div>{authorData?.firstName}</div>
  )
}

export default Author;
