import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Container from '@mui/material/Container';

export default function ActionAreaCard() {
  return (
    <Container sx={{
      justifyContent: "space-evenly",
      flexWrap: "wrap",
      gap: "16px",
      display: { xs: "none", sm: "none", md: "flex", lg: "flex", xl: "flex" }
    }}>
      <Card sx={{ maxWidth: "100%", width: "30%" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="280"
            image="cardpictures/AudreyLynn.webp"
            alt="Audrey Lynn"
          />
          <CardContent>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "85%" }}>
              <div>
                <Typography gutterBottom variant="h4" component="div">
                  Audrey Lynn
                </Typography>
              </div>
              <div>
                <img src="TheLine.png" alt="" width="20" height="55"></img>
              </div>
            </div>
            <Typography variant="h5" color="text.secondary" align="center">
              Community Garden Coordinator
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: "100%", width: "30%" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="280"
            image="cardpictures/LisaBaldwin_Vice.webp"
            alt="Lisa Baldwin"
          />
          <CardContent>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "85%" }}>
              <div>
                <Typography gutterBottom variant="h4" component="div">
                  Lisa Baldwin
                </Typography>
              </div>
              <div>
                <img src="TheLine.png" alt="" width="20" height="55"></img>
              </div>
            </div>
            <Typography variant="h5" color="text.secondary" align="center">
              Vice President
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: "100%", width: "30%" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="280"
            image="cardpictures/JudyDahl_.webp"
            alt="Judy Dahl"
          />
          <CardContent>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "85%" }}>
              <div>
                <Typography gutterBottom variant="h4" component="div">
                  Judy Dahl
                </Typography>
              </div>
              <div>
                <img src="TheLine.png" alt="" width="20" height="55"></img>
              </div>
            </div>
            <Typography variant="h5" color="text.secondary" align="center">
              FIND OUT
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      {/* 2nd set of Cards */}
      <Card sx={{ maxWidth: "100%", width: "30%" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="280"
            image="cardpictures/MaryDuguay.webp"
            alt="Mary Duguay"
          />
          <CardContent>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "85%" }}>
              <div>
                <Typography gutterBottom variant="h4" component="div">
                  Mary Duguay
                </Typography>
              </div>
              <div>
                <img src="TheLine.png" alt="" width="20" height="55"></img>
              </div>
            </div>
            <Typography variant="h5" color="text.secondary" align="center">
              Secretary
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: "100%", width: "30%" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="280"
            image="cardpictures/DanielleDuguay.webp"
            alt="Danielle Duguay"
          />
          <CardContent>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "85%" }}>
              <div>
                <Typography gutterBottom variant="h4" component="div">
                  Danielle Duguay
                </Typography>
              </div>
              <div>
                <img src="TheLine.png" alt="" width="20" height="55"></img>
              </div>
            </div>
            <Typography variant="h5" color="text.secondary" align="center">
            Affiliate Member CONFIRM
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: "100%", width: "30%" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="280"
            image="cardpictures/RonDuguay.webp"
            alt="Ron Duguay"
          />
          <CardContent>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "85%" }}>
              <div>
                <Typography gutterBottom variant="h4" component="div">
                  Ron Duguay
                </Typography>
              </div>
              <div>
                <img src="TheLine.png" alt="" width="20" height="55"></img>
              </div>
            </div>
            <Typography variant="h5" color="text.secondary" align="center">
              FIND OUT
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      {/* 3nd set of final card */}
      <Card sx={{ maxWidth: "100%", width: "30%" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="280"
            image="cardpictures/MorganWolf_President.webp"
            alt="Morgan Wolf"
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