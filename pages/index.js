import Head from 'next/head';

import Navbar from '@/utils/components/header';
import FooterNav from '@/utils/components/footer';
import HeroBanner from '@/utils/components/banner';
import ContentWithImage from '@/utils/components/contentAreaImageLeft';

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
      <ContentWithImage
        imageSrc="park-image.webp"
        heading="Elmwood Park"
        bodyText="Elmwood Park Community League (EPCL) is a vibrant and active neighborhood organization located in the heart of Edmonton, Alberta, Canada. Founded with a mission to strengthen community bonds, enhance quality of life, and promote a sense of belonging among residents, EPCL has become an integral part of the Elmwood Park neighborhood. With a rich history dating back several decades, the league continues to evolve and adapt to meet the changing needs of its diverse and growing community. One of the primary functions of Elmwood Park Community League is to provide a space where residents can come together, share ideas, and collaborate on initiatives that benefit the entire neighborhood. Regular community meetings and events are organized to facilitate this engagement. These gatherings offer a platform for residents to voice their concerns, propose improvements, and work collectively on projects that enhance the area's livability."
      />
      </main>
      <footer>
        <FooterNav />
      </footer>
    </div>
  )
}
