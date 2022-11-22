import Header from '../components/layout/Header/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import StorePage from '../pages/StorePage/StorePage'
import HomePage from '../pages/HomePage/HomePage'
import SingleProduct from '../pages/SingleProduct/SingleProduct'
import Footer from '../components/layout/Footer/Footer'

const AppRouter = () => {
  return (
    <BrowserRouter>
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