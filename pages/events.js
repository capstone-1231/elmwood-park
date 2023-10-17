import Head from 'next/head';

import Navbar from '@/utils/components/header';
import FooterNav from '@/utils/components/footer';

import Typography from '@mui/material/Typography';

export default function Page() {
  return (
    <div>
      <Head>
        <title>Events</title>
        <meta name="description" content="This is the Events page on Elmwood Park Community League's official website." />
        <link rel="icon" href="favicon.ico" sizes="any"/>
      </Head>
      <header>
      <Navbar />
      </header>
      <main>
      <Typography variant="h2" component="h2" color="secondary" sx={{ padding: '2rem 1rem', textAlign: 'center' }} >Events</Typography>
      </main>
      <footer>
        <FooterNav />
      </footer>
    </div>
  )
}