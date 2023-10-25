import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Container from '@mui/material/Container';

export default function ActionAreaCard() {
  return (
    <Container>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="claire.jpg"
            alt="green iguana"
          />
          <CardContent>
            <div style={{display: "flex", flexDirection: "row" }}>
              <div>
                <Typography gutterBottom variant="h4" component="div">
                  Morgan Wolf
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  President
                </Typography>
              </div>
              <div>
                <img src="TheLine.png" alt="" width="20" height="55"></img>
              </div>
            </div>
            <Typography variant="body2" color="text.secondary" align="center">
              "Elmwood Park Community League is more than just a community. It is a family."
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  );
}