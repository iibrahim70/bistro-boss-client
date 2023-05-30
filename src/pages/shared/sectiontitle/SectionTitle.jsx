import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
  return (
    <div className='md:w-4/12 mx-auto text-center my-10'>
      <p className='text-yellow-500 mb-2'>---{subHeading}---</p>
      <h2 className='text-4xl uppercase border-y-2 py-4'>{heading}</h2>
    </div>
  );
};

export default SectionTitle;