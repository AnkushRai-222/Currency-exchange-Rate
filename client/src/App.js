import { BrowserRouter, Route, Routes } from "react-router-dom";
import CurrencyExchange from './Components/ExchangeCurrency';
import Convert from './Components/ConvertCurrency';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import './App.css';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar/>
        <Routes>
        
          <Route path="/" element={<CurrencyExchange/>} />
          <Route path="/convertCurrency" element={<Convert />} />
        
        
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
