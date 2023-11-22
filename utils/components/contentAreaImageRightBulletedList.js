import React from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const StyledContainer = styled(Container)({
  display: 'flex',
  padding: '2rem',
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

const ContentAreaImageRightBulletedList = ({ imageSrc, listItem1, listItem2, listItem3, listItem4, listItem5, listItem6, listItem7, listItem8, listItem9, listItem10, listItem11 }) => {
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
              <ListItem variant="body" color="textSecondary" sx={{ padding: '0.5rem 0', display: 'list-item', fontFamily: 'Be Vietnam Pro', }}>
                {listItem1}
              </ListItem>
              <ListItem variant="body1" color="textSecondary" sx={{ padding: '0.5rem 0', display: 'list-item', fontFamily: 'Be Vietnam Pro' }}>
                {listItem2}
              </ListItem>
              <ListItem variant="body1" color="textSecondary" sx={{ padding: '0.5rem 0', display: 'list-item', fontFamily: 'Be Vietnam Pro' }}>
                {listItem3}
              </ListItem>
              <ListItem variant="body1" color="textSecondary" sx={{ padding: '0.5rem 0', display: 'list-item', fontFamily: 'Be Vietnam Pro' }}>
                {listItem4}
              </ListItem>
              <ListItem variant="body1" color="textSecondary" sx={{ padding: '0.5rem 0', display: 'list-item', fontFamily: 'Be Vietnam Pro' }}>
                {listItem5}
              </ListItem>
              <ListItem variant="body1" color="textSecondary" sx={{ padding: '0.5rem 0', display: 'list-item', fontFamily: 'Be Vietnam Pro' }}>
                {listItem6}
              </ListItem>
              <ListItem variant="body1" color="textSecondary" sx={{ padding: '0.5rem 0', display: 'list-item', fontFamily: 'Be Vietnam Pro' }}>
                {listItem7}
              </ListItem>
              <ListItem variant="body1" color="textSecondary" sx={{ padding: '0.5rem 0', display: 'list-item', fontFamily: 'Be Vietnam Pro' }}>
                {listItem8}
              </ListItem>
              <ListItem variant="body1" color="textSecondary" sx={{ padding: '0.5rem 0', display: 'list-item', fontFamily: 'Be Vietnam Pro' }}>
                {listItem9}
              </ListItem>
              <ListItem variant="body1" color="textSecondary" sx={{ padding: '0.5rem 0', display: 'list-item', fontFamily: 'Be Vietnam Pro' }}>
                {listItem10}
              </ListItem>
              <ListItem variant="body1" color="textSecondary" sx={{ padding: '0.5rem 0', display: 'list-item', fontFamily: 'Be Vietnam Pro' }}>
                {listItem11}
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
