import logo from '../assets/Group.png'
import banner from '../assets/Banner.png'
import logoDes from '../assets/Rectangle.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faShoppingBag } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    return (
        <>
            <header className="flex flex-row justify-between p-5" >
                <div>
                    <img src={logo} alt="" />
                </div>
                <div className=' space-x-4 font-bold py-5'>
                    <a href="#" className=' hover:bg-yellow-500 px-4 py-0.5 rounded-xl' >Productos</a>
                    <a href="#" className=' bg-yellow-500 px-4 py-0.5 rounded-xl'>Promociones</a>
                    <a href="#" className=' hover:bg-yellow-500 px-4 py-0.5 rounded-xl' >Nosotros</a>
                </div>

                <div className='flex flex-row gap-6 py-2 px-3'>
                    <div className='cursor-pointer'>
                        <FontAwesomeIcon icon={faSearch} className="text-black text-xl w-6 h-6 transition-transform duration-300  hover:scale-110" />
                    </div>
                    <div className='cursor-pointer'>
                        <FontAwesomeIcon icon={faUser} className="text-black text-xl w-6 h-6 transition-transform duration-300  hover:scale-110" />
                    </div>
                    <div className='cursor-pointer relative transition-transform duration-300  hover:scale-110'>
                        <FontAwesomeIcon icon={faShoppingBag} className="text-black text-xl w-6 h-6 " />
                        <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                            {2}
                        </span>
                    </div>
                </div>
            </header>
            <section className="bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: `url(${banner})`, backgroundSize: '100%', height: '540px' }}>
                <div className='absolute top-0 right-20 bottom-0 flex w-1/3 p-5 items-center'>
                    <div className='w-full'>
                        <img src={logoDes} alt="" />
                    </div>
                </div>
            </section>

        </>
    )
}
