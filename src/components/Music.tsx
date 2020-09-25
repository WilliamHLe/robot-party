import React, {useState} from "react";
import "./music/Slider.css";
import "./radio/Radio.css";

const Music : React.FC = () => {

    const Music1 = require("./music/bensoundmoose.mp3");
    const Music2 = require("./music/ColourOfYourFaceNoMBe.mp3");
    const Music3 = require("./music/RobotsaComethDanLebowitz.mp3");

    const [music, setMusic] = useState<string>(Music1);

    const setVolume = () => {
        const musicPlayer:any = document.getElementById("musicPlayer");
        const volumeSlider:any = document.getElementById("volumeSlider");
        musicPlayer.volume = volumeSlider.value/100;
        if(musicPlayer.paused) {
            musicPlayer.play();
        }
    }

    const changeMusic = (newMusic:any) => {
        const musicPlayer:any = document.getElementById("musicPlayer");
        setMusic(newMusic);
        console.log(newMusic);
        console.log(music);
        musicPlayer.load();
        musicPlayer.play();
    }

    const pauseMusic = () => {
        const musicPlayer:any = document.getElementById("musicPlayer");
        const pauseButton:any = document.getElementById("pButton");
        console.log(musicPlayer.paused);
        if(musicPlayer.paused) {
            pauseButton.className = "";
            pauseButton.className = "play";
            musicPlayer.play();
        } else {
            pauseButton.className = "";
            pauseButton.className = "pause";
            musicPlayer.pause();
        }
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
                <span id="pButton" className="pause" onClick={pauseMusic}> </span><span className="lowVolume"> </span><input id="volumeSlider" type="range" min="0" max="100" defaultValue="50" className="slider" onChange={() => setVolume()}/><span className="maxVolume"> </span>
            </div>
        </div>
    )
}

export default Music;