import React from 'react';
import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import { styled } from '@mui/system';

const ContentContainer = styled('div')({
    padding: '2rem'
  });

const HeroBanner = () => {
  return (
    <AppBar position="static" sx={{ 
        width: '100%',
        background: 'url("river-img.webp") no-repeat',
        backgroundSize: 'cover',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
    }}>
      <Box
        sx={{
          background: 'rgba(255, 255, 255, 0.9)',
          padding: '1.2rem',
          borderRadius: '2rem',
          width: '50%',
          textAlign: 'center',
          position: 'absolute',
          right: '6rem',
          top: '12rem'
        }}
      >
        <ContentContainer>
            <Typography variant='h2' color="text.primary">
                Elmwood Park Community League
            </Typography>
            <Typography variant='body1' color="text.secondary" sx={{ padding: '1rem'}}>
                Come explore your back yard!
            </Typography>
            <Button type="submit" variant="contained" color="primary" disableRipple sx={{ 
            width: '12rem',
            borderRadius: '0.8rem',
            ':hover, :active, :focus': {
            bgcolor: 'secondary.main',
            color: '#ffffff',
            }
            }}>
            Join us today!
            </Button>
        </ContentContainer>
      </Box>
    </AppBar>
  );
};

export default HeroBanner;
