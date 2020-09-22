import React, {useEffect, useState} from "react";
import './DisplayPoetry.css';

// Fetch data from poetry API
const DisplayPoetry = (props: { url: string; }) => {
    const url = props.url
    const [contents, setContents] = useState([{ title: "", author: "", lines: [""] }]);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then((data) => {
                setContents(data)
            });

    }, [url]);

    return (
        <div className="poetry-container">
            <h3>{contents[0].title} av {contents[0].author}</h3>
            <div>{contents[0].lines.map((line) => <p>{line}</p>)}</div>
        </div>
    );
}

export default DisplayPoetry