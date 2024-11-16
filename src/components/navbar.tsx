import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

 const Navbar : React.FC = () => {
  return (
    <nav className='flex items-center justify-center gap-[300px] px-10 py-5'>
        <div>
            <Image src="/logo.png" width="70" height="70" alt='Logo' />
        </div>
        <div>
            <ul className='flex gap-11 uppercase font-thin text-xs tracking-widest'>
              {/* Links with letter spacing and thin font */}
              <li className="group">
                <Link href="/" className="font-thin text-1xs tracking-widest py-2 group-hover:border-t-2 group-hover:border-b-2 group-hover:border-gray-900 transition-all duration-200 ease-in-out">Main</Link>
              </li>
              <li className="group">
                <Link href="./gallery" className="font-thin text-1xs tracking-widest py-2 group-hover:border-t-2 group-hover:border-b-2 group-hover:border-gray-900 transition-all duration-200 ease-in-out">Gallery</Link>
              </li>
              <li className="group">
                <Link href="./projectus" className="font-thin text-1xs tracking-widest py-2 group-hover:border-t-2 group-hover:border-b-2 group-hover:border-gray-900 transition-all duration-200 ease-in-out">Project</Link>
              </li>
              <li className="group">
                <Link href="./certification" className="font-thin text-1xs tracking-widest py-2 group-hover:border-t-2 group-hover:border-b-2 group-hover:border-gray-900 transition-all duration-200 ease-in-out">Certification</Link>
              </li>
              <li className="group">
                <Link href="./contactus" className="font-thin text-1xs tracking-widest py-2 group-hover:border-t-2 group-hover:border-b-2 group-hover:border-gray-900 transition-all duration-200 ease-in-out">Contact</Link>
              </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar;
