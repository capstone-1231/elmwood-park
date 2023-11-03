import React, { useState } from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const StyledContainer = styled(Container)({
  display: 'flex',
  padding: '4rem',
  justifyContent: 'center',
  alignContent: 'center',
});

const HeadingWithTextBelow = ({ heading, paragraph1, paragraph2, paragraph3, paragraph4 }) => {
  return (
    <StyledContainer sx={{
      flexDirection: "column"
    }}>
        <Typography variant="h2" component="h2" gutterBottom>
          {heading}
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{ padding: '1rem 0' }}>
            {paragraph1}
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{ padding: '1rem 0' }}>
            {paragraph2}
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{ padding: '1rem 0' }}>
            {paragraph3}
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{ padding: '1rem 0' }}>
            {paragraph4}
        </Typography>
    </StyledContainer>
  );
};

export default HeadingWithTextBelow;
