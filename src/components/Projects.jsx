import React from 'react';
import cppp from '../assets/projects/cppp.png';
import javap from '../assets/projects/javap.png';
import robot from '../assets/projects/robot.png';
import pyradise from '../assets/projects/pyradise.png';
import bootstrap from '../assets/projects/bootstrap.png';
import embedded from '../assets/projects/embedded.png';
import rfb from '../assets/projects/rfb.png';
import todo from '../assets/projects/todo.png';


const Projects = () => {

  //Projects Styles and Position

  //Project Section Div Style
  const background =''
  

  //Button Styles
  const demoButtonStyle ='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'
  const codeButtonStyle ='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'

  //Grid Item Style
  const divStyle ='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'

  //Hover Effects
  const opacityEffect ='opacity-0 group-hover:opacity-100'
  const titleStyle ='text-2xl font-bold text-white tracking-wider'
  const textPosition ='pt-8 text-center'

  //Project Link
  const reactNativeProject ='https://youtube.com/shorts/JQ4K1mymz-M?feature=share'
  const reactProject='https://makenson.com/todo/'
  const nextProject =''
  const vueProject =''
  const cppProject ='https://makenson.com/cplusplus/'
  const javaProject ='https://makenson.com/java/'
  const pythonProject ='https://makenson.com/python'
  const embeddedProject ='https://www.youtube.com/watch?v=bSMZXMQQ2XY'
  const bootstrapProject ='https://pyradisesw.github.io/'
  const robotProject='https://youtu.be/CdM2Otm6FBI'

  //Project Source Code
  const reactNativeCode ='https://github.com/makensonn/flappy_bird_remake'
  const reactCode='https://github.com/makensonn/todo'
  const nextCode =''
  const vueCode =''
  const cppCode ='https://github.com/cplusplus'
  const javaCode ='https://github.com/makensonn/java'
  const pythonCode ='https://github.com/makensonn/python'
  const embeddedCode ='https://github.com/makensonn/Arduino_smart_home'
  const bootstrapCode ='https://github.com/pyradisesw/pyradisesw.github.io'
  const robotCode ='https://github.com/materialhandlingrobot/Materialhandlingrobot-'


  return (
    <div name='projects' className='w-full text-[#0a192f] bg-[#ffffff]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-[#0a192f] border-[#3d3d3d]'><br></br><br></br>Projects</p>
          <p className='py-6'>// Check out some of my recent projects</p>
        </div>

        {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>


          {/* Grid Item */}
          <div style={{ backgroundImage: `url(${javap})` }} className={divStyle}>
            {/* Hover Effects */}
            <div className={opacityEffect}>
              <span className={titleStyle}>Java Applications</span>
              <div className={textPosition}>
                <a href={javaProject} target='_blank'><button className={demoButtonStyle}> Demo </button></a>
                <a href={javaCode} target='_blank'><button className={codeButtonStyle}> Code </button></a>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div style={{ backgroundImage: `url(${todo})` }} className={divStyle}>
            {/* Hover Effects */}
            <div className={opacityEffect}>
              <span className={titleStyle}>Todo List</span>
              <div className={textPosition}>
                <a href={reactProject} target='_blank'><button className={demoButtonStyle}> Demo </button></a>
                <a href={reactCode} target='_blank'><button className={codeButtonStyle}> Code </button></a>
              </div>
            </div>
          </div>

           {/* Grid Item */}
           <div style={{ backgroundImage: `url(${rfb})` }} className={divStyle}>
            {/* Hover Effects */}
            <div className={opacityEffect}>
              <span className={titleStyle}>React Flappy Bird</span>
              <div className={textPosition}>
                <a href={reactNativeProject} target='_blank'><button className={demoButtonStyle}> Demo </button></a>
                <a href={reactNativeCode} target='_blank'><button className={codeButtonStyle}> Code </button></a>
              </div>
            </div>
          </div>   

          {/* Grid Item */}
          <div style={{ backgroundImage: `url(${embedded})` }} className={divStyle}>
            {/* Hover Effects */}
            <div className={opacityEffect}>
              <span className={titleStyle}>Arduino Smart Home</span>
              <div className={textPosition}>
                <a href={embeddedProject} target='_blank'><button className={demoButtonStyle}> Demo </button></a>
                <a href={embeddedCode} target='_blank'><button className={codeButtonStyle}> Code </button></a>
              </div>
            </div>
          </div>                  

          {/* Grid Item */}
          <div style={{ backgroundImage: `url(${robot})` }} className={divStyle}>
            {/* Hover Effects */}
            <div className={opacityEffect}>
              <span className={titleStyle}>Material Handling Robot</span>
              <div className={textPosition}>
                <a href={robotProject} target='_blank'><button className={demoButtonStyle}> Demo </button></a>
                <a href={robotCode} target='_blank'><button className={codeButtonStyle}> Code </button></a>
              </div>
            </div>
          </div>
        
          {/* Grid Item */}
          <div style={{ backgroundImage: `url(${pyradise})` }} className={divStyle}>
            {/* Hover Effects */}
            <div className={opacityEffect}>
              <span className={titleStyle}>Pyradise</span>
              <div className={textPosition}>
                <a href={bootstrapProject} target='_blank'><button className={demoButtonStyle}> Demo </button></a>
                <a href={bootstrapCode} target='_blank'><button className={codeButtonStyle}> Code </button></a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Projects;