import React, {useState} from "react";
import "./Slider.css";
import "../radio/Radio.css";

const Music : React.FC = () => {

    //Musikk som er brukt
    //Kilder:
    //Moose: https://www.bensound.com/royalty-free-music/track/moose
    //Colour of your face: NoMBe
    //Robots a Cometh: Dan Lebowitz
    const Music1 = require("./music/bensoundmoose.mp3");
    const Music2 = require("./music/ColourOfYourFaceNoMBe.mp3");
    const Music3 = require("./music/RobotsaComethDanLebowitz.mp3");

    const [music, setMusic] = useState<string>(Music1);

    //Funksjon endrer volumet til musikken
    const setVolume = () => {
        const musicPlayer:any = document.getElementById("musicPlayer");
        const volumeSlider:any = document.getElementById("volumeSlider");
        musicPlayer.volume = volumeSlider.value/100;
    }

    //Funksjon som endrer musikken
    //Nødvendig siden audio-taggen må bruke load() for å laste inn ny musikk,
    //og kan derfor ikke bare bruke setMusic()
    const changeMusic = (newMusic:any) => {
        const musicPlayer:any = document.getElementById("musicPlayer");
        setMusic(newMusic);
        musicPlayer.load();
        musicPlayer.play();
        changePButton();
    }

    //Funksjon endrer utseende til pause-knappen basert på musikkens tilstand
    const changePButton =() => {
        const musicPlayer:any = document.getElementById("musicPlayer");
        const pauseButton:any = document.getElementById("pButton");
        if(musicPlayer.paused) {
            pauseButton.className = "";
            pauseButton.className = "pause";
        } else {
            pauseButton.className = "";
            pauseButton.className = "play";
        }
    }

    //Funksjon for å stoppe eller starte musikken
    const pauseMusic = () => {
        const musicPlayer:any = document.getElementById("musicPlayer");
        const pauseButton:any = document.getElementById("pButton");
        (musicPlayer.paused) ? musicPlayer.play() : musicPlayer.pause();
        changePButton();
    }

    return (
        <div className="radio-element">
            <h3>Velg musikk:</h3>
            <div>
                <label>
                    <input type="radio" value={Music1} name="musicChoice1" checked={music === Music1} onChange={() => changeMusic(Music1)} /> Musikk 1
                </label>
                <label>
                    <input type="radio" value={Music2} name="musicChoice2" checked={music === Music2} onChange={() => changeMusic(Music2)}/> Musikk 2
                </label>
                <label>
                    <input type="radio" value={Music3} name="musicChoice3" checked={music === Music3} onChange={() => changeMusic(Music3)}/> Musikk 3
                </label>
                <br />
                <audio id="musicPlayer" onLoad={() => setVolume()} autoPlay>
                    <source src={music} type="audio/mpeg"/>
                </audio>
                {/* Musicspiller */}
                <span id="pButton" className="pause" onLoad={changePButton} onClick={pauseMusic}> </span>
                <span className="lowVolume"> </span>
                {/* Range-input for endring av volum */}
                <input id="volumeSlider" type="range" min="0" max="100" defaultValue="50" className="slider" onChange={() => setVolume()}/>
                <span className="maxVolume"> </span>
            </div>
        </div>
    )
}

export default Music;