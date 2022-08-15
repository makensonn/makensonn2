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

 const skillStyle ='shadow-md shadow-[#040c16] hover:scale-110 duration-500'
 const skillSize ='w-20 mx-auto'
 const textStyle ='my-4'

  return (
    <div name='skills' className='w-full bg-[#ffffff] text-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-[#858585]'><br></br><br></br>Skills</p>
              <p className='py-4'>// These are the langauges and technologies I've worked with</p>
          </div>
          
          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            
            {/* JavaScript */}
            <div className={skillStyle}>
                <img className={skillSize} src={JavaScript} alt="HTML icon" />
                <p className={textStyle}>JAVASCRIPT</p>
            </div>

            {/* Java */}
            <div className={skillStyle}>
                <img className={skillSize} src={Java} alt="HTML icon" />
                <p className={textStyle}>JAVA</p>
            </div>

            {/* Python */}
            <div className={skillStyle}>
                <img className={skillSize} src={Python} alt="HTML icon" />
                <p className={textStyle}>PYTHON</p>
            </div>            

            {/* C++ */}
            <div className={skillStyle}>
                <img className={skillSize} src={CPP} alt="HTML icon" />
                <p className={textStyle}>C++</p>
            </div>

            {/* HTML */}
            <div className={skillStyle}>
                <img className={skillSize} src={HTML} alt="HTML icon" />
                <p className={textStyle}>HTML</p>
            </div>

            {/* CSS */}
            <div className={skillStyle}>
                <img className={skillSize} src={CSS} alt="HTML icon" />
                <p className={textStyle}>CSS</p>
            </div>

            {/* Node.js */}
            <div className={skillStyle}>
                <img className={skillSize} src={Node} alt="HTML icon" />
                <p className={textStyle}>NODE JS</p>
            </div>            

            {/* React */}
            <div className={skillStyle}>
                <img className={skillSize} src={ReactImg} alt="HTML icon" />
                <p className={textStyle}>REACT</p>
            </div>

            {/* Tailwind CSS */}
            <div className={skillStyle}>
                <img className={skillSize} src={Tailwind} alt="HTML icon" />
                <p className={textStyle}>TAILWIND CSS</p>
            </div>

            {/* GitHub */}
            <div className={skillStyle}>
                <img className={skillSize} src={GitHub} alt="HTML icon" />
                <p className={textStyle}>GITHUB</p>
            </div>

            {/* Firebase */}
            <div className={skillStyle}>
                <img className={skillSize} src={FireBase} alt="HTML icon" />
                <p className={textStyle}>FIREBASE</p>
            </div>

            {/* MongoDB */}
            <div className={skillStyle}>
                <img className={skillSize} src={Mongo} alt="HTML icon" />
                <p className={textStyle}>MONGO DB</p>
            </div>
            

          </div>
      </div>
    </div>
  );
};

export default Skills;