import Head from 'next/head';

import Navbar from '@/utils/components/header';
import FooterNav from '@/utils/components/footer';
import ImgList from '@/utils/components/imgList';
import Typography from '@mui/material/Typography';

import MobileImgCarousel from '@/utils/components/mobileImgCarousel';
import ContentAreaImageRightBulletedList from '@/utils/components/contentAreaImageRightBulletedList';

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
      <Typography variant="h2" component="h2" color="secondary" sx={{ padding: '2rem 1rem', textAlign: 'center' }} >Membership</Typography>
      <ContentAreaImageRightBulletedList
        imageSrc="ElmwoodCommunityPark.webp"
        listItem1="Papa John's pizza - 30% discount off all online orders. Just use the code PAULA30"
        
      />
      <ImgList/>
      <MobileImgCarousel/>
      </main>
      <footer>
        <FooterNav />
      </footer>
    </div>
  )
}