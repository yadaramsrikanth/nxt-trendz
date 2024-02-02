// Write your JS code here
import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', error: false}

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)

    if (response.ok === true) {
      this.onSubmitSuccess()
      this.setState({error: false})
    } else {
      this.setState({error: true})
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  renderUserName = () => {
    const {username} = this.state
    return (
      <>
        <label htmlFor="username-details" className="label-elememt">
          USERNAME
        </label>
        <input
          type="text"
          className="username"
          id="username-details"
          placeholder="Username"
          value={username}
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  renderUserPassword = () => {
    const {password} = this.state
    return (
      <>
        <label htmlFor="username" className="label-elememt">
          PASSWORD
        </label>
        <input
          type="password"
          id="username"
          className="username"
          placeholder="password"
          value={password}
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  render() {
    const {error} = this.state
    return (
      <div className="bg-login-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="website-login"
        />
        <form className="form-container" onSubmit={this.submitForm}>
          <div className="logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="website-logo"
            />
          </div>
          <div className="user-name-container">{this.renderUserName()}</div>
          <div className="user-name-container">{this.renderUserPassword()}</div>
          <button type="submit" className="submit-button">
            Login
          </button>
          {error ? (
            <p className="error">*Username and Password didn't match</p>
          ) : (
            ''
          )}
        </form>
      </div>
    )
  }
}

export default LoginForm
