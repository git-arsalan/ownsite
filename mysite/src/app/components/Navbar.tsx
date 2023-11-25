import Link from 'next/link'
import React from 'react'
import { FaDownload } from "react-icons/fa";
//import Link from 'next/link';

const Navbar = () =>  {

    return (
      <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">MUHAMMAD ARSALAN AKHTAR</span>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <Link href='/' className="mr-5 hover:text-blue-600">Home</Link>
          <Link href='#' className="mr-5 hover:text-blue-600">About</Link>
          <Link href='#' className="mr-5 hover:text-blue-600">Skills</Link>
          <Link href='#' className="mr-5 hover:text-blue-600">Projects</Link>
          <Link href='#' className="mr-5 hover:text-blue-600">Projects</Link>
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