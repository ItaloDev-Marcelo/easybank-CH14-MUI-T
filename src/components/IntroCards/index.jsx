import { Typography, Box} from '@mui/material'
import React from 'react'

export const MiniCards = ({Image, TpTitle, TpText}) => {
  return (
    <Box className='mini-card' sx={{padding: '1.3em 0', display: 'flex', 
      flexDirection: 'column', justifyContent: 'center', alignContent: 'center' ,alignItems: {
      xs: 'center',
      lg: 'flex-start'
    },
      textAlign: {
        xs: 'center',
        lg: 'left'
      },
      width: {
        xs: '300px',
        lg: '200px'
      },
      margin: {
        lg: '0 1.5em'
      }
    }}>
       <Box className='card-container'>
       <img src={Image} alt={TpTitle}/>
       </Box> 
       <Box className='card-content'>
         <Typography component='h3' sx={{padding: '1em 0'}} >{TpTitle}</Typography>
         <Typography component='p'>{TpText}</Typography>
       </Box>
    </Box>
  )
}
