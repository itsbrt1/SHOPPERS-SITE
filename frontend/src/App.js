
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Product from './Pages/Product';
import ShopCategory from './Pages/ShopCategory';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kids_banner from './Components/Assets/banner_kids.png'
import Company from './Pages/Company';
import Productsss from './Pages/Productsss';
import Offices from './Pages/offices';
import About from './Pages/About';
import Contact from './Pages/Contact';


function App() {
  return (
    <div>
      <BrowserRouter>

        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/Sofas' element={<ShopCategory banner={men_banner} category="Sofas" />} />
          <Route path='/Beds' element={<ShopCategory banner={women_banner} category="Beds" />} />
          <Route path='/Tables' element={<ShopCategory banner={kids_banner} category="Tables" />} />
          <Route path="/product" element={<Product />}>
            <Route path=':productId' element={<Product />} /></Route>
          <Route path='/Cart' element={<Cart />} />
          <Route path='/Login' element={<LoginSignup />} />
          <Route path="/company" element={<Company />} />
          <Route path="/products" element={<Productsss />} />
          <Route path="/offices" element={<Offices />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />


        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
