import React from "react";
import './DisplayPoetry.css';



type DState = {
    title: string
    author: string
    lines: object
}
type DProps = {
    url: string
}

// Henter dikt fra PoetryDB
// Bruker en klasse-komponent
class DisplayPoetry extends React.Component<DProps, DState> {
    state = {title: "", author: "", lines: [""]}

    componentDidMount() {
        fetch(this.props.url)
            .then(response => response.json())
            .then((data) => {
                this.setState({title: data[0].title, author: data[0].author, lines: data[0].lines })
                console.log(data)

            })
        console.log(this.state.title)
    }

    renderContent() {
        if (this.state.title !== "") {
            return (
                <div className="poetry-container">
                    <h3>{this.state.title} av {this.state.author}</h3>
                    <div>{this.state.lines.map((line) => <p>{line}</p>)}</div>
                </div>
            )
        }

        return <h1>Vennligst vent mens diktet hentes...</h1>;
    }

    render() {
        return (
            this.renderContent()
        )
    }
}

export default DisplayPoetry