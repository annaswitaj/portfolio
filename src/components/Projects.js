import React from 'react';
import Tenis from '../assets/img/tenis.png';
import Portfolio from '../assets/img/portfolio.png';
import AdminDashboard from '../assets/img/admin-dashboard.png';
import ToDoList from '../assets/img/to-do-list.png';
import ShoppingCart from '../assets/img/shopping-cart.png';
import CountriesApp from '../assets/img/countries-app.png';
import BudgetApp from '../assets/img/budget-app.png';
import ProjectWrapper from './ProjectWrapper';

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
          pathImage={BudgetApp}
          projectName='Budget App'
          liveLink='https://countries-angular-app.netlify.app/regions'
          codeLink='https://github.com/annaswitaj/countries-angular-app'
        />
        <ProjectWrapper
          pathImage={CountriesApp}
          projectName='Countries App'
          liveLink='https://countries-angular-app.netlify.app/regions'
          codeLink='https://github.com/annaswitaj/countries-angular-app'
        />
        <ProjectWrapper
          pathImage={Tenis}
          projectName='Ping-Pong'
          liveLink='https://annaswitaj.github.io/ping-pong/Tenis-1.html'
          codeLink='https://github.com/annaswitaj/ping-pong/blob/master/Tenis-1.html'
        />
        <ProjectWrapper
          pathImage={AdminDashboard}
          projectName='Admin Dashboard'
          liveLink='https://annaswitaj.github.io/Admin-Dashboard/'
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
  );
};
export default Projects;
