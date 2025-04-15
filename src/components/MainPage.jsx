import React, { Component } from 'react'
import "./Mainpage.css";
// const mainContainer = document.querySelector('.main-container');
const colors = ['red', 'orange', 'black', 'cyan', 'blue', 'purple'];


document.addEventListener('click', (e) => {
    if (e.target.classList.contains('main-container')) {
      e.target.style.backgroundColor = 'green';
    }
  });

export default class MainPage extends Component {
  render() {


    return (
      <div className="main-container">
        <h1>main page</h1>
      </div>
    )
  }
}
