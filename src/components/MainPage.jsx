import React, {useState} from 'react'
import "./Mainpage.css";
import { GiHamburgerMenu } from "react-icons/gi";
import bg from "../assets/two-tone.jpg";
import {motion} from 'motion/react'

const MainPage = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <div className='main-container'>
      <section className="main">
        <div className="navbar">  
        <h1 className='elvoire'>Elvoire</h1>
        <div className="hamburg" onClick={toggleMenu}>
          <GiHamburgerMenu className='icon-ham' />
          {menuOpen && (
            <div className="links">
          <a className="line apply">Apply Now</a>
          <a className="line contact">Contact Us</a>
          <a className="line about">About Us</a>
          </div>
          )}
        </div>
        </div>
      </section>
      <section className="first">
        <div className="first">

        </div>
      </section>
    </div>
  )
}

export default MainPage
