import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const {history} = props

  const onClickLogoutButton = () => {
    Cookies.remove('jwt_token')
    history.replace('/ebank/login')
  }

  return (
    <>
      <nav className="navBarContainer">
        <Link to="/" className="websiteLogoLink">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png "
            alt="website logo"
            className="websiteLogoImage"
          />
        </Link>
        <button className="logoutButton" onClick={onClickLogoutButton}>
          Logout
        </button>
      </nav>
    </>
  )
}

export default withRouter(Header)
