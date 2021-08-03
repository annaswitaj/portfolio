import React from 'react';
import KittyKomunitty from '../../img/KittyKomunitty.png'
import Tenis from '../../img/tenis.PNG'
import Portfolio from '../../img/portfolio.PNG'


const Projects = () => {
    return (
        <section className="App-projects">
            <div className="title">
                <h1 className="title-h1">Projekty</h1>
                <h2 className="title-h1">Nad czym pracowałam/pracuje?</h2>
            </div>
            <div className="App-projects-examples">
                <div className="App-projects-examples-example">
                    <img className="example-img" src={Portfolio} alt="" />
                    <h2 className="example-h2">Portfolio</h2>
                    <a href="https://github.com/annaswitaj/portfolio">kod</a>
                </div>
                <div className="App-projects-examples-example">
                    <img className="example-img" src={Tenis} alt="" />
                    <h2 className="example-h2">Ping-Pong</h2>
                    <a href="https://annaswitaj.github.io/ping-pong/Tenis-1.html">live</a>
                    <a className="last" href="https://github.com/annaswitaj/ping-pong">kod</a>
                </div>

            </div>
        </section>
    )
}
export default Projects;