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
      title: 'Burger',
    },
    {
      img: './img/ElmwoodParkBoardRoom3.webp',
      title: 'Camera',
    },
  
    {
      img: './img/ElmwoodParkDen.webp',
      title: 'Coffee',
    },
    {
      img: './img/ElmwoodParkDen2.webp',
      title: 'Hats',
    },
    {
      img: './img/ElmwoodParkDen3.webp',
      title: 'Honey',
    }
  ];

  return (
    <Container sx={{
      minHeight: '12vh',
      display: { xs: "none", sm: "none", md: "none", lg: "block", xl: "block" },
      alignContent: 'center',
      justifyContent: 'center',
    }}>
      <Carousel sx={{ maxWidth: '100%' }}>
        {itemData.map((item) => (
          <img
            key={item.img}
            src={item.img}
            alt={item.title}
            style={{ width: '100%', height: '60%', padding: '0 auto', }}
          />
        ))}
      </Carousel>
    </Container>
  );
}