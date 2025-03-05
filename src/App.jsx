import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

//importing pages
import Home from "./pages/Home"
import ProductDetails from "./pages/ProductDetails"

//importing components
import CartItem from "./components/CartItem"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Product from "./components/Product"
import SideBar from "./components/SideBar"

function App() {

  return (
    <>
      <div>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
            <SideBar/>
          <Footer />
        </Router>
      </div>
    </>
  )
}

export default App
