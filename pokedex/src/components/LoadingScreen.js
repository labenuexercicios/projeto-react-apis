import { useState } from 'react';
import Lottie from 'react-lottie';
import animationData from '/public/animations/pokeball-loading.json';

const LoadingScreen = () => {
    const [animationState, setAnimationState] = useState({
        isStopped: false,
        isPaused: false,
    });
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Lottie
                options={defaultOptions}
                height={400}
                width={400}
                isStopped={animationState.isStopped}
                isPaused={animationState.isPaused}
            />
        </div>
    );
};

export default LoadingScreen;
