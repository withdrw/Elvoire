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
          <motion.div
  initial={{ y: 0 }}
  animate={{ y: [0, -50, 0] }}
  transition={{ duration: 2, repeat: 2 }}
  style={{
    backgroundColor: 'black',
    borderRadius: 10,
    position: 'absolute',
    top: '20%',
    transform: 'translateY(-50%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'start',
  }}
          >
            <h2 style={{ color: 'white', fontSize: 20 }}>Welcome to Elvoire</h2>
            <p style={{ color: 'white', fontSize: 20 , marginTop: 10}}>We are a team of experts in scaling your brand to success</p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default MainPage
