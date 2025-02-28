import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Button, Paper, Stack,AppBar, Toolbar, IconButton, Box} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Logo from '../../assets/images/logo.svg'

export default function Nav() {

    const [toggle, setToggle] = React.useState(false);

    const navItem = ['Home', 'About','Contact', 'Blog', 'Careers'];

   return  (
     <AppBar id="bar"  sx={{display: 'flex', padding: {
        xs :'1.2em 1em',
        md : '1em 1em'
     }, flexDirection: 'row', justifyContent: {
        xs : 'space-between',
        md: 'space-around'
     }, alignContent: 'center', alignItems: 'center', background: ' #f3f4f6' }}  >
     <Toolbar>
      <IconButton id='noHover'>
      <img src={Logo} alt='' />
      </IconButton>


     <Stack id='l'  spacing={0}  sx={{
        display: {
             xs : 'none',
            md: 'flex'
        },
        marginRight: {
            xs : '0',
            md: '2em'
        },
        margin: '0 2.5em',
        padding: '0 2em',
        width: '350px'
     }} direction='row'  p={2}>
       {navItem.map((Item)  => {
          return (
            <Button sx={{textTransform: 'Capitalize'}} width='75px' className='button-link'  variant='none'>{Item}</Button>
          ) 
       })} 
     </Stack>
    
     </Toolbar>
     <Stack   sx={{
        display: {
            xs : 'none',
            md: 'flex'
        },
        
        padding: '0 1em',
     }}>
       <Button variant='contained'  sx={{textTransform: 'capitalize'}} className='circle' >Request Invite</Button>
     </Stack>


     <Button aria-label='Menu-buton' sx={{
        display: {
            xs : 'flex',
            md: 'none'
        }
     }}  onClick={() => setToggle(!toggle)}>
            {
                toggle ? <CloseIcon sx={{color: 'gray'}} /> :
                <MenuIcon sx={{color: 'gray'}} /> 
            }
     </Button>

     <Paper aria-label='NavBar' id='navbar' elevation={15} component='nav' sx={{display: 
        {
           xs:  toggle ? 'flex' : 'none',
           md: 'none',
        }, justifyContent: 'center' , alignItems: 'center', position : 'absolute', top: '7.7em', height: '300px'}}>
        <List id='list' >
            {
             navItem.map((navItem, index) => {
                return  (
                    <ListItem key={index}>
                    <ListItemText  sx={{textTransform: 'Capitalize'}} > {navItem} </ListItemText>
                    </ListItem>
                ) 
             })
            }
        </List>
     </Paper>

     </AppBar>
   )
}