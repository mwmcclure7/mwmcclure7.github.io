import React, { useState } from "react";
import "../styles/Carousel.css";

interface CarouselProps {
    images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    function goToPrevious() {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    function goToNext() {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    return (
        <div className="carousel">
            <button onClick={goToPrevious}>{"<"}</button>
            <div>
                <img src={images[currentIndex]} />
            </div>
            <button onClick={goToNext}>{">"}</button>
        </div>
    );
};

export default Carousel;
