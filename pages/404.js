import Head from 'next/head';

import Navbar from '@/utils/components/header';
import FooterNav from '@/utils/components/footer';
import HeroBanner from '@/utils/components/banner';
import ContentWithImageLeft from '@/utils/components/contentAreaImageLeft';
import ContentWithImageRight from '@/utils/components/contentAreaImageRight';
import HomeCards from '@/utils/components/homeCards';
import CardCarousel from '@/utils/components/cardCarousel';

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
      <Typography variant="h2" component="h2" color="secondary" sx={{ padding: '2rem 1rem', textAlign: 'center' }} >This is the 404 page!</Typography>
      </main>
      <footer>
        <FooterNav />
      </footer>
    </div>
  )
}
