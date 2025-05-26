import './index.css'

import Header from '../Header'

import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

const Home = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/ebank/login" />
  }

  return (
    <>
      <Header />
      <div className="homeContainer">
        <h1 className="homeHeading">Your Flexibility, our Excellence</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png "
          alt="digital card"
          className="digitalCard"
        />
      </div>
    </>
  )
}
export default Home
