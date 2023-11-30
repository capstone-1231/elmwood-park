import Head from 'next/head';

import Navbar from '@/utils/components/header';
import FooterNav from '@/utils/components/footer';

import Container from '@mui/material/Container'

import GoogleCalendar from '@/utils/components/googleCalendar';
import ContentWithImageRight2 from '@/utils/components/contentAreaImageRight2';
import TopHeading from '@/utils/components/topHeading';

export default function Page() {
  return (
    <div>
      <Head>
        <title>Events</title>
        <meta name="description" content="This is the Events page on Elmwood Park Community League's official website." />
        <link rel="icon" href="favicon.ico" sizes="any" />
      </Head>
      <header>
        <Navbar />
      </header>
      <main>
      <TopHeading
          heading="Events"
      />
        <ContentWithImageRight2
          imageSrc="./img/community-garden.webp"
          heading="Community Events"
          bodyText1="While our Community League can be enjoyed completely free by anyone, our Membership gives Elmwood League residents some bonus features! These features give Elmwood residents many additional
        perks like discounts with our affiliates, larger community garden plot space, reduced rent fees on our rented spaces, and much more!"

          heading2="Local Events"
          bodyText2="Elmwood Park Community League is currently looking for individuals who would like to sit on one of the new committees!  This opportunity requires less personal time but still allows you to help make a difference in your community!  

        Elmwood Park Community League is always looking for volunteers to help with community events! 
        
        Contact us at epcl.info @ shaw.ca or check us out on Facebook to see how you can help make a difference!"
        />
        <Container>
          <GoogleCalendar />
        </Container>
      </main>
      <footer>
        <FooterNav />
      </footer>
    </div>
  )
}