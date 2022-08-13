import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin,} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  //NavBar Style
  const navBarStyle = 'fixed z-10 w-full h-[64px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'

  //Mobile NavBar Style
  const mobileMenu ='fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#0a192f] p-10 ease-in duration-500'
  const navTitle = 'py-6 text-4xl'

  //Social Icons Position
  const socialIconsPosition ='hidden lg:flex fixed flex-col top-[35%] left-0'

  //Icon Postions
  const iconPosition = 'flex justify-between items-center w-full text-gray-300'

  //Icon Styles
  const linkedinIconsStyle = 'w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'
  const githubIconsStyle = 'w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'
  const emailIconsStyle = 'w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'
  const resumeIconsStyle = 'w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'

  //Social Links and Resume
  const linkedinLink = 'https://www.linkedin.com/in/makensonnoel/'
  const githubLink = 'https://github.com/makensonn'
  const emailLink = 'mailto: makenson.noel@live.com'
  const resumeLink = 'https://drive.google.com/file/d/1S8w-ZdxV6RusNX9vog7_WaT0Sba5Kcpr/view?usp=sharing'

  return (
    <div className={navBarStyle}>
      <div><img src={Logo} alt='Logo Image' style={{ width: '50px' }} /></div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li><Link to='home' smooth={true} duration={500}>Home</Link></li>
        <li><Link to='about' smooth={true} duration={500}>About</Link></li>
        <li><Link to='skills' smooth={true} duration={500}>Skills</Link></li>
        <li><Link to='projects' smooth={true} duration={500}>Projects</Link></li>
        <li><Link to='contact' smooth={true} duration={500}>Contact</Link></li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'> {!nav ? <FaBars /> : <FaTimes />}</div>

      {/* Mobile menu */}
      <ul className={!nav ? 'hidden' : mobileMenu}>
        <li className={navTitle}><Link onClick={handleClick} to='home' smooth={true} duration={500}>Home</Link></li>
        <li className={navTitle}>{' '}<Link onClick={handleClick} to='about' smooth={true} duration={500}>About</Link></li>
        <li className={navTitle}>{' '}<Link onClick={handleClick} to='skills' smooth={true} duration={500}>Skills</Link></li>
        <li className={navTitle}>{' '}<Link onClick={handleClick} to='projects' smooth={true} duration={500}>Projects</Link></li>
        <li className={navTitle}>{' '}<Link onClick={handleClick} to='contact' smooth={true} duration={500}>Contact</Link></li>
      </ul>

      {/* Social icons */}
      <div className={socialIconsPosition}>
        <ul>
          <li className={linkedinIconsStyle}>
            <a className={iconPosition} href={linkedinLink} target = "_blank"> Linkedin <FaLinkedin size={30} /></a>
          </li>
          <li className={githubIconsStyle}>
            <a className={iconPosition} href={githubLink} target = "_blank"> Github <FaGithub size={30} /></a>
          </li>
          <li className={emailIconsStyle}>
            <a className={iconPosition} href={emailLink}> Email <HiOutlineMail size={30} /></a>
          </li>
          <li className={resumeIconsStyle}>
            <a className={iconPosition} href={resumeLink} target = "_blank"> Resume <BsFillPersonLinesFill size={30} /></a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;