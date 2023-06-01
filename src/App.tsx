import React from 'react';
import './App.css';
import Terminal from './Terminal/Terminal';

function App() {
  return (
    <main className="App">
      {generateRandomString(68 * 15)}
      <br />
      ASDFÇLKDFLÇ
      <span style={{ color: 'red' }}>WELCOME</span>
      ASDLKFJASÇLDFK
      <span style={{ color: 'red' }}>TO</span>
      ASDKLFJASDFLKJ
      <span style={{ color: 'red' }}>ReJx</span>
      SDLFKJAJKHSDLFK
      {generateRandomString(68 * 16)}
      <Terminal />
    </main>
  );
}

function generateRandomString(len: number) {
  let string = '';
  const lineWidth = getLineWidth();
  for (let i = 0; i < len; i++) {
    if (i % 68 === 0) {
      string += '\n';
      continue;
    }
    string += String.fromCharCode(Math.random() * (92 - 64) + 64);
  }
  return string;
}

function getLineWidth(): number {
  console.log(window.innerWidth);
  const main = document.querySelector('.App') as Element;
  // console.log(window.getComputedStyle(main).getPropertyValue('font-size'));
  return 0;
}

export default App;
