
import './App.css';
import Toolbar from './components/Toolbar';
import Body from './components/Body';
import ProductCard from './components/ProductCard';
import BuyPage from './components/BuyPage';
import { Password } from '@mui/icons-material';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Toolbar/>
      </header>
      <body className='App-body'>
        <div className='Banner-body'>
          <Body />
        </div>
        <div className='New-body'>
          <ProductCard />

        </div>
        <div >
          {/* <BuyPage /> */}
        </div>
      </body>
    </div>
  );
}

export default App;
