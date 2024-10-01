import React from 'react';

const RangeLoop = () => {
    function Table() {
        let results = [];
        for (let i = 2; i <= 10; i++) {
            let table = [];
            for (let a = 1; a <= 10; a++) {
                table.push(a * i);
            }
            results.push(table);
        }
        return results;
    }

    return (
        <div className='container max-w-[1140px] mx-auto mt-10'>
            <div className='flex gap-4 justify-center'>
                {Table().map((table, index) => (
                    <div key={index} className='flex flex-col items-center'>
                        <h3 className='text-2xl text-blue-600'>Table of {index + 2}</h3>
                        {table.map((result, i) => (
                            <p key={i} className='text-2xl text-red-600'>{result}</p>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RangeLoop;
