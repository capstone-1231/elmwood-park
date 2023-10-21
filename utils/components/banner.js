import React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';

const ContentContainer = styled('div')({
  padding: '6rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

const HeroBanner = () => {
  return (
    <AppBar position="static" sx={{
      display: 'flex',
      flexDirection: { xs: 'column', sm: 'column', md: 'row-reverse', lg: 'row-reverse', xl: 'row-reverse' },
    }}>
      <Box sx={{
        background: 'url("river-img.webp") no-repeat bottom',
        backgroundSize: 'cover',
        width: '100%',
        minHeight: '40vh',
      }} />
      <Box sx={{
        background: 'rgba(255, 255, 255, 0.9)',
        padding: '1.2rem',
        width: '100%',
        textAlign: 'center',
        minHeight: '40vh',
      }}>
        <ContentContainer>
          <Typography variant='h2' color="text.primary">
            Elmwood Park Community League
          </Typography>
          <Typography variant='body1' color="text.secondary" sx={{ padding: '2rem' }}>
            Come explore your backyard!
          </Typography>
          <Button type="submit" variant="contained" color="primary" disableRipple sx={{
            width: '12rem',
            borderRadius: '0.8rem',
            ':hover, :active, :focus': {
              bgcolor: 'secondary.main',
              color: '#ffffff',
            },
          }}>
            Join us today!
          </Button>
        </ContentContainer>
      </Box>
    </AppBar>
  );
};

export default HeroBanner;

