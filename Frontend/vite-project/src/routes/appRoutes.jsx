// appRoutes.jsx
import { Routes, Route, Navigate,useLocation } from 'react-router-dom'; 
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import ForgetPassword from '../pages/forgetPassword.jsx';
import Home from '../pages/Home.jsx';
import Navbar from '../components/navbar.jsx';
import Footer from '../components/footer.jsx';
import ProductDetail from '../pages/productDetails.jsx';
import ProductDetails from '../pages/productDetails.jsx';
function AppRoutes() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/signup' || location.pathname==='/login';
  return (
    <>
      {!isLoginPage && <Navbar />}
      <main className="main-content-wrapper">
        <Routes>
          
          <Route path="/" element={<Navigate to="/signup" />} />
          
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path='/forgot-password' element={<ForgetPassword />} />
          <Route path='/home' element={<Home />} />
          <Route path='/product/:id' element={<ProductDetails />} />
        </Routes>
      </main>
      {!isLoginPage && <Footer />}

  
  </>);
}

export default AppRoutes;