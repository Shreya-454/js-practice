import React from 'react';

const Forloop = () => {
  function Table() {
    let a = 4;
    let results = [];
    for (let i = 0; i <= 10; i++) {
      results.push(a * i); 
    }
    return results; 
  }

  return (
    <div className='container max-w-[1140px] flex gap-8 mx-auto justify-center flex-col items-center'>
        <h2 className='text-3xl font-semibold text-center'>Table of 4 by for loop</h2>
      <div className='flex gap-4 justify-center'>
          {Table().map((result, index) => (
            <p key={index} className='text-2xl text-red-600 '> {result}</p> 
          ))}
      </div>
    </div>
  );
};

export default Forloop;
