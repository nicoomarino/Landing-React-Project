import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from '../screens/Home.jsx'
import Services from '../screens/Services.jsx'
import MoreInfo from '../screens/MoreInfo.jsx'
import AboutUs from '../screens/AboutUs.jsx'
import OurWork from '../screens/OurWork.jsx'
import Clients from '../screens/Clients.jsx'
import Contact from '../screens/Contact.jsx'
import Footer from '../screens/Footer.jsx'
import NavBar from '../modules/NavBar.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar/>
    <Home />
    <Services/>
    <MoreInfo/>
    <AboutUs/>
    <OurWork/>
    <Clients/>
    <Contact/>
    <Footer/>
  </React.StrictMode>,
)
