import './App.css';
import Login from './page/Login';
import ProductAll from './page/ProductAll';
import { Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import { useState } from 'react';
import PrivateRoute from './router/PrivateRoute';
import ProductDetail from './page/ProductDetail';

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  // authenticate가 true이면 로그인 // authenticaterk false면 로그아웃

  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate}/>
      <Routes>
       <Route path="/" element={<ProductAll/>}/>  
       <Route path="/login" element={<Login setAuthenticate={setAuthenticate}/>}/>
       <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate}/>}/>
      </Routes>
    </div>
  );
}

export default App;
