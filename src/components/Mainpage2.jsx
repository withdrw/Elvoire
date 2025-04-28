import React from 'react';
import { motion } from 'framer-motion';
import "./Mainpage2.css";

function MainPage2() {
  return (
    <div className="mainpage2-container">
<motion.div
  initial={{ x: '-80%', width: 20, height: 50 }}
  animate={{ x: '50%', width: 600, height: 500 }}
  transition={{ duration: 1, ease: 'easeInOut' }}
  style={{
    backgroundColor: 'black',
    borderRadius: 10,
    position: 'absolute',
    top: '20%',
    right: '70%',
    transform: 'translateY(-50%)',
    display: 'flex',
    flexDirection: 'column', // add this line
    justifyContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  }}
>
  <h2 style={{ color: 'white', fontSize: 20 }}>Welcome to Elvoire</h2>
  <p style={{ color: 'white', fontSize: 20 , marginTop: 10}}>We are a team of experts in scaling your brand to success</p>
</motion.div>

    </div>
  );
}

export default MainPage2;