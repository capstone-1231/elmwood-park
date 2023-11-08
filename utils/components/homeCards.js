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
            <Container className="container">
            <Card className="card">
                <Box>
                    <CardContent className="card-content">
                        <Typography variant='h3' className="card-title">RatCreek Press</Typography>
                    </CardContent>
                    <CardContent className="card-content">
                        <Typography className="card-description">Take a look at articles that feature Elmwood Park.</Typography>
                    </CardContent>
                    <CardActions className="card-content">
                        <Button href='/contact_us' variant='contained' size='small' color="primary" disableRipple className="card-button">
                            Take a look!
                        </Button>
                    </CardActions>
                </Box>
            </Card>
            <Card className="card">
                <Box>
                    <CardContent className="card-content">
                        <Typography variant='h3' className="card-title">Volunteer Opportunities</Typography>
                    </CardContent>
                    <CardContent className="card-content">
                        <Typography className="card-description">Explore Opportunities at Elmwood Park.</Typography>
                    </CardContent>
                    <CardActions className="card-content">
                        <Button href='/contact_us' variant='contained' size='small' color="primary" disableRipple className="card-button">
                        Find Out More!
                        </Button>
                    </CardActions>
                </Box>
            </Card>
            <Card className="card">
                <Box>
                    <CardContent className="card-content">
                        <Typography variant='h3' className="card-title">Hall Rental's</Typography>
                    </CardContent>
                    <CardContent className="card-content">
                        <Typography className="card-description">Discover rentalable spaces at Elmwood Park.</Typography>
                    </CardContent>
                    <CardActions className="card-content">
                        <Button href='/contact_us' variant='contained' size='small' color="primary" disableRipple className="card-button">
                        Book Now!
                        </Button>
                    </CardActions>
                </Box>
            </Card>
            <Card className="card">
                <Box>
                    <CardContent className="card-content">
                        <Typography variant='h3' className="card-title">Have A Question?</Typography>
                    </CardContent>
                    <CardContent className="card-content">
                        <Typography className="card-description">Reach out to us for any questions and inquires.</Typography>
                    </CardContent>
                    <CardActions className="card-content">
                        <Button href='/contact_us' variant='contained' size='small' color="primary" disableRipple className="card-button">
                        Contact Us
                        </Button>
                    </CardActions>
                </Box>
            </Card>
        </Container>
    )
}