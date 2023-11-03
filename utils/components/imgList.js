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
      display: { xs: "none", sm: "none", md: "none", lg: "block", xl: "block" }
    }}>
      <Carousel sx={{ width: '100%' }}>
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



// {
//   img: './img/ElmwoodParkDen.webp',
//   title: 'Coffee',
// },
// {
//   img: './img/ElmwoodParkDen2.webp',
//   title: 'Hats',
// },
// {
//   img: './img/ElmwoodParkDen3.webp',
//   title: 'Honey',
// },
// {
//   img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
//   title: 'Basketball',
// },
// {
//   img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
//   title: 'Fern',
// },
// {
//   img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
//   title: 'Mushrooms',
// },
// {
//   img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
//   title: 'Tomato basil',
// },
// {
//   img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
//   title: 'Sea star',
// },
// {
//   img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
//   title: 'Bike',
// },