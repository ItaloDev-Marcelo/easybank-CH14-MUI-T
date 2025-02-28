import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function Crads({image, title, subTitle, cardInfo}) {
  return (
    <Card sx={{ maxWidth: {
      xs: '300px',
      md: '230px'
    },  margin: {
      xs: '2em 0',
      md: '1.5em 1em'
    }, height: '430px'}}>
         <CardActionArea>
              <CardMedia component='img' 
              height='200'
              image={image}
              alt={title} />
              <CardContent>
                <Typography component='h5'>{title} </Typography>
                <Typography component='h6'>{subTitle} </Typography>
                <Typography  variant='body'>{cardInfo}</Typography>
              </CardContent>
         </CardActionArea>
    </Card>
  )
}
