import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
// import ReactDOM from "react-dom/client";
import LoadingBar from 'react-top-loading-bar';


import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

 class App extends Component {

  state={
    progress:0
  }

  setProgress=(progress)=>{
    this.setState({progress:progress})
  }

  render() {
    return (
        <div>
        <Router>
          <Navbar/>
          <LoadingBar
            height={3}
            color='#f11946'
            progress={this.state.progress}
            // onLoaderFinished={() => setProgress(0)}
          />
            <Routes>
                {/* <News Key=""pageSize={6} country="in" category="About"/> */}
                <Route exact path='/' element={<News setProgress={this.setProgress} Key="General" pageSize={6} country="in" category="General"/>} />
                <Route exact path='/About' element={<News Key="About" setProgress={this.setProgress} pageSize={6} country="in" category="About"/>} />
                <Route exact path='/Business' element={<News Key="Business" setProgress={this.setProgress} pageSize={6} country="in" category="Business"/>} />
                <Route exact path='/Entertainment' element={<News Key="Entertainment" setProgress={this.setProgress} pageSize={6} country="in" category="Entertainment"/>} />
                <Route exact path='/Technology' element={<News Key="Technology" setProgress={this.setProgress} pageSize={6} country="in" category="Technology"/>} />
                <Route exact path='/Health' element={<News Key="Health" setProgress={this.setProgress} pageSize={6} country="in" category="Health"/>} />
                <Route exact path='/Science' element={<News Key="Science" setProgress={this.setProgress} pageSize={6} country="in" category="Science"/>} />
                <Route exact path='/Sports' element={<News Key="Sports" setProgress={this.setProgress} pageSize={6} country="in" category="Sports"/>} />
            </Routes>
        </Router>
      </div>
    )
  }
}

export default App;