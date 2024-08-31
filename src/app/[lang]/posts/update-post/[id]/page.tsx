import { Locale } from "@/i18n.config";

interface Params {
  params: {
    id: string
    lang: Locale
  }
}

const UpdatePost = ({ params: { id, lang } }: Params) => {
  return(
    <h1>{`Post id is ${id}, current language - ${lang}`}</h1>
  )
}

export async function generateStaticParams() {
  return []
}

export default UpdatePost;
