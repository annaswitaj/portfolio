import React from 'react';


const Technology = () => {
    return (
        <section className="App-technology">
            <div className="title">
                <h1 className="title-h1">Umiejętności</h1>
                <h2 className="title-h1">Co potafię?</h2>
            </div>
            <div className="technology-icons">
                <div className="technology-icon"><span class="fab fa-html5"></span><p>HTML5</p></div>
                <div className="technology-icon"><span class="fab fa-js"></span><p>JS</p></div>
                <div className="technology-icon"><span class="fab fa-sass"></span><p>SASS</p></div>
                <div className="technology-icon"><span class="fab fa-css3-alt"></span><p>CSS3</p></div>
                <div className="technology-icon"><span class="fab fa-react"></span><p>React</p></div>
                <div className="technology-icon"><span class="fab fa-git-alt"></span><p>Git</p></div>

            </div>
        </section>
    )
}
export default Technology;