// src/app/pages/projects/pro.tsx
import React from 'react';
import Image from 'next/image';

const Project : React.FC = () => {
  return (
    <main>
        <div>
            <div>
            <h1 className="font-thin leading-[40px] pt-[70px] px-[170px]">
                        <span className="text-[61px] font-thin uppercase text-[#E5E5E5] ">SAMPLE</span> <br />
                        <span className=" text-[50px] font-bold capitalize">Project1</span>
                </h1>
            </div>
            <div className='flex items-center justify-center pt-[70px]'>
                <Image src="/big.png" width="1170" height="435" alt='' className='text-center'></Image>
            </div>
        </div>
        <div className='pt-[30px]'>
            <div className='flex items-center justify-center gap-[30px]'>
            <Image src="/img1 (2).png" width="419" height="428" alt='' className='text-center'></Image>
            <p className='w-[721] text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrs standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with.</p>
            </div>
        </div>
        <div className='flex items-center justify-center pt-[70px]'>
                <Image src="/image 35.png" width="1170" height="435" alt='' className='text-center'></Image>
            </div>
    </main>
  );
};

export default Project;
