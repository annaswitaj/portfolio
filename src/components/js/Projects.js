import React from 'react';
import KittyKomunitty from '../../img/KittyKomunitty.png'


const Projects = () => {
    return (
        <section className="App-projects">
            <div className="title">
                <h1 className="title-h1">Projekty</h1>
                <h2 className="title-h1">Nad czym pracowałam/pracuje?</h2>
            </div>
            <div className="App-projects-examples">
                <div className="App-projects-examples-example">
                    <img className="example-img" src={KittyKomunitty} alt="" />
                    <h2 className="example-h2">Projekt grupowy (w trakcie)</h2>
                    <a href="https://kitty-community.herokuapp.com/">live</a>
                </div>
                <div className="App-projects-examples-example">
                    <img className="example-img" src={KittyKomunitty} alt="" />
                    <h2 className="example-h2">Portfolio</h2>
                    <a href="https://kitty-community.herokuapp.com/">kod</a>
                </div>
                <div className="App-projects-examples-example">
                    <img className="example-img" src={KittyKomunitty} alt="" />
                    <h2 className="example-h2">Projekt grupowy</h2>
                </div>

            </div>
        </section>
    )
}
export default Projects;