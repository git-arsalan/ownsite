import Link from 'next/link'
import React from 'react'
import { FaDownload } from "react-icons/fa";
import Image from 'next/image';
//import Link from 'next/link';

const Navbar = () =>  {

    return (
      <header className="text-gray-600 body-font z-50 sticky top-0 bg-white" >
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <Image src={require('../../../public/Assets/Images/logo.jpg')} alt="Arsalan Online Academy" height={100} width={100} className='w-10 rounded-full'/>    
          <span className="ml-3 text-xl">MUHAMMAD ARSALAN AKHTAR</span>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <Link href='/' className="mr-5 hover:text-yellow-400">Home</Link>
          <Link href='#' className="mr-5 hover:text-yellow-400">About</Link>
          <Link href='#' className="mr-5 hover:text-yellow-400">Skills</Link>
          <Link href='#' className="mr-5 hover:text-yellow-400">Projects</Link>
          <Link href='#Contact' className="mr-5 hover:text-yellow-400">Contact</Link>
        </nav>
        <a href='.\Assets\CV\CV-Arsalan.pdf'>
        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
         Download CV <FaDownload className='text-xl ml-2'/>
        </button>
        </a>
      </div>
    </header>      
    
    )
        
    
}

export default Navbar