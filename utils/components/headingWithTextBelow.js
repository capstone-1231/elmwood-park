import React, { useState } from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const StyledContainer = styled(Container)({
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
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

const HeadingWithTextBelow = ({ heading, paragraph1, paragraph2, paragraph3, paragraph4 }) => {
  return (
    <StyledContainer sx={{
      flexDirection: "column"
    }}>
         <ElmwoodIconFlex>
          <Typography variant="h2" component="h2" gutterBottom>
            {heading}
          </Typography>
          <IconImage src="tree-icon-left.png" alt="Elmwood Tree Icon" />
        </ElmwoodIconFlex>
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
