import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Container from '@mui/material/Container';

export default function ActionAreaCard() {
  return (
    <Container className='my-container'>
      <Card className='my-card'>
        <CardActionArea>
          <CardMedia
            component="img"
            height="280"
            image="cardpictures/AudreyLynn.webp"
            alt="Audrey Lynn"
          />
          <CardContent>
            <div className='my-card-content'>
              <div>
                <Typography gutterBottom variant="h4" component="div">
                  Audrey Lynn
                </Typography>
              </div>
              <div>
                <img src="TheLine.png" alt="Line Picture" className="my-line-image"></img>
              </div>
            </div>
            <Typography variant="h5" className="my-typography-h5">
              Community Garden Coordinator
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className='my-card'>
        <CardActionArea>
          <CardMedia
            component="img"
            height="280"
            image="cardpictures/LisaBaldwin_Vice.webp"
            alt="Lisa Baldwin"
          />
          <CardContent>
            <div className='my-card-content'>
              <div>
                <Typography gutterBottom variant="h4" component="div">
                  Lisa Baldwin
                </Typography>
              </div>
              <div>
                <img src="TheLine.png" alt="Line Picture" className="my-line-image"></img>
              </div>
            </div>
            <Typography variant="h5" className="my-typography-h5">
              Vice President
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className='my-card'>
        <CardActionArea>
          <CardMedia
            component="img"
            height="280"
            image="cardpictures/JudyDahl_.webp"
            alt="Judy Dahl"
          />
          <CardContent>
            <div className='my-card-content'>
              <div>
                <Typography gutterBottom variant="h4" component="div">
                  Judy Dahl
                </Typography>
              </div>
              <div>
                <img src="TheLine.png" alt="Line Picture" className="my-line-image"></img>
              </div>
            </div>
            <Typography variant="h5" className="my-typography-h5">
              Treasurer
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      {/* 2nd set of Cards */}
      <Card className='my-card'>
        <CardActionArea>
          <CardMedia
            component="img"
            height="280"
            image="cardpictures/MaryDuguay.webp"
            alt="Mary Duguay"
          />
          <CardContent>
            <div className='my-card-content'>
              <div>
                <Typography gutterBottom variant="h4" component="div">
                  Mary Duguay
                </Typography>
              </div>
              <div>
                <img src="TheLine.png" alt="Line Picture" className="my-line-image"></img>
              </div>
            </div>
            <Typography variant="h5" className="my-typography-h5">
              Secretary
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className='my-card'>
        <CardActionArea>
          <CardMedia
            component="img"
            height="280"
            image="cardpictures/DanielleDuguay.webp"
            alt="Danielle Duguay"
          />
          <CardContent>
            <div className='my-card-content'>
              <div>
                <Typography gutterBottom variant="h4" component="div">
                  Danielle Duguay
                </Typography>
              </div>
              <div>
                <img src="TheLine.png" alt="Line Picture" className="my-line-image"></img>
              </div>
            </div>
            <Typography variant="h5" className="my-typography-h5">
            Crafts Coordinator
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className='my-card'>
        <CardActionArea>
          <CardMedia
            component="img"
            height="280"
            image="cardpictures/RonDuguay.webp"
            alt="Ron Duguay"
          />
          <CardContent>
            <div className='my-card-content'>
              <div>
                <Typography gutterBottom variant="h4" component="div">
                  Ron Duguay
                </Typography>
              </div>
              <div>
                <img src="TheLine.png" alt="Line Picture" className="my-line-image"></img>
              </div>
            </div>
            <Typography variant="h5" className="my-typography-h5">
              Maintenance
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      {/* 3nd set of final card */}
      <Card sx={{ maxWidth: "100%", width: "30%", marginBottom: "1.5rem" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="280"
            image="cardpictures/MorganWolf_President.webp"
            alt="Morgan Wolf"
          />
          <CardContent>
            <div className='my-card-content'>
              <div>
                <Typography gutterBottom variant="h4" component="div">
                  Morgan Wolf
                </Typography>
              </div>
              <div>
                <img src="TheLine.png" alt="Line Picture" className="my-line-image"></img>
              </div>
            </div>
            <Typography variant="h5" className="my-typography-h5">
              President
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  );
}