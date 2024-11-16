import React from 'react'
import Image from 'next/image';

 const Gallery : React.FC = () => {
  return (
<main>
    
       <div>
            <h1 className="font-thin leading-[40px] pt-[70px] px-[200px]">
                    <span className="text-[61px] font-thin  text-[#E5E5E5] ">Our</span> <br />
                    <span className=" text-[50px]  font-bold capitalize">Gallery</span>
            </h1>
        </div>
        <div className='flex items-center justify-center gap-4 pt-[70px]'>
            <Image src="/22.png" width="210" height="260" alt='' ></Image>
            <Image src="/23.png" width="210" height="260" alt='' ></Image>
            <Image src="/24.png" width="210" height="260" alt='' ></Image>
            <Image src="/25.png" width="210" height="260" alt='' ></Image>
            <Image src="/26.png" width="210" height="260" alt='' ></Image>
        </div>
        <div className='flex items-center justify-center gap-4 pt-[20px]'>
            <Image src="/27.png" width="210" height="260" alt='' ></Image>
            <Image src="/28.png" width="210" height="260" alt='' ></Image>
            <Image src="/29.png" width="210" height="260" alt='' ></Image>
            <Image src="/30.png" width="210" height="260" alt='' ></Image>
            <Image src="/31.png" width="210" height="260" alt='' ></Image>
        </div>


        <div className="flex  px-[190px]  py-[50px]">
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
export default Gallery;