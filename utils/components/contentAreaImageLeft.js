import React from 'react';
import { styled } from '@mui/system';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';

// Define a styled component for the container
const StyledContainer = styled(Paper)({
  display: 'flex',
  width: '80%',
  margin: '1rem auto',
  padding: '5rem 1rem',
  alignItems: 'center',
  backgroundColor: '#FFFFF2',
  boxShadow: 'none',
  borderRadius: 'none',
});

// Define a styled component for the image container
const StyledImageContainer = styled('div')({
  flex: '27.5%', // Make the image take up 25% of the container
  paddingRight: '2rem', // Add some space between the image and text
  display: 'flex',
  justifyContent: 'center', // Center the image horizontally
  minWidth: '25%',
});

// Define a styled component for the image
const StyledImage = styled('img')({
  maxWidth: '100%',
  maxHeight: '100%',
  objectFit: 'contain',
});

// Define a styled component for the read more button

const ContentWithImage = ({ imageSrc, heading, bodyText }) => {
  const isBelow1300px = useMediaQuery('(max-width: 1400px)');

  const maxTextLength = 300; // Maximum visible characters

  let truncatedText = bodyText.slice(0, maxTextLength);
  if (bodyText.length > maxTextLength) {
    truncatedText = truncatedText.slice(0, -3) + '...';
  }

  return (
    <StyledContainer>
      <StyledImageContainer>
        <StyledImage src={imageSrc} alt="Content Image" />
      </StyledImageContainer>
      <Box sx={{ flex: 2 }}>
        <Typography variant="h2" component="h2" gutterBottom>
          {heading}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          {isBelow1300px ? (
            <>
              {truncatedText}
              <br />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{
                  width: '8rem',
                  margin: '1rem 0',
                  borderRadius: '0.8rem',
                  ':hover, :active, :focus': {
                    bgcolor: 'secondary.main',
                    color: '#ffffff',
                  },
                }}
              >
                Read More
              </Button>
            </>
          ) : (
            bodyText
          )}
        </Typography>
      </Box>
    </StyledContainer>
  );
};

export default ContentWithImage;
