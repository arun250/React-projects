import './index.css'

const ProjectCard = props => {
  const {projectList} = props
  const {name, imageUrl} = projectList
  return (
    <li className="cardContianer">
      <img src={imageUrl} alt={name} className="cardImage" />
      <p className="projectName">{name}</p>
    </li>
  )
}

export default ProjectCard
