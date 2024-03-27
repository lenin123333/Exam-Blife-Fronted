import Stars from "./Starts"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { formatCurrency } from "../helpers";
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import { motion } from "framer-motion";

export default function Prodcut({ product }) {
  const { name, image, description, price, descuento, priceFinal, reaction } = product
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div className="flex flex-col relative ">
      <div className="relative">
        <motion.div whileTap={{ scale: 0.9 }} className="absolute top-6 -right-5 z-30 border-gray-200 border rounded-full
         bg-white shadow-xl w-14 flex justify-center"
         onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <FontAwesomeIcon icon={isHovered ? fasHeart : farHeart} className="p-1 w-4 h-4 heart-icon text-red-500 cursor-pointer text-xl" />
          <p className="text-xs px-1 font-bold p-1">{reaction}</p>
        </motion.div>
        <div className="absolute top-14 -right-5 z-30 rounded-full bg-red-300 shadow-xl w-14 flex justify-center">
          <p className="text-xs px-1 font-bold text-white p-1">{descuento}</p>
        </div>
      </div>

      <div className="border border-gray-300 rounded-xl bg-white shadow-sm relative overflow-hidden z-20">
        <div className="relative">
          <img className="img-fluid m-auto" src={`/img/${image}.png`} width='80%' alt="imagen guitarra" />
          <div className="absolute bottom-2 left-0 right-0 flex justify-center  m-auto border w-20 h-8 rounded-full shadow-lg  bg-white">
            <div className="flex flex-row justify-center gap-2 ">
              <span className="w-2 h-2 m-auto cursor-pointer rounded-full bg-black" />
              <span className="w-2 h-2 m-auto cursor-pointer rounded-full bg-gray-400" />
              <span className="w-2 h-2 m-auto cursor-pointer rounded-full bg-gray-400" />
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="mb-2 flex flex-row justify-between font-bold text-lg">
            <p>{name}</p>
            <p>{formatCurrency(price)}</p>
          </div>
          <div className="mb-2 flex flex-row justify-between text-sm">
            <p>{description}</p>
            <p className=" line-through">{formatCurrency(priceFinal)}</p>
          </div>
          <Stars numStars={3.5} />
        </div>
      </div>

      <div className="border pt-10 border-gray-300 p-4 flex rounded-xl items-center justify-between bg-gray-100 shadow-md -mt-8 z-0">
        <div>
          <p className="text-sm font-bold">Comparte</p>
          <div>
            <FontAwesomeIcon icon={faFacebook} className="hover:text-blue-500 mr-2 cursor-pointer" />
            <FontAwesomeIcon icon={faTwitter} className="hover:text-blue-400 mr-2 cursor-pointer" />
            <FontAwesomeIcon icon={faInstagram} className="hover:text-purple-500 mr-2 cursor-pointer" />
          </div>
        </div>
        <motion.button  whileTap={{ scale: 0.9 }} className="px-5 py-1 text-xs font-bold border border-yellow-500 rounded-xl hover:bg-yellow-500 hover:text-white">Agregar</motion.button>
      </div>
    </div>
  )
}
