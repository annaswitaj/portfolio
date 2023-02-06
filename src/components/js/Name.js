import React from 'react'
import Me from '../../img/me.png'

const Name = () => {
  return (
    <section className='App-name'>
      <div className='data'>
        <h1>Anna Świtaj</h1>
        <h2>junior front-end developer</h2>
        <img src={Me} alt='me' load='lazy' />
      </div>
    </section>
  )
}
export default Name
