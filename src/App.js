import './App.css';
import Header from './Components/Header';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ProductList from './Components/ProductList';

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
