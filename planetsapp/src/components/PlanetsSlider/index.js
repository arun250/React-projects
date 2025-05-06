// Write your code here
// Write your code here
import Slider from 'react-slick'

import React from 'react'

import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props

  return (
    <div className="bg-container" data-testid="planets">
      <h1 className="planetHeading">PLANETS</h1>
      <Slider>
        {planetsList.map(eachItem => (
          <PlanetItem key={eachItem.id} planetsList={eachItem} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
