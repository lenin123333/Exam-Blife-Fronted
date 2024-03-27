import logo from '../assets/Group.png'
import banner from '../assets/Banner.png'
import logoDes from '../assets/Rectangle.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from "framer-motion";
import { useState } from 'react';

export default function Header() {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
        console.log("entrando")
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <>
            <header className="flex flex-row justify-between p-5 relative z-10">
                <div>
                    <img src={logo} alt="" />
                </div>
                <div className=' space-x-4 font-bold py-5'>
                    <a href="#" className=' hover:bg-yellow-500 px-4 py-0.5 rounded-xl' >Productos</a>
                    <a href="#" className=' bg-yellow-500 px-4 py-0.5 rounded-xl'>Promociones</a>
                    <a href="#" className=' hover:bg-yellow-500 px-4 py-0.5 rounded-xl' >Nosotros</a>
                </div>

                <div className='flex flex-row gap-6 py-2 px-3 relative'>
                    <div className='cursor-pointer transition-transform duration-300  hover:scale-110'>
                        <FontAwesomeIcon icon={faSearch} className="text-black text-xl w-6 h-6  " />
                    </div>
                    <div className='cursor-pointer transition-transform duration-300  hover:scale-110'>
                        <FontAwesomeIcon icon={faUser} className="text-black text-xl w-6 h-6   " />
                    </div>
                    <div
                        className=' carrito cursor-pointer relative transition-transform duration-300  hover:scale-110'
                    
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <FontAwesomeIcon icon={faShoppingBag} className="text-black text-xl w-6 h-6 " />
                        <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                            {2}
                        </span>
                       
                            <AnimatePresence>
                                {isHovered && (


                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        transition={{ duration: 0.3 }} id="carrito" className="bg-white p-3 absolute top-full right-0 z-20">
                                        <table className="w-100 table">
                                            <thead>
                                                <tr>
                                                    <th>Imagen</th>
                                                    <th>Nombre</th>
                                                    <th>Precio</th>
                                                    <th>Cantidad</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {/* Aquí puedes colocar los elementos del carrito */}
                                            </tbody>
                                        </table>

                                        <p className="text-end">Total pagar: <span className="fw-bold"></span></p>

                                        <button className="btn btn-dark w-100 mt-3 p-2">Vaciar Carrito</button>
                                    </motion.div>

                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                
            </header>
            <section className="bg-cover bg-center bg-no-repeat relative z-0" style={{ backgroundImage: `url(${banner})`, backgroundSize: '100%', height: '540px' }}>
                <div className='absolute top-0 right-20 bottom-0 flex w-1/3 p-5 items-center'>
                    <div className='w-full'>
                        <img src={logoDes} alt="" />
                    </div>
                </div>
            </section>
        </>
    );
}
