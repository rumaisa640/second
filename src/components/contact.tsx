import React from 'react'
import Image from 'next/image';


 const Contact : React.FC = () => {
  return (
    <main>
            <h1 className='font-thin text-7xl text-[#E5E5E5]  pl-[180px] pb-[20px]'>Contact</h1>
            <div className='flex items-center justify-center gap-[50px]'>
            <div>
                <form action="">
                    <input type="text" placeholder='Name' className=' w-[391px] pl-[20px] h-[45px] m-[5px] bg-[#F3F3F3]' /> <br />
                    <input type="Mobile" name="" id="" placeholder='Phone number'  className='pl-[20px] w-[391px] h-[45px] m-[5px] bg-[#F3F3F3]'/> <br />
                    <input type="email" placeholder='Email'  className='pl-[20px] w-[391px] h-[45px] m-[5px]  bg-[#F3F3F3]'/><br />
                    <input type="text" placeholder='Interested in' className=' pl-[20px] w-[391px] h-[45px] m-[5px] bg-[#F3F3F3]'/><br />
                    <textarea name="message" id="" placeholder='Message'  className='pl-[20px] w-[391px] h-[147px] m-[5px] bg-[#F3F3F3]'></textarea>
                </form>
            </div>
            <div>
                <Image src="/call.png" width="700" height="490" alt='' className='h-[369px]'></Image>
            </div>
        </div>
        <button className="bg-gray-700 text-white ml-[185px] mt-[70px]  px-11  py-5 relative  border-none flex items-center space-x-2 hover:bg-black hover:text-white transition-all">
  <span>View More</span>
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round"strokeWidth="2" d="M10 6l6 6-6 6" />
  </svg>
</button>
    </main>
  )
}
export default Contact;
