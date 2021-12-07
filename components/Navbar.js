import NextLink from 'next/link';


function Navbar() {
  return (
    

<nav className="w-full  text-gray-700 bg-white ">
    <div className="flex flex-col flex-wrap items-center justify-between py-1 mx-auto md:flex-row max-w-7xl">
        <div className="relative flex flex-col md:flex-row">
        <h2 className='text-2xl md:text-2xl font-semibold font-fancy text-gray-600'>
              Le gouet
            </h2>
        </div>

        <div className="inline-flex flex-col items-center sm:flex-row sm:ml-5 lg:justify-end">
          <nav className="flex flex-wrap items-center space-x-4 text-xs font-semibold tracking-wide uppercase sm:space-x-6">
            <NextLink href='/menu'>
              <a className="shadow-md text-xs bg-purple-500 font-light tracking-wide px-3 py-2 text-white rounded-full ">carte</a>
            </NextLink>
            
            <NextLink href='/specialite'>
              <a className="shadow-md text-xs bg-blue-300 font-light tracking-wide px-3 py-2 text-white rounded-full ">spec</a>
            </NextLink>

            <NextLink href='/desserts'>
              <a className="shadow-md text-xs bg-pink-300 font-light tracking-wide px-3 py-2 text-white rounded-full ">desserts</a>
            </NextLink>

            <NextLink href='boissons'>
                
            </NextLink>
            </nav>
      
        </div>
    </div>
</nav>

  );
}

export default Navbar;
