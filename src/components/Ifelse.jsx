import React, { useState } from 'react';

const Ifelse = () => {
    const [a, setA] = useState();
    const [b, setB] = useState();
    const [result, setResult] = useState('');

    const handleCompare = () => {
        let comparisonResult;
        if (a < b) {
            comparisonResult = "b is greater than a";
        } else if (a === b) {
            comparisonResult = "a and b are equal";
        } else {
            comparisonResult = "a is greater than b"; 
        }
        setResult(comparisonResult);
    };

    return (
        <div className='my-10'>
            <h3 className='text-4xl text-center'>{result}</h3>
            <div className='flex flex-col items-center mt-4'>
                <div className='flex gap-3 items-center'>
                    <label htmlFor="a" className='font-semibold'>a:</label>
                    <input
                        type='number'
                        placeholder='Enter value for a'
                        value={a}
                        onChange={(e) => setA(Number(e.target.value))}
                        className='p-2 border border-gray-400 rounded mb-2'
                    />
                </div>
                <div className='flex gap-4 items-center'>
                    <label htmlFor="b" className='font-semibold'>b:</label>
                    <input
                        type='number'
                        placeholder='Enter value for b'
                        value={b}
                        onChange={(e) => setB(Number(e.target.value))}
                        className='p-2 border border-gray-400 rounded mb-4'
                    />
                </div>
                <button
                    onClick={handleCompare}
                    className='p-2 bg-blue-500 text-white rounded'
                >
                    Compare
                </button>
            </div>
        </div>
    );
};

export default Ifelse;
