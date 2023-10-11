import Head from 'next/head';

import Typography from '@mui/material/Typography';

export default function Page() {
  return (
    <div>
      <Head>
        <title>Elmwood Park Community League</title>
        <meta name="description" content="This is Elmwood Park Community League's official website." />
        <link rel="icon" href="favicon.ico" sizes="any"/>
      </Head>
      <main>
      <Typography variant="h2" component="h2" color="secondary">Welcome to Elmwood Park</Typography>
      </main>
    </div>
  )
}
