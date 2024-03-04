import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import LoginForm from './components/LoginPage'
import Home from './components/Home'
import Dashboard from './components/Dashboard'

import './App.css'

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/" component={Home} />
      <Route exact path="/dashboard" component={Dashboard} />
    </Switch>
  </Router>
)
export default App
