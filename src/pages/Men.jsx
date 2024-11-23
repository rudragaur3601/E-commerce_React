import React, { useState } from 'react';
import Accordian from '../component/Accordian';

const Men = () => {
  const [open, setOpen] = useState(null); // Initially, no accordion is open

  return (
    <div className='max-w-6xl mx-auto'>
      <h1 className='font-semibold'>
        Filter Options Lifting state up and controlled uncontrolled component
      </h1>
      {["Brand", "Men", "Kids", "Gender"].map((title, index) => (
        <Accordian
          key={index}
          title={title}
          open={open === index} // Only the matching index will have the 'open' state as true
          setOpen={() => setOpen(open === index ? null : index)} // Toggle open/close on click
        />
      ))}
    </div>
  );
};

export default Men;
