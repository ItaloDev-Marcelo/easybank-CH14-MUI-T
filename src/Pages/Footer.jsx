import React from 'react'
import {Stack, Box, IconButton, Typography, Button} from '@mui/material';
import Grid from '@mui/material/Grid2';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import youtubeIcon from '../assets/images/icon-youtube.svg'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import logo from  '../assets/images/dark.svg'

export default function Footer() {

  const footerList = [  'About Us', 'Contact', 'Blog'];
  const footerListTwo = [' Careers', 'Support', 'Privacy Policy'];

  return (
    <Stack component='footer'  sx={{padding: {
       xs: '2em',
       lg: '2.5em 8.5em'
    }, color: '#fff'}} >
      <Grid container  >
         <Grid p={2} size={{ xs: 12, md: 4 }}>
            <Stack component='div' direction='column'  >
            <Stack mb={3} alignItems={{xs: 'center', md: 'flex-start'}}>
              <img src={logo} alt='' id='footer-logo' />
            </Stack>
            <Stack  direction='row' justifyContent={{xs: 'center', md: 'flex-start'}} >
               <Box>
                  <IconButton aria-label='' >   
                    <FacebookIcon className='icon' />                      
                  </IconButton>
               </Box>
               <Box>
                  <IconButton aria-label=''>   
                     <img src={youtubeIcon} className='icon'/>                    
                  </IconButton>
               </Box>
               <Box>
                  <IconButton aria-label=''>   
                    <TwitterIcon className='icon' />                      
                  </IconButton>
               </Box>
               <Box>
                  <IconButton aria-label=''>   
                    <PinterestIcon className='icon' />                      
                  </IconButton>
               </Box>
               <Box>
                  <IconButton aria-label=''>   
                    <InstagramIcon  className='icon'/>                      
                  </IconButton>
               </Box>
            </Stack>
            </Stack>
         </Grid>
         <Grid  size={{ xs: 12, md: 5 }}  >
         <Stack  direction={{xs: 'column', md: 'row'}} >
            <Stack id='md1' >
               <List>
                  {
                    footerList.map((item) => {
                      return  <ListItem >
                      <ListItemText>{item}</ListItemText>
                   </ListItem>
                    } )
                  }
               </List>
            </Stack>
            <Stack id='md2'>
               <List>
                  {
                    footerListTwo.map((item) => {
                      return  <ListItem>
                      <ListItemText>{item}</ListItemText>
                   </ListItem>
                    } )
                  }
               </List>
            </Stack>
         </Stack>
         </Grid>
         <Grid size={{ xs: 12, md: 3 }}>
         <Box sx={{padding: '1em', textAlign: {xs: 'center', md: 'left'}}}  >
         <Button variant="contained"  className="circle"  sx={{textTransform: 'capitalize', marginBottom: '1.3em'}} > Request Invite</Button>
         <Typography component='h6'>© Easybank. All Rights Reserved</Typography>
         </Box>
         </Grid>
      </Grid>
    </Stack>
  )
}
