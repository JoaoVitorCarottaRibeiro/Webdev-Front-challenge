import React from 'react';

const Card = ({ title, content, buttons }) => {
  // Separar os botões, pegando todos menos o último e o último
  const allButLast = buttons.slice(0, -1);
  const lastButton = buttons[buttons.length - 1];

  return (
    <div className='border bg-gradient-to-t from-blue-700 to-blue-400 rounded-3xl p-7 shadow-md w-80 flex flex-col items-center mr-6 my-10'>
      <h2 className='text-xl font-semibold mb-2 text-white'>{title}</h2>
      <h3 className='text-lg text-blue mb-4 text-white'>{content}</h3>

      <div className='flex flex-col space-y-2'>
        {allButLast.map((buttonText, index) => (
          <button
            key={index}
            className='bg-blue-700 text-white py-4 px-4 transition rounded-3xl'
          >
            {buttonText}
          </button>
        ))}
        
        {lastButton && (
          <button className='bg-blue-700 text-white transition rounded-full m-20 w-12 h-12'>
            {lastButton}
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;

