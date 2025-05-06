import Popup from 'reactjs-popup'

import {IoMdClose} from 'react-icons/io'

import 'reactjs-popup/dist/index.css'

import MoviesSlider from '../MoviesSlider'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  return (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png "
        alt="prime video"
        className="primeVideo"
      />
      <MoviesSlider moviesList={moviesList} />
    </div>
  )
}

export default PrimeVideo
