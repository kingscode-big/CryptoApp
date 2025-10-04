 
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
 

function App() {
 

  return (
    <>
        <BrowserRouter >
      <Layout>
       <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/contact' element={<ContactPage/>} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/help' element={<HelpPage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/register' element={<RegisterPage/>} />
      </Routes>

      </Layout>
     
    </BrowserRouter>
   
    </>
  )
}

export default App
