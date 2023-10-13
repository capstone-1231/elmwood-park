import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import CopyrightIcon from '@mui/icons-material/Copyright';
import PolicyIcon from '@mui/icons-material/Policy';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';


const FooterContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem',
  background: '#d9e2b5',
  flexWrap: 'wrap',
  gap: '1rem',
  position: 'absolute',
  bottom: "0",
  left: 0,
  right: 0,
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
const MobileFooterContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem',
});

// const LinkContainer = styled('div')({
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'space-between',
// });

const Link = styled(Button)({
  margin: '0 1rem',
  padding: '0.5rem 1rem',
});

const Icon = styled('img')({
  width: '8rem',
  padding: '0'
});

const MobileMenu = styled('div')({
  position: 'absolute',
  top: '7.3rem',
  left: 0,
  right: 0,
  background: '#d9e2b5',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'start',
  zIndex: 999,
});

const FooterNav = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };
  return (
    <AppBar position="static">

      {/* ----------------------- DESKTOP FOOTER MENU ------------------------- */}

      <FooterContainer sx={{
        display: { xs: "none", sm: "none", md: "none", lg: "inherit", xl: "inherit" },
      }}>
        
        <IconContainer>
        <Link href='/'><Icon src="elmwood-park-logo.webp" alt="Elmwood Park Community League Icon" /></Link>
            <SocialIconContainer>
                <FacebookRoundedIcon sx={{ fontSize: 30 }} />
                <CopyrightIcon sx={{ fontSize: 30 }} />
                <PolicyIcon sx={{ fontSize: 30 }} />
            </SocialIconContainer>
        </IconContainer>
        <FooterLinkFlex sx={{
        flexDirection: { xs: "column", sm: "column", md: "column", lg: "column", xl: "row" },
      }}>
                <Link href='/' color="inherit" disableRipple sx={{
                    ':hover, :active, :focus': {
                    bgcolor: 'secondary.main',
                    color: '#ffffff',
                    borderRadius: '5rem'
                    },
                }}>Home</Link>
                <Link href='/about_us' color="inherit" disableRipple sx={{
                    ':hover, :active, :focus': {
                    bgcolor: 'secondary.main',
                    color: '#ffffff',
                    borderRadius: '5rem',
                    },
                }}>About Us</Link>
                <Link href='/membership' color="inherit" disableRipple sx={{
                    ':hover, :active, :focus': {
                    bgcolor: 'secondary.main',
                    color: '#ffffff',
                    borderRadius: '5rem',
                    },
                }}>Membership</Link>
                <Link href='/amenities' color="inherit" disableRipple sx={{
                    ':hover, :active, :focus': {
                    bgcolor: 'secondary.main',
                    color: '#ffffff',
                    borderRadius: '5rem',
                    },
                }}>Amenities</Link>
                <Link href='events' color="inherit" disableRipple sx={{
                    ':hover, :active, :focus': {
                    bgcolor: 'secondary.main',
                    color: '#ffffff',
                    borderRadius: '5rem',
                    },
                }}>Events</Link>
                <Link href='contact_us' color="inherit" disableRipple sx={{
                    ':hover, :active, :focus': {
                    bgcolor: 'secondary.main',
                    color: '#ffffff',
                    borderRadius: '5rem',
                    },
                }}>Contact Us</Link>
        </FooterLinkFlex>
        <ContactContainer width="12rem">
                    <Typography color="inherit">12505 75 street NW, Edmonton, AB </Typography>
                    <Typography color="inherit">T5B 1C8</Typography>
                    <Typography color="inherit">(780) 479-1035</Typography>
        </ContactContainer>
      </FooterContainer>

      {/* ----------------------- MOBILE FOOTER MENU ------------------------- */}

      {/* <MobileFooterContainer sx={{
        display: { xs: "inherit", sm: "inherit", md: "inherit", lg: "none", xl: "none" },
      }}>
        <Link href='/'><Icon src="elmwood-park-logo.webp" alt="Elmwood Park Community League Icon" /></Link>
        <IconButton
          onClick={toggleMobileMenu}
          color="inherit" >

          {showMobileMenu ? <CloseIcon sx={{ fontSize: 50 }} /> : <MenuIcon sx={{ fontSize: 50 }} />}
        </IconButton>
        {showMobileMenu && (
          <MobileMenu>
            <Link href='/' color="inherit" disableRipple sx={{
              margin: '0.5rem',
              ':hover, :active, :focus': {
                bgcolor: 'secondary.main',
                color: '#ffffff',
                borderRadius: '5rem',
              },
            }}
            >Home</Link>
            <Link href='/about_us' color="inherit" disableRipple sx={{
              margin: '0.5rem',
              ':hover, :active, :focus': {
                bgcolor: 'secondary.main',
                color: '#ffffff',
                borderRadius: '5rem',
              },
            }}>About Us</Link>
            <Link href='/membership' color="inherit" disableRipple sx={{
              margin: '0.5rem',
              ':hover, :active, :focus': {
                bgcolor: 'secondary.main',
                color: '#ffffff',
                borderRadius: '5rem',
              },
            }}>Membership</Link>
            <Link href='/amenities' color="inherit" disableRipple sx={{
              margin: '0.5rem',
              ':hover, :active, :focus': {
                bgcolor: 'secondary.main',
                color: '#ffffff',
                borderRadius: '5rem',
              },
            }}>Amenities</Link>
            <Link href='/events' color="inherit" disableRipple sx={{
              margin: '0.5rem',
              ':hover, :active, :focus': {
                bgcolor: 'secondary.main',
                color: '#ffffff',
                borderRadius: '5rem',
              },
            }}>Events</Link>
            <Link href='/contact_us' color="inherit" disableRipple sx={{
              margin: '0.5rem',
              ':hover, :active, :focus': {
                bgcolor: 'secondary.main',
                color: '#ffffff',
                borderRadius: '5rem',
              },
            }}>Contact Us</Link>
          </MobileMenu>
        )}
      </MobileFooterContainer> */}
    </AppBar>
  );
};

export default FooterNav;
