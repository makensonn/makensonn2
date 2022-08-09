import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#ffffff]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#3d3d3d]'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#0a192f]'>
          Makenson Noel
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#3d3d3d]'>
          I'm a Software Engineer.
        </h2>
        <p className='text-[#3d3d3d] py-4 max-w-[700px]'>
          I Graduated from FAU with a Bachelor of Science in Computer Science 
          and the journey to becoming an Software Engineer has been a life changing
          experience.
        </p>
        <div>
          <button className='text-[#0a192f] group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#858585] hover:border-[#ffffff]'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;