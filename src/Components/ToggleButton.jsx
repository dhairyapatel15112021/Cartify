import React from 'react'
import './ToggleButton.css'
export const ToggleButton = () => {
  return (
    <div className="theme-switch-wrapper">
      <em>dark</em>
      <label className="theme-switch" htmlFor="checkbox">
        <input type="checkbox" id="checkbox" />
        <div className="slider round"></div>
      </label>
      <em>light</em>
    </div>
  )
}
