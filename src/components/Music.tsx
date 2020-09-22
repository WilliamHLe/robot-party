import React, {useState} from "react";
import "./music/Slider.css";

const Music : React.FC = () => {

    const Music1 = require("./music/Confrontation.mp3");
    const Music2 = require("./music/tragic.mp3");
    const Music3 = require("./music/name.mp3");

    const [selected, setSelected] = useState<string>(Music1);

    const setVolume = () => {
        const musicPlayer:any = document.getElementById("musicPlayer");
        const volumeSlider:any = document.getElementById("volumeSlider");
        console.log(musicPlayer.paused);
        musicPlayer.volume = volumeSlider.value/100;

        if(musicPlayer.paused) {
            musicPlayer.play();
        }
    }

    document.addEventListener("click",function handler(e) {
        const musicPlayer:any = document.getElementById("musicPlayer");
        musicPlayer.play();
        const target:any = e;
        target.currentTarget.removeEventListener(e.type,handler);
    });

    const changeMusic = (newMusic:any) => {
        const musicPlayer:any = document.getElementById("musicPlayer");
        setSelected(newMusic);

        musicPlayer.load();
        musicPlayer.play();
    }

    const pauseMusic = () => {
        const musicPlayer:any = document.getElementById("musicPlayer");
        return musicPlayer.paused ? musicPlayer.play() : musicPlayer.pause();
    }

    return (
        <div className="radio-wrapper">
            <div>
                <input type="radio" value="Music1" name="music" checked={selected === Music1} onChange={() => changeMusic(Music1)} /> Musikk 1
                <input type="radio" value="Music2" name="music" checked={selected === Music2} onChange={() => changeMusic(Music2)}/> Musikk 2
                <input type="radio" value="Music3" name="music" checked={selected === Music3} onChange={() => changeMusic(Music3)}/> Musikk 3
                <br />
                <audio id="musicPlayer" onPlay={() => setVolume()} autoPlay>
                    <source src={selected} type="audio/mpeg"/>
                </audio>
                &#128264;<input id="volumeSlider" type="range" min="0" max="100" defaultValue="50" className="slider" onChange={() => setVolume()}/>&#128266;<span onClick={pauseMusic}>&#9208;</span>
            </div>
        </div>
    )

}

export default Music;