import React, { useState } from 'react';
import { styled } from '@mui/system';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';

const StyledContainer = styled(Container)({
  display: 'flex',
  padding: '4rem',
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

const ReadMoreButton = styled(Button)({
  marginTop: '1rem',
});

const ContentWithImageLeft = ({ imageSrc, heading, bodyText }) => {
  const isScreenSizeBelowMd = useMediaQuery('(max-width:850px)');

  const [showFullText, setShowFullText] = useState(false);

  const toggleFullText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <StyledContainer sx={{ 
      flexDirection: { xs: "column", sm: "column", md: "column", lg: "row", xl: "row" }
    }}>
      <StyledImageContainer sx={{
        paddingRight: { xs: "0", sm: "0", md: "0", lg: "1rem", xl: "1rem" },
      }}>
        <StyledImage src={imageSrc} alt="Content Image" />
      </StyledImageContainer>
      <Box sx={{ 
        flex: 1,
        padding: { xs: "2rem 0", sm: "2rem 0", md: "2rem 0", lg: "0 1rem", xl: "0 1rem" }
      }}>
        <Typography variant="h2" component="h2" gutterBottom>
          {heading}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          {showFullText || !isScreenSizeBelowMd ? bodyText : `${bodyText.slice(0, 400)}...`}
          {isScreenSizeBelowMd && (
            <Box display="block">
              <ReadMoreButton variant="contained" color="primary" sx={{
                ':hover, :active, :focus': {
                  bgcolor: 'secondary.main',
                  color: '#ffffff',
                  borderRadius: '5rem',
                },
              }} onClick={toggleFullText}>
                {showFullText ? 'Read Less' : 'Read More'}
              </ReadMoreButton>
            </Box>
          )}
        </Typography>
      </Box>
    </StyledContainer>
  );
};

export default ContentWithImageLeft;
