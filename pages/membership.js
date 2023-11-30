import Head from 'next/head';

import Navbar from '@/utils/components/header';
import FooterNav from '@/utils/components/footer';
import Typography from '@mui/material/Typography';

import ContentAreaImageRightBulletedList from '@/utils/components/contentAreaImageRightBulletedList';
import HeadingWithTextBelowContained from '@/utils/components/headingWithTextBelowContained';
import ContentAreaImageLeftButtonMembership from '@/utils/components/contentAreaImageLeftButtonMembership';
import TopHeading from '@/utils/components/topHeading';

export default function Page() {
  return (
    <div>
      <Head>
        <title>Membership</title>
        <meta name="description" content="This is the Membership page on Elmwood Park Community League's official website." />
        <link rel="icon" href="favicon.ico" sizes="any"/>
      </Head>
      <header>
      <Navbar />
      </header>
      <main>
      <TopHeading
          heading="Membership"
      />
      <HeadingWithTextBelowContained
        heading="Member Perks"
        paragraph1="While our Community League can be enjoyed completely free by anyone, our Membership gives Elmwood League residents some bonus features! These features give Elmwood residents many additional perks like discounts with our affiliates, larger community garden plot space, reduced rent fees on our rented spaces, and much more!"
      />
      <ContentAreaImageRightBulletedList
        imageSrc="img/playground-a.webp"
        listItem1="Papa John's pizza - 30% discount off all online orders. Just use the code PAULA30"
        listItem2="Cloverdale Paint - Show your card to receive a discount on all paint and 20% sundry items."
        listItem3="The University of Alberta Technology Training Center also offers a discount for computer courses. Contact the University directly for details."
        listItem4="Present your valid Edmonton community league membership card at any one of the City of Edmonton's sports and fitness facilities and choose one of our Community League Wellness Products."
        listItem5="Annual Pass* - 10% discount on Adult, Family, Child, and Youth/Senior Annual Passes"
        listItem6="Multi Admission Pass* - 10% discount on our already discounted multi admission pass (10+ visits)"
        listItem7="Continuous Monthly Pass - 10% discount off an on-going monthly membership pass using our convenient Pre-Authorized Debit Program."
        listItem8="Free skating at any community league rinks! (grab a skate tag with your membership)"
        listItem9="Eligible to purchase an associate membership at other community leagues and can take advantage of the programs and free swim times that those leagues offer."
        listItem10="Sports team registration (offered through various leagues)."
        listItem11="Vote at our league's Annual General Meeting and/or run for the league board."
      />
      <ContentAreaImageLeftButtonMembership
        imageSrc="passion-led-us-here.webp"
        heading="Membership Purchasing"
        bodyText1="Purchasing a membership with the Elmwood Park Community League (EPCL) is a gateway to becoming an active participant in one of Edmonton's vibrant and tightly-knit communities. EPCL membership offers numerous benefits that not only enrich your personal life but also contribute to the overall well-being of the neighborhood. Here, we'll explore why investing in an EPCL membership is a valuable choice."
        buttonLink="https://efcl.org/membership-purchase/"
        buttonText="Get Membership"
      />
      </main>
      <footer>
        <FooterNav />
      </footer>
    </div>
  )
}