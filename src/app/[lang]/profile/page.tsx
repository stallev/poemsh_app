import { auth } from '@/auth';
import { Locale } from '@/i18n.config';

interface Params {
  params: {
    lang: Locale
  }
}

const Profile = async ({ params: { lang } }: Params) => {
  const session = await auth();

  return (
    <>
      <h2 className="font-semibold text-2xl">User session data</h2>

      {session ? (
        <div>
          <pre>{JSON.stringify(session, null, 2)}</pre>
        </div>
      ): 
      (<p>No session data</p>)}
    </>
  )
}

export default Profile;
