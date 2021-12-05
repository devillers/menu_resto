import Head from 'next/head'
import NextLink from 'next/link';

export default function Home() {
  return (
    <div classNameName="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Restaurant le Gouet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

     

      <section classNameName="bg-gray-100">
          <div className="mt-10 relative">
              <div className="absolute inset-0 w-screen h-screen pb-20 transform opacity-50">
                  <img src="https://cdn.devdojo.com/images/march2021/bg-gradient.png" className="absolute left-0 object-cover w-full h-full"/>
              </div>
              <div className="relative px-6 py-8 ml-auto mr-auto bg-top bg-cover sm:py-16 max-w-7xl md:px-24 lg:px-16 lg:py-20">

                  <div className="relative grid gap-6 bg-top bg-cover sm:grid-cols-2 lg:grid-cols-4">
                    
                  <NextLink href='/menu'>
                    <div div className="p-6 space-y-4 overflow-hidden transition-shadow duration-200 bg-white bg-top bg-cover border border-gray-100 shadow-xl rounded-2xl group hover:shadow-2xl cursor-pointer">
                        <div className="flex items-center ">
                            <div className=" items-center  w-10 h-10 text-center bg-top bg-cover rounded-full bg-purple-500">
                            </div>
                            <p className="font-bold text-gray-700 uppercase ml-5">A TABLE</p>
                        </div>
                        <p className="text-sm leading-5 text-gray-500">Nos classiques </p>
                    </div>
                  </NextLink>
         
                      
                  <NextLink href="/specialite">
                    <div className="cursor-pointer p-6 space-y-4 overflow-hidden transition-shadow duration-200 bg-white bg-top bg-cover border border-gray-100 shadow-xl rounded-2xl group hover:shadow-2xl">
                        <div className="flex items-center ">
                            <div className=" items-center  w-10 h-10 text-center bg-top bg-cover rounded-full bg-blue-300">
                            </div>
                            <p className="font-bold text-gray-700 uppercase ml-5">NOS SPECIALITES</p>
                        </div>
                        <p className="text-sm leading-5 text-gray-500">Fondues - Croutes Savoyardes - etc  </p>
                    </div>
                  </NextLink>   
                    
                  <NextLink href="/desserts">
                    <div className="cursor-pointer p-6 space-y-4 overflow-hidden transition-shadow duration-200 bg-white bg-top bg-cover border border-gray-100 shadow-xl rounded-2xl group hover:shadow-2xl">
                        <div className="flex items-center ">
                            <div className=" items-center  w-10 h-10 text-center bg-top bg-cover rounded-full bg-pink-200">
                            </div>
                            <p className="font-bold text-gray-700 uppercase ml-5">DESSERTS & FROMAGES</p>
                        </div>
                        <p className="text-sm leading-5 text-gray-500">Tarte Tatin - Faisselles - etc  </p>
                    </div>
                  </NextLink>

                  <NextLink href="/boissons">
                    <div className="cursor-pointer p-6 space-y-4 overflow-hidden transition-shadow duration-200 bg-white bg-top bg-cover border border-gray-100 shadow-xl rounded-2xl group hover:shadow-2xl">
                        <div className="flex items-center ">
                            <div className=" items-center  w-10 h-10 text-center bg-top bg-cover rounded-full bg-pink-400">
                            </div>
                            <p className="font-bold text-gray-700 uppercase ml-5">BOISSONS</p>
                        </div>
                        <p className="text-sm leading-5 text-gray-500">Vins - Bieres - Softs - etc </p>
                    </div>
                  </NextLink>

              
                  </div>
              </div>
          </div>
      </section>
    </div>
  )
}
