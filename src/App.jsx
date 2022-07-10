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
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { getAllProducts } from './store/slices/products.slice'
import FormSingUp from './components/Login/FormSingUp'
import { useNavigate } from 'react-router-dom'

function App() {

  const dispatch = useDispatch()
  const [newUser, setNewUser] = useState('')
  const navigate = useNavigate()
  const [isCreateUser, setIsCreateUser] = useState(false)

  useEffect(() => {

    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users'

    axios.post(URL, newUser)
      .then(res => console.log(res.data))
      .catch(err => console.log(err.data))
      .finally(() => {
        setIsCreateUser(true)
        setTimeout(() => {
            setIsCreateUser(false)
        }, 5000);
      })
  },[newUser])

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
          <Route path='/createAccount' element={<FormSingUp setNewUser={setNewUser} isCreateUser={isCreateUser} />} />
        </Routes>
      </main>
      <FooterScrem />
    </div>
  )
}

export default App
