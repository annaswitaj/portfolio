import React from 'react';



const AboutMe = () => {
    return (
        <section className="App-aboutme">
            <div className="title">
                <h1 className="title-h1">O mnie</h1>
                
            </div>
            <div className="description">
                <article className="des"><p>Nazywam się Anna Świtaj. Jestem absolwentką kierunku Informatyka, na Uniwersytecie Warmińsko-Mazurskim.</p>
                    <p>Obecnie pracuję jako Angular Frontend Developer i mam już rok doświadczenia z tą technologią.</p>
                </article>
                <article className="des">    <p>Jestem zaangażowana w belgijski projekt, który jest prowadzony według metodyki SCRUM.</p>
                    <p>Hobbistycznie projektuję grafiki, medytuję i praktykuję jogę.</p>
                </article>

            </div>

        </section>
    )
}
export default AboutMe;
