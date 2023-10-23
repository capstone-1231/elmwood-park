import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function PersonalizedCard() {
    const theme = useTheme();

    return (
    <Container sx={{ display: {xs: "column", sm: "row", md: "flex", lg: "flex", xl: "flex"}, padding: '1rem', gap:'1rem', justifyContent:'space-evenly' }} >
        <Card sx={{ display: 'flex', width: '30%'}}>
            <Box>
                <CardMedia
                    component="img"
                    sx={{ width: 150, height: 180 }}
                    image="claire.jpg"
                    alt="Photograph of Morgan"
                />
            </Box>
            <CardContent>
                <Typography component="div" variant="h5">
                    Morgan Wolf
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div" marginTop="0.5px">
                    aaaaaaaaaa
                    aaaaaaa
                    aaaaaaaaa
                </Typography>
            </CardContent>
        </Card>

        <Card sx={{ display: 'flex', width: '30%' }}>
            <Box>
                <CardMedia
                    component="img"
                    sx={{ width: 150, height: 180 }}
                    image="claire.jpg"
                    alt="Photograph of Morgan"
                />
            </Box>
            <CardContent>
                <Typography component="div" variant="h5">
                    Morgan Wolf
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div" marginTop="0.5rem">
                    
                </Typography>
            </CardContent>
        </Card>

        <Card sx={{ display: 'flex', width: '30%' }}>
            <Box>
                <CardMedia
                    component="img"
                    sx={{ width: 150, height: 180 }}
                    image="claire.jpg"
                    alt="Photograph of Morgan"
                />
            </Box>
            <CardContent>
                <Typography component="div" variant="h5">
                    Morgan Wolf
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div" marginTop="0.5px">
                    
                </Typography>
            </CardContent>
        </Card>

    </Container>    
    );
}