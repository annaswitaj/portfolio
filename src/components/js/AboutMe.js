import React from 'react';



const AboutMe = () => {
    return (
        <section className="App-aboutme">
            <div className="title">
                <h1 className="title-h1">O mnie</h1>
                <h2 className="title-h1">Kim jestem?</h2>
            </div>
            <div className="description">
                <article className="des"><p>Nazywam się <strong>Anna Świtaj</strong>. Obecnie jestem na 3 roku studiów kierunku Informatyka, na Uniwersytecie Warmińsko-Mazurskim.</p>
                    <p>Lubię uczyć się nowych rzeczy.</p>
                </article>
                <article className="des">     <p>Szukam stażu lub pracy związanej z programowaniem front-end. Obecnie kształcę się w React i chciałabym się nim zajmować w przyszłości.</p>
                    <p>Hobbistycznie tworzę modele 3D oraz projektuję grafiki.</p>
                </article>

            </div>

        </section>
    )
}
export default AboutMe;