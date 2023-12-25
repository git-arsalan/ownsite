import React  from "react";

import Link from 'next/link'
import Image from 'next/image';

const Hero = (props: any) => 
{
    return (
    <div>
    <section className="text-gray-600 body-font">
    <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
      <Image
        className="mb-10 object-cover object-center rounded w-[15rem]"
        alt="hero"
        width={100}
        height={100}
        src={require('../../../public/Assets/Images/mypic.jpg')}/>

      <div className="text-center lg:w-2/3 w-full">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          Microdosing synth tattooed vexillologist
        </h1>
        <p className="mb-8 leading-relaxed">
          Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing
          tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt
          ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over
          meditation PBR&amp;B pickled ennui celiac mlkshk freegan photo booth af
          fingerstache pitchfork.
        </p>
        <div className="flex justify-center">
          <button className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">
            Button
          </button>
          <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
            Button
          </button>
        </div>
      </div>
    </div>
  </section>
  </div>
  )
}



export default Hero