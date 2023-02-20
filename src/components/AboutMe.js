import React from 'react';

import CV from '../assets/files/Anna_Switaj_CV.pdf';

const AboutMe = () => {
  return (
    <section className='App-aboutme'>
      <div className='title'>
        <h1 className='title-h1'>O mnie</h1>
      </div>
      <div className='description'>
        <article className='des'>
          <p>
            Nazywam się Anna Świtaj. Jestem absolwentką kierunku Informatyka, na
            Uniwersytecie Warmińsko-Mazurskim.
          </p>
          <p>
            Mam rok doświadczenia tworząc aplikacje w Angularze.
          </p>

          <p>Hobbistycznie projektuję grafiki, medytuję i praktykuję jogę.</p>

          <a href={CV} download='Anna-Switaj-CV.pdf' className='cv'>
            Pobierz CV
          </a>
        </article>
      </div>
    </section>
  );
};
export default AboutMe;
