import Navbar from './Navbar';
import NextLink from 'next/link';

// import {
//   LoginIcon,
//   SearchIcon,
//   UserCircleIcon,
//   MenuIcon,
//   ShoppingBagIcon,
// } from '@heroicons/react/outline';

function Header() {
  return (
    <div className='shadow-md'>
      <header className='sticky top-0 z-50 grid grid-cols-2 bg-white  p-5 md:px-10'>
        <div className='relative flex items-center h-10 cursor-pointer my-auto'>
          <NextLink href='/'>
            <h2 className='text-2xl md:text-2xl font-semibold font-fancy text-gray-600'>
              Restaurant le gouet
            </h2>
          </NextLink>
        </div>

        {/* <div className='flex items-center border-1 rounded-full py-2 shadow-md'>
          <input
            className='flex-grow pl-5 md:pl-8 bg-transparent outline-none text-sm text-gray-400 placeholder-gray-300'
            type='text'
            placeholder='Start your research'
          />
          <SearchIcon className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2 ' />
        </div> */}

        {/* <div className='flex space-x-4 items-center justify-end font-fancy text-gray-400'>
          <NextLink href='/register'>
            <p className='hidden md:inline cursor-pointer'>Inscription</p>
          </NextLink>

          <LoginIcon className='hidden md:inline h-8 bg-red-400 rounded-full p-2 cursor-pointer md:mx-2 text-white' />

          <div className='flex items-center space-x-2'>
            <NextLink href='/signin'>
              <UserCircleIcon className='hidden md:inline h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2' />
            </NextLink>
            <NextLink href='/cart'>
              <ShoppingBagIcon className=' hidden md:inline h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2' />
            </NextLink>

            <MenuIcon className='md:hidden h-10 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2' />
          </div>
        </div> */}
      </header>
      <Navbar />
    </div>
  );
}

export default Header;
