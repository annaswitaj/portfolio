import React from 'react'
import { FaPhoneSquare, FaEnvelope } from 'react-icons/fa'
import { ImLinkedin, ImGithub } from 'react-icons/im'

const Name = () => {
  return (
    <section className='App-contact'>
      <div className='title'>
        <h1 className='title-h1'>Kontakt</h1>
      </div>
      <div className='icons'>
        <div className='container'>
          <FaPhoneSquare className='icon' />
          <p className='container-data'>506-329-928</p>
        </div>
        <div className='container'>
          <FaEnvelope className='icon' />
          <p className='container-data'>annaswitaj.sw@gmail.com</p>
        </div>
        <div className='container-icon'>
          <a
            href='https://www.linkedin.com/in/anna-%C5%9Bwitaj-a402821aa/'
            className='linkedin-icon'
          >
            <ImLinkedin className='icon' />
          </a>
          <a href='https://github.com/annaswitaj'>
            <ImGithub className='icon' />
          </a>
        </div>
      </div>
    </section>
  )
}
export default Name
