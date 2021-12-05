import NextLink from 'next/link';

function Navbar() {
  return (
    

<nav className="w-full px-8 text-gray-700 bg-white">
    <div className="flex flex-col flex-wrap items-center justify-between py-6 mx-auto md:flex-row max-w-7xl">
        <div className="relative flex flex-col md:flex-row">
            
        </div>

        <div className="inline-flex flex-col items-center sm:flex-row sm:ml-5 lg:justify-end">
          <nav className="flex flex-wrap items-center space-x-4 text-xs font-semibold tracking-wide uppercase sm:space-x-6">
            <NextLink href='/menu'>
              <a className="shadow-md text-xs bg-purple-500 font-light tracking-wide px-3 py-2 text-white rounded-full ">a table</a>
            </NextLink>
            
            <NextLink href='/specialite'>
              <a className="shadow-md text-xs bg-blue-300 font-light tracking-wide px-3 py-2 text-white rounded-full ">specialités</a>
            </NextLink>

            {/* <NextLink href='/desserts'>
              <a className="shadow-md text-xs bg-pink-300 font-light tracking-wide px-3 py-2 text-white rounded-full ">desserts</a>
            </NextLink> */}

            <NextLink href='boissons'>
              <a className="shadow-md text-xs bg-pink-500 font-light tracking-wide px-3 py-2 text-white rounded-full ">boissons</a>
            </NextLink>
            </nav>
      
        </div>
    </div>
</nav>

  );
}

export default Navbar;
