import React from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const StyledContainer = styled(Container)({
  display: 'flex',
  padding: '3rem',
  justifyContent: 'center',
  alignContent: 'center',
  margin: '1rem auto',
  backgroundColor: '#FFFFF2',
  boxShadow: 'none',
  borderRadius: 'none',
});

const StyledImageContainer = styled('div')({
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
});

const StyledImage = styled('img')({
  width: '100%',
});

const ElmwoodIconFlex = styled('div')({
    display: 'flex',
    alignItems: 'center',
  })
  
const IconImage = styled('img')({
    marginLeft: '1rem',
    width: '2rem',
    paddingBottom: '1rem'
});

const ContentWithImageRight = ({ imageSrc, heading, bodyText1, bodyText2, bodyText3, bodyText4 }) => {
  return (
    <StyledContainer sx={{ 
      flexDirection: { xs: "column", sm: "column", md: "column", lg: "row", xl: "row" }
    }}>
      <Box sx={{ 
        flex: 1,
        padding: { xs: "2rem 0", sm: "2rem 0", md: "2rem 0", lg: "0 2rem 0 0", xl: "0 2rem 0 0" }
      }}>
        <ElmwoodIconFlex>
          <Typography variant="h2" component="h2" gutterBottom>
            {heading}
          </Typography>
          <IconImage sx={{ display: { xs: "none", sm: "none", md: "inherit", lg: "inherit", xl: "inherit" }, }} src="tree-icon-left.png" alt="Elmwood Tree Icon" />
        </ElmwoodIconFlex>
        <Typography variant="body1" color="textSecondary" sx={{ padding: '0.5rem 0' }}>
          {bodyText1}
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{ padding: '0.5rem 0' }}>
          {bodyText2}
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{ padding: '0.5rem 0' }}>
          {bodyText3}
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{ padding: '0.5rem 0' }}>
          {bodyText4}
        </Typography>
      </Box>
      <StyledImageContainer sx={{
        paddingRight: { xs: "0", sm: "0", md: "0", lg: "1rem", xl: "1rem" },
      }}>
        <StyledImage src={imageSrc} alt="Content Image" />
      </StyledImageContainer>
    </StyledContainer>
  );
};

export default ContentWithImageRight;
