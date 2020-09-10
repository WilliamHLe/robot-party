import React, {useEffect, useState} from "react";


// Fetch data from poetry API
const DisplayPoetry = () => {
    const url = "https://poetrydb.org/author,title/Emily%20Dickinson;We%20should%20not%20mind%20so%20small%20a%20flower";
    const [contents, setContents] = useState([{ lines: [""] }]);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then((data) => {
                setContents(data)
            });

    }, [url]);

    return (
        <div>
            {contents[0].lines.map((line) => <p>{line}</p>)}
        </div>
    );
}

export default DisplayPoetry