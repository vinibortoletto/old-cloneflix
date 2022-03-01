// Libs
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

// Contexts
import { useAuth } from '../contexts/Auth';

// Pages
import Browse from '../pages/Browse/Browse';
import Landing from '../pages/Landing/Landing';
import Login from '../pages/Login/Login';
import NotFound from '../pages/NotFound/NotFound';
import Signup from '../pages/SignUp/Signup';
import YourAccount from '../pages/YourAccount/YourAccount';

export const AppRoutes = () => {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={user ? <Navigate to="/browse" /> : <Landing />} />
      <Route path="/signup" element={user ? <Navigate to="/browse" /> : <Signup />} />
      <Route path="/login" element={user ? <Navigate to="/browse" /> : <Login />} />
      <Route path="/browse" element={user ? <Browse /> : <Navigate to="/login" />} />
      <Route path="/your-account" element={user ? <YourAccount /> : <Navigate to="/login" />} />
    </Routes>
  );
};
