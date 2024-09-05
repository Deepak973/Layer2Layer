import React from "react";

const APYComparisonCard = ({ token, name, optimismAPY, baseAPY }) => {
    const handleDragStart = (e) => {
        e.dataTransfer.setData('text/plain', JSON.stringify({ token, symbol: token, name: name }));
    };

    return (
        <div
            className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl cursor-move transition-shadow duration-300"
            draggable
            onDragStart={handleDragStart}
        >
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-xl font-bold text-white shadow-md">
                        {token[0]}
                    </div>
                    <h3 className="text-xl font-semibold text-white">{token}</h3>
                </div>
                <div className="flex space-x-4">
                    <APYDisplay chain="Optimism" apy={optimismAPY} />
                    <APYDisplay chain="Base" apy={baseAPY} />
                </div>
            </div>
        </div>
    );
};

const APYDisplay = ({ chain, apy }) => {
    const bgColor = chain === "Optimism" ? "bg-red-500" : "bg-blue-500";
    return (
        <div className={`${bgColor} rounded-lg p-3 text-center w-24 h-24 flex flex-col justify-center items-center shadow-md hover:shadow-lg transition-shadow duration-300`}>
            <p className="text-xs font-medium text-white mb-1">{chain}</p>
            <p className="text-2xl font-bold text-white">{apy}%</p>
        </div>
    );
};


const DeFi = ({ searchTerm }) => {
    const apyData = [
        { token: 'USDC', name: 'USD Coin', optimismAPY: 3.5, baseAPY: 4.2 },
        { token: 'ETH', name: 'Ethereum', optimismAPY: 4.8, baseAPY: 5.1 },
        { token: 'DAI', name: 'Dai', optimismAPY: 3.2, baseAPY: 3.8 },
        { token: 'WBTC', name: 'Wrapped Bitcoin', optimismAPY: 2.9, baseAPY: 3.3 },
    ];

    const filteredData = apyData.filter(data => 
        data.name.toLowerCase().includes(searchTerm) || 
        data.token.toLowerCase().includes(searchTerm)
    );

    return (
        <div className="p-8 bg-gray-900 min-h-screen">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">APY Comparison: Optimism vs Base</h2>
            <div className="max-w-4xl mx-auto grid grid-cols-1 gap-6">
                {filteredData.map((data) => (
                    <APYComparisonCard key={data.token} {...data} />
                ))}
            </div>
        </div>
    );
};

export default DeFi;