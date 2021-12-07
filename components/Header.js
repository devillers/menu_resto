import Navbar from './Navbar';
import NextLink from 'next/link';

import {LoginIcon} from '@heroicons/react/solid';

function Header() {
  return (
    <div className='shadow-md'>
      <header className='sticky top-0 z-50 grid grid-cols-2 bg-white  p-5 md:px-10'>
        <div className='relative flex items-center h-10 cursor-pointer my-auto'>
         
            <h2 className='text-2xl md:text-2xl font-semibold font-fancy text-gray-600'>
              Le gouet - <span className='uppercase font-xs'>St Nicolas de Véroce</span> 
            </h2>
        
          
        </div>

         

        <div className='flex space-x-4 items-center justify-end font-fancy text-gray-400'>
         
        <NextLink href='/'>
          <LoginIcon className='md:inline h-10 p-2 cursor-pointer md:mx-2 text-purple-500' />
         </NextLink>
         
        </div> 
      </header>
  
    </div>
  );
}

export default Header;
