import React from 'react'
import Image from 'next/image';


 const Herosection : React.FC = () => {
  return (
    <div className='flex items-center justify-between px-[100px] py-[60px] '>
        <div>
        <h1 className="font-thin leading-[55px] pb-[70px]">
  <span className="text-[81px] font-thin uppercase text-[#E5E5E5] ">project</span> <br />
  <span className=" text-[70px] font-bold capitalize">lorem</span>
        </h1>


            <div className="flex ">
              <button className="px-4 py-2 bg-gray-100  rounded-[6px]  hover:bg-gray-300">
                  &larr; {/* Left arrow */}
              </button>
              <button className="px-4 py-2 bg-gray-200  rounded-[6px] ml-4 hover:bg-gray-300">
                  &rarr; {/* Right arrow */}
              </button>
            </div>
        </div>

        
      {/* image */}
      <div>
        <Image src="/hi.png" width="800" height="1000" alt='' className='h-[800px] '></Image>
        <button className="bg-white text-black px-11  py-5 relative top-[-64px]  border-none flex items-center space-x-2 hover:bg-black hover:text-white transition-all">
  <span>View More</span>
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round"strokeWidth="2" d="M10 6l6 6-6 6" />
  </svg>
</button>
      </div>
    </div>
  )
}
export default Herosection;