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
      width: "70%",
      flexWrap: "wrap",
      justifyContent: "space-around",
      alignItems: "center",
      display: { xs: "column", sm: "column", md: "none", lg: "none", xl: "none" }
    }}>
      <Card sx={{ maxWidth: "100%", width: "100%", marginBottom:"1.5rem" }}>
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
      <Card sx={{ maxWidth: "100%", width: "100%", marginBottom:"1.5rem" }}>
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
      <Card sx={{ maxWidth: "100%", width: "100%", marginBottom:"1.5rem" }}>
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
      {/* 2nd set of Cards */}
      <Card sx={{ maxWidth: "100%", width: "100%", marginBottom:"1.5rem" }}>
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
      <Card sx={{ maxWidth: "100%", width: "100%", marginBottom:"1.5rem" }}>
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
      <Card sx={{ maxWidth: "100%", width: "100%", marginBottom:"1.5rem" }}>
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
      {/* 3nd set of final card */}
      <Card sx={{ maxWidth: "100%", width: "100%", marginBottom:"1.5rem" }}>
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