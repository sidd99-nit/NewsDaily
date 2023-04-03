import './App.css';

import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar';
import About from './Components/About';


import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";


 const App = ()=> {

    const [progress,setProgress]=useState(0);

    return (
        <div>
        <Router>
          <Navbar/>
          <LoadingBar
            height={3}
            color='#f11946'
            progress={progress}
            // onLoaderFinished={() => setProgress(0)}
          />
            <Routes>
                {/* <News Key=""pageSize={6} country="in" category="About"/> */}
                <Route exact path='/' element={<News setProgress={setProgress} Key="General" pageSize={6} country="in" category="General"/>} />
                <Route exact path='/About' element={<About />} />
                <Route exact path='/Business' element={<News Key="Business" setProgress={setProgress} pageSize={6} country="in" category="Business"/>} />
                <Route exact path='/Entertainment' element={<News Key="Entertainment" setProgress={setProgress} pageSize={6} country="in" category="Entertainment"/>} />
                <Route exact path='/Technology' element={<News Key="Technology" setProgress={setProgress} pageSize={6} country="in" category="Technology"/>} />
                <Route exact path='/Health' element={<News Key="Health" setProgress={setProgress} pageSize={6} country="in" category="Health"/>} />
                <Route exact path='/Science' element={<News Key="Science" setProgress={setProgress} pageSize={6} country="in" category="Science"/>} />
                <Route exact path='/Sports' element={<News Key="Sports" setProgress={setProgress} pageSize={6} country="in" category="Sports"/>} />
            </Routes>
        </Router>
      </div>
    )
  
}

export default App;