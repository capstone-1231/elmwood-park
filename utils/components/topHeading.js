import React from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container'

const IconImage = styled('img')({
  marginLeft: '1rem',
  width: '2rem',
  paddingBottom: '1rem'
});

const TopHeading = ({ heading }) => {
    return (
        <Container sx={{ marginTop: '4rem', display: 'flex', alignItems: 'center' }}>
            <Typography variant="h1" component="h2" gutterBottom>
                {heading}
            </Typography>
            <IconImage sx={{ display: { xs: "none", sm: "none", md: "inherit", lg: "inherit", xl: "inherit" }, }} src="tree-icon-left.png" alt="Elmwood Tree Icon" />
        </Container>
    );
  };
  
  export default TopHeading;