import React from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const StyledContainer = styled(Container)({
  display: 'flex',
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
      flexDirection: { xs: "column", sm: "column", md: "column", lg: "row", xl: "row" },
      padding: { xs: "0 1.5rem", sm: "0 1.5rem", md: "0 1.5rem", lg: "2rem", xl: "2rem" }
    }}>
      <Box sx={{ 
        flex: 1,
      }}>
         <List sx={{
            listStyleType: 'disc',
            padding: '0 1rem',
            
         }}>
              <ListItem variant="body1" color="textSecondary" sx={{ padding: '0.5rem 0', display: 'list-item', fontFamily: 'Be Vietnam Pro', color: '#816719' }}>
                {listItem1}
              </ListItem>
              <ListItem variant="body1" color="textSecondary" sx={{ padding: '0.5rem 0', display: 'list-item', fontFamily: 'Be Vietnam Pro', color: '#816719' }}>
                {listItem2}
              </ListItem>
              <ListItem variant="body1" color="textSecondary" sx={{ padding: '0.5rem 0', display: 'list-item', fontFamily: 'Be Vietnam Pro', color: '#816719' }}>
                {listItem3}
              </ListItem>
              <ListItem variant="body1" color="textSecondary" sx={{ padding: '0.5rem 0', display: 'list-item', fontFamily: 'Be Vietnam Pro', color: '#816719' }}>
                {listItem4}
              </ListItem>
              <ListItem variant="body1" color="textSecondary" sx={{ padding: '0.5rem 0', display: 'list-item', fontFamily: 'Be Vietnam Pro', color: '#816719' }}>
                {listItem5}
              </ListItem>
              <ListItem variant="body1" color="textSecondary" sx={{ padding: '0.5rem 0', display: 'list-item', fontFamily: 'Be Vietnam Pro', color: '#816719' }}>
                {listItem6}
              </ListItem>
              <ListItem variant="body1" color="textSecondary" sx={{ padding: '0.5rem 0', display: 'list-item', fontFamily: 'Be Vietnam Pro', color: '#816719' }}>
                {listItem7}
              </ListItem>
              <ListItem variant="body1" color="textSecondary" sx={{ padding: '0.5rem 0', display: 'list-item', fontFamily: 'Be Vietnam Pro', color: '#816719' }}>
                {listItem8}
              </ListItem>
              <ListItem variant="body1" color="textSecondary" sx={{ padding: '0.5rem 0', display: 'list-item', fontFamily: 'Be Vietnam Pro', color: '#816719' }}>
                {listItem9}
              </ListItem>
              <ListItem variant="body1" color="textSecondary" sx={{ padding: '0.5rem 0', display: 'list-item', fontFamily: 'Be Vietnam Pro', color: '#816719' }}>
                {listItem10}
              </ListItem>
              <ListItem variant="body1" color="textSecondary" sx={{ padding: '0.5rem 0', display: 'list-item', fontFamily: 'Be Vietnam Pro', color: '#816719' }}>
                {listItem11}
              </ListItem>
          </List>
      </Box>
      <StyledImageContainer sx={{
        padding: { xs: "1rem 0 0 0", sm: "1rem 0 0 0", md: "1rem 0 0 0", lg: "0 0 0 1rem", xl: "0 0 0 1rem" },
      }}>
        <StyledImage src={imageSrc} alt="Content Image" />
      </StyledImageContainer>
    </StyledContainer>
  );
};

export default ContentAreaImageRightBulletedList;
