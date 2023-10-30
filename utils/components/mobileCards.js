import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Container from '@mui/material/Container';

export default function MobileCards() {
  return (
    <Container sx={{
      flexWrap: "wrap",
      justifyContent: "space-evenly",
      display: { xs: "column", sm: "column", md: "column", lg: "none", xl: "none" }
    }}>
      <Card sx={{ maxWidth: "100%", width: "33.3%" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="claire.jpg"
            alt="green iguana"
          />
          <CardContent>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "85%" }}>
              <div>
                <Typography gutterBottom variant="h4" component="div">
                  Morgan Wolf
                </Typography>
              </div>
              <div>
                <img src="TheLine.png" alt="" width="20" height="55"></img>
              </div>
            </div>
            <Typography variant="h5" color="text.secondary" align="center">
              President
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: "100%", width: "33.3%" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="claire.jpg"
            alt="green iguana"
          />
          <CardContent>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "85%" }}>
              <div>
                <Typography gutterBottom variant="h4" component="div">
                  Morgan Wolf
                </Typography>
              </div>
              <div>
                <img src="TheLine.png" alt="" width="20" height="55"></img>
              </div>
            </div>
            <Typography variant="h5" color="text.secondary" align="center">
              President
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: "100%", width: "33.3%" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="claire.jpg"
            alt="green iguana"
          />
          <CardContent>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "85%" }}>
              <div>
                <Typography gutterBottom variant="h4" component="div">
                  Morgan Wolf
                </Typography>
              </div>
              <div>
                <img src="TheLine.png" alt="" width="20" height="55"></img>
              </div>
            </div>
            <Typography variant="h5" color="text.secondary" align="center">
              President
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  );
}