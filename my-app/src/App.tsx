import React from 'react';
import logo from './logo.svg';
import './App.css';

const randomCounts = () => {
  
}

function App() {

  let speech = new SpeechSynthesisUtterance();
  speech.lang = "en";
  speech.text = '10000';
  speech.rate = 1;
  speech.volume = 1;
  speech.pitch = 1;

  // window.addEventListener('load', () => {
  //   console.log(speechSynthesis.getVoices())
  // })
  // const synth = window.speechSynthesis;
  // const voices = synth.getVoices();
  // console.log(voices);

  const handleClick = () => {
    window.speechSynthesis.speak(speech);
    
    setTimeout(() => {
      speech.lang = "ja";
      // let utterance = new SpeechSynthesisUtterance('Ciao')
      // utterance.lang = 'ja-JP'
      window.speechSynthesis.speak(speech);
      // speechSynthesis.onvoiceschanged = () => {
      //   return 'ja-JP';
      //   // if(typeof speechSynthesis === 'undefined') {
      //   //   return;
      //   // }
      
      //   // var voices = speechSynthesis.getVoices();
      
      //   // for(var i = 0; i < voices.length; i++) {
      //   //   var option = document.createElement('option');
      //   //   option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
      
      //   //   if(voices[i].default) {
      //   //     option.textContent += ' -- DEFAULT';
      //   //   }
      
      //   //   option.setAttribute('data-lang', voices[i].lang);
      //   //   option.setAttribute('data-name', voices[i].name);
      //   //   document.getElementById("voiceSelect").appendChild(option);
      //   // }
      // }
      
    }, 2000);
  }

  return (
    <div className="App">
      {/* <select>
        { }
      </select> */}
      <button type="button" onClick={handleClick}>Click me!</button>
    </div>
  );
}

export default App;
