import { Outlet } from 'react-router-dom';
import './App.css';
import { Heading } from './Components/Heading';
import { ToggleButton } from './Components/ToggleButton';
import { createContext, useEffect, useState } from 'react';
// import './Toogle.js';
export const cartContext = createContext();
function App() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
      document.documentElement.setAttribute('data-theme', currentTheme);
      if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
      }
    }
    function switchTheme(e) {
      if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
      }
      else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
      }
    }

    toggleSwitch.addEventListener('change', switchTheme, false);
  }, []);

  return (
    <div className="App">
      <ToggleButton />
      <cartContext.Provider value={{ cart, setCart }}>
        <Heading />
        <Outlet />
      </cartContext.Provider>
    </div>
  );
}

export default App;
