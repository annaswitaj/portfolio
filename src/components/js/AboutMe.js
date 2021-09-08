import React from 'react';



const AboutMe = () => {
    return (
        <section className="App-aboutme">
            <div className="title">
                <h1 className="title-h1">O mnie</h1>
                
            </div>
            <div className="description">
                <article className="des"><p>Nazywam się Anna Świtaj. Jestem absolwentem kierunku Informatyka, na Uniwersytecie Warmińsko-Mazurskim.</p>
                    <p>W trakcie studiowania wykonywałam  projekty zespołowe przy użyciu GITa.</p>
                </article>
                <article className="des">     <p>Szukam stażu/pracy związanej z programowaniem front-endu. Obecnie uczę się technologii React .</p>
                    <p>Hobbistycznie projektuję grafiki, medytuję i praktykuję jogę.</p>
                </article>

            </div>

        </section>
    )
}
export default AboutMe;
