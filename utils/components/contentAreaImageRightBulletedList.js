import React from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

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

const ContentAreaImageRightBulletedList = ({ imageSrc, listItem1, listItem2, listItem3, listItem4, listItem5, listItem6, listItem7, listItem8 }) => {
  return (
    <StyledContainer sx={{ 
      flexDirection: { xs: "column", sm: "column", md: "column", lg: "row", xl: "row" }
    }}>
      <Box sx={{ 
        flex: 1,
        padding: { xs: "2rem 0", sm: "2rem 0", md: "2rem 0", lg: "0 1rem", xl: "0 1rem" }
      }}>
         <List sx={{
            listStyleType: 'disc'
         }}>
              <ListItem variant="body1" color="textSecondary" sx={{ padding: '0.5rem 0', display: 'list-item' }}>
                {listItem1}
              </ListItem>
              <ListItem variant="body1" color="textSecondary" sx={{ padding: '0.5rem 0' }}>
                {listItem2}
              </ListItem>
              <ListItem variant="body1" color="textSecondary" sx={{ padding: '0.5rem 0' }}>
                {listItem3}
              </ListItem>
              <ListItem variant="body1" color="textSecondary" sx={{ padding: '0.5rem 0' }}>
                {listItem4}
              </ListItem>
              <ListItem variant="body1" color="textSecondary" sx={{ padding: '0.5rem 0' }}>
                {listItem5}
              </ListItem>
              <ListItem variant="body1" color="textSecondary" sx={{ padding: '0.5rem 0' }}>
                {listItem6}
              </ListItem>
              <ListItem variant="body1" color="textSecondary" sx={{ padding: '0.5rem 0' }}>
                {listItem7}
              </ListItem>
              <ListItem variant="body1" color="textSecondary" sx={{ padding: '0.5rem 0' }}>
                {listItem8}
              </ListItem>
          </List>
      </Box>
      <StyledImageContainer sx={{
        paddingRight: { xs: "0", sm: "0", md: "0", lg: "1rem", xl: "1rem" },
      }}>
        <StyledImage src={imageSrc} alt="Content Image" />
      </StyledImageContainer>
    </StyledContainer>
  );
};

export default ContentAreaImageRightBulletedList;
