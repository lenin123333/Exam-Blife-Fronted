import { useMemo } from 'react';
import { formatCurrency } from '../helpers';
import { faPlus, faMinus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from "framer-motion";

export default function CartShopping({ dispatch, cart }) {
    const cartTotal = useMemo(() => cart.reduce((total, item) => total + (item.quantity * item.price), 0), [cart])
    return (
        <>
            <h2 className=' text-xl font-bold m-2'>Carrito de Compras</h2>
            {cart.map(product => (
                <div key={product.id}
                    className='flex flex-row justify-center '>
                    <motion.img
                        whileHover={{ scale: 1.1 }}
                        className="img-fluid w-1/3"
                        src={`/img/${product.image[0]}.webp`}
                        alt="imagen guitarra"
                    />
                    <div>
                        <p>{product.name}</p>
                        <p className=' text-xs text-gray-400'>{product.description}</p>
                        <p>{formatCurrency(product.price)}</p>
                        <div>
                            <motion.button
                                whileTap={{ scale: 0.9 }}
                                type="button"
                                className="bg-black text-white text-xs rounded-full h-5 w-5 mx-1"
                                onClick={() => dispatch({ type: 'decrease-quantity', payload: { id: product.id } })}
                            >
                                <FontAwesomeIcon icon={faMinus} className=" w-3 h-3  " />
                            </motion.button>
                            {product.quantity}
                            <motion.button
                                whileTap={{ scale: 0.9 }}
                                type="button"
                                className=" bg-black text-white text-xs rounded-full h-5 w-5 mx-1"
                                onClick={() => dispatch({ type: 'increase-quantity', payload: { id: product.id } })}
                            >
                                <FontAwesomeIcon icon={faPlus} className=" w-3 h-3  " />
                            </motion.button></div>

                    </div>
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        className=" bg-red-700  text-white text-xs rounded-full h-5 w-5"
                        type="button"
                        onClick={() => dispatch({ type: 'remove-from-cart', payload: { id: product.id } })}
                    >
                        <FontAwesomeIcon icon={faTimes} className=" w-3 h-3  " />
                    </motion.button>
                </div>
            ))}


            <p className="text-end my-2">Total pagar: <span className="font-bold">{formatCurrency(cartTotal)}</span></p>
            <button
                className="w-full border border-yellow-500 rounded-xl hover:bg-yellow-500 font-bold hover:text-white"
                onClick={() => dispatch({ type: 'clear-cart' })}
            >Vaciar Carrito</button>
        </>

    )
}
