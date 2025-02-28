import React from 'react'
import {Stack, Box} from '@mui/material';
import Grid from '@mui/material/Grid2';

export default function Footer() {
  return (
    <Stack component='footer'  sx={{background: 'pink', padding: '2em'}} >
      <Grid container >
         <Grid sx={{background: 'red'}} size={{ xs: 12, md: 4 }}>
            <Box>G1</Box>
         </Grid>
         <Grid sx={{background: 'blue'}} size={{ xs: 12, md: 5 }}>
         <Box>H1</Box>
         </Grid>
         <Grid sx={{background: 'green'}} size={{ xs: 12, md: 3 }}>
         <Box>D1</Box>
         </Grid>
      </Grid>
    </Stack>
  )
}
