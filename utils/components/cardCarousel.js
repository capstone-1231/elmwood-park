import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
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
            display: { xs: "flex", sm: "flex", md: "flex", lg: "none", xl: "none" }
        }}>
            <Carousel sx={{ width: '100%' }}>
                <Card sx={{ width: '100%', display: 'flex', alignItems: 'center', height: '15rem', border: '2px solid #816719' }}>
                    <Box>
                        <CardContent sx={{ padding: '1rem' }}>
                            <Typography variant='h3'>RatCreek Press</Typography>
                        </CardContent>
                        <CardContent sx={{ padding: '1rem' }}>
                            <Typography>Take a look at articles that feature Elmwood Park.</Typography>
                        </CardContent>
                        <CardActions sx={{ padding: '1rem' }}>
                            <Button href='/contact_us' aria-label='Take a look!' variant='contained' size='small' color="primary" disableRipple sx={{
                                borderRadius: '0.8rem',
                                '&:hover, &:active, &:focus': {
                                    bgcolor: theme.palette.secondary.main,
                                    color: '#ffffff',
                                }
                            }}>Take a look!</Button>
                        </CardActions>
                    </Box>
                </Card>
                <Card sx={{ width: '100%', display: 'flex', alignItems: 'center', height: '15rem', border: '2px solid #816719' }}>
                    <Box>
                        <CardContent sx={{ padding: '1rem' }}>
                            <Typography variant='h3'>Volunteer Opportunities</Typography>
                        </CardContent>
                        <CardContent sx={{ padding: '1rem' }}>
                            <Typography>Explore opportunities at Elmwood Park.</Typography>
                        </CardContent>
                        <CardActions sx={{ padding: '1rem' }}>
                            <Button href='/contact_us' aria-label='Find Out More!' variant='contained' size='small' color="primary" disableRipple sx={{
                                borderRadius: '0.8rem',
                                ':hover, :active, :focus': {
                                    bgcolor: 'secondary.main',
                                    color: '#ffffff',
                                }
                            }}>Find Out More!</Button>
                        </CardActions>
                    </Box>
                </Card>
                <Card sx={{ width: '100%', display: 'flex', alignItems: 'center', height: '15rem', border: '2px solid #816719' }}>
                    <Box>
                        <CardContent sx={{ padding: '1rem' }}>
                            <Typography variant='h3'>Hall Rentals</Typography>
                        </CardContent>
                        <CardContent sx={{ padding: '1rem' }}>
                            <Typography>Discover rentable spaces at Elmwood Park.</Typography>
                        </CardContent>
                        <CardActions sx={{ padding: '1rem' }}>
                            <Button href='/contact_us' aria-label='Book Now!' variant='contained' size='small' color="primary" disableRipple sx={{
                                borderRadius: '0.8rem',
                                ':hover, :active, :focus': {
                                    bgcolor: 'secondary.main',
                                    color: '#ffffff',
                                }
                            }}>Book Now!</Button>
                        </CardActions>
                    </Box>
                </Card>
                <Card sx={{ width: '100%', display: 'flex', alignItems: 'center',  height: '15rem', border: '2px solid #816719' }}>
                    <Box>
                        <CardContent sx={{ padding: '1rem' }}>
                            <Typography variant='h3'>Have A Question?</Typography>
                        </CardContent>
                        <CardContent sx={{ padding: '1rem' }}>
                            <Typography>Reach out to us for any questions or inquires.</Typography>
                        </CardContent>
                        <CardActions sx={{ padding: '1rem' }}>
                            <Button href='/contact_us' aria-label='Contact Us' variant='contained' size='small' color="primary" disableRipple sx={{
                                borderRadius: '0.8rem',
                                ':hover, :active, :focus': {
                                    bgcolor: 'secondary.main',
                                    color: '#ffffff',
                                }
                            }}>Contact Us</Button>
                        </CardActions>
                    </Box>
                </Card>
            </Carousel>
        </Container>
    );
}
