import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import Link from 'next/link'
import Image from 'next/image';

const Footer = () => 
{
    return (<footer className="text-gray-600 body-font bg-blue-100">
    <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <Image src={require('../../../public/Assets/Images/logo.jpg')} alt="Arsalan Online Academy" height={100} width={100} className='w-10 rounded-full'/>    
        
        <span className="ml-3 text-xl">M ARSALAN AKHTAR</span>
      </a>
      <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
        © 2023 — ARSALAN
        <a
          href="https://twitter.com/arsalanakkhter"          
          className="text-gray-600 ml-1"
          rel="noopener noreferrer"
          target="_blank"
        >
          @arsalanakkhter
        </a>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <Link href="#" target="_blank" className="text-gray-500 px-2">
        <FaLinkedin className='text-3xl hover:text-[#0A66C2]'  />
        </Link>
        <Link href="#" target="_blank" className="text-gray-500 px-2">
        <FaGithub className='text-3xl hover:text-[#0A66C2]'  />
        </Link>
        <Link href="https://twitter.com/arsalanakkhter" target="_blank" className="text-gray-500 px-2">
        <FaSquareXTwitter className='text-3xl hover:text-[#0A66C2]'  />
        </Link>
        <Link href="#" target="_blank" className="text-gray-500 px-2">
        <FaYoutube className='text-3xl hover:text-[#0A66C2] '  />
        </Link>
     
        </span>
    </div>
  </footer>
  
    )
}

export default Footer

