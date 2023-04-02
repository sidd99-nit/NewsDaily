import React, { Component } from 'react'
import {
} from "react-router-dom";

export class Navbar extends Component {

  render() {
    return (
      <div>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href= "/">NewsDaily</a>
                <buthrefn className="navbar-hrefggler" type="buthrefn" data-bs-hrefggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="hrefggle navigation">
                <span className="navbar-hrefggler-icon"></span>
                </buthrefn>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auhref mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href= "/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href= "/About">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href= "/Business">Business</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href= "/Entertainment">Entertainment</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href= "/Health">Health</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href= "/Science">Science</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href= "/Sports">Sports</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href= "/Technology">Technology</a>
                    </li>
                    </ul>
                    </div>
                    </div>
                </nav>
        </div>
    )
  }
}

export default Navbar
