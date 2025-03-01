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
    }, height: '450px'}}>
         <CardActionArea>
              <CardMedia component='img' 
              height='200'
              image={image}
              alt={title} />
              <CardContent sx={{padding: '2em'}} >
                <Typography component='h5' color=' hsl(233, 8%, 62%)' fontSize='0.6em' margin='0 0 1em 0'>{title} </Typography>
                <Typography component='h6' color='hsl(233, 26%, 24%)'  margin='0 0 .5em 0' fontWeight='500'>{subTitle} </Typography>
                <Typography  variant='body' mb='0.5em' fontSize='.9em'  color=' hsl(233, 8%, 62%)'>{cardInfo}</Typography>
              </CardContent>
         </CardActionArea>
    </Card>
  )
}
