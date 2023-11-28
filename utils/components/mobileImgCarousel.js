import * as React from 'react';
import Carousel from 'react-material-ui-carousel';
import Container from '@mui/material/Container';

export default function MobileImgCarousel() {
    const itemData = [
        {
            img: './img/ElmwoodParkBoardRoom.webp',
            title: 'Board Room',
          },
          {
            img: './img/ElmwoodParkBoardRoom2.webp',
            title: 'Board Room',
          },
          {
            img: './img/ElmwoodParkBoardRoom3.webp',
            title: 'Board Room',
          },
        
          {
            img: './img/ElmwoodParkDen.webp',
            title: 'Den',
          },
          {
            img: './img/ElmwoodParkDen2.webp',
            title: 'Den',
          },
          {
            img: './img/ElmwoodParkDen3.webp',
            title: 'Den',
          },
          {
            img: './img/ElmwoodParkElectrical.webp',
            title: 'Electrical Room',
          },
          {
            img: './img/ElmwoodParkFurnace.webp',
            title: 'Furnace Room',
          },
          {
            img: './img/ElmwoodParkGarden.webp',
            title: 'Garden',
          },
          {
            img: './img/ElmwoodParkGarden2.webp',
            title: 'Garden',
          },
          {
            img: './img/ElmwoodParkKitchen.webp',
            title: 'Kitechen',
          },
          {
            img: './img/ElmwoodParkKitechen2.webp',
            title: 'Kitechen',
          },
          {
            img: './img/ElmwoodParkOffice.webp',
            title: 'Office',
          },
          {
            img: './img/ElmwoodParkOffice2.webp',
            title: 'Office',
          },
          {
            img: './img/ElmwoodParkOffice4.webp',
            title: 'Office',
          },
          {
            img: './img/ElmwoodParkOutside.webp',
            title: 'Outter Area',
          },
          {
            img: './img/ElmwoodParkOutside2.webp',
            title: 'Outter Area',
          },
          {
            img: './img/ElmwoodParkOutside3.webp',
            title: 'Outter Area',
          },
          {
            img: './img/ElmwoodParkOutside4.webp',
            title: 'Outter Area',
          },
          {
            img: './img/ElmwoodParkOutside5.webp',
            title: 'Outter Area',
          },
    ];

    return (
        <Container sx={{
            minHeight: '10vh',
            width: '100%',
            display: { xs: "block", sm: "block", md: "block", lg: "none", xl: "none" },
            paddingBottom: '1.5rem'
        }}>
            <Carousel sx={{ width: '90%', margin: '0 auto' }}>
                {itemData.map((item) => (
                    <img
                        key={item.img}
                        src={item.img}
                        alt={item.title}
                        style={{ width: '100%', height: 'auto' }}
                    />
                ))}
            </Carousel>
        </Container>
    );
}
