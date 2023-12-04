import Head from 'next/head';

import Navbar from '@/utils/components/header';
import FooterNav from '@/utils/components/footer';
import HeroBanner from '@/utils/components/banner';
import ContentWithImageLeftTruncated from '@/utils/components/contentAreaImageLeftTruncated';
import ContentWithImageRightTruncated from '@/utils/components/contentAreaImageRightTruncated';
import HomeCards from '@/utils/components/homeCards';
import CardCarousel from '@/utils/components/cardCarousel';

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
      <ContentWithImageLeftTruncated
        imageSrc="img/community-hands-on-tree-edited.webp"
        heading="Welcome to Elmwood&nbsp;Park"
        bodyText="Elmwood Park Community League (EPCL) is a vibrant and active neighborhood organization located in the heart of Edmonton, Alberta, Canada. Founded with a mission to strengthen community bonds, enhance quality of life, and promote a sense of belonging among residents, EPCL has become an integral part of the Elmwood Park neighborhood. With a rich history dating back several decades, the league continues to evolve and adapt to meet the changing needs of its diverse and growing community. One of the primary functions of Elmwood Park Community League is to provide a space where residents can come together, share ideas, and collaborate on initiatives that benefit the entire neighborhood. Regular community meetings and events are organized to facilitate this engagement. These gatherings offer a platform for residents to voice their concerns, propose improvements, and work collectively on projects that enhance the area's livability."
      />
      <Container>
        <Typography variant="h2" component="h2" gutterBottom>What&apos;s New:</Typography>
      </Container>
        <HomeCards/>
        <CardCarousel/>
        <ContentWithImageRightTruncated 
          imageSrc="ElmwoodCommunityPark.webp"
          heading="Explore Elmwood Park"
          bodyText="
          Elmwood Park Community League thrives amidst a bustling mix of businesses and eateries. Priscilla's Pet Emporium & Parlour delights pet owners with grooming services and supplies, while Delton Veterinarian ensures the health of local pets. Cougar Paint & Collision caters to automotive needs, and Butchers & Packers Supplies is a haven for culinary enthusiasts. Ideal Medical Centre provides essential healthcare services. For food lovers, Transit Smokehouse & BBQ offers delectable BBQ dishes, Ukraine's Kitchen brings Eastern European flavors, and Sals's Famous is renowned for its unique culinary creations, making this area a vibrant community hub."
        />
      </main>
      <footer>
        <FooterNav />
      </footer>
    </div>
  )
}
