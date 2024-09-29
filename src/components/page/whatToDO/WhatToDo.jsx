import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import { useState } from 'react';

const WhatToDo = () => {
    const [options, setOptions] = useState(['']);
    const [selectedOption, setSelectedOption] = useState(null);
    const [spinning, setSpinning] = useState(false);
    const [error, setError] = useState(false);

    // Add a new input field
    const addMoreOption = () => {
        setOptions([...options, '']);
    };

    // Update input value
    const handleOptionChange = (index, value) => {
        const updatedOptions = [...options];
        updatedOptions[index] = value;
        setOptions(updatedOptions);
        setError(false); // Reset error state on change
    };

    // Remove a specific option
    const removeOption = (index) => {
        const updatedOptions = [...options];
        updatedOptions.splice(index, 1);
        setOptions(updatedOptions);
        setError(false); // Reset error state if an option is removed
    };

    // Spin the wheel to pick a random option
    const spinTheWheel = () => {
        const nonEmptyOptions = options.filter((opt) => opt.trim() !== '');

        if (nonEmptyOptions.length < 2) {
            setError(true); // Show error if less than 2 options
            return;
        }

        setSpinning(true);
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * nonEmptyOptions.length);
            setSelectedOption(nonEmptyOptions[randomIndex]);
            setSpinning(false);
        }, 5000); // Spin for 5 seconds
    };

    // Prepare pie chart data
    const pieData = {
        labels: options.filter((option) => option.trim() !== ''),
        datasets: [
            {
                data: options.filter((option) => option.trim() !== '').map(() => 1),
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#4BC0C0',
                    '#9966FF',
                    '#FF9F40',
                ],
                hoverBackgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#4BC0C0',
                    '#9966FF',
                    '#FF9F40',
                ],
            },
        ],
    };

    // Check if the spin button should be disabled
    const isSpinDisabled = options.filter((opt) => opt.trim() !== '').length < 2;

    return (
        <div className="flex gap-10">
            {/* Input Section - Left */}
            <div className="">
                <h1 className="text-3xl font-bold mb-6">What to do?</h1>

                {/* Input Fields */}
                {options.map((option, index) => (
                    <div key={index} className="flex items-center w-full max-w-md mb-2">
                        <input
                            type="text"
                            value={option}
                            onChange={(e) => handleOptionChange(index, e.target.value)}
                            placeholder={`Option ${index + 1}`}
                            className="p-2 border rounded w-full"
                        />
                        <button
                            onClick={() => removeOption(index)}
                            className="ml-2 p-2 bg-red-500 text-white rounded hover:bg-red-700"
                        >
                            Remove
                        </button>
                    </div>
                ))}

                {/* Add more option button */}
                <div className='flex flex-col'>

                    <button
                        onClick={addMoreOption}
                        className="mb-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                    >
                         More Option
                    </button>

                    <button
                        onClick={spinTheWheel}
                        className={`mb-4 px-10 py-2 text-white rounded ${isSpinDisabled
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-green-500 hover:bg-green-700'
                            }`}
                        disabled={isSpinDisabled || spinning}
                    >
                        {spinning ? 'Spinning...' : 'Spin'}
                    </button>
                </div>

                {/* Error message if not enough options */}
                {error && (
                    <p className="text-red-500">Please enter at least 2 options to spin.</p>
                )}
            </div>

            {/* Center Section - Pie Chart Display */}
            <div className="flex flex-col items-center border w-full">
                {/* Display pie chart as spinning wheel */}
                <div className="w-64 h-64">
                    <Pie data={pieData} />
                </div>

                {/* Display selected option */}
                {selectedOption && !spinning && (
                    <div className="mt-4 p-4 bg-green-500 text-white shadow rounded-lg text-4xl">
                        🎉 You should: {selectedOption}!
                    </div>
                )}
            </div>

            {/* Modal for spinning */}
            {spinning && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-4 rounded shadow-lg text-center">
                        <h2 className="text-2xl font-bold">Spinning...</h2>
                        <p className="mt-4 text-gray-600">Please wait while we pick an option for you!</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default WhatToDo;
