import './index.css'

import Header from '../Header'

const NotFound = () => {
  return (
    <>
      <Header />
      <div className="NotFoundContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/tech-era/not-found-img.png"
          alt="not found"
          className="NotFoundImage"
        />
        <h1 className="pageNotFoundHeading">Page Not Found</h1>
        <p className="pageNotFoundDescription">
          We are sorry, the page you requested could not be found.
        </p>
      </div>
    </>
  )
}

export default NotFound
