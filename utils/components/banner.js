import React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';

const ContentContainer = styled('div')({
  padding: '5rem 0',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

const DesktopDisplayContainer = styled('div')()

const MobileDisplayContainer = styled('div')()

const HeroBanner = () => {
  return (
    <AppBar position="static">
      {/* --------------------- DESKTOP HERO BANNER --------------------- */}
      <DesktopDisplayContainer sx={{
        display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' },
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
      </DesktopDisplayContainer>

      {/* --------------------- MOBILE HERO BANNER --------------------- */}

      <MobileDisplayContainer sx={{
        display: { xs: 'inherit', sm: 'inherit', md: 'none', lg: 'none', xl: 'none' }
      }}>
        <Box sx={{
            background: 'url("river-img.webp") no-repeat bottom',
            backgroundSize: 'cover',
            width: '100%',
            minHeight: '50vh',
          }} />
          <Box sx={{
            background: 'rgba(255, 255, 255, 0.8)',
            padding: '1.2rem',
            width: '100%',
            textAlign: 'center',
            minHeight: '50vh',
            position: 'absolute',
            top: '8.2rem',
            bottom: '20rem'
          }}>
            <ContentContainer sx={{
              maxHeight: '45vh'
            }}>
              <Typography variant='h2' color="text.primary">
                Elmwood Park Community League
              </Typography>
              <Typography variant='body1' color="text.secondary" sx={{ padding: '2rem' }}>
                Come explore your backyard!
              </Typography>
              <Button type="submit" variant="contained" color="primary" sx={{
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
      </MobileDisplayContainer>
    </AppBar>
  );
};

export default HeroBanner;

