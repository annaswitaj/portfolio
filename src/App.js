import React from 'react'
import './styles/App.scss'
import Navigation from './components/Navigation'
import Name from './components/Name'
import Contact from './components/Contact'
import AboutMe from './components/AboutMe'
import Technology from './components/Technology'
import Projects from './components/Projects'

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Name />
      <AboutMe />
      <Projects />
      <Technology />
      <Contact />
    </div>
  )
}

export default App
