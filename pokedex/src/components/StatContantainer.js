function StatContantainer({ name, value }) {
    const NameContainer = () => {
        switch (name) {
            case 'hp':
                return (
                    <div className="uppercase text-gray-500 text-right flex-[1_0_25%] whitespace-nowrap">
                        {name}
                    </div>
                );
            case 'special-attack':
                return (
                    <div className="text-gray-500 text-right flex-[1_0_25%] whitespace-nowrap">
                        Sp. Atk
                    </div>
                );
            case 'special-defense':
                return (
                    <div className="text-gray-500 text-right flex-[1_0_25%] whitespace-nowrap">
                        Sp. Def
                    </div>
                );
            default:
                return (
                    <div className="capitalize text-gray-500 text-right flex-[1_0_25%] whitespace-nowrap">
                        {name}
                    </div>
                );
        }
    };

    const statBarBg = (value) => {
        const colors = {
            veryGood: 'bg-green-400 border-green-600',
            good: `bg-[#FFDD69] border-[#DABD59]`,
            bad: `bg-[#FF7B2E] border-[#E06A26]`,
            veryBad: 'bg-red-700 border-red-900',
        };

        if (value < 25) {
            return colors['veryBad'];
        } else if (value >= 25 && value < 50) {
            return colors['bad'];
        } else if (value >= 50 && value < 85) {
            return colors['good'];
        } else {
            return colors['veryGood'];
        }
    };

    return (
        <li className="flex items-center gap-3 border-t border-gray-500/20 py-3">
            <NameContainer />
            <div className="flex-[1_0_10%] text-right">{value}</div>
            <div className="basis-full">
                <div
                    className={`${statBarBg(value)} h-4 rounded-md border`}
                    style={{
                        width: `${value > 100 ? '100' : value}%`,
                    }}
                ></div>
            </div>
        </li>
    );
}

export default StatContantainer;
