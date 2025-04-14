import React, { Component } from 'react'
import "./Landingpage.css";
import image from '../assets/image.png';


export default class landingpage extends Component {
  render() {
    return (
      <section className="landing-page">
      <img className="elvoire-logo" src={image} alt="Elvoire Logo" />
      <nav className="main-navbar">
          <ul className="main-links">
            <li><a href="/aboutus" className="nav-link">About us</a></li>
            <li><a href="#" className="nav-link">Contact us</a></li>
            <li><a href="#" className="nav-link">Apply Now</a></li>
          </ul>
        </nav>
      </section>
    )
  }
}
