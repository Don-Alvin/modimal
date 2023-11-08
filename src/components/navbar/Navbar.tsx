import { useState } from 'react'
import { MdOutlineFavoriteBorder, MdOutlineMenu, MdOutlineSearch, MdOutlineShoppingBag, MdPerson4 } from 'react-icons/md'
import { LiaTimesSolid } from 'react-icons/lia'
import NavMenu from './NavMenu'

const Navbar = () => {
    const [isMenu, setIsMenu] = useState(false)
    return(
        <header className=''>
            <div className='p-4 h-4 w-full bg-primary-600 text-white flex justify-center items-center'>
                <span className="bodyXS">Enjoy Free Shipping on all Orders</span>
            </div>
            <nav className="px-5 py-2 flex justify-between items-center">
                <div className='flex items-center gap-2 lg:hidden'>
                   {!isMenu ? <MdOutlineMenu className='text-2xl font-bold' onClick={() => setIsMenu(true)}/> : <LiaTimesSolid className='text-2xl font-bold' onClick={() => setIsMenu(false)} />}
                   <MdOutlineSearch className='text-2xl font-bold' /> 
                </div>
                <img src='/images/Logo.png' width={100} height={100} alt='Logo'/>
                <div className='flex items-center gap-2 lg:hidden'>
                    <MdOutlineFavoriteBorder className='text-2xl font-bold' />
                    <MdOutlineShoppingBag className='text-2xl font-bold' />
                </div>
                {/* Large Screens */}
                <ul className='hidden lg:flex items-center gap-[30px]'>
                    <li>
                        <p className='bodyLG text-gray-700'>Collection</p>
                    </li>
                    <li>
                        <p className='bodyLG text-gray-700'>New In</p>
                    </li>
                    <li>
                        <p className='bodyLG text-gray-700'>Modiweek</p>
                    </li>
                    <li>
                        <p className='bodyLG text-gray-700'>Plus Size</p>
                    </li>
                    <li>
                        <p className='bodyLG text-gray-700'>Sustainability</p>
                    </li>
                </ul>

                <div className='hidden lg:flex items-center gap-6'>
                    <MdOutlineSearch className='text-3xl font-bold' />
                    <MdPerson4 className='text-3xl font-bold' />
                    <MdOutlineFavoriteBorder className='text-3xl font-bold' />
                    <MdOutlineShoppingBag className='text-3xl font-bold' /> 
                </div>
            </nav>
            {isMenu && <NavMenu />}
        </header>
    )
}

export default Navbar