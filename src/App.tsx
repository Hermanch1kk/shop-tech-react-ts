import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductsList from './components/products/ProductsList';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Login from './components/accounts/Login';
import CreateProduct from './components/products/CreateProduct';
import EditProduct from './components/products/EditProduct';
import { Register } from './components/accounts/Register';
import ProtectedRoute from './components/ProtectedRoute';
import Header from './components/Header';
import { login, logout } from './store/slices/userSlice';
import { getTokenFromLocalStorage } from './helper/localStorage.helper';
import { useAppDispatch, useAppSelector } from './store/hook';
import { useAuthUser } from './hooks/useAuthUser';

function App() {
  const dispatch = useAppDispatch();
  // const user = useAppSelector((state) => state.user.user)
  const user = useAuthUser();
  const checkAuth = async () => {
    const token = getTokenFromLocalStorage();
    try {
      if (token) {
        if (user) {
          dispatch(login(user));

        }
        else {
          dispatch(logout());
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    checkAuth();
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<ProductsList />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route element={<ProtectedRoute />}>
            <Route path="create-product" element={<CreateProduct />} />
            <Route path="edit/:id" element={<EditProduct />} />
          </Route>
        </Route>
      </Routes>
    </div >
  );
}

export default App;
