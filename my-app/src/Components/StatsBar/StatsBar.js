import { useEffect, useState } from "react";
import "./StatsBar.css"

function StatsBar(props) {
    const { value } = props;
    const [barColor, setBarColor] = useState()

    useEffect(() => {
        if (value > 50) {
            setBarColor('#ffdd6a')
        } else {
            setBarColor('#ff7c2e')
        }
    }, []);

    const percentage = (value / 120) * 100;
    const barStyle = {
        width: `${percentage}%`,
        backgroundColor: `${barColor}`,
    };


    return (
        <div className="containerBar">
            <div className="barProgress" style={barStyle} />
        </div>
    );
}

export default StatsBar;