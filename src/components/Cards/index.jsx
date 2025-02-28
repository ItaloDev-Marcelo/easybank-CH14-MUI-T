import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export const index = ({image, title, subTitle, cardInfo}) => {
  return (
    <Card sx={{ maxWidth: {
        xs: '300',
        md: '400',
        lg: '350'
    } }}>
         <CardActionArea>
              <CardMedia component='img' 
              height='200'
              image={image}
              alt={title} />
              <CardContent>
                <Typography component='h5'>{subTitle} </Typography>
                <Typography component='h6'>{title} </Typography>
                <Typography  variant='body'>{cardInfo}</Typography>
              </CardContent>
         </CardActionArea>
    </Card>
  )
}
