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
    ];

    return (
        <Container sx={{
            minHeight: '10vh',
            width: '100%',
            display: { xs: "block", sm: "block", md: "block", lg: "none", xl: "none" },
            paddingBottom: '1.5rem'
        }}>
            <Carousel sx={{ width: '100%' }}>
                {itemData.map((item) => (
                    <img
                        key={item.img}
                        src={item.img}
                        alt={item.title}
                        style={{ width: '100%', height: 'auto' }}
                        loading='lazy'
                    />
                ))}
            </Carousel>
        </Container>
    );
}
