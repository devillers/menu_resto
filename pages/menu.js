
import Navbar from '../components/Navbar'
function menu() {
  return (
    
         
              
              <div className="relative px-6 py-8 ml-auto mr-auto ">
              <Navbar/>
        <h2 className="mt-6 mb-6  text-2xl text-gray-400 uppercase">la carte</h2>
       
       
        <div className="grid grid-cols-1 gap-0 text-gray-600 md:grid-cols-2 md:gap-16">
            <div>
                
                <div>
                    <div className="flex mt-2 font-light text-sm ">
                        <h5 className="  text-gray-900">SALADE VERTE</h5>
                        <span className=" ml-2 f text-pink-500">4.50 €</span>
                    </div>
                </div>
                
                <div>
                    <div className="flex mt-2 font-light text-sm ">
                      <h5 className="  text-gray-900">SALADE COMPOSÉE</h5>
                      <span className=" ml-2 f text-pink-500">14.00 €</span>
                    </div>
                    <p className="text-xs font-light italic">Salade verte, Tomates, Lardons, Oeufs, Croûtons & Pommes de terre</p>
                </div>
                
                <div>
                    <div className="flex mt-2 font-light text-sm ">
                        <h5 className="  text-gray-900">SALADE CHEVRE CHAUD</h5>
                        <span className=" ml-2 f text-pink-500">14.50 €</span>
                    </div>
                    <p className="text-xs font-light italic">Salade verte, Tomates, Jambon Cru, Toast de chèvre, Miel & Graines</p>
                </div>
                
                <div>
                    <div className="flex mt-2 font-light text-sm ">
                      <h5 className="  text-gray-900">ASSIETTES DE FRITES</h5>
                      <span className=" ml-2 f text-pink-500">5.00 €</span>
                </div>
                
                <div>
                    <div className="flex mt-2 font-light text-sm ">
                        <h5 className="  text-gray-900">SOUPE DE LÉGUMES</h5>
                        <span className=" ml-2 f text-pink-500">7.50 €</span>
                    </div>
                    <p className="text-xs font-light italic">Soupe maison accompagnée de Croûtons et Fromage râpé</p>
                </div>

                <div>
                    <div className="flex mt-2 font-light text-sm ">
                        <h5 className="  text-gray-900">PLANCHES DE CHARCUTERIE</h5>
                        <span className=" ml-2 f text-pink-500">12.00 €</span>
                    </div>
                    <p className="text-xs font-light italic">Jambon Cru, Saucisson , Coppa & Terrine</p>
                </div>
               
                <div>
                    <div className="flex mt-2 font-light text-sm ">
                        <h5 className="  text-gray-900">ASSIETTE du SKIEUR</h5>
                        <span className=" ml-2 f text-pink-500">15.70 €</span>
                    </div>
                    <p className="text-xs font-light italic">Charcuteries ,Terrine, Fromages et salade verte</p>
                </div>

                <div>
                    <div className="flex mt-2 font-light text-sm ">
                        <h5 className="  text-gray-900">OMELETTE JAMBON OU FROMAGE</h5>
                        <span className=" ml-2 f text-pink-500">8.50 €</span>
                   </div>
                  </div>
                    
                <div>
                    <div className="flex mt-2 font-light text-sm ">
                        <h5 className="  text-gray-900">OMELETTE JAMBON ET FROMAGE</h5>
                        <span className=" ml-2 f text-pink-500">9.50 €</span>
                  </div>
                </div>

                <div>
                    <div className="flex mt-2 font-light text-sm ">
                        <h5 className="  text-gray-900">OMELETTE MONTAGNARDE</h5>
                        <span className=" ml-2 f text-pink-500">12.00 €</span>
                    </div>
                    <p className="text-xs font-light italic">Lardons, Fromages et pommes de terre </p>
                </div>
             </div>


            <div>
                
        
                <div>
                    <div className="flex mt-2 font-light text-sm ">
                        <h5 className="  text-gray-900">JAMBON BLANC FRITES</h5>
                        <span className=" ml-2 f text-pink-500">10.00 €</span>
                    </div>
                </div>
                
                <div>
                    <div className="flex mt-2 font-light text-sm ">
                        <h5 className="  text-gray-900">OEUFS SUR LE PLAT & FRITES</h5>
                        <span className=" ml-2 f text-pink-500">10.00 €</span>
                    </div>
                </div>
                
                <div>
                    <div className="flex mt-2 font-light text-sm ">
                        <h5 className="  text-gray-900">SAUCISSES FRITES</h5>
                        <span className=" ml-2 f text-pink-500">10.00 €</span>
                    </div>
                </div>

                
                <div>
                    <div className="flex mt-2 font-light text-sm ">
                        <h5 className="  text-gray-900">JAMBON BLANC & OEUFS SUR LE PLAT FRITES</h5>
                        <span className=" ml-2 f text-pink-500">12.00 €</span>
                    </div>
                </div>
                <div>
                    <div className="flex mt-2 font-light text-sm ">
                        <h5 className="  text-gray-900">STEAK HACHE FRITES</h5>
                        <span className=" ml-2 f text-pink-500">12.50 €</span>
                    </div>
                </div>
                <div>
                    <div className="flex mt-2 font-light text-sm ">
                        <h5 className="  text-gray-900">ENTRECOTE FRITES et SALADE</h5>
                        <span className=" ml-2 f text-pink-500">19.00 €</span>
                    </div>
                </div>
                <div>
                    <div className="flex mt-2 font-light text-sm ">
                        <h5 className="  text-gray-900">PLAT DU JOUR</h5>
                                      <span className=" ml-2 f text-pink-500">15.00 €</span>
                                      
                                  </div>
                                  <p className="italic text-sm text-pink-500 mt-5">* PDT <span className="text-gray-600">POMME DE TERRE</span> </p>
                </div>
            </div>
        </div>
   </div>
          </div>
   
  );
}

export default menu;
