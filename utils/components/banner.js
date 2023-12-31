import React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';

const ContentContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100%',
});

const DesktopDisplayContainer = styled('div')({
  display: 'inherit'
});

const MobileDisplayContainer = styled('div')({
  display: 'inherit'
});

const HeroBanner = () => {
  return (
    <AppBar position="static">

        {/* -------------------------- DESKTOP BANNER -------------------------- */}
      
      <DesktopDisplayContainer
        sx={{
          display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' },
          flexDirection: { xs: 'column', sm: 'column', md: 'row-reverse', lg: 'row-reverse', xl: 'row-reverse' },
        }}
      >
        <Box
          sx={{
            background: 'url("river-img.webp") no-repeat bottom',
            backgroundSize: 'cover',
            width: '100%',
            minHeight: '40vh',
          }}
        />
        <Box
          sx={{
            background: 'rgba(255, 255, 255, 0.9)',
            padding: '1.2rem',
            width: '100%',
            textAlign: 'center',
            minHeight: '40vh',
          }}
        >
          <ContentContainer>
            <Typography variant='h1' color="text.primary">
              Elmwood Park Community League
            </Typography>
            <Typography variant='body1' color="text.secondary" sx={{ padding: '2rem' }}>
              Come explore your backyard!
            </Typography>
            <a href="/membership" target="_blank">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              aria-label='Join us today!'
              disableRipple
              sx={{
                width: '12rem',
                borderRadius: '0.8rem',
                ':hover, :active, :focus': {
                  bgcolor: 'secondary.main',
                  color: '#ffffff',
                },
              }}
            >
              Join us today!
            </Button>
            </a>
          </ContentContainer>
        </Box>
      </DesktopDisplayContainer>

      {/* -------------------------- MOBILE BANNER -------------------------- */}

      <MobileDisplayContainer
        sx={{
          display: { xs: 'inherit', sm: 'inherit', md: 'none', lg: 'none', xl: 'none' },
        }}
      >
        <Box
          sx={{
            background: 'url("river-img-overlay.webp") no-repeat bottom / cover',
            padding: '1.2rem',
            width: '100%',
            textAlign: 'center',
            minHeight: '50vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ContentContainer
            sx={{
              padding: '1.2rem',
              width: '100%',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography variant='h2' color="text.primary">
              Elmwood Park Community League
            </Typography>
            <Typography variant='body1' color="text.secondary" sx={{ padding: '2rem' }}>
              Come explore your backyard!
            </Typography>
            <a href="/membership">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              aria-label='Join us today!'
              sx={{
                width: '12rem',
                borderRadius: '0.8rem',
                ':hover, :active, :focus': {
                  bgcolor: 'secondary.main',
                  color: '#ffffff',
                },
              }}
            >
              Join us today!
            </Button>
            </a>
          </ContentContainer>
        </Box>
      </MobileDisplayContainer>
    </AppBar>
  );
};

export default HeroBanner;
