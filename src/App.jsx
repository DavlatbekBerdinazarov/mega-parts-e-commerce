import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import HomePage from './pages/HomePage';
import AppLayout from './layout/AppLayaut';
import MainLayout from './layout/MainLayout';
import NotFound from './components/NotFound';
import Profile from './pages/Profile';
import Orders from './pages/Orders';
import MyCart from './pages/MyCart';
import ShockAbsorbesPage from './pages/ShockAbsorbesPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import BlogPage from './pages/BlogPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<AppLayout />}
        >
          <Route index element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/homepage"
            element={<MainLayout />}
          >
            <Route index element={<HomePage />} />
            <Route path="profile" element={<Profile />} />
            <Route path="orders" element={<Orders />} />
            <Route path="mycart" element={<MyCart />} />
            <Route path="shock-absorbes" element={<ShockAbsorbesPage />} />
            <Route path="blogs" element={<BlogPage />} />
            <Route path="product/:name" element={<ProductDetailsPage />} />
          </Route>
          <Route path="*" element={<NotFound to="/" />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
