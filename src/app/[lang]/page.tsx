
import { auth } from "@/auth";
import LandingMainContent from "@/components/page-specific/landing/MainContent/LandingMainContent";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/getDictionary";

export default async function Home({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const session = await auth();
  console.log(session);
  const { pages: { home } } = await getDictionary(lang);
  return (
    <>
      <h1 className="font-bold text-5xl mb-9">{home.title}</h1>

      <h2 className="font-semibold text-2xl">User session data</h2>
      {session ? (
        <div>
          <pre>{JSON.stringify(session, null, 2)}</pre>
        </div>
      ): 
      (<p>No session data</p>)}
      <LandingMainContent lang={lang} />
      <div id="#sidebar"></div>
    </>
  );
}
