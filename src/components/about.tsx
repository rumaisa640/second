import React from 'react'
import Image from 'next/image';
 const About : React.FC = () => {
  return (

    <main>
    <div className='flex items-center justify-evenly mx-[100px] gap-[100px] bg-[#FBFBFB] px-[70px] py-[70px] '>
        <div className='flex items-center justify-center gap-4 '>
            <div>
                <Image src="/1.png" width="2400" height="1200" alt='' className='pb-[16px]' ></Image>
                <Image src="/3.png" width="2400" height="300" alt=''></Image>
            </div>
            <div>
                <Image src="/2.png" width="2400" height="1000" alt='' className=''></Image>
            </div>
        </div>
        <div>
            <h1 className='font-thin text-7xl text-[#E5E5E5] '>About</h1>

            <p className='font-thin text-[16px] leading-7 -tracking-wide text-justify text-gray-600 pt-[30px] pb-[100px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam iure eos perferendis dolor, amet quo unde? Aut architecto quis sequi id in unde dicta ullam, fugit magnam esse, iste ratione error nobis expedita consequatur! Sit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ipsa in necessitatibus commodi, consequatur! Sit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ipsa in necessitatibus commodi, .</p>

            <button className="bg-white text-black px-11  py-5  border-none flex items-center space-x-2 hover:bg-black hover:text-white transition-all">
            <span>View More</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6l6 6-6 6" />
            </svg>
            </button>
        </div>
    </div>

    <div className='px-[50px] py-[70px]'>
        <div>
            <h1 className='text-center text-7xl text-[#E5E5E5] font-thin'>Main Focus / Mission Statement</h1>
        </div>
        <div className='flex justify-evenly items-center'>
            <div className='flex justify-center items-center'>
                <h1 className='text-center text-[198px] text-[#f0f0f0] font-bold'>1</h1>
                <p className='text-2xl text-justify  pl-5'>Lorem ipsum dolor, sit amet <br /> consectetur adipisicing elit. Eum  <br /> qui consectetur quisquam distinctio.  <br />consectetur quisquam distinctio</p>
            </div>
            <div className='flex justify-center items-center'>
                <h1 className='text-center text-[198px] font-bold text-[#E5E5E5] '>2</h1>
                <p className='text-2xl text-justify pl-10'>Lorem ipsum dolor, sit amet <br /> consectetur adipisicing elit. Eum  <br /> qui consectetur quisquam distinctio. <br /> consectetur quisquam distinctio</p>
            </div> 
        </div>

    </div>

    </main>
  )
}
export default About;