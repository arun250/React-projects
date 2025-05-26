import './index.css'

import {Link, withRouter} from 'react-router-dom'

const Header = () => {
  return (
    <>
      <nav className="navbarContainer">
        <Link to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png "
            alt="website logo"
            className="websiteLogo"
          />
        </Link>
      </nav>
    </>
  )
}

export default withRouter(Header)
