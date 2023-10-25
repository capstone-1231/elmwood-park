import Head from 'next/head';
import Container from '@mui/material/Container';
import Navbar from '@/utils/components/header';
import FooterNav from '@/utils/components/footer';

import Typography from '@mui/material/Typography';

import HomeCard from '@/utils/components/homeCards';

export default function Page() {
  return (
    <div>
      <Head>
        <title>Amenities</title>
        <meta name="description" content="This is the Amenities page on Elmwood Park Community League's official website." />
        <link rel="icon" href="favicon.ico" sizes="any"/>
      </Head>
      <header>
      <Navbar />
      </header>
      <main>
      <Typography variant="h2" component="h2" color="secondary" sx={{ padding: '2rem 1rem', textAlign: 'center' }} >Amenities</Typography>
      <Typography variant='h2' sx={{ width: '100%', padding: '1rem' }}>What's New</Typography>
      <HomeCard/>
      </main>
      <footer>
        <FooterNav />
      </footer>
    </div>
  )
}