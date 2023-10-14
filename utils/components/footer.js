import React, { useState } from 'react';
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

const LinkContainer = styled('div')({
  display: 'flex',
});

const Link = styled(Button)({
  margin: '0 1rem',
  padding: '0.5rem 1rem',
});

const Icon = styled('img')({
  width: '8rem',
  padding: '0'
});

const FooterNav = () => {
  return (
    <AppBar position="static">

      {/* ----------------------- FOOTER MENU ------------------------- */}

      <FooterContainer sx={{
          flexDirection: { xs: "column-reverse", sm: "column-reverse", md: "column-reverse", lg: "row", xl: "row" },
        }}>
        <IconContainer sx={{
          flexDirection: { xs: "column", sm: "column", md: "column", lg: "row", xl: "row" },
        }}>
        <Link href='/'><Icon src="elmwood-park-logo.webp" alt="Elmwood Park Community League Icon" /></Link>
            <SocialIconContainer sx={{
          flexDirection: { xs: "row", sm: "row", md: "row", lg: "column", xl: "column" },
          padding: { xs: "2rem 0 0 0", sm: "2rem 0 0 0", md: "2rem 0 0 0", lg: "inherit", xl: "inherit" }
        }}>
                <FacebookRoundedIcon sx={{ fontSize: { xs: 50, sm: 50, md: 50, lg: 30, xl: 30 } }} />
                <CopyrightIcon sx={{ fontSize: { xs: 50, sm: 50, md: 50, lg: 30, xl: 30 } }} />
                <PolicyIcon sx={{ fontSize: { xs: 50, sm: 50, md: 50, lg: 30, xl: 30 } }} />
            </SocialIconContainer>
        </IconContainer>
        <FooterLinkFlex sx={{
          flexDirection: { xs: "column", sm: "column", md: "column", lg: "row", xl: "row" },
        }}>
                <LinkContainer sx={{
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
                </LinkContainer>
                <LinkContainer sx={{
          flexDirection: { xs: "column", sm: "column", md: "column", lg: "column", xl: "row" },
        }}>
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
                </LinkContainer>
                <LinkContainer sx={{
          flexDirection: { xs: "column", sm: "column", md: "column", lg: "column", xl: "row" },
        }}>
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
                </LinkContainer>
          </FooterLinkFlex>
        <ContactContainer sx={{
          display: { xs: "none", sm: "none", md: "none", lg: "inherit", xl: "inherit" },
        }}>
                    <Typography color="inherit">12505 75 Street NW, Edmonton, AB </Typography>
                    <Typography color="inherit">T5B 1C8</Typography>
                    <Typography color="inherit">(780) 479-1035</Typography>
        </ContactContainer>
      </FooterContainer>
    </AppBar>
  );
};

export default FooterNav;
