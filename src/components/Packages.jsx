import React, { Component } from 'react'
import "./Packages.css";

export default class Packages extends Component {
  render() {
    return (
        <div className="pricing-container">
        <div className="plan-box">
          <h2>Plan 1</h2>
          <p>Features and pricing for plan 1</p>
          <button>Sign up</button>
        </div>
        <div className="plan-box">
          <h2>Plan 2</h2>
          <p>Features and pricing for plan 2</p>
          <button>Sign up</button>
        </div>
        <div className="plan-box">
          <h2>Plan 3</h2>
          <p>Features and pricing for plan 3</p>
          <button>Sign up</button>
        </div>
      </div>
    )
  }
}