import React, { useState, useEffect } from 'react';
import Loader from './Components/Loader';
import languages from './languages.js';

function App() {
  const [preferredLang, setPreferredLang] = useState(navigator.language.split('-')[0]);
  const [wiki, setWiki] = useState('');
  const [isLoading, setIsLoading] = useState(true)

  const reqURL = `https://${preferredLang}.wikipedia.org/w/api.php?action=parse&format=json&page=Albert_Einstein&prop=text%7Cimages&formatversion=1&origin=*`;

  useEffect(() => {
    const fetchWiki = async () => {
      const req = await fetch(reqURL);
      const res = await req.json();
      setWiki(res.parse.text['*']);
      setIsLoading(false);
    }
    fetchWiki();
  })

  const handleClick = (value) => {
    setPreferredLang(value);
    setIsLoading(true);
  }


  return (
    <div className="App">
      <header className="App-header">
        <h2>Welcome to Wikipedia viewer</h2>
        <h4>Choose your preferred language</h4>
      </header>
      <div className="App-btns">
        {languages.length > 0 && languages.map(({ name, value }, i) =>
          <button
            id={name}
            key={i}
            className={`wiki-btn ${preferredLang === value ? 'selected' : ''}`}
            disabled={preferredLang === value}
            onClick={handleClick.bind(null, value)}>
            {name}
          </button>
        )}
      </div>
      <div className="wiki-wrapper">
        {isLoading ? <Loader /> : null}
        <div className="wiki-view" dangerouslySetInnerHTML={!isLoading ? { __html: wiki } : null}></div>
      </div>
    </div>
  );
}

export default App;
