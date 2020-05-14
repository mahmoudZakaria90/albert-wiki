import React, { useState, useEffect, useRef } from 'react';
import './App.css';

const languages = [
  {
    name: 'English',
    value: 'en'
  },
  {
    name: 'Français',
    value: 'fr'
  },
  {
    name: 'Deutsch',
    value: 'de'
  },
  {
    name: 'İtaliano',
    value: 'it'
  },
  {
    name: 'Español',
    value: 'es'
  },
  {
    name: 'Plattdüütsch',
    value: 'nds'
  },
  {
    name: 'Nederlands',
    value: 'nl'
  },
  {
    name: 'Türkçe',
    value: 'tr'
  },
  {
    name: 'Русский',
    value: 'ru'
  },
  {
    name: 'Hindi',
    value: 'hif'
  }
]

let wikiStyle;

function App() {
  const [preferredLang, setPreferredLang] = useState(navigator.language.split('-')[0]);
  const [wiki, setWiki] = useState('Loading wiki...');

  const reqURL = `https://${preferredLang}.wikipedia.org/w/api.php?action=parse&format=json&page=Albert_Einstein&prop=text%7Cimages&formatversion=1&origin=*`;

  const iframeRef = useRef()


  useEffect(() => {
    async function fetchWiki() {
      const req = await fetch(reqURL);
      const res = await req.json();
      setWiki(res.parse.text['*']);
    }
    fetchWiki();
    console.dir(iframeRef.current.contentDocument.head)
    // iframeRef.current.contentDocument.head.appendChild()
  })
  return (
    <div className="App">
      <header>
        <h2>Welcome to Wikipedia</h2>
        <h4>Choose your preferred language</h4>
      </header>
      <div>
        {languages.length && languages.map(({ name, value }) => <button className="wiki-btn" onClick={() => setPreferredLang(value)}>{name}</button>)}
      </div>
      <iframe ref={iframeRef} srcDoc={wiki}></iframe>
    </div>
  );
}

export default App;
