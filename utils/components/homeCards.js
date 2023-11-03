import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useTheme } from '@emotion/react';
import { Padding } from '@mui/icons-material';


export default function homeCards() {
    const theme = useTheme();
    return (
        <Container sx={{
        flexWrap: 'wrap', 
        maxWidth: '100%',
        justifyContent: 'space-evenly', 
        display: { xs: "none", sm: "none", md: "none", lg: "flex", xl: "flex" } 
        }}>
            <Card sx={{ display: 'flex', width: '20%', margin: 'none' }}>
                <Box>
                    <CardContent sx={{ padding: '1rem' }}>
                        <Typography variant='h3'>RatCreek Press</Typography>
                    </CardContent>
                    <CardContent sx={{ padding: '1rem' }}>
                        <Typography>Take a look at articles that feature Elmwood Park.</Typography>
                    </CardContent>
                    <CardActions sx={{ padding: '1rem' }}>
                        <Button href='/contact_us' variant='contained' size='small' color="primary" disableRipple sx={{
                            borderRadius: '0.8rem',
                            ':hover, :active, :focus': {
                                bgcolor: 'secondary.main',
                                color: '#ffffff',
                            }
                        }}>Take a look!</Button>
                    </CardActions>
                </Box>
            </Card>
            <Card sx={{ display: 'flex', width: '20%' }}>
                <Box>
                    <CardContent sx={{ padding: '1rem' }}>
                        <Typography variant='h3'>Volunteer Opportunities</Typography>
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
            <Card sx={{ display: 'flex', width: '20%' }}>
                <Box>
                    <CardContent sx={{ padding: '1rem' }}>
                        <Typography variant='h3'>Hall Rental's</Typography>
                    </CardContent>
                    <CardContent sx={{ padding: '1rem' }}>
                        <Typography>Discover rentalable spaces at Elmwood Park.</Typography>
                    </CardContent>
                    <CardActions sx={{ padding: '1rem' }}>
                        <Button href='/contact_us' variant='contained' size='small' color="primary" disableRipple sx={{
                            borderRadius: '0.8rem',
                            ':hover, :active, :focus': {
                                bgcolor: 'secondary.main',
                                color: '#ffffff',
                            }
                        }}>Book Now!</Button>
                    </CardActions>
                </Box>
            </Card>
            <Card sx={{ display: 'flex', width: '20%', padding: '0' }}>
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
