import React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import CopyrightIcon from '@mui/icons-material/Copyright';
import PolicyIcon from '@mui/icons-material/Policy';
import { Typography } from '@mui/material';

const FooterContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem',
  background: '#d9e2b5',
  flexWrap: 'wrap',
  gap: '1rem',
});

const FooterLinkFlex = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '1rem',
});

const ContactContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  padding: '1rem',

})

const IconContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
});

const SocialIconContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'center',
})

const LinkContainer = styled('div')({
  display: 'flex',
});

const Link = styled(Button)({
  margin: '0 1rem',
  padding: '0.5rem 1rem',
  fontFamily: 'Be Vietnam Pro'
});

const Icon = styled('img')({
  width: '8rem',
  padding: '0'
});

const FooterNav = () => {
  return (
    <AppBar position="static" margin="2rem 0">

      {/* ----------------------- FOOTER MENU ------------------------- */}

      <FooterContainer sx={{
        flexDirection: { xxs: 'column-reverse', xs: 'row-reverse', sm: 'row-reverse', md: 'row-reverse', lg: 'row', xl: 'row' },
        justifyContent: { xxs: 'space-evenly', xs: 'space-evenly', sm: 'space-evenly', md: 'space-evenly', lg: 'space-evenly', xl: 'space-evenly' },
      }}>
        <IconContainer sx={{
          flexDirection: { xs: "column", sm: "column", md: "column", lg: "row", xl: "row" },
        }}>
          <Link href='/' aria-label='Elmwood Park Community League Icon'><Icon src="elmwood-park-logo-updated.png" alt="Elmwood Park Community League Icon" /></Link>
          <SocialIconContainer sx={{
            flexDirection: { xs: "row", sm: "row", md: "row", lg: "column", xl: "column" },
            padding: { xs: "2rem 0 0 0", sm: "2rem 0 0 0", md: "2rem 0 0 0", lg: "inherit", xl: "inherit" }
          }}>
            <Link href="https://www.facebook.com/ElmwoodParkCL/" target="_blank" variant="body1" alt="Facebook Link" color="link.default" sx={{ textDecoration: "none", }}>
            <FacebookRoundedIcon alt="Facebook Link" sx={{ fontSize: { xs: 50, sm: 50, md: 50, lg: 30, xl: 30 } }}/>
            </Link>
            <Link href="/files/EPCL_Copyright.txt" target="_blank" variant="body1" alt="Copyright Link" color="link.default" sx={{ textDecoration: "none", }}>
            <CopyrightIcon alt="Copyright Link" sx={{ fontSize: { xs: 50, sm: 50, md: 50, lg: 30, xl: 30 } }}/>
            </Link>
            <Link href="/files/EPCL_PrivacyPolicy.txt" target="_blank" variant="body1" alt="Privacy Policy Link" color="link.default" sx={{ textDecoration: "none", }}>
            <PolicyIcon alt="Privacy Policy Link" sx={{ fontSize: { xs: 50, sm: 50, md: 50, lg: 30, xl: 30 } }}/>
            </Link>
          </SocialIconContainer>
        </IconContainer>
        <FooterLinkFlex sx={{
          flexDirection: { xs: "column", sm: "column", md: "column", lg: "row", xl: "row" },
        }}>
          <LinkContainer sx={{
            flexDirection: { xs: "column", sm: "column", md: "column", lg: "column", xl: "row" },
          }}>
            <Link href='/' color="inherit" aria-label='Home' disableRipple sx={{
              ':hover, :active, :focus': {
                bgcolor: 'secondary.main',
                color: '#ffffff',              },
            }}>Home</Link>
            <Link href='/about_us' color="inherit" aria-label='About Us' disableRipple sx={{
              ':hover, :active, :focus': {
                bgcolor: 'secondary.main',
                color: '#ffffff',
              },
            }}>About Us</Link>
          </LinkContainer>
          <LinkContainer sx={{
            flexDirection: { xs: "column", sm: "column", md: "column", lg: "column", xl: "row" },
          }}>
            <Link href='/membership' color="inherit" aria-label='Membership' disableRipple sx={{
              ':hover, :active, :focus': {
                bgcolor: 'secondary.main',
                color: '#ffffff',
              },
            }}>Membership</Link>
            <Link href='/amenities' color="inherit" aria-label='Amenities' disableRipple sx={{
              ':hover, :active, :focus': {
                bgcolor: 'secondary.main',
                color: '#ffffff',
              },
            }}>Amenities</Link>
          </LinkContainer>
          <LinkContainer sx={{
            flexDirection: { xs: "column", sm: "column", md: "column", lg: "column", xl: "row" },
          }}>
            <Link href='events' color="inherit" aria-label='Events' disableRipple sx={{
              ':hover, :active, :focus': {
                bgcolor: 'secondary.main',
                color: '#ffffff',
              },
            }}>Events</Link>
            <Link href='contact_us' color="inherit" aria-label='Contact Us' disableRipple sx={{
              ':hover, :active, :focus': {
                bgcolor: 'secondary.main',
                color: '#ffffff',
              },
            }}>Contact Us</Link>
          </LinkContainer>
        </FooterLinkFlex>
        <ContactContainer sx={{
          display: { xs: "none", sm: "none", md: "none", lg: "inherit", xl: "inherit" },
        }}>
          <Typography color="inherit">12505 75 Street NW, Edmonton, AB </Typography>
          <Typography color="inherit">T5B 1C8</Typography>
          <Typography color="inherit">(780)-479-1035</Typography>
        </ContactContainer>
      </FooterContainer>
    </AppBar>
  );
};

export default FooterNav;
