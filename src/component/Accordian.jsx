import React from 'react';
import ListItems from './ListItems';

const Accordian = (props) => {
  const { title, open, setOpen } = props;

  // Toggle the 'open' state by calling setOpen
  const showItemList = () => {
    setOpen(); // Notify parent to toggle open state
  };

  return (
    <div className='border-2 shadow-md px-2 py-1 w-60'>
      <div className='flex items-center justify-between'>
        <h1>{title}</h1>
        <button
          onClick={showItemList}
          className='bg-black text-white rounded-md px-2 py-1'>
          {open ? 'Hide' : 'Show'} {/* Change button text based on open state */}
        </button>
      </div>
      {open && <ListItems />} {/* Show items only if 'open' is true */}
    </div>
  );
};

export default Accordian;
