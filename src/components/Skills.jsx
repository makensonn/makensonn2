import React from 'react';

import HTML from '../assets/skills/html.png';
import CSS from '../assets/skills/css.png';
import JavaScript from '../assets/skills/javascript.png';
import ReactImg from '../assets/skills/react.png';
import Node from '../assets/skills/node.png';
import FireBase from '../assets/skills/firebase.png';
import AWS from '../assets/skills/aws.png';
import GitHub from '../assets/skills/github.png';
import Tailwind from '../assets/skills/tailwind.png';
import Mongo from '../assets/skills/mongo.png';
import CPP from '../assets/skills/cpp.png';
import Java from '../assets/skills/java.png';
import Python from '../assets/skills/python.png';


const Skills = () => {
  return (
    <div name='skills' className='w-full bg-[#ffffff] text-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-[#858585]'><br></br><br></br>Skills</p>
              <p className='py-4'>// These are the technologies I've worked with</p>
          </div>
          
          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CPP} alt="HTML icon" />
                    <p className='my-4'>C++</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Java} alt="HTML icon" />
                <p className='my-4'>JAVA</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Python} alt="HTML icon" />
                <p className='my-4'>PYTHON</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                <p className='my-4'>HTML</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                <p className='my-4'>CSS</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Tailwind} alt="HTML icon" />
                <p className='my-4'>TAILWIND CSS</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                <p className='my-4'>JAVASCRIPT</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                <p className='my-4'>REACT</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" />
                <p className='my-4'>GITHUB</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Node} alt="HTML icon" />
                <p className='my-4'>NODE JS</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Mongo} alt="HTML icon" />
                <p className='my-4'>MONGO DB</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={FireBase} alt="HTML icon" />
                <p className='my-4'>FIREBASE</p>
            </div>

          </div>
      </div>
    </div>
  );
};

export default Skills;