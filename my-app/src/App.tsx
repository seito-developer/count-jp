import React from 'react';
import logo from './logo.svg';
import './App.css';
import textToSpeech from '@google-cloud/text-to-speech';
import fs from 'fs';
import util from 'util';
// import { GOOGLE_APPLICATION_CREDENTIALS } from './const';

interface RequestProps {
  input: any
  voice: any
  audioConfig: any
}

function App() {

  let speech = new SpeechSynthesisUtterance();
  speech.lang = "en";
  speech.text = '10000';
  speech.rate = 1;
  speech.volume = 1;
  speech.pitch = 1;
  let voices = [];

  
  
  // const client = new textToSpeech.TextToSpeechClient();
  
  // async function quickStart() {
  //   // The text to synthesize
  //   const text = 'hello, world!';

  //   // Construct the request
  //   const request:RequestProps = {
  //     input: {text: text},
  //     // Select the language and SSML voice gender (optional)
  //     voice: {languageCode: 'en-US', ssmlGender: 'NEUTRAL'},
  //     // select the type of audio encoding
  //     audioConfig: {audioEncoding: 'MP3'}
  //   };

  //   // Performs the text-to-speech request
  //   const [response] = await client.synthesizeSpeech(request);
  //   // Write the binary audio content to a local file
  //   const writeFile = util.promisify(fs.writeFile);
  //   await writeFile('output.mp3', response.audioContent, 'binary');
  //   console.log('Audio content written to file: output.mp3');
  // }

  const handleClick = () => {
    window.speechSynthesis.speak(speech);
    // quickStart();
  }

  return (
    <div className="App">
      <button type="button" onClick={handleClick}>Click me!</button>
    </div>
  );
}

export default App;
