import React, { useState, useEffect } from 'react';

const langLinksURL = 'https://en.wikipedia.org/w/api.php?action=parse&format=json&page=Albert_Einstein&prop=langlinks&formatversion=1&origin=*';

function Buttons({ preferredLang, handleClick }) {
    const [languages, setLanguages] = useState([]);

    useEffect(() => {
        const fetchLangs = async () => {
            const req = await fetch(langLinksURL);
            const res = await req.json();
            setLanguages(res.parse.langlinks);
        }
        fetchLangs();
    })

    return (
        <div className="App-btns">
            {languages.length > 0 && languages.map(({ langname, lang }, i) =>
                <button
                    id={langname}
                    key={i}
                    className={`wiki-btn ${preferredLang === lang ? 'selected' : ''}`}
                    disabled={preferredLang === lang}
                    onClick={handleClick.bind(null, lang)}>
                    {langname}
                </button>
            )}
        </div>
    );
}


export default Buttons;