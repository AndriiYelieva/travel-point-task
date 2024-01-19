import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.scss';
import React from 'react';
import { UserList } from './components/UserList';
import { UserDetails } from './components/UserDetails';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="travel-point-task/" element={<UserList />} />
        <Route path="travel-point-task/user/:userId" element={<UserDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
