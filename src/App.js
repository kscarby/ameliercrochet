
import './App.css';
import { useState } from 'react';
import { Password } from '@mui/icons-material';
// components
import Toolbar from './components/Toolbar';
import Body from './components/Body';
import NewProducts from './components/NewProducts';
import Amigurumis from './components/Amigurumis';
import BabyKits from './components/BabyKits';
import Acessories from './components/Acessories';
import BuyPage from './components/BuyPage';

const toolbarPages = [
  {id: 0, name: 'home'},
  {id: 1, name: 'newproducts'},
  {id: 2, name: 'amigurumis'},
  {id: 3, name: 'babykits'},
  {id: 4, name: 'acessories'},
];

function App() {

  const [toolbarItens, setToolbarItens] = useState(toolbarPages[1].name);

    // start the game
    const home = () => {
      setToolbarItens(toolbarPages[0].name);
    }
  
    // process the letter input
    const newproducts = () => {
      setToolbarItens(toolbarPages[1].name);
    }
  
    const amigurumis = () => {
      setToolbarItens(toolbarPages[2].name);
    }

    const babykits = () => {
      setToolbarItens(toolbarPages[3].name);
    }

    const acessories = () => {
      setToolbarItens(toolbarPages[4].name);
    }


  return (
    <div className="App">
      <header className="App-header">
        <Toolbar home = {home} 
        newproducts = {newproducts} 
        amigurumis={amigurumis} 
        babykits={babykits} 
        acessories={acessories}/>
      </header>
      <body className='App-body'>
        <Body/>
        <div className='New-body'>
          {toolbarItens === 'newproducts' && <NewProducts newproducts = {newproducts} />}
          {toolbarItens === 'amigurumis' && <Amigurumis amigurumis = {amigurumis} />}
          {toolbarItens === 'babykits' && <BabyKits babykits = {babykits} />}
          {toolbarItens === 'acessories' && <Acessories acessories = {acessories} />}

        </div>
        <div >
          {/* <BuyPage /> */}
        </div>
      </body>
    </div>
  );
}

export default App;
