import React, { useEffect, useRef } from 'react';
import '../GradientBackground.css';

const GradientBackground2 = () => {
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
        <div className="gradient-bg2">
            <div className="gradients-container2">
                <div className="g12"></div>
                <div className="g22"></div>
                <div className="g32"></div>
                <div className="g42"></div>

                <div className="interactive2" ref={interactiveRef}></div>
            </div>
        </div>
    );
};

export default GradientBackground2;
