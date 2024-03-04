import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    const {username, password} = this.state

    // Store username and password in local storage
    localStorage.setItem('username', username)
    localStorage.setItem('password', password)

    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = event => {
    event.preventDefault() // Prevent default form submission

    const {username, password} = this.state

    if (username && password) {
      // Check if both fields are not empty
      this.onSubmitSuccess()
    } else {
      this.onSubmitFailure('**Username and password are required.')
    }
  }

  renderPasswordField = () => {
    const {password} = this.state

    return (
      <>
        <input
          type="password"
          id="password"
          className="username-input-field"
          value={password}
          onChange={this.onChangePassword}
          placeholder="Password"
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state

    return (
      <>
        <input
          type="text"
          id="username"
          className="username-input-field"
          value={username}
          onChange={this.onChangeUsername}
          placeholder="E-mail"
        />
      </>
    )
  }

  render() {
    const {showSubmitError, errorMsg} = this.state

    return (
      <div className="login-form-container">
        <form className="form-container" onSubmit={this.submitForm}>
          <img
            src="https://res.cloudinary.com/dpc6omn5w/image/upload/f_auto,q_auto/jwpvlzov5epzlldleoli"
            className="login-website-logo-desktop-img"
            alt="website logo"
          />
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <button type="submit" className="login-button">
            Login
          </button>
          <h3 className="forgot">Forgot Password?</h3>
          {showSubmitError && <p className="error-message">{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default LoginForm
