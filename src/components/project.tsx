import React from 'react'
import Image from 'next/image';

 const Project  : React.FC = () => {
  return (

    <main>
      <h1 className='font-thin text-7xl text-[#E5E5E5] px-[150px] '>Our Projects</h1>
    <main className='px-[150px] py-[80px]'>
       

      <div className='flex pb-[30px] '>
      <div className="relative w-full mr-[30px]">
  {/* Image with Black Overlay */}
  <Image src="/12.png" width={750} height={200} alt='' className="w-full h-[250px]  object-cover" />

  {/* Black Transparent Overlay */}
  <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center">
    {/* Text on Image */}
    <h1 className="text-white text-7xl font-bold pl-[100px]">Sample <br /> Project</h1>
    
    {/* View More with Arrow */}
    <div className="mt-4 pl-[100px]">
      <span className="text-white text-sm font-thin cursor-pointer">
        View More
      </span>
      <span className="ml-2 text-white text-sm font-thin cursor-pointer">→</span>
    </div>
  </div>
</div>

     <Image src="/7.png" width="750" height="200" alt='' className=' h-[250px]'></Image>
        </div>
          <div className='flex'>
        <Image src="/11.png" width="500" height="200" alt='' className='pr-[30px]  h-[200px] ' ></Image>
        <Image src="/8.png" width="500" height="200" alt=''className='pr-[30px]  h-[200px]'></Image>
        <Image src="/9.png" width="500" height="200" alt='' className=' h-[200px]'></Image>

        
      </div>
    </main>

    <button className="bg-gray-700 text-white px-11   py-5 relative top-[-44px] right-[-1175px]  border-none flex items-center space-x-2 hover:bg-black hover:text-white transition-all">
  <span>All projects</span>
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round"strokeWidth="2" d="M10 6l6 6-6 6" />
  </svg>
</button>

    </main>
    
  )
}
export default Project;