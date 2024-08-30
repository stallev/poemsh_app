
import LandingMainContent from "@/components/page-specific/landing/MainContent/LandingMainContent";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/getDictionary";

export default async function Home({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { pages: { home } } = await getDictionary(lang);
  return (
    <>
      <h1 className="font-bold text-5xl mb-9">{home.title}</h1>

      <LandingMainContent lang={lang} />
      <div id="#sidebar"></div>
    </>
  );
}
