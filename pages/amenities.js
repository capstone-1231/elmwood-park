import Head from 'next/head';
import Container from '@mui/material/Container';
import Navbar from '@/utils/components/header';
import FooterNav from '@/utils/components/footer';
import RentalForm from '@/utils/components/rentalForm';

import Typography from '@mui/material/Typography';

import ImgList from '@/utils/components/imgList';
import MobileImgCarousel from '@/utils/components/mobileImgCarousel';
import HeadingWithTextBelowContained from '@/utils/components/headingWithTextBelowContained';
import ContentAreaImageRightBulletedList from '@/utils/components/contentAreaImageRightBulletedList';
import ContentAreaImageLeftButtonMembership from '@/utils/components/contentAreaImageLeftButtonMembership';

export default function Page() {
  return (
    <div>
      <Head>
        <title>Amenities</title>
        <meta name="description" content="This is the Amenities page on Elmwood Park Community League's official website." />
        <link rel="icon" href="favicon.ico" sizes="any"/>
      </Head>
      <header>
      <Navbar />
      </header>
      <main>
      <HeadingWithTextBelowContained
        heading="Amenities"
        paragraph1="Elmwood Park Community League takes pride in offering a 
        diverse range of amenities that cater to the needs and interests 
        of its residents. At the heart of the community, you'll find a well maintained and inviting community center, which serves as a hub 
        for various activities. We also offer:"
      />
      <ContentAreaImageRightBulletedList
        imageSrc="ElmwoodCommunityPark.webp"
        listItem1="Hall with a large fenced in yard that includes a firepit (rent now!)"
        listItem2="Board Room perfect for arts or crafts (rent now!)"
        listItem3="Landscaped Green Space (rent now!)"
        listItem4="Onsite washrooms"
        listItem5="A beautiful gazebo and picnic tables"
        listItem6="Playground"
        listItem7="Spray deck for those hot summer days"
        listItem8="Baseball diamond"
        listItem9="Park like greenspace!"
      />
      <ContentAreaImageLeftButtonMembership
        imageSrc="/img/ElmwoodParkGarden2.webp"
        heading="Community Garden"
        bodyText1="A community garden is a series of garden plots that are taken care of by the community.  Community gardening plots offer sustainable growing space free from all pesticides, herbicides, harsh chemicals, and fertilizers."
        bodyText2="Community gardens serve the community by allowing residents to join together and be social with neighbors, engage in something meaningful, and helps to create and strengthen neighborhood relationships."
        bodyText3="Currently, the league boasts a beautiful community garden with 20 raised beds and is located at 12505-75 St in Edmonton, AB. Membership for your own garden plot is only $40 for the season! A DAMAGE DEPOSIT IS REQUIRED."
        bodyText4="We are always open to improving our garden space, and we welcome all members of Elmwood Park!"
        buttonLink="/contact_us"
        buttonText="Book Now!"
      />
      <HeadingWithTextBelowContained
        heading="Hall Rental"
        paragraph1="Our Board Room is perfect for meetings of any sort or craft nights.  The rate for our Board Room is $50 for the day for members or $75 for the day for non members."
        paragraph2="The Den is a more laid back room, great for card games, small birthday parties or a ladies night. The rate for the Den is $50 for the day for members or $75 for the day for non members."
        paragraph3="The Landscaped Green Space is a small slice of peace and quiet. Our freshly landscaped green space is ideal for any kind of event, large or small. Complete with an outdoor kitchen and pergola! The rate for the Landscaped Green Space is $50 for the day for members or $75 for the day for non members."
        paragraph4="Alternatively, we also offer our Board Room or Den with the Green Space at a rate of $120 for members or $150 for non members. A DAMAGE DEPOSIT IS REQUIRED AND ALL RENTALS COME WITH WASHROOM USE."
      />
      <ImgList/>
      <MobileImgCarousel/>
      <RentalForm id="rental" />
      </main>
      <footer>
        <FooterNav />
      </footer>
    </div>
  )
}