import React from 'react'
import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons/'
import { navLinks } from '../constants'

const Nav = () => {
    return (
        <header className='w-full padding-x py-8 absolute z-10'>
            <nav className='flex justify-between items-center max-container'>
                <a href="/">
                    <img src={headerLogo} alt="nav-log" width={130} height={29} />
                </a>
                <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                    {
                        navLinks.map((item) => (
                            <li key={item.id}>
                                <a href={item.href} className='font-montserrat leading-normal text-lg'>
                                    {item.label}
                                </a>
                            </li>
                        ))
                    }
                </ul>
                <div className="hidden max-lg:block">
                    <img src={hamburger} alt="hamburger-icon" width={25} height={25} />
                </div>
            </nav>
        </header>
    )
}

export default Nav