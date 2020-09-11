import React, {useState} from "react";
import "./Carousel.css";

/* Based on: https://medium.com/octopus-wealth/creating-a-carousel-in-react-e45918738212 */

/*Forenklet kode fra tutorial gitt i link over (blant annet tatt bort bruk av Styled Components).*/

/*Denne koden ga et godt utgangspunkt ettersom den lot slides være egne komponenter, som jeg ønsket for å gjøre
* komponenten mer generell.*/

interface IProps {
    children: JSX.Element[];
}


const Carousel = ({ children }: IProps) => {
    const [currentSlide, setCurrentSlide] = useState<number>(0);

    const activeSlide = children.map((slide, index) => (

        <div className={currentSlide===index ? 'slide-active' : 'slide-hidden'} key={index}>
            {slide}
        </div>
    ));

    return (
        <div>
            <div className="carousel-wrapper">
                <div className="carousel-slides">
                    {activeSlide}
                </div>

                <div className="carousel-buttons">

                    <button className="carousel-button" style={{float: "left"}}
                        onClick={() => {
                            setCurrentSlide((currentSlide - 1 + activeSlide.length) % activeSlide.length);
                        }}
                    >
                        &#8810; Forrige
                    </button>

                    <button className="carousel-button" style={{float: "right"}}
                        onClick={() => {
                            setCurrentSlide((currentSlide + 1) % activeSlide.length);
                        }}
                    >
                        Neste &#8811;
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Carousel;