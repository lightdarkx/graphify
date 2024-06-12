import { useState } from 'react';
import Links from './Links';
import Menu from './Menu';

const Navbar = () => {
  return (
    <main className=''>
      <div className='border-b-4 border-double border-slate-300 flex my-4 py-2 justify-between'>
        <div className='border-0 border-green-500 flex py-2 2xl:ml-64 md:ml-7'>
          <div className='border-0 text-xl -mt-[6px] text-iris-text mr-6'>
            [chartify]
          </div>
          <Menu />
        </div>
        <Links />
      </div>
    </main>
  );
};

export default Navbar;
