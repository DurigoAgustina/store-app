import Header from "../components/layout/Header/Header"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import StorePage from "../pages/StorePage/StorePage"
import HomePage from "../pages/HomePage/HomePage"
import SingleProduct from "../pages/SingleProduct/SingleProduct"

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
    </BrowserRouter>
  )
}

export default AppRouter