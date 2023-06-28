import NavBar from './component/Layout/NavBar';
import { Routes, Route } from "react-router-dom"
import AboutPage from './component/Pages/About';
import HomePage from './component/Pages/Home';
import SignUpForm from './component/Pages/SignUp';
import Login from './component/Pages/Login';
import Logout from './component/Pages/Logout';
import CreateTeamForm from './component/Pages/Team';
import { useState } from 'react';
import Scoring from './component/Pages/GameStartPage';
import './App.css'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userName, setUserName] = useState('')

  if (isLoggedIn === true) {
    return (
      <>
      <NavBar isLoggedIn={isLoggedIn} />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/Create' element={<CreateTeamForm />} />
          <Route path='/About' element={<AboutPage />} />
          <Route path="/Logout" element={<Logout setIsLoggedIn={setIsLoggedIn} />}></Route>
          <Route path='/Scoring' element={<Scoring />} />
        </Routes>
        
      </>
    );
  } else {
    return (
      <>
      <NavBar /> 
      <Routes>
        <Route path='/About' element={<AboutPage />} />
        <Route path="/Signup" element={<SignUpForm />}></Route>
        <Route path='/Login' element={<Login setIsLoggedIn={setIsLoggedIn} setUserName={setUserName} />} />
      </Routes>
      
      </>
    );
  }
}


export default App;
