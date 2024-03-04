import {Link, Redirect} from 'react-router-dom'
import {FaHome} from 'react-icons/fa'
import {IoPerson} from 'react-icons/io5'

import './index.css'

const Home = () => {
  const isLoggedIn =
    localStorage.getItem('username') && localStorage.getItem('password')

  // If user is not logged in, redirect to login page
  if (!isLoggedIn) {
    return <Redirect to="/login" />
  }
  return (
    <div className="home-bg">
      <div className="img-bg">
        <img
          src="https://res.cloudinary.com/dpc6omn5w/image/upload/f_auto,q_auto/iwt1cjenn7om5rdzbbcg"
          alt="callUser"
          className="caller-img"
        />
      </div>
      <p className="logo-num">4</p>
      <div className="logo-bg">
        <img
          src="https://res.cloudinary.com/dpc6omn5w/image/upload/f_auto,q_auto/wko3slnes8rwwoj8henb"
          alt="logo"
          className="logo-img"
        />
      </div>
      <div className="heading-bg">
        <h3 className="heading">Employee Productivity DashBoard</h3>
      </div>
      <div className="productivity-bg">
        <div className="productivity-card">
          <div className="productivity-item">
            <p>Productivity on Monday</p>
            <p>4%</p>
          </div>
          <div className="percentage1">4</div>
        </div>
        <div className="productivity-card">
          <div className="productivity-item">
            <p>Productivity on Tuesday</p>
            <p>92%</p>
          </div>
          <div className="percentage2">92</div>
        </div>
        <div className="productivity-card">
          <div className="productivity-item">
            <p>Productivity on Wednesday</p>
            <p>122%</p>
          </div>
          <div className="percentage3">122</div>
        </div>
        <div className="productivity-card">
          <div className="productivity-item">
            <p>Productivity on Thursday</p>
            <p>93%</p>
          </div>
          <div className="percentage4">93</div>
        </div>
        <div className="productivity-card">
          <div className="productivity-item">
            <p>Productivity on Friday</p>
            <p>89%</p>
          </div>
          <div className="percentage5">89</div>
        </div>
        <div className="productivity-card">
          <div className="productivity-item">
            <p>Productivity on Saturday</p>
            <p>98%</p>
          </div>
          <div className="percentage6">98</div>
        </div>
      </div>
      <div className="nav-bg">
        <Link to="/" className="nav-link">
          <FaHome className="icon" />
        </Link>
        <Link to="/dashboard" className="nav-link">
          <IoPerson className="icon" />
        </Link>
      </div>
    </div>
  )
}

export default Home
