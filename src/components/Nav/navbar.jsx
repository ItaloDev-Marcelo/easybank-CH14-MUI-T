import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Button, Paper, Stack} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Logo from '../../assets/images/logo.svg'

export default function Nav() {

    const [toggle, setToggle] = React.useState(false);

    const navItem = ['Home', 'About','Contact', 'Blog', 'Careers'];

   return  (
     <Stack component='header'  sx={{display: 'flex', padding: {
        xs :'1.5em 1em',
        md : '1.5em 2em'
     }, flexDirection: 'row',justifyContent: {
        xs : 'space-between',
        md: 'space-evenly'
     }, alignContent: 'center', alignItems: 'center' }}  >
     <a href='#'><img src={Logo} alt='' /></a>
     <Button aria-label='Menu' sx={{
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
     <Stack id='l'  sx={{
        display: {
             xs : 'none',
            md: 'flex'
        },
        marginRight: {
            xs : '0',
            md: '2em'
        },
        width: '350px'
     }} direction='row' spacing={2} p={2}>
       {navItem.map((Item)  => {
          return (
            <Button width='75px' className='button-link'  variant='none'>{Item}</Button>
          ) 
       })} 
     </Stack>
     <Stack spacing={2}  sx={{
        display: {
            xs : 'none',
            md: 'flex'
        }
     }}>
       <Button variant='contained' sx={{background: 'rgb(49, 211, 92)'}}  className='circle' >Request Invetation</Button>
       </Stack>
     <Paper id='navbar' elevation={12} component='nav' sx={{display: 
        {
           xs:  toggle ? 'flex' : 'none',
           md: 'none',
        }, justifyContent: 'center' , alignItems: 'center', position : 'absolute', top: '7em', height: '300px'}}>
        <List id='list' >
            {
             navItem.map((navItem, index) => {
                return  (
                    <ListItem key={index}>
                    <ListItemText > {navItem} </ListItemText>
                    </ListItem>
                ) 
             })
            }
        </List>
     </Paper>
     </Stack>
   )
}