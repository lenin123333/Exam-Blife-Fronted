import logo from '../assets/Group.png'
import search from '../assets/search.png'
import shopping from '../assets/shopping.png'
import user from '../assets/user.png'
import banner from '../assets/Banner.png'
import logoDes from '../assets/Rectangle.png'


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
                    <div className=' cursor-pointer'>
                        <img src={search} alt="" />
                    </div>
                    <div className=' cursor-pointer'>
                        <img src={user} alt="" />
                    </div>
                    <div className=' cursor-pointer'>
                        <img src={shopping} alt="" />
                        <span className="absolute top-4 right-3 mr-3 p-1 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                            {2}
                        </span>
                    </div>
                </div>
            </header>
            <section className="bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: `url(${banner})`, backgroundSize: '100%', height:'540px' }}>
                <div className='absolute top-0 right-20 bottom-0 flex w-1/3 p-5 items-center'>
                    <div className='w-full'>
                        <img src={logoDes} alt="" />
                    </div>
                </div>
            </section>

        </>
    )
}
