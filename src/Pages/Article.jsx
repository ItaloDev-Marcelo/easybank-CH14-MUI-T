import { Stack, Typography, Box } from '@mui/material'
import React from 'react'
import ArticleData from './ArticleData'
import Cards from '../components/Cards/index'
export const Article = () => {
  return (
    <Stack padding={4} className='article' sx={{display: 'flex', justifyContent: 'center', alignItems: {
      xs: 'center',
      md: 'flex-start'
    }, padding: {
      md: '5em 1em'
    }}}>
        <Box paddingTop={2} paddingBottom={2}>
            <Typography component='h4' fontSize='2em' m='2em 0 .5em 0' color='hsl(233, 26%, 24%)'>Latest Articles</Typography>
        </Box>
        <Box className='Article-card-Container' sx={{display: 'flex',flexDirection: {
          xs: 'column',
          md: 'row'
        }, flexWrap: {
            xs: 'noWrap',
          md: 'wrap',
          lg: 'noWrap',
        },
        justifyContent: 'center', alignItems: 'center'
        }}>
          {
            ArticleData.map((item) => {
                const {image, title, subTitle, cardInfo}  = item ;
                return (
                    <Cards image={image} title={title}  subTitle={subTitle}  cardInfo={cardInfo} />
                )
            }) 
          }
        </Box>
    </Stack>
  )
}
