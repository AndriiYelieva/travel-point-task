import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { UserList } from './components/UserList';
import { UserDetails } from './components/UserDetails';
import './App.scss';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="travel-point-task/" element={<UserList />} />
        <Route path="travel-point-task/user/:userId" element={<UserDetails />} />
      </Routes>
    </BrowserRouter>
  );
};


