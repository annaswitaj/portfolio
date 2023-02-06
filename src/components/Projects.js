import React from 'react'
import Tenis from '../assets/img/tenis.png'
import Portfolio from '../assets/img/portfolio.png'
import AdminDashboard from '../assets/img/admin-dashboard.png'
import ToDoList from '../assets/img/to-do-list.png'
import ShoppingCart from '../assets/img/shopping-cart.png'
import ProjectWrapper from './ProjectWrapper'

const Projects = () => {
  return (
    <section className='App-projects'>
      <div className='title'>
        <h1 className='title-h1'>Projekty</h1>
      </div>
      <div className='App-projects-examples'>
        <ProjectWrapper
          pathImage={Portfolio}
          projectName='Portfolio'
          codeLink='https://github.com/annaswitaj/portfolio/tree/dev'
        />
        <ProjectWrapper
          pathImage={Tenis}
          projectName='Ping-Pong'
          liveLink='https://ping-pong-tenis-js.netlify.app'
          codeLink='https://github.com/annaswitaj/ping-pong/blob/master/Tenis-1.html'
        />
        <ProjectWrapper
          pathImage={AdminDashboard}
          projectName='Admin Dashboard'
          liveLink='https://admin-dashboard-react-no-api.netlify.app'
          codeLink='https://github.com/annaswitaj/Admin-Dashboard/tree/dev'
        />
        <ProjectWrapper
          pathImage={ToDoList}
          projectName='To Do List'
          liveLink='https://to-do-list-ts-react.netlify.app/'
          codeLink='https://github.com/annaswitaj/to-do-list-ts-react/tree/master'
        />
        <ProjectWrapper
          pathImage={ShoppingCart}
          projectName='Shopping Cart'
          liveLink='https://shopping-cart-context-reducer-react.netlify.app/'
          codeLink='https://github.com/annaswitaj/shopping-cart-context-reducer-react/tree/main'
        />
      </div>
    </section>
  )
}
export default Projects
