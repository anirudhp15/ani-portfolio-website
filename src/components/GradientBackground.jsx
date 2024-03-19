import React, { useEffect, useRef } from 'react';
import '../GradientBackground.css';

const GradientBackground = () => {
    const interactiveRef = useRef(null);

    useEffect(() => {
        const interBubble = interactiveRef.current;
        let curX = 0;
        let curY = 0;
        let tgX = 0;
        let tgY = 0;

        function move() {
            curX += (tgX - curX) / 20;
            curY += (tgY - curY) / 20;
            interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
            requestAnimationFrame(() => {
                move();
            });
        }

        window.addEventListener('mousemove', (event) => {
            tgX = event.clientX - window.innerWidth / 2;
            tgY = event.clientY - window.innerHeight / 2;
        });

        move();

        return () => {
            window.removeEventListener('mousemove', move);
        };
    }, []);

    return (
        <div className="gradient-bg">
            <div className="gradients-container">
                <div className="g1"></div>
                <div className="g2"></div>
                <div className="g3"></div>
                <div className="g4"></div>
                <div className="g5"></div>
                <div className="interactive" ref={interactiveRef}></div>
            </div>
        </div>
    );
};

export default GradientBackground;
