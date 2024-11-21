import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar'
import Product from './component/Product'
import Men from './pages/Men'
import Women from './pages/Women'
import Kids from './pages/Kids'
import Cart from './pages/Cart'
import Home from './pages/Home';
import Error from './pages/Error';
import ProductDetails from './component/ProductDetails';
import About from './pages/About';
// import Grocery from './pages/Grocery';  // we will not import this normally we will import this is lazy

const Grocery = lazy(() => import('./pages/Grocery'));


const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        {/** defining routes for different pages */}
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/about" element={<About/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/grocery" element={<Suspense fallback={<h1>Loading ...</h1>}><Grocery/></Suspense>} />
          <Route path="/product/:productid" element={<ProductDetails/>} />
          <Route path="*" element={<Error/>} />
        </Routes>
      </div>

    </BrowserRouter>


  )
}

export default App