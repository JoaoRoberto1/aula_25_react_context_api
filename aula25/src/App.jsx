import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import Carrinho from './components/Carrinho'

function App() {



return (
    <>
    <Carrinho />

    <BrowserRouter>
        <Link to="/" className="btn btn-primary">Home</Link>
        <Link to="/login" className="btn btn-primary">Login</Link>  

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
