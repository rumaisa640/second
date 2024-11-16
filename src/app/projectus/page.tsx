import React from 'react'
import Image from 'next/image';

 const Project : React.FC = () => {
  return (
<main>
        <div>
            <h1 className="font-thin leading-[40px] pt-[70px] px-[240px]">
                    <span className="text-[61px] font-thin  text-[#E5E5E5] ">Our</span> <br />
                    <span className=" text-[50px]  font-bold capitalize">Projects</span>
            </h1>
        </div>


            <div className='flex items-center justify-center  pt-[70px]'>
                <Image src="/img1 (2).png" width="670" height="428" alt='' className='text-center w-[670px] h-[428px]'></Image>
            <div className='bg-[#FBFBFB] p-[42px]'>
            <span className="text-[40px] font-thin  pb-[100px] text-[#E5E5E5] ">Sample Project</span> <br />

                <p className='w-[400px] text-justify pt-[50px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has </p>

                <button className="bg-white text-black px-11  py-5 relative mt-[50px]  border-none flex items-center space-x-2 hover:bg-black hover:text-white transition-all">
                    <span>View More</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round"strokeWidth="2" d="M10 6l6 6-6 6" />
                    </svg>
                </button>
            </div>
        
        </div>


        <div className='flex items-center justify-center  pt-[70px]'>
                <Image src="/1.png" width="670" height="428" alt='' className='text-center w-[670px] h-[428px]'></Image>
            <div className='bg-[#FBFBFB] p-[42px]'>
            <span className="text-[40px] font-thin  pb-[100px] text-[#E5E5E5] ">Sample Project</span> <br />

                <p className='w-[400px] text-justify pt-[50px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has </p>

                <button className="bg-white text-black px-11  py-5 relative mt-[50px]  border-none flex items-center space-x-2 hover:bg-black hover:text-white transition-all">
                    <span>View More</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round"strokeWidth="2" d="M10 6l6 6-6 6" />
                    </svg>
                </button>
            </div>
        
        </div>

        <div className='flex items-center justify-center  pt-[70px]'>
                <Image src="/bigs.png" width="670" height="428" alt='' className='text-center w-[670px] h-[428px]'></Image>
            <div className='bg-[#FBFBFB] p-[42px] '>
            <span className="text-[40px] font-thin  pb-[100px] text-[#E5E5E5] ">Sample Project</span> <br />

                <p className='w-[400px] text-justify pt-[50px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has </p>

                <button className="bg-white text-black px-11  py-5 relative mt-[50px]  border-none flex items-center space-x-2 hover:bg-black hover:text-white transition-all">
                    <span>View More</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round"strokeWidth="2" d="M10 6l6 6-6 6" />
                    </svg>
                </button>
            </div>
        
        </div>
        <div className="flex  px-[180px]  py-[50px]">
              <button className="px-4 py-2 bg-gray-100  rounded-[6px]  hover:bg-gray-300">
                  &larr; {/* Left arrow */}
              </button>
              <button className="px-4 py-2 bg-gray-200  rounded-[6px] ml-4 hover:bg-gray-300">
                  &rarr; {/* Right arrow */}
              </button>
         </div>
       
</main>
)
}
export default Project;
