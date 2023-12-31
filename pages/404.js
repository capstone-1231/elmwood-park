import dynamic from 'next/dynamic';
import Head from 'next/head';
import Button from '@mui/material/Button';
import Navbar from '@/utils/components/header';
import FooterNav from '@/utils/components/footer';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function Page() {
  return (
    <div>
      <Head>
        <title>Elmwood Park Community League</title>
        <meta name="description" content="This is Elmwood Park Community League's official website." />
        <link rel="icon" href="favicon.ico" sizes="any" />
      </Head>
      <header>
        <Navbar />
      </header>
      <main>
        <Container sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', paddingTop: '1rem'}}>
          <Typography variant="h1">404</Typography>
          <Typography variant="h5">Page Not Found</Typography>
          <Typography variant="body1">The page you are looking for might be in another Park.</Typography>
          <Link href="/">
            <Button variant="contained" color="primary" size="large" style={{ marginTop: 20 }}>
              Take Me Home!
            </Button>
          </Link>
        </Container>
      </main>
      <footer>
        <FooterNav />
      </footer>
    </div>
  )
}
