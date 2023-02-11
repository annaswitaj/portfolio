import React from 'react'
import Me from '../assets/img/me.png'

const Name = () => {
  return (
    <section className='App-name'>
      <div className='data'>
        <h1>Anna Świtaj</h1>
        <h2>Front-end Developer</h2>
        <img src={Me} alt='me' load='lazy' />
      </div>
    </section>
  )
}
export default Name
