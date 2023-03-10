import React from 'react';
//imporrting reac router
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'

//importing components
import SideBar from './components/Sidebar'
import Footer from './components/Footer'
import Header from './components/Header'

const App = () => {


  return (<div className='overflow-hidden'>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/product/:id' element={<ProductDetails/>} />
      </Routes>

      <SideBar/>
      <Footer/>
    </Router>



  </div>)
};

export default App;
