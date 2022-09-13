import './App.css';
import Header from './Components/Header';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ProductList from './Components/ProductList';
import ProductDetails from './Components/ProductDetails';

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList/>} />
        <Route path="product/:productId" element={<ProductDetails/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
