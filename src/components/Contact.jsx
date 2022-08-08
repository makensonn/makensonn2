import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#ffffff] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/7d94aa2b-bbf7-4996-83a6-43d6efb0412e" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#3d3d3d] text-[#0a192f]'>Contact</p>
                <p className='text-[#0a192f] py-4'>// Submit the form below or send me an email - makenson.noel@live.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-[#0a192f] border-2 hover:bg-[#858585] hover:border-[#ffffff] px-4 py-3 my-8 mx-auto flex items-center'>Send</button>
        </form>
    </div>
  )
}

export default Contact