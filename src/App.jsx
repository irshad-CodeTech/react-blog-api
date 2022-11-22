import React from 'react';
import './App.css';
import Blog from './pages/Blog';
import Home from './pages/Home/index';
import Header from './pages/Home/header'
import Headline from './pages/Home/headline'

import {Route, Routes} from 'react-router-dom';

const App = () => {
 return(
     <>
        {/* <Headline/> */}
        <Header/>
        <Home/>
     </>

     
 )

}

export default App;
