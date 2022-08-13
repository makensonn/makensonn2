import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {

  //Background, height, width
  const background ='w-full h-screen bg-[#ffffff]'

  // Postion
  const position ='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'

  // Styles
  const introStyle ='text-[#3d3d3d]'
  const nameStyle ='text-4xl sm:text-7xl font-bold text-[#0a192f]'
  const titleStyle ='text-4xl sm:text-7xl font-bold text-[#3d3d3d]'
  const descriptionStyle ='text-[#3d3d3d] py-4 max-w-[700px]'
  const buttonStyle ='text-[#0a192f] group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#858585] hover:border-[#ffffff]'
  const animation='group-hover:rotate-90 duration-300'

  return (
    <div name='home' className={background}>
      {/* Container */}
      <div className={position}>
        <p className={introStyle}><br></br><br></br>Hi, my name is</p>
        <h1 className={nameStyle}> Makenson Noel</h1>
        <h2 className={titleStyle}> I'm a Software Engineer.</h2>
        <p className={descriptionStyle}>I developed this website using Firebase, Express, React, Node and Tailwind CSS. </p>
        <div>
          <button className={buttonStyle}>There's more <span className={animation}><HiArrowNarrowRight className='ml-3 ' /></span></button>
        </div>
      </div>
    </div>
  );
};

export default Home;