import Head from 'next/head';

import Navbar from '@/utils/components/header';
import FooterNav from '@/utils/components/footer';

import Typography from '@mui/material/Typography';

import ActionAreaCard from '@/utils/components/aboutusCards';
import Container from '@mui/material/Container';
import MobileCards from '@/utils/components/mobileCards';


export default function Page() {
  return (
    <div>
      <Head>
        <title>About Us</title>
        <meta name="description" content="This is the About Us page on Elmwood Park Community League's official website." />
        <link rel="icon" href="favicon.ico" sizes="any" />
      </Head>
      <header>
        <Navbar />
      </header>
      <main>
        <Typography variant="h2" component="h2" color="secondary" sx={{ padding: '2rem 1rem', textAlign: 'center' }} >About Us</Typography>
          <ActionAreaCard />
          <MobileCards></MobileCards>
      </main>
      <footer>
        <FooterNav />
      </footer>
    </div>
  )
}
