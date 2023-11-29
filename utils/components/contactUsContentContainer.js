import ContactInfo from "./contentAreaContactInfo";
import HeadingWithTextBelow from "./headingWithTextBelow";

import React, { useState } from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const ContentContainer = styled('div')({
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'center',
    padding: '4rem 0'
});

const ContactUsContentContainer = () => {
  return (
    <Container>
    <ContentContainer sx={{
        flexDirection: { xs: "column", sm: "column", md: "column", lg: "row", xl: "row" },
    }}>
        <HeadingWithTextBelow
            heading="Volunteers Welcomed"
            paragraph1="Elmwood Park Community League is currently looking for individuals who would like to sit on one of the new committees!  This opportunity requires less personal time but still allows you to help make a difference in your community!"
            paragraph2="Elmwood Park Community League is always looking for volunteers to help with community events!"
            paragraph3="Contact us at ElmwoodParkCl.info@gmail.com or check us out on Facebook to see how you can help make a difference!"
        />
        <Box
            component="img"
            sx={{
                height: 200,
                width: 200,
                display: { xs: "none", sm: "none", md: "none", lg: "inherit", xl: "inherit" },
            }}
            src="vertical-line.webp"
        />
        <ContactInfo
            heading="Contact Information"
            phone="780-479-1035"
            address="12505-75 St, Edmonton, AB, T5B 4K8"
            email="ElmwoodparkCl.info@gmail.com"
            facebook="Elmwood Park Community League"
        />
    </ContentContainer>
    </Container>
  );
};

export default ContactUsContentContainer;
