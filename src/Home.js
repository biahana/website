import React from "react";
import './Home.scss';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Home extends React.Component {

  render() {
    return (

      <div className="Home">
        <div className="w3-content">

          <div id="allheader">
            <header className="w3-panel w3-center w3-opacity">

              <h1 className="w3-xlarge">Beatriz Ogura Hanashiro</h1>
              <h1 className="bpm">Business Process Analyst </h1>
              <p>with Front-End Web Developer knowledge</p>

              <div className="w3-padding-32">
            
              <Link  className="w3-bar-item w3-button" to="/contact">Contact</Link>
              <Link  className="w3-bar-item w3-button" to="/resume">Resume</Link>
              </div>
              
            </header>
          </div>
        </div>

        <div className="container">
          <div className="box1"></div>
          <div className="box2"></div>
        </div>

        <footer>
          <a target="_blank" href="https://github.com/biahana"><i className="fa fa-github"></i></a>
          <a target="_blank" href="https://www.linkedin.com/in/beatriz-ogura-hanashiro-35082a85/"><i className="fa fa-linkedin w3-hover-opacity"></i></a>
          <p>Copyright @ Bia Hana 2019<a href="https://www.w3schools.com/w3css/default.asp" target="_blank" className="w3-hover-text-green"></a></p>
        </footer>

      </div>

    );
  }
}
export default Home;
