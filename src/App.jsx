
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar.jsx';
import AdminPage from './Component/AdminPage.jsx';
import MessageBox from './Component/MessageBox.jsx';
import Viewmessage from './Component/Viewmessage.jsx';
import Displaymessage from './Component/Displaymessage.jsx'; 
import Hero from './Component/Hero.jsx';
import Signup from './Component/Signup.jsx';
import Login from './Component/Login.jsx';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      {/* <AdminPage /> */}
      <Routes>
        <Route exact path='/' element={<Hero />} />
        <Route path='/messagebox' element={<MessageBox />} />
        <Route path='/displaymessage' element={<Displaymessage />} />
        <Route path='/displaymessage/:message' element={<Displaymessage />} /> 
        <Route path='/viewmessage/:message' element={<Viewmessage />} /> 
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
