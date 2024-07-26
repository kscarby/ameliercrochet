import React from 'react'
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import { green } from '@mui/material/colors';
import { ThemeProvider } from '@mui/material/styles';

//Css
import '../styles/Toolbar.css';

const Toolbar = ({theme}) => {
  

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

  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Minha Conta</MenuItem>
      <MenuItem onClick={handleMenuClose}>Meus Pedidos</MenuItem>
      <MenuItem onClick={handleMenuClose}>Sair</MenuItem>
    </Menu>
  );

//Drawer list

const [state, setState] = React.useState({right: false});
  
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
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

  return (
    <div className='toolbar-app'>
        <div className='toolbar'>
            <h1 className='toolbar-logo'>Amelier Crochet</h1>
            <input type='text' placeholder='Pesquisar...' className='toolbar-filter'></input>
            <div className='toolbar-buttons'>
                <button className ='toolbar-login'onClick={handleProfileMenuOpen}></button>
                <ThemeProvider theme={theme}><Badge badgeContent ={6} showZero color="beige">
                    <div>
                        {['right'].map((anchor) => (
                        <React.Fragment key={anchor}>
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
                <button className='navbar-news'>Lançamentos</button>
                <button className='navbar-amigurumis'>Amigurumis</button>
                <button className='navbar-babys'>Kits para Bebês</button>
                <button className='navbar-accessories'>Acessórios</button>
            </div>
        </div>

        {renderMenu}
    </div>
  )
}

export default Toolbar