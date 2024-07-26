import logo from './logo.svg';
import './App.css';
import Toolbar from './components/Toolbar';
import Body from './components/Body';
import ProductCard from './components/ProductCard';
import PrimarySearchAppBar from  './components/PrimarySearchAppBar';
import { createTheme} from '@mui/material/styles';

function App() {

  // paleta de cores
  const theme = createTheme({
    palette: {
      sage: {
        main: '#B5C18E',
      },
      beige: {
        main: '#F7DCB9',
      },
      tamara: {
        main: '#DEAC80',
      },
      castain: {
        main: '#B99470',
      },
    },
  });

  return (
    <div className="App">
      <header className="App-header">
        <Toolbar theme = {theme}/>
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
