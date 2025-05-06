// Write your code here
import './index.css'

const PlanetItem = props => {
  const {planetsList} = props
  const {name, imageUrl, description} = planetsList
  return (
    <div className="backgroundContainer">
      <div className="planetItemContainer">
        <img src={imageUrl} alt={`planet ${name}`} className="planetImage" />
        <h1 className="planetName">{name}</h1>
        <p className="planetDescription">{description}</p>
      </div>
    </div>
  )
}

export default PlanetItem
