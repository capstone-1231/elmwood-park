import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from '@mui/material/Typography';
import Carousel from 'react-material-ui-carousel';

import { useTheme } from '@mui/system';
import { Padding } from '@mui/icons-material';

export default function CardCarousel() {
    const theme = useTheme();

    return (
        <Container sx={{
            justifyContent: 'center',
            minHeight: '12vh',
            display: { xs: "flex", sm: "flex", md: "flex", lg: "block", xl: "block" }
        }}>
            <Carousel sx={{ width: '100%' }}>

            </Carousel>
        </Container>
    )
}