import React, { Component } from 'react';
import { SpeechProvider, useSpeechRecognition } from 'react-speech-recognition';

const Dictaphone = () => {
 const [, setListening] = useSpeechRecognition();
 const toggle = () => setListening(!listening);

 return (
    <button onClick={toggle}>
      {listening ? 'Stop listening' : 'Start listening'}
    </button>
 );
};

const TextDisplay = () => {
 const [transcript] = useSpeechRecognition();

 return <p>{transcript}</p>;
};