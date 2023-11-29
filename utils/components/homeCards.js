import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useTheme } from '@emotion/react';


export default function homeCards() {
    const theme = useTheme();
    return (
        <Container sx={{
            flexWrap: 'wrap',
            maxWidth: '100%',
            justifyContent: 'space-between',
            display: { xs: "none", sm: "none", md: "none", lg: "flex", xl: "flex" }
        }}>
            <Card sx={{ display: 'flex', width: '23%'}}>
                <Box>
                    <CardContent sx={{ padding: '1rem' }}>
                        <Typography variant='h3'>Facebook</Typography>
                    </CardContent>
                    <CardContent sx={{ padding: '1rem' }}>
                        <Typography>Take a look at posts that feature Elmwood Park.</Typography>
                    </CardContent>
                    <CardActions sx={{ padding: '1rem' }}>
                        <Button href='https://www.facebook.com/ElmwoodParkCL' target='_blank' variant='contained' size='small' color="primary" disableRipple sx={{
                            borderRadius: '0.8rem',
                            ':hover, :active, :focus': {
                                bgcolor: 'secondary.main',
                                color: '#ffffff',
                            }
                        }}>Take a look!</Button>
                    </CardActions>
                </Box>
            </Card>
            <Card sx={{ display: 'flex', width: '23%' }}>
                <Box>
                    <CardContent sx={{ padding: '1rem' }}>
                        <Typography variant='h3'>Volunteering</Typography>
                    </CardContent>
                    <CardContent sx={{ padding: '1rem' }}>
                        <Typography>Explore Opportunities at Elmwood Park.</Typography>
                    </CardContent>
                    <CardActions sx={{ padding: '1rem' }}>
                        <Button href='/contact_us' variant='contained' size='small' color="primary" disableRipple sx={{
                            borderRadius: '0.8rem',
                            ':hover, :active, :focus': {
                                bgcolor: 'secondary.main',
                                color: '#ffffff',
                            }
                        }}>Find Out More!</Button>
                    </CardActions>
                </Box>
            </Card>
            <Card sx={{ display: 'flex', width: '23%' }}>
                <Box>
                    <CardContent sx={{ padding: '1rem' }}>
                        <Typography variant='h3'>Hall Rentals</Typography>
                    </CardContent>
                    <CardContent sx={{ padding: '1rem' }}>
                        <Typography>Discover rentable spaces at Elmwood Park.</Typography>
                    </CardContent>
                    <CardActions sx={{ padding: '1rem' }}>
                        <Button href='/amenities' variant='contained' size='small' color="primary" disableRipple sx={{
                            borderRadius: '0.8rem',
                            ':hover, :active, :focus': {
                                bgcolor: 'secondary.main',
                                color: '#ffffff',
                            }
                        }}>Book Now!</Button>
                    </CardActions>
                </Box>
            </Card>
            <Card sx={{ display: 'flex', width: '23%' }}>
                <Box>
                    <CardContent sx={{ padding: '1rem' }}>
                        <Typography variant='h3'>Have A Question?</Typography>
                    </CardContent>
                    <CardContent sx={{ padding: '1rem' }}>
                        <Typography>Reach out to us for any questions and inquires.</Typography>
                    </CardContent>
                    <CardActions sx={{ padding: '1rem' }}>
                        <Button href='/contact_us' variant='contained' size='small' color="primary" disableRipple sx={{
                            borderRadius: '0.8rem',
                            ':hover, :active, :focus': {
                                bgcolor: 'secondary.main',
                                color: '#ffffff',
                            }
                        }}>Contact Us</Button>
                    </CardActions>
                </Box>
            </Card>
        </Container>
    )
}