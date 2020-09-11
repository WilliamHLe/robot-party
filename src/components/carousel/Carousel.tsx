import React, {useState} from "react";
import "./Carousel.css";

interface IProps {
    children: JSX.Element[];
}

const Carousel = ({ children }: IProps) => {
    const [currentSlide, setCurrentSlide] = useState(0);

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
                <button
                    onClick={() => {
                        setCurrentSlide((currentSlide - 1 + activeSlide.length) % activeSlide.length);
                    }}
                >
                    Left
                </button>
                <button
                    onClick={() => {
                        setCurrentSlide((currentSlide + 1) % activeSlide.length);
                    }}
                >
                    Right
                </button>
                </div>
            </div>
        </div>
    );
};

export default Carousel;