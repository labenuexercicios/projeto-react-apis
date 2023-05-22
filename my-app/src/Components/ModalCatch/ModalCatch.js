import React, { useState, useEffect, useRef } from 'react';
import ReactDom from 'react-dom';
import pokeballVideo from '../../Assets/pokeballVideo.mp4';
import './ModalCatch.css';

export default function ModalCatch({ open, children, onClose }) {
    const [isAnimating, setIsAnimating] = useState(false);
    const videoRef = useRef(null);
    const lastFrameTime = 5.5; 

    const handleClose = () => {
        onClose();
    };

    useEffect(() => {
        if (videoRef.current) {
            if (!isAnimating) {
                videoRef.current.currentTime = videoRef.current.duration - lastFrameTime;
                videoRef.current.pause();
            } else {
                videoRef.current.currentTime = 0;
                videoRef.current.play();
            }
        }
    }, [isAnimating, lastFrameTime]);

    const handleVideoEnded = () => {
        if (!isAnimating && videoRef.current) {
            videoRef.current.currentTime = videoRef.current.duration - lastFrameTime;
            videoRef.current.pause();
        }
    };

    const handleClick = () => {
        setIsAnimating(!isAnimating);
    };

    useEffect(() => {
        if (open) {
            setIsAnimating(true);
        }
    }, [open]);

    const handleCombinedClick = () => {
        handleClick();
        handleClose();
    };

    if (!open) return null;

    return ReactDom.createPortal(
        <div className={`modalOverlay ${open ? 'open' : ''}`} onClick={handleCombinedClick}>
            <div className="modalCatch">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    viewBox="0 0 560 280"
                    preserveAspectRatio="true"
                >
                    <line
                        id="svg_3"
                        fill="none"
                        stroke="#000000"
                        strokeWidth="2"
                        x1="1.0"
                        y1="2.0"
                        x2="370"
                        y2="2.0"
                    />
                    <line
                        id="svg_4"
                        fill="none"
                        stroke="#000000"
                        strokeWidth="2"
                        x1="370"
                        y1="278"
                        x2="370"
                        y2="2.0"
                    />
                    <line
                        id="svg_2"
                        fill="none"
                        stroke="#000000"
                        strokeWidth="2"
                        x1="2.0"
                        y1="278"
                        x2="370"
                        y2="278"
                    />
                    <line
                        id="svg_5"
                        fill="none"
                        stroke="#000000"
                        strokeWidth="4"
                        x1="2.0"
                        y1="2.0"
                        x2="2.0"
                        y2="278"
                    />
                </svg>
                <div className="gifCatchModal" onClick={handleClick}>
                    <video
                        ref={videoRef}
                        src={pokeballVideo}
                        alt="Video"
                        className={`videoPlayer ${isAnimating ? '' : 'paused'}`}
                        onEnded={handleVideoEnded}
                    ></video>
                </div>
            </div>
        </div>,
        document.getElementById("portal")
    )
}