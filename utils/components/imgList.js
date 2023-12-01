import * as React from 'react';
import Carousel from 'react-material-ui-carousel';
import Container from '@mui/material/Container';

export default function ImgList() {
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
      img: './img/ElmwoodParkGarden.webp',
      title: 'Garden',
    },
    {
      img: './img/ElmwoodParkGarden2.webp',
      title: 'Garden',
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
      minHeight: '12vh',
      display: { xs: "none", sm: "none", md: "none", lg: "block", xl: "block" },
      alignContent: 'center',
      justifyContent: 'center',
    }}>
      <Carousel>
        {itemData.map((item) => (
          <img
            key={item.img}
            src={item.img}
            alt={item.title}
            style={{ width: '100%', height: '60%', paddingLeft: '0.5rem'}}
          />
        ))}
      </Carousel>
    </Container>
  );
}