import React from 'react';
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
  justifyContent: 'center',
  alignItems: 'center',
})

const IconImage = styled('img')({
  marginLeft: '1rem',
  width: '2rem',
  paddingBottom: '1rem'
});

const HeadingWithTextBelowContained = ({ heading, paragraph1, paragraph2, paragraph3, paragraph4 }) => {
  return (
    <StyledContainer sx={{
      flexDirection: "column",
      width: { xs: "100%", sm: "100%", md: "60%", lg: "50%", xl: "40%" },
    }}>
         <ElmwoodIconFlex sx={{ marginTop: '3rem', }}>
          <Typography variant="h2" component="h2" gutterBottom>
            {heading}
          </Typography>
          <IconImage sx={{ display: { xs: "none", sm: "none", md: "inherit", lg: "inherit", xl: "inherit" }, }} src="tree-icon-left.png" alt="Elmwood Tree Icon" />
        </ElmwoodIconFlex>
        {paragraph1 && (
          <Typography variant="body1" color="textSecondary" sx={{ padding: '1rem 0' }}>
            {paragraph1}
          </Typography>
        )}
        {paragraph2 && (
          <Typography variant="body1" color="textSecondary" sx={{ padding: '1rem 0' }}>
            {paragraph2}
          </Typography>
        )}
        {paragraph3 && (
          <Typography variant="body1" color="textSecondary" sx={{ padding: '1rem 0' }}>
            {paragraph3}
          </Typography>
        )}
        {paragraph4 && (
          <Typography variant="body1" color="textSecondary" sx={{ padding: '1rem 0' }}>
            {paragraph4}
          </Typography>
        )}
    </StyledContainer>
  );
};

export default HeadingWithTextBelowContained;
