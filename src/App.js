import './App.css';
import LoginPage from './Login-page/LoginPage';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
// import Main from './Three-components/Main';
import Brands from './Three-components/Brands';
import Products from './Three-components/Products';
import Users from './Three-components/Users';
import Navbar from "./Three-components/Navbar"
import ProtectedRoutes from './ProtectedRoutes';
import RouteNotFound from './RouteNotFound';
import { useEffect } from 'react';
import Cookies from 'universal-cookie';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          
            <Route path="/" element={<LoginPage />} />
            <Route element={<ProtectedRoutes />}>
                <Route path='/Three-components' element={<Navbar />}>
                  <Route path='/Three-components/Brands' element={<Brands />} />
                  <Route path='/Three-components/Products' element={<Products />} />
                  <Route path='/Three-components/Users' element={<Users />} />
                </Route>
          </Route>
          <Route path="*" element={<RouteNotFound />} />
        </Routes>
      </div>
    </Router>
    // <LoginPage/>
  );
}

export default App;
