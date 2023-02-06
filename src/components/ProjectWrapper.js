import React from 'react'

const ProjectWrapper = ({ pathImage, projectName, liveLink, codeLink }) => {
  return (
    <div className='App-project-wrapper'>
      <img
        className='wrapper-img'
        src={pathImage}
        alt='admin-dashboard'
        load='lazy'
      />
      <h2 className='wrapper-h2'>{projectName}</h2>
      {liveLink && <a href={liveLink}>live</a>}
      <a className='last' href={codeLink}>
        kod
      </a>
    </div>
  )
}

export default ProjectWrapper
