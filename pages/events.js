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
          bodyText1=" Elmwood Park is dedicated to the pursuit of excellence through its diverse array of community events. Past highlights include successful swimming events, engaging Walk Your Block initiatives, and numerous other memorable occasions. To stay informed about upcoming events and to plan your participation accordingly, we invite you to peruse our comprehensive event calendar below!"

          heading2="Seasonal Events"
          bodyText2="Elmwood Park takes pride in its commitment to hosting a diverse range of seasonal events throughout the year. For those seeking information on events further in advance, we extend an invitation to contact us directly or refer to our detailed Event Calendar provided below. Additionally, stay connected and informed by regularly visiting our updated Facebook page, where upcoming events are highlighted."
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