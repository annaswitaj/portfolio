import React from 'react';
import Tenis from '../../img/tenis.PNG'
import Portfolio from '../../img/portfolio.PNG'
import AdminDashboard from '../../img/adminDashboard.png'


const Projects = () => {
    return (
        <section className="App-projects">
            <div className="title">
                <h1 className="title-h1">Projekty</h1>
               
            </div>
            <div className="App-projects-examples">
                <div className="App-projects-examples-example">
                    <img className="example-img" src={Portfolio} alt="" />
                    <h2 className="example-h2">Portfolio</h2>
                    <a href="https://github.com/annaswitaj/portfolio/tree/dev">kod</a>
                </div>
                <div className="App-projects-examples-example">
                    <img className="example-img" src={Tenis} alt="" />
                    <h2 className="example-h2">Ping-Pong</h2>
                    <a href="https://annaswitaj.github.io/ping-pong/Tenis-1.html">live</a>
                    <a className="last" href="https://github.com/annaswitaj/ping-pong/blob/master/Tenis-1.html">kod</a>
                </div>
                <div className="App-projects-examples-example">
                    <img className="example-img" src={AdminDashboard} alt="" />
                    <h2 className="example-h2">Admin Dashboard</h2>
                    <a href="https://annaswitaj.github.io/Admin-Dashboard/">live</a>
                    <a className="last" href="https://github.com/annaswitaj/Admin-Dashboard/tree/dev">kod</a>
                </div>

            </div>
        </section>
    )
}
export default Projects;