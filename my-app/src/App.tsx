import React from 'react';
import logo from './logo.svg';
import random from 'random';
import roundTo from 'round-to';

import './App.css';

const DELAY = 2000;

const putPattern = () => {
  const base:number = Math.random();
  if(base < 0.1){
    return 'points';
  } else {
    if(base >= 0.1 && base <= 0.25){
      return 'integer1';
    } else if(base >= 0.26 && base <= 0.4){
      return 'integer2';
    } else if(base >= 0.41 && base <= 0.7){
      return 'integer3';
    } else {
      return 'integer4';
    }
  }
}

const randomCounts = () => {
  const pattern:string = putPattern();
  let val:number;

  switch(pattern){
    case 'points':
      const n = 2;
          val = roundTo(Math.floor( Math.random() * Math.pow( 10, n ) ) / Math.pow( 10, n ), 3);
      break;
    case 'integer1':
      val = random.int(0, 100);
      break;
    case 'integer2':
      val = roundTo(random.int(1000, 10000), -1);
      break;
    case 'integer3':
      val = roundTo(random.int(10000, 100000000), -6);
      break;
    case 'integer4':
      val = roundTo(random.int(100000000, 100000000000), -8);
      break;
    default:
      val = random.int(0, 100);
      break;
  }
  
  return val.toString();
}

let timer:any;

function App() {

  let speech = new SpeechSynthesisUtterance();
  speech.rate = 1;
  speech.volume = 1;
  speech.pitch = 1;

  const resetVal = () => {
    speech.lang = "en";
    speech.text = randomCounts();
  }
  
  const chaseJp = () => {
    speech.lang = "ja";
    window.speechSynthesis.speak(speech);
  }

  const handleClick = () => {
    resetVal();
    window.speechSynthesis.speak(speech);
    
    clearTimeout(timer);
    timer = setTimeout(chaseJp, DELAY);
  }

  return (
    <div className="App h-full">
      <div className="mx-5 mt-20 grid place-content-center">
        <div className="bg-gradient-to-r from-blue-400 to-indigo-500 rounded-2xl text-white p-8 text-center h-72 mx-auto">
          <h1 className="text-3xl mb-3 font-bold">Count JP</h1>
          <p className="text-lg">
            You can try to recognize numbers from English to Japanese by clicking the button!
          </p>
        </div>
        <div className="bg-white py-8 px-8 text-center rounded-md shadow-lg transform -translate-y-20 sm:-translate-y-24 w-3/4 mx-auto">
          <img className="w-20 h-20 object-cover rounded-full mx-auto shadow-lg" src="https://images.unsplash.com/photo-1611342799915-5dd9f1665d04?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="User avatar" />
          {/* <p className="capitalize text-xl mt-1">essie walton</p> */}
          <div className="mt-5 w-full">
            <button 
              className="rounded-md bg-gradient-to-r from-blue-400 to-indigo-500 text-xl text-white pt-3 pb-4 px-8 inline"
              type="button" onClick={handleClick}
            >Listten!</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
