import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import Image from 'next/image';


const Footer : React.FC = () => {
  return (
    <footer className="bg-black text-white py-[50px] mt-[50px]">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Logo Section (Left Side) */}
        <div className="w-full md:w-1/4 flex justify-start items-center">
          <div className=" w-32 h-32 flex justify-center items-center">
          
            <Image src="/grp.png" width="90" height="90" alt='Logo' />
            </div>
        </div>

        {/* Contact Information Section (2 columns) */}
        <div className="w-full md:w-1/2 flex flex-wrap justify-between gap-8">
          {/* Main Info */}
          <div className="w-full sm:w-1/2">
            <h2 className="text-xl font-semibold mb-4">Information</h2>
            <ul className="space-y-4">
              <li >Main</li>
              <li>Gallery</li>
              <li>Project</li>
              <li>Certification</li>
              <li>Contacts</li>
            </ul>
          </div>

        </div>

        {/* Contact Info */}
        <div className="w-full sm:w-1/2">
            <h2 className="text-xl font-semibold mb-4">Contact Info</h2>
            <div>
              <div className='flex gap-4  '>
                <Image src="/location.png" width="20" height="20" alt=''  className='w-[20px] h-[20px]'></Image>
                <p className='pb-[50px] '>1234 Sample Street <br /> Austin Texas 76401</p>
              </div>

               <div className='flex gap-4'>
                <Image src="/i2.png" width="5" height="5" alt='' className='w-[30px] h-[30px]' ></Image>
                  <p className='font-bold pb-[20px]'>512.333.2222</p>
               </div>

               <div className='flex gap-4'> 
                <Image src="/i1.png" width="5" height="5" alt='' className='w-[30px] h-[30px]' ></Image>
                  <p>sampleemail@gmail.com</p>
                </div>
            </div>
          </div>

        {/* Social Media Icons Section */}
        <div className="w-full md:w-1/4 space-x-6">
        <div>
        <h2 className="text-xl font-semibold mb-4 pl-[20px] pb-[20px]">Social media</h2>
        </div>
<div className='flex gap-[40px]'><Image src="/twitter (1).png" width="25" height="25" alt='' ></Image>
         <Image src="/pin.png" width="25" height="25" alt='' ></Image>
         <Image src="/link.png" width="25" height="25" alt='' ></Image>
         <Image src="/facebook.png" width="15" height="15" alt='' ></Image></div>
         

         </div>
        
      </div>
    </footer>
  );
}

export default Footer;
