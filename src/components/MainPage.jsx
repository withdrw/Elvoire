import React, { Component } from 'react'
import "./Mainpage.css";
import gate from "../assets/gate.png";
// const mainContainer = document.querySelector('.main-container');
const colors = ['red', 'orange', 'black', 'cyan', 'blue', 'purple'];
let index = 0;

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('main-container')) {
      e.target.style.backgroundColor = colors[index];
      index + 1 === colors.length ? index = 0 : index += 1;
    }
  });

export default class MainPage extends Component {
  render() {


    return (
        <div className="main-container">
        <h1>Elovire</h1>
        <p>Meet Elvoire, your partner in scaling your brand to success</p>
        <div className='gate-img'>
</div>
      </div>
    )
  }
}
