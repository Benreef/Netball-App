import NavBar from './component/Layout/NavBar';
import { Routes, Route } from "react-router-dom"
import AboutPage from './component/Pages/About';
import HomePage from './component/Pages/Home';
import SignUpForm from './component/Pages/SignUp';
import Login from './component/Pages/Login';
import Logout from './component/Pages/Logout';

import { useState } from 'react';

function App() {

  const [IsLoggedIn, setIsLoggedIn] = useState(false)
  const [userName, setUserName] = useState('')

  if (IsLoggedIn === true) {
    return (
      <>
      <NavBar /> 
      <h2>Welcome, {userName}!</h2>
      <Routes>
      
        <Route path='/' element={<HomePage />} />
        <Route path='/About' element={<AboutPage />} />
        <Route path="/Logout" element={<Logout setIsLoggedIn={setIsLoggedIn} />}></Route>
      </Routes>
      
      </>
    );
  } else {
    return (
      <>
      <NavBar /> 
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/About' element={<AboutPage />} />
        <Route path="/Signup" element={<SignUpForm />}></Route>
        <Route path='/Login' element={<Login setIsLoggedIn={setIsLoggedIn} setUserName={setUserName} />} />
      </Routes>
      
      </>
    );
  }
}


export default App;