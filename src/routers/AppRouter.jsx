import Header from '../components/layout/Header/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import StorePage from '../pages/StorePage/StorePage'
import HomePage from '../pages/HomePage/HomePage'
import SingleProduct from '../pages/SingleProduct/SingleProduct'
import Footer from '../components/layout/Footer/Footer'
import CartOffCanvas from '../components/commons/CartOffCanvas/CartOffCanvas'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ScrollToTop from '../utils/ScrollToTop'

const AppRouter = () => {
  return (
    <BrowserRouter>
    <ScrollToTop />
    <ToastContainer />
    <CartOffCanvas />
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/tienda' element={<StorePage />}/>
        <Route path='/producto/:id' element={<SingleProduct />}/>
        <Route path='*' element={<HomePage />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default AppRouter