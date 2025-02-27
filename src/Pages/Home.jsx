import { Stack, Box, Typography, Button  } from "@mui/material";
import Phone from '../assets/images/image-mockups.png'

export default function Home() {
    return (
         <Stack component='section' id="Home" sx={{display: 'flex', flexDirection: {
            xs: 'column',
            md: 'row-reverse'
         },
         justifyContent: 'center',
         alignItems: 'center',
         alignContent:'center'
         }}>
            <Box className='Img-container' position='relative' left='13%'>
               <img src={Phone} alt="" />
            </Box>
            <Box className='Home-content' sx={{textAlign:{
               xs: 'center',
               md: 'left'
            }}}>
                 <Typography component='h1' id="Home-Title" mb={3}  >Next generation <br /> digital banking</Typography>
                 <Typography component='p'  sx={{marginBottom: {
                   xs: '2em',
                   sm: '3em'
                 }
                 }} mb={3}>Take your financial life online. Your Easybank account will be a one-stop-shop 
                 for spending, saving, budgeting, investing, and much more.</Typography>
                 <Button variant="contained" className="btn"  sx={{textTransform: 'capitalize'}} > Request Invite</Button>
            </Box>
         </Stack>
    )
}
