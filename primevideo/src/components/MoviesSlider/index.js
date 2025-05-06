// Write your code here
import Slider from 'react-slick'
import MovieItem from '../MovieItem'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const MoviesSlider = props => {
  const {moviesList} = props
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 4,
  }
  return (
    <div className="slider-container">
      <h1>Action Movies</h1>
      <Slider {...settings}>
        {moviesList.map(eachItem => {
          if (eachItem.categoryId === 'ACTION') {
            return <MovieItem moviesList={eachItem} />
          }
        })}
      </Slider>
      <h1>Comedy Movies</h1>
      <Slider {...settings}>
        {moviesList.map(eachItem => {
          if (eachItem.categoryId === 'COMEDY') {
            return <MovieItem moviesList={eachItem} />
          }
        })}
      </Slider>
    </div>
  )
}

export default MoviesSlider
