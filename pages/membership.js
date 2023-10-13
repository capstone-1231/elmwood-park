import Head from 'next/head';

import Navbar from '@/utils/components/header';

import Typography from '@mui/material/Typography';

export default function Page() {
  return (
    <div>
      <Head>
        <title>Membership</title>
        <meta name="description" content="This is the About Us page Elmwood Park Community League's official website." />
        <link rel="icon" href="favicon.ico" sizes="any"/>
      </Head>
      <header>
      <Navbar />
      </header>
      <main>
      <Typography variant="h2" component="h2" color="secondary" sx={{ padding: '2rem 1rem' }} >Membership</Typography>
      </main>
    </div>
  )
}