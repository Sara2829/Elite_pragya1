import React, { useState, useEffect } from 'react';
import PiyushCarouselItem from './PiyushCarouselItem';
import "./PiyushCarousel.css";
import Eletro from "../Rulebook Pdf/Electro.pdf";
import Tricky from "../Rulebook Pdf/Tricky.pdf";
import MATLAB from "../Rulebook Pdf/MATLAB.pdf";

const PiyushCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false); // State to track hover

    const items = [
        {
            title: "Tricky Circuit",
            description: "'Tricky Circuit' is a puzzle game where players must manipulate a circuit board to complete an electrical connection or achieve a specific goal. The game typically presents players with a grid-based board containing various components such as wires, switches, batteries, and light bulbs. The objective is to arrange these components in such a way that when the circuit is activated, the electrical current flows correctly to achieve the desired outcome.",
            icon: require("./Media/pic1.svg"),
            pdf: Eletro,
        },
        {
            title: "Electro Quest Expedition",
            description: "'Tricky Circuit' is a puzzle game where players must manipulate a circuit board to complete an electrical connection or achieve a specific goal. The game typically presents players with a grid-based board containing various components such as wires, switches, batteries, and light bulbs. The objective is to arrange these components in such a way that when the circuit is activated, the electrical current flows correctly to achieve the desired outcome.",
            icon: require("./Media/pic2.svg"),
            pdf: Tricky,
        },
        {
            title: "Matlab Coding Challenge",
            description: "'Tricky Circuit' is a puzzle game where players must manipulate a circuit board to complete an electrical connection or achieve a specific goal. The game typically presents players with a grid-based board containing various components such as wires, switches, batteries, and light bulbs. The objective is to arrange these components in such a way that when the circuit is activated, the electrical current flows correctly to achieve the desired outcome.",
            icon: require("./Media/pic3.svg"),
            pdf: MATLAB,
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isHovered) { // Check hover state before changing index
                setActiveIndex(prevIndex => (prevIndex + 1) % items.length);
            }
        }, 3000); // Delay of 3 seconds

        // Cleanup function to clear the interval when the component unmounts
        return () => clearInterval(interval);
    }, [items.length, isHovered]);

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = 0;
        } else if (newIndex >= items.length) {
            newIndex = items.length - 1;
        }
        setActiveIndex(newIndex);
    };

    return (
        <div className='most-outer'>
            <div className='p-carousel' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                <div className='p-inner' style={{ transform: `translate(-${activeIndex * 100}%)` }}>
                    {items.map((item, index) => {
                        return <PiyushCarouselItem key={index} item={item} width={"100%"} />;
                    })}
                </div>
                <div className='p-carousel-btn'>
                    <button className='btn-arrrow' onClick={() => { updateIndex(activeIndex - 1); }}>
                        <span className="material-symbols-outlined">arrow_back_ios_new</span>
                    </button>
                    <div className='indicators'>
                        {items.map((item, index) => {
                            return (
                                <button key={index} onClick={() => { updateIndex(index); }} className='indicator-btn'>
                                    <span className={`material-symbols-outlined ${index === activeIndex ? "indicator-symbol-active" : "indicator-symbol"}`}>
                                        radio_button_checked
                                    </span>
                                </button>);
                        })}
                    </div>
                    <button onClick={() => { updateIndex(activeIndex + 1); }} className='btn-arrrow'>
                        <span className="material-symbols-outlined">arrow_forward_ios</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PiyushCarousel;
