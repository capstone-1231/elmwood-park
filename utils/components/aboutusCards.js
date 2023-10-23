import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function PersonalizedCard() {
    const theme = useTheme();

    return (
        <Card sx={{ display: 'flex', width: '40%' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                    component="img"
                    sx={{ width: 180 }}
                    image="claire.jpg"
                    alt="Photograph of Morgan"
                />
            </Box>
            <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                    Morgan Wolf
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                    "Elmwood is more than a Community. It is Family."
                </Typography>
            </CardContent>
        </Card>
    );
}