import { AuthorsList } from "@/components/CustomSharedUI/AuthorsList/AuthorsList";
import { AuthorsData } from "@/constants/mocks/authors";
import { Locale } from "@/i18n.config";

export default function Authors({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  return (
    <>
      <h1 className='text-center font-bold text-3xl'>Авторы</h1>

      <AuthorsList data={AuthorsData} lang={lang} />
    </>
  );
}
