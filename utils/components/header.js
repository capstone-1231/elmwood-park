import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const NavbarContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '1rem',
});

const MobileNavbarContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem',
  '& .menu-icon': {
    transition: 'transform 0.3s ease',
  },
});

const LinkContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const Link = styled(Button)({
  margin: '0 1rem',
  padding: '0.5rem 0.8rem',
  // if the horizontal padding is more than 0.8rem the nav starts to break around the medium breakpoint
  fontFamily: 'Be Vietnam Pro'
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

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };
  return (
    <AppBar position="static">

      {/* ----------------------- DESKTOP MENU ------------------------- */}

      <NavbarContainer sx={{
        display: { xs: "none", sm: "none", md: "none", lg: "inherit", xl: "inherit" },
      }}>
        <LinkContainer>
          <Link href='/' color="inherit" disableRipple sx={{
            ':hover, :active, :focus': {
              bgcolor: 'secondary.main',
              color: '#ffffff',
            },
          }}
          >Home</Link>
          <Link href='/about_us' color="inherit" disableRipple sx={{
            ':hover, :active, :focus': {
              bgcolor: 'secondary.main',
              color: '#ffffff',
            },
          }}>About Us</Link>
          <Link href='/membership' color="inherit" disableRipple sx={{
            ':hover, :active, :focus': {
              bgcolor: 'secondary.main',
              color: '#ffffff',
            },
          }}>Membership</Link>
        </LinkContainer>
        <Link href='/'><Icon src="elmwood-park-logo-updated.png" alt="Elmwood Park Community League Icon" /></Link>
        <LinkContainer>
          <Link href='/amenities' color="inherit" disableRipple sx={{
            ':hover, :active, :focus': {
              bgcolor: 'secondary.main',
              color: '#ffffff',
            },
          }}>Amenities</Link>
          <Link href='events' color="inherit" disableRipple sx={{
            ':hover, :active, :focus': {
              bgcolor: 'secondary.main',
              color: '#ffffff',
            },
          }}>Events</Link>
          <Link href='contact_us' color="inherit" disableRipple sx={{
            ':hover, :active, :focus': {
              bgcolor: 'secondary.main',
              color: '#ffffff',
            },
          }}>Contact Us</Link>
        </LinkContainer>
      </NavbarContainer>

      {/* ----------------------- MOBILE MENU ------------------------- */}

      <MobileNavbarContainer sx={{
        display: { xs: "inherit", sm: "inherit", md: "inherit", lg: "none", xl: "none" },
      }}>
      <Link href='/'><Icon sx={{ maxWidth: '124px', maxHeight: '74.31px'}} src="elmwood-park-logo-updated.png" alt="Elmwood Park Community League Icon" /></Link>
        <IconButton
          onClick={toggleMobileMenu}
          color="inherit"
          aria-label='Hamburger Menu'
          sx={{ transition: 'transform 0.3s ease', transform: showMobileMenu ? 'rotate(90deg)' : 'rotate(0)' }}
          className={showMobileMenu ? 'menu-icon' : ''}>
          {showMobileMenu ? <CloseIcon sx={{ fontSize: 50 }} /> : <MenuIcon sx={{ fontSize: 50 }} />}
        </IconButton>
        {showMobileMenu && (
          <MobileMenu>
            <Link href='/' color="inherit" aria-label='Home' sx={{
              width: '98%',
              margin: '0.5rem',
              ':hover, :active, :focus': {
                bgcolor: 'secondary.main',
                color: '#ffffff',
                borderRadius: '5rem',
              },
            }}
            >Home</Link>
            <Link href='/about_us' color="inherit" aria-label='About Us' sx={{
              width: '98%',
              margin: '0.5rem',
              ':hover, :active, :focus': {
                bgcolor: 'secondary.main',
                color: '#ffffff',
                borderRadius: '5rem',
              },
            }}>About Us</Link>
            <Link href='/membership' color="inherit" aria-label='Membership' sx={{
              width: '98%',
              margin: '0.5rem',
              ':hover, :active, :focus': {
                bgcolor: 'secondary.main',
                color: '#ffffff',
                borderRadius: '5rem',
              },
            }}>Membership</Link>
            <Link href='/amenities' color="inherit" aria-label='Amenities' sx={{
              width: '98%',
              margin: '0.5rem',
              ':hover, :active, :focus': {
                bgcolor: 'secondary.main',
                color: '#ffffff',
                borderRadius: '5rem',
              },
            }}>Amenities</Link>
            <Link href='/events' color="inherit" aria-label='Events' sx={{
              width: '98%',
              margin: '0.5rem',
              ':hover, :active, :focus': {
                bgcolor: 'secondary.main',
                color: '#ffffff',
                borderRadius: '5rem',
              },
            }}>Events</Link>
            <Link href='/contact_us' color="inherit" aria-label='Contact Us' sx={{
              width: '98%',
              margin: '0.5rem',
              ':hover, :active, :focus': {
                bgcolor: 'secondary.main',
                color: '#ffffff',
                borderRadius: '5rem',
              },
            }}>Contact Us</Link>
          </MobileMenu>
        )}
      </MobileNavbarContainer>
    </AppBar>
  );
};

export default Navbar;
