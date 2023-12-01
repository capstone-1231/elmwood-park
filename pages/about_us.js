import Head from 'next/head';

import Navbar from '@/utils/components/header';
import FooterNav from '@/utils/components/footer';

import Typography from '@mui/material/Typography';

import ActionAreaCard from '@/utils/components/aboutusCards';
import Container from '@mui/material/Container';
import MobileCards from '@/utils/components/mobileCards';
import ContentWithImageLeftButton from '@/utils/components/contentAreaImageLeftButton';
import ContentWithImageRight from '@/utils/components/contentAreaImageRight';
import MembersQuote from '@/utils/components/memberQuotesAndMems';
import TopHeading from '@/utils/components/topHeading';


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
        <TopHeading
          heading="About Us"
        />
        <ContentWithImageRight
          imageSrc="ElmwoodBoundries.webp"
          heading="Elmwood Park"
          bodyText1="Elmwood Park Community League is a small community league located in the Elmwood Park. Elmwood Park has been an integral part within the community, hosting seasonal events and get-togethers for all individuals. Although small, Elmwood Park continues to grow and expand its projects and outreach. These include events like Walk Your Block, Volunteer Opportunities as-well as the planting of Elm Tree all around the community for the Veterans who live in the community."
          bodyText2="Recently, Elmwood Park has renovated and completed its newest Den, which is also available for rental. Furthermore, the Community Garden has also undergone renovations and expanded into a much larger plot allowing for additional community members to come and reserve their garden plot!"
        />
        <ContentWithImageLeftButton
          imageSrc="./img/Law.webp"
          heading="Current Bylaws"
          bodyText1="These bylaws were assumed from a template provided by the Edmonton Federation of Community Leagues and edited to suit Elmwood Park Community League. A vote was held at the AGM on September 26th, 2018 and the new bylaws were adopted."
          bodyText2="Elmwood Park Community League prides itself on these Bylaws introduced by the Edmonton Federation of the Community Leagues."
          bodyText3="All residents and community staff members respect these bylaws and expect all individuals to obey and abide by these bylaws."
          bodyText4="​If you have any questions, please email president Morgan Wolf at ElmwoodparkCl.info@gmail.com or attend one of the monthly meetings!"
          buttonLink="/files/EPCL_Bylaws_2018.pdf"
          buttonText="View Bylaws"
        />
        <Container>
          <Typography variant="h2" component="h2" color="#816719" sx={{ padding: '2rem 1rem', textAlign: 'center' }} >View Our Members!
          </Typography>
          <MembersQuote />
        </Container>
        <ActionAreaCard />
        <MobileCards />
        <Container>
          <Typography variant="h3" component="h2" color="#816719" sx={{ padding: '2rem 1rem', textAlign: 'center' }}>
              Members at Large
          </Typography>
          <Typography sx={{ paddingBottom: '1rem', textAlign: 'center' }}>
              Jaqueline Williams, Phil Moore, Cindy Verner
          </Typography>
        </Container>
      </main>
      <footer>
        <FooterNav />
      </footer>
    </div>
  )
}
