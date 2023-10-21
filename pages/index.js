import Head from 'next/head';

import Navbar from '@/utils/components/header';
import FooterNav from '@/utils/components/footer';
import HeroBanner from '@/utils/components/banner'

import Typography from '@mui/material/Typography';
import Container  from '@mui/material/Container';

export default function Page() {
  return (
    <div>
      <Head>
        <title>Elmwood Park Community League</title>
        <meta name="description" content="This is Elmwood Park Community League's official website." />
        <link rel="icon" href="favicon.ico" sizes="any"/>
      </Head>
      <header>
      <Navbar />
      </header>
      <main>
      <HeroBanner />
      </main>
      <footer>
        <FooterNav />
      </footer>
    </div>
  )
}
