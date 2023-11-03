import React, { useState } from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import Link from '@mui/material/Link';

const StyledContainer = styled(Container)({
  display: 'flex',
  padding: '4rem',
  justifyContent: 'center',
  alignContent: 'center'
});

const IconFlex = styled('div')({
    display: 'flex',
    alignItems: 'center'
});

const ContactInfo = ({ heading, phone, address, email, facebook }) => {
  return (
    <StyledContainer sx={{ 
      flexDirection: "column"
    }}>
        <Typography variant="h2" component="h2" gutterBottom>
          {heading}
        </Typography>
        <IconFlex>
            <PhoneIcon sx={{ fontSize: { xs: 50, sm: 50, md: 50, lg: 30, xl: 30 } }} />
            <Typography variant="body1" color="textSecondary" sx={{ padding: "1rem" }}>
            {phone}
            </Typography>
        </IconFlex>
        <IconFlex>
            <HomeIcon sx={{ fontSize: { xs: 50, sm: 50, md: 50, lg: 30, xl: 30 } }} />
            <Typography variant="body1" color="textSecondary" sx={{ padding: "1rem" }}>
            {address}
            </Typography>
        </IconFlex>
        <IconFlex>
            <EmailIcon sx={{ fontSize: { xs: 50, sm: 50, md: 50, lg: 30, xl: 30 } }} />
            <Typography variant="body1" color="textSecondary" sx={{ padding: "1rem" }}>
            {email}
            </Typography>
        </IconFlex>
        <IconFlex>
            <FacebookIcon sx={{ fontSize: { xs: 50, sm: 50, md: 50, lg: 30, xl: 30 } }} />
            <Link href="https://www.facebook.com/ElmwoodParkCL/" target="_blank" variant="body1" color="link.default" sx={{ textDecoration: "none",
            padding: "1rem" }}>
            {facebook}
            </Link>
        </IconFlex>
    </StyledContainer>
  );
};

export default ContactInfo;
