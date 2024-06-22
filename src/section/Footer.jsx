import React from 'react'
import { footerLogo } from '../assets/images'
import { footerLinks, socialMedia } from '../constants'
import { copyrightSign } from '../assets/icons'

const Footer = () => {
    return (
        <footer className='max-container'>
            <div className="flex justify-between items-start gap-20 flex-wrap lg:flex-wrap">
                <div className="flex flex-col items-start ">
                    <a href="/">
                        <img src={footerLogo} alt="footerLogo" width={150} height={46} />
                    </a>
                    <p className='text-base leading-7 mt-6 font-montserrat text-white-400 sm:max-w-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias impedit debitis eaque at illo ducimus, earum amet accusantium consequatur sunt, recusandae nobis culpa repellat distinctio!</p>
                    <div className="flex items-center gap-5 mt-8">
                        {
                            socialMedia.map((icon) => (
                                <div className="flex justify-center items-center bg-white rounded-full w-12 h-12">
                                    <img src={icon.src} alt={icon.alt} />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
                    {
                        footerLinks.map((section) => (
                            <div key={section}>
                                <h4 className='text-white font-montserrat leading-normal font-medium text-2xl mb-6'> {section.title} </h4>
                                <ul>
                                    {
                                        section.links.map((link) => (
                                            <li key={link.name} className='text-white-400 leading-normal font-montserrat mt-3 text-base hover:text-slate-gray cursor-pointer'>
                                                <a href={link.link}> {link.name} </a>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
                <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
                    <img src={copyrightSign} alt="copyright" width={20} height={20} className='rounded-full m-0' />
                    <p>Copyright. All Right Reserved</p>
                </div>
                <p className='font-montserrat cursor-pointer'>Terms & Conditions</p>
            </div>

        </footer>
    )
}

export default Footer