import {Component} from 'react'

import Cookies from 'js-cookie'

import {Route, Switch, Redirect} from 'react-router-dom'

import './index.css'

class LoginForm extends Component {
  state = {user_id: '', pin: '', showSubmitError: false, errorMsg: ''}

  onChangeUserIdInput = event => {
    this.setState({user_id: event.target.value})
  }

  onChangeUserPin = event => {
    this.setState({pin: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  onClickSubmitButton = async event => {
    event.preventDefault()

    const {user_id, pin} = this.state
    const userDetails = {user_id, pin}
    const url = 'https://apis.ccbp.in/ebank/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
      console.log(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {user_id, pin, showSubmitError, errorMsg} = this.state

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <>
        <div className="bodyContianer">
          <div className="loginFormContainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png "
              alt="website login"
              className="websiteLoginImage"
            />
            <div className="loginContainer">
              <h1 className="loginHeading">Welcome Back!</h1>
              <form onSubmit={this.onClickSubmitButton}>
                <div className="userIdContainer">
                  <label className="userIdLabel" htmlFor="userId">
                    User ID
                  </label>
                  <input
                    type="text"
                    placeholder="Enter User ID"
                    id="userId"
                    className="userIdInput"
                    onChange={this.onChangeUserIdInput}
                    value={user_id}
                  />
                </div>
                <div className="userIdContainer">
                  <label className="userIdLabel" htmlFor="userPin">
                    PIN
                  </label>
                  <input
                    type="password"
                    placeholder="Enter PIN"
                    id="userPin"
                    className="userIdInput"
                    onChange={this.onChangeUserPin}
                    value={pin}
                  />
                </div>
                <button className="loginButton" type="submit">
                  Login
                </button>
                {showSubmitError && <p className="errorMsg">{errorMsg}</p>}
              </form>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default LoginForm
