import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import MiniCardData from './miniCardData'
import { MiniCards } from '../components/IntroCards'
export const IntroPage = () => {
  return (
    <Stack className='intro' sx={{display: 'flex', flexDirection: 'column', padding: {
      xs: '2em',
      lg: '7em 10em 7em 7em',
    }, 
    alignItems: {
       xs: 'center',
       lg: 'flex-start'
    }}}>
         <Box sx={{ width: {
        xs: '300px',
        lg: '500px'
      }, textAlign: {
        xs: 'center',
        lg: 'left'
      }}}>
            <Typography component='h2' sx={{margin: {
              xs: '1.5em 0',
              lg: '1em 0'
            }}}>Why choose Easybank?</Typography>
            <Typography component='p' mb={2}  >  We leverage Open Banking to turn your bank account into your financial hub. Control 
            your finances like never before.</Typography>
         </Box>
         <Stack className='Card--Container' sx={{display: 'flex', flexDirection: {
           xs: 'column',
           lg: 'row'
         },
         alignItems: 'center',
         margin: {
            xs : '2em 0',
            lg: '2.5em 0'
         },
         justifyContent: {
          lg: 'space-between'
         }
         }} >
             {
                MiniCardData.map((CardData) => {
                    const {Id, Image, TpTitle, TpText} = CardData
                    return (
                        <MiniCards key={Id} Image={Image}  TpTitle={TpTitle} TpText={TpText} />
                    )
                })
             }
         </Stack>
    </Stack>
  )
}
