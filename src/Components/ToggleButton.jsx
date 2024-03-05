import React from 'react'
import './ToggleButton.css'
export const ToggleButton = () => {
  return (
    <div class="theme-switch-wrapper">
      <em>light</em>
      <label class="theme-switch" for="checkbox">
        <input type="checkbox" id="checkbox" />
        <div class="slider round"></div>
      </label>
      <em>Dark</em>
    </div>
  )
}
