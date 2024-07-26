import logo from './logo.svg';
import './App.css';
import Toolbar from './components/Toolbar';
import Body from './components/Body';
import ProductCard from './components/ProductCard';
import PrimarySearchAppBar from  './components/PrimarySearchAppBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Toolbar />
      </header>
      <body className='App-body'>
        <div className='Banner-body'>
          <Body />
        </div>
        <div className='New-body'>
          <ProductCard />
        </div>
      </body>
    </div>
  );
}

export default App;
