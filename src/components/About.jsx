import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-blue-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hello, I'm Makenson, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>I enjoy writing code and have been developing software for several years with over 700+ contributions to open source code on GitHub. 
                I’ve done research, taken on leadership roles, participated in coding workshops and developed award winning websites and apps in hackathons. 
                I am adaptive and flexible with learning programming languages, frameworks, tech stacks and new technologies. 
                I enjoy the software development process, finding solutions to challenging problems and collaborating with teams to improve software applications.</p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;