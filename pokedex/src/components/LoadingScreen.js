import Lottie from 'lottie-react';
import animationData from '/public/animations/pokeball-loading.json';

const LoadingScreen = () => {
    return (
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Lottie animationData={animationData} loop={true} />
        </div>
    );
};

export default LoadingScreen;
