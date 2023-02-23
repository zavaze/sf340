import './App.css';
import Navbar from './component/Navbar';
import Home from './screens/Home';
import Products from './screens/Products';
import { Route, Routes } from 'react-router-dom';
import Contact from './screens/Contact';
import Cart from './screens/Cart';
import Payment from './screens/Payment';
import Product from './screens/Product';
import Profile from './screens/Profile';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product" element={<Products />} />
        <Route exact path="/product/butter" element={<Product />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/cart/payment-details" element={<Payment />} />
        <Route exact path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
