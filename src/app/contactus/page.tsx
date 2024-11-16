import React from 'react'
import Image from 'next/image';

 const Contact : React.FC = () => {
  return (
    <main className='flex items-center justify-evenly'>
       <div className=''>
           <div>
                <h1 className="font-thin leading-[40px] pt-[70px]  pb-[50px]">
                        <span className="text-[61px] font-thin  text-[#E5E5E5] ">Contact</span> <br />
                        <span className=" text-[50px]  font-bold capitalize">Information</span>
                </h1>
            </div>
            <div>
                <h1  className='font-bold'>Company Name</h1>
                <p className='pb-[50px]'>1234 Sample Street Austin Texas 76401</p>
                <p className='font-bold'>512.333.2222</p>
                <p>sampleemail@gmail.com</p>
            </div>

            <div className="flex    py-[50px]">
                <button className="bg-gray-700 text-white px-11  py-5 relative   border-none flex items-center space-x-2 hover:bg-black hover:text-white transition-all">
                        <span>View More</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round"strokeWidth="2" d="M10 6l6 6-6 6" />
                        </svg>
                </button>
            </div>
     </div>
     
     <div>
     <Image src="/img14.png" width="670" height="428" alt='' className='text-center w-[670px] h-[428px]'></Image>

     </div>
       
       
        
    </main>
  )
}

export default Contact;