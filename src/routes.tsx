// Libs
import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Pages
import Browse from './pages/Browse/Browse';
import Landing from './pages/Landing/Landing';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import SignUp from './pages/SignUp/SignUp';
import YourAccount from './pages/YourAccount/YourAccount';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Landing />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/browse" element={<Browse />} />
      <Route path="/your-account" element={<YourAccount />} />
    </Routes>
  );
};
