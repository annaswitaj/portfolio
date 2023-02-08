import {
  SiTypescript,
  SiGit,
  SiHtml5,
  SiReact,
  SiAngular,
  SiCss3,
  SiSass,
  SiJavascript,
} from 'react-icons/si'
import React from 'react'

const Technology = () => {
  return (
    <section className='App-technology'>
      <div className='title'>
        <h1 className='title-h1'>Umiejętności</h1>
      </div>
      <div className='technology-icons'>
        <div className='technology-icon'>
          <SiGit className='icon' />
          <p>Git</p>
        </div>
        <div className='technology-icon'>
          <SiHtml5 className='icon' />
          <p>HTML5</p>
        </div>
        <div className='technology-icon'>
          <SiCss3 className='icon' />
          <p>CSS3</p>
        </div>
        <div className='technology-icon'>
          <SiSass className='icon' />
          <p>SASS</p>
        </div>
        <div className='technology-icon'>
          <SiJavascript className='icon' />
          <p>JS</p>
        </div>
        <div className='technology-icon'>
          <SiTypescript className='icon' />
          <p>TS</p>
        </div>
        <div className='technology-icon'>
          <SiAngular className='icon' />
          <p>Angular</p>
        </div>
        <div className='technology-icon'>
          <SiReact className='icon' />
          <p>React</p>
        </div>
      </div>
    </section>
  )
}
export default Technology
