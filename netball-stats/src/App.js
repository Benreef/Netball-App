import NavBar from './component/Layout/NavBar';
import { Routes, Route } from "react-router-dom"
import AboutPage from './component/Pages/About';
import HomePage from './component/Pages/Home';

function App() {
  return (
    <>
    <NavBar /> 
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/About' element={<AboutPage />} />
    </Routes>
    
    </>
  );
}

export default App;
