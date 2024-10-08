import React, { useState } from 'react';

function RangeForm() {
  const [startValue, setStartValue] = useState(0);
  const [endValue, setEndValue] = useState(0);
  const [exponent, setExponent] = useState(1);
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
  
    if (startValue < 0 || startValue > 100) {
      setError('Start value must be between 0 and 100.');
      return;
    }
    
    if (endValue < 0 || endValue > 100) {
      setError('End value must be between 0 and 100.');
      return;
    }
    
    if (exponent < 0 || exponent > 10) {
      setError('Exponent must be between 0 and 10.');
      return;
    }

    if (startValue > endValue) {
      setError('Start value should not be greater than end value.');
      return;
    }
    setError('');
    const newResults = [];
    for (let i = startValue; i <= endValue; i++) {
      const result = Math.pow(i, exponent);
      newResults.push({ number: i, result });
    }
    setResults(newResults);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Range and Exponent Calculator</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="bg-red-100 text-red-700 p-2 rounded-md">
              {error}
            </div>
          )}
          
          <div>
            <label htmlFor="startValue" className="block text-sm font-medium text-gray-700">Start Value</label>
            <input
              id="startValue"
              type="number"
              value={startValue}
              onChange={(e) => setStartValue(parseInt(e.target.value))}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          
          <div>
            <label htmlFor="endValue" className="block text-sm font-medium text-gray-700">End Value</label>
            <input
              id="endValue"
              type="number"
              value={endValue}
              onChange={(e) => setEndValue(parseInt(e.target.value))}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          
          <div>
            <label htmlFor="exponent" className="block text-sm font-medium text-gray-700">Exponent</label>
            <input
              id="exponent"
              type="number"
              value={exponent}
              onChange={(e) => setExponent(parseInt(e.target.value))}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          
          <div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-black"
            >
              Calculate
            </button>
          </div>
        </form>

        {results.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Results:</h3>
            <ul className="list-none flex flex-wrap w-full gap-5 pl-5">
              {results.map(({ number, result }) => (
                <li key={number} className="text-gray-700"> {result}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default RangeForm;
