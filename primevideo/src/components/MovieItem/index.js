// Write your code here
import Popup from 'reactjs-popup'

import {IoMdClose} from 'react-icons/io'

import ReactPlayer from 'react-player'

import 'reactjs-popup/dist/index.css'

import './index.css'

const MovieItem = props => {
  const {moviesList} = props
  const {thumbnailUrl, videoUrl} = moviesList
  return (
    <div>
      <Popup
        modal
        trigger={
          <button className="movieItemButton">
            <img src={thumbnailUrl} alt="thumbnail" className="thumbnailUrl" />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <>
            <div className="popupContainer">
              <div className="closeIconButtonContainer">
                <button
                  type="button"
                  className="trigger-button"
                  data-testid="closeButton"
                  onClick={() => close()}
                >
                  <IoMdClose />
                </button>
              </div>
              <div className="videoPlayerContainer">
                <ReactPlayer url={videoUrl} controls />
              </div>
            </div>
          </>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
