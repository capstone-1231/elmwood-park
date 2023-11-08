import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Container from '@mui/material/Container';

export default function MobileCards() {
  return (
    <Container className="mobile-container">
      <Card className="mobile-card">
        <CardActionArea>
          <CardMedia
            component="img"
            height="280"
            image="cardpictures/AudreyLynn.webp"
            alt="Audrey Lynn"
          />
          <CardContent>
            <div className="mobile-card-content">
              <div>
                <Typography gutterBottom variant="h4" component="div">
                  Audrey Lynn
                </Typography>
              </div>
              <div>
                <img src="TheLine.png" alt="Line Picture" width="20" height="55"></img>
              </div>
            </div>
            <Typography variant="h5" className="mobile-typography-h5">
              Community Garden Coordinator
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className="mobile-card">
        <CardActionArea>
          <CardMedia
            component="img"
            height="280"
            image="cardpictures/LisaBaldwin_Vice.webp"
            alt="Lisa Baldwin"
          />
          <CardContent>
            <div className="mobile-card-content">
              <div>
                <Typography gutterBottom variant="h4" component="div">
                  Lisa Baldwin
                </Typography>
              </div>
              <div>
                <img src="TheLine.png" alt="Line Picture" width="20" height="55"></img>
              </div>
            </div>
            <Typography variant="h5" className="mobile-typography-h5">
              Vice President
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className="mobile-card">
        <CardActionArea>
          <CardMedia
            component="img"
            height="280"
            image="cardpictures/JudyDahl_.webp"
            alt="Judy Dahl"
          />
          <CardContent>
            <div className="mobile-card-content">
              <div>
                <Typography gutterBottom variant="h4" component="div">
                  Judy Dahl
                </Typography>
              </div>
              <div>
                <img src="TheLine.png" alt="Line Picture" width="20" height="55"></img>
              </div>
            </div>
            <Typography variant="h5" className="mobile-typography-h5">
              Treasurer
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      {/* 2nd set of Cards */}
      <Card className="mobile-card">
        <CardActionArea>
          <CardMedia
            component="img"
            height="280"
            image="cardpictures/MaryDuguay.webp"
            alt="Mary Duguay"
          />
          <CardContent>
            <div className="mobile-card-content">
              <div>
                <Typography gutterBottom variant="h4" component="div">
                  Mary Duguay
                </Typography>
              </div>
              <div>
                <img src="TheLine.png" alt="Line Picture" width="20" height="55"></img>
              </div>
            </div>
            <Typography variant="h5" className="mobile-typography-h5">
              Secretary
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className="mobile-card">
        <CardActionArea>
          <CardMedia
            component="img"
            height="280"
            image="cardpictures/DanielleDuguay.webp"
            alt="Danielle Duguay"
          />
          <CardContent>
            <div className="mobile-card-content">
              <div>
                <Typography gutterBottom variant="h4" component="div">
                  Danielle Duguay
                </Typography>
              </div>
              <div>
                <img src="TheLine.png" alt="Line Picture" width="20" height="55"></img>
              </div>
            </div>
            <Typography variant="h5" className="mobile-typography-h5">
              Crafts Coordinator
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className="mobile-card">
        <CardActionArea>
          <CardMedia
            component="img"
            height="280"
            image="cardpictures/RonDuguay.webp"
            alt="Ron Duguay"
          />
          <CardContent>
            <div className="mobile-card-content">
              <div>
                <Typography gutterBottom variant="h4" component="div">
                  Ron Duguay
                </Typography>
              </div>
              <div>
                <img src="TheLine.png" alt="Line Picture" width="20" height="55"></img>
              </div>
            </div>
            <Typography variant="h5" className="mobile-typography-h5">
              Maintenance
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      {/* 3nd set of final card */}
      <Card className="mobile-card">
        <CardActionArea>
          <CardMedia
            component="img"
            height="280"
            image="cardpictures/MorganWolf_President.webp"
            alt="Morgan Wolf"
          />
          <CardContent>
            <div className="mobile-card-content">
              <div>
                <Typography gutterBottom variant="h4" component="div">
                  Morgan Wolf
                </Typography>
              </div>
              <div>
                <img src="TheLine.png" alt="Line Picture" width="20" height="55"></img>
              </div>
            </div>
            <Typography variant="h5" className="mobile-typography-h5">
              President
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  );
}