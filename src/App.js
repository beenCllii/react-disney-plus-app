import { Route, Routes } from 'react-router-dom';
import React from 'react'
import './App.css';
import Nav from './components/Nav';
import Row from './components/Row';
import { Outlet } from'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import SearchPage from './pages/SearchPage';
import DetailPage from './pages/DetailPage';

import app from './firebase';

const Layout = () =>{
  return(
    <div>
      <Nav />
      <Outlet />
    </div>
  )
}

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<LoginPage />} />
          <Route path='main' element={<MainPage />}j />
          <Route path=':movieId' element={<DetailPage/>} />
          <Route path='search' element={<SearchPage />} />
        </Route>
      </Routes>
    </div>
  );
}  

export default App;

