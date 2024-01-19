import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.scss';
import React from 'react';
import { UserList } from './components/UserList';
import { UserDetails } from './components/UserDetails';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/user/:userId" element={<UserDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
