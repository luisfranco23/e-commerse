import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomeScreen from './components/Home/HomeScreen'
import LoginScreen from './components/Login/LoginScreen'
import ProtectedRoutes from './components/ProtectedRoutes'
import CartScreen from './components/Cart/CartScreen'
import PurchasesScreen from './components/Purchases/PurchasesScreen'
import HeaderScreen from './components/Shared/HeaderScreen'
import FooterScrem from './components/Shared/FooterScrem'
import ProductScreen from './components/Products/ProductScreen'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAllProducts } from './store/slices/products.slice'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProducts())
  },[])

  return (
    <div className="App">
      <HeaderScreen />
      <main className='main'>
        <Routes >
          <Route path='/' element={<HomeScreen />} />
          <Route path='/login' element={<LoginScreen />} />

          <Route element={<ProtectedRoutes />}>
            <Route path='/cart' element={<CartScreen />} />
            <Route path='/purchases' element={<PurchasesScreen />} />
          </Route>
          <Route path='/product/:id' element={<ProductScreen />} />
        </Routes>
      </main>
      <FooterScrem />
    </div>
  )
}

export default App
