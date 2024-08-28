import { AuthorsList } from "@/modules/authorsList/AuthorsList";
import { Locale } from "@/i18n.config";

export default function Authors({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  return (
    <>
      <AuthorsList lang={lang} />
    </>
  );
}
