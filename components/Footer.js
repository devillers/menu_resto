

function Footer() {
  return (
    <div className="box-border pt-5 leading-7 text-gray-900 bg-gray-100 border-0 border-gray-200 border-solid pb-7">
  
    <div className="box-border px-4 mx-auto border-solid md:px-6 lg:px-8 max-w-7xl">
        <div className="relative flex flex-col items-start justify-between leading-7 text-gray-900 border-0 border-gray-200 md:flex-row md:items-center">
            <a href="#_" className="left-0 flex items-center justify-center order-first w-full mb-4 font-medium text-gray-900 md:justify-center  md:absolute md:w-64 lg:order-none lg:w-auto title-font lg:items-center lg:justify-center md:mb-0">
                <span className="text-xl mt-6 leading-none text-gray-900 select-none logo font-fancy">Restaurant le Gouet<span className="text-indigo-600">.</span></span>
            </a>
            <ul className="box-border flex mx-auto my-6 space-x-6">
                <li className="relative mt-2 leading-7 text-left text-gray-900 border-0 border-gray-200 md:border-b-0 md:mt-0">
                    <a href="#_" className="box-border items-center block w-full px-4 text-base font-normal leading-normal text-gray-900 no-underline border-solid cursor-pointer hover:text-blue-600 focus-within:text-blue-700 sm:px-0 sm:text-left">Home</a>
                </li>
                <li className="relative mt-2 leading-7 text-left text-gray-900 border-0 border-gray-200 md:border-b-0 md:mt-0">
                    <a href="#_" className="box-border items-center block w-full px-4 text-base font-normal leading-normal text-gray-900 no-underline border-solid cursor-pointer hover:text-blue-600 focus-within:text-blue-700 sm:px-0 sm:text-left">Plats</a>
                </li>
                <li className="relative mt-2 leading-7 text-left text-gray-900 border-0 border-gray-200 md:border-b-0 md:mt-0">
                    <a href="#_" className="box-border items-center block w-full px-4 text-base font-normal leading-normal text-gray-900 no-underline border-solid cursor-pointer hover:text-blue-600 focus-within:text-blue-700 sm:px-0 sm:text-left">Desserts</a>
                </li>
                <li className="relative mt-2 leading-7 text-left text-gray-900 border-0 border-gray-200 md:border-b-0 md:mt-0">
                    <a href="#_" className="box-border items-center block w-full px-4 text-base font-normal leading-normal text-gray-900 no-underline border-solid cursor-pointer hover:text-blue-600 focus-within:text-blue-700 sm:px-0 sm:text-left">Boissons</a>
                </li>
            </ul>
            <div className="box-border right-0 flex justify-center w-full mt-4 space-x-3 border-solid md:w-auto md:justify-end md:absolute md:mt-0">
                <a href="#_" className="inline-flex items-center leading-7 text-gray-900 no-underline border-0 border-gray-200 cursor-pointer hover:text-blue-700 focus-within:text-blue-700">
                    <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M0 0h24v24H0z" stroke="none"></path><path d="M7 10v4h3v7h4v-7h3l1-4h-4V8a1 1 0 011-1h3V3h-3a5 5 0 00-5 5v2H7"></path></svg>
                </a>
             
                <a href="#_" className="inline-flex items-center leading-7 text-gray-900 no-underline border-0 border-gray-200 cursor-pointer hover:text-blue-700 focus-within:text-blue-700">
                    <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M0 0h24v24H0z" stroke="none"></path><rect x="4" y="4" width="16" height="16" rx="4"></rect><circle cx="12" cy="12" r="3"></circle><path d="M16.5 7.5v.001"></path></svg>
                </a>
            </div>
        </div>
        <div className="pt-4 mt-4 leading-7 text-center text-gray-600 border-t border-gray-200 ">
            <p className="box-border mt-0 text-sm border-0 border-solid">
                © 2021 Restaurant le Gouet. 
            </p>
        </div>
    </div>
</div>
  );
}

export default Footer;
