import React from 'react'
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import { styled } from '@mui/material/styles';
import { green } from '@mui/material/colors';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState, useEffect } from 'react';

//Css
import '../styles/Toolbar.css';


const Toolbar = ({newproducts, amigurumis, babykits, acessories}) => {

  // paleta de cores
  const theme = createTheme({
    palette: {
      sage: {
        light: '#757ce8',
        main: '#B5C18E',
        dark: '#002884',
        contrastText: '#fff',
      },
      beige: {
        light: '#ff7961',
        main: '#F7DCB9',
        dark: '#ba000d',
        contrastText: '#000',
      },
      tamara: {
        light: '#ff7961',
        main: '#DEAC80',
        dark: '#ba000d',
        contrastText: '#000',
      },
      castain: {
        light: '#ff7961',
        main: '#B99470',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });
  

// botoes customizados
      
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(green[100]),
    backgroundColor: green[300],
    '&:hover': {
      backgroundColor: green[400],
    },
    fontFamily: "Zain",
    fontSize: '20px',
  }));

//Search

const [search, setSearch] = useState("");
const [products, setProducts] = useState([]);


//Drawer list

const [state, setState] = React.useState({right: false});
const [state2, setState2] = React.useState({right: false});
  
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const toggleDrawer2 = (anchor2, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState2({ ...state2, [anchor2]: open });
  };


  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box
      sx={{ fontSize: '22px', textAlign: 'center' ,padding: '10px' }}
      >Meu Carrinho</Box>
      <Divider />
      <List>
          <ListItem>Item 1</ListItem>
          <ListItem>Item 2</ListItem>
          <ListItem>Item 3</ListItem>
      </List>
      <Box sx={{ display: 'flex', justifyContent: 'center'}}>
          <ColorButton variant="contained">Comprar</ColorButton>
      </Box>
    </Box>
  );

  const listMenu = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer2(anchor, false)}
      onKeyDown={toggleDrawer2(anchor, false)}
    >
      <Box
      sx={{ fontSize: '22px', textAlign: 'center' ,padding: '10px' }}
      >Amelier Crochet</Box>
      <Divider />
      <List>
          <ListItem>Minha Conta</ListItem>
          <ListItem>Meus Pedidos</ListItem>
          <ListItem>Rastreio</ListItem>      
      </List>
        <Box sx={{ display: 'flex', justifyContent: 'center'}}>
            <ColorButton variant="contained">Sair</ColorButton>
        </Box>
    </Box>
  );

  return (
    <div className='toolbar-app'>
        <div className='toolbar'>
            <h1 className='toolbar-logo'>Amelier Crochet</h1>
            <input type='text' placeholder='Pesquisar...' className='toolbar-filter'>
            </input>
            <div className='toolbar-buttons'>
              <div>
                {['right'].map((anchor) => (
                <React.Fragment key = {1}>
                    <button className ='toolbar-login'onClick={toggleDrawer2(anchor, true)}></button>
                    <Drawer
                        anchor={anchor}
                        open={state2[anchor]}
                        onClose={toggleDrawer2(anchor, false)}
                    >
                        {listMenu(anchor)}
                    </Drawer>
                </React.Fragment>
                ))}
                          
              </div>
              <ThemeProvider theme={theme}>
                <Badge badgeContent ={6} showZero color="beige">
                  <div>
                    {['right'].map((anchor) => (
                    
                    <React.Fragment key ={2}>
                        <button className ='toolbar-shopping'onClick={toggleDrawer(anchor, true)}></button>
                        <Drawer
                            anchor={anchor}
                            open={state[anchor]}
                            onClose={toggleDrawer(anchor, false)}
                        >
                            {list(anchor)}
                        </Drawer>
                    </React.Fragment>
                    ))}
                    
                  </div>
                </Badge>
              </ThemeProvider>
            </div>
        </div>
        <div className='toolbar__'>
            <div className='navbar'>
                <button className='navbar-news' onClick={newproducts}>Lançamentos</button>
                <button className='navbar-amigurumis'onClick={amigurumis}>Amigurumis</button>
                <button className='navbar-babys'onClick={babykits}>Kits para Bebês</button>
                <button className='navbar-accessories'onClick={acessories}>Acessórios</button>
            </div>
        </div>
    </div>
  )
}

export default Toolbar