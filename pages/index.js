import { useState } from 'react'; // Import the useState hook

import styles from '../styles/Home.module.css';


export default function Home() {
  // Define state variables for red, green, and blue values
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const selectedColor = `Selected RGB Color: rgb(${red}, ${green}, ${blue})`;

  // Define functions to update the color values
  const updateRed = (e) => {
    setRed(e.target.value);
  };

  const updateGreen = (e) => {
    setGreen(e.target.value);
  };

  const updateBlue = (e) => {
    setBlue(e.target.value);
  };

  // Define the styles object for the colored box
  const boxStyles = {
    marginTop: 100,
    height: 500,
    width: 500,
    background: `rgb(${red}, ${green}, ${blue})`,
  };

  return (

   
    
    <div className="container">
      <div className="sliders">
        <div className="red">
          <input
            id="red"
            type="range"
            min="0"
            max="255"
            step="1"
            value={red}
            onChange={updateRed}
          
          />
          <label>Red: {red}</label>
        </div>
        <div className="green">
          <input
            id="green"
            type="range"
            min="0"
            max="255"
            step="1"
            value={green}
            onChange={updateGreen}
          />
          <label>Green: {green}</label>
        </div>
        <div className="blue">
          <input
            id="blue"
            type="range"
            min="0"
            max="255"
            step="1"
            value={blue}
            onChange={updateBlue}
          />
          <label>Blue: {blue}</label>
        </div>
      </div>
      {/* Display the colored box */}
      <div className="colored-box" style={boxStyles}></div>
      <div>
        <p>{selectedColor}</p>
      </div>
    </div>
  );
}
