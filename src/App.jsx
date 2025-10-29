 
import './App.css'
import '@fontsource/russo-one'; 
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import ContactPage from './Pages/ContactPage';
import AboutPage from './Pages/AboutPage';
import HelpPage from './Pages/HelpPage';
import Layout from './Components/Layout';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import DashboardPage from './Pages/DashboardPage'
import ReferralPage from "./Pages/ReferralPage"


function App() {
 

  return (
    <>
        <BrowserRouter >
      
       <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/contact' element={<ContactPage/>} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/help' element={<HelpPage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/register' element={<RegisterPage/>} />
        <Route path='/dashboard' element={<DashboardPage />} />
        <Route path='/referral' element={<ReferralPage />} />
        <Route path="/layout" element={<Layout />} />
        
      </Routes>

      
 
     
    </BrowserRouter>
   
    </>
  )
}

export default App
