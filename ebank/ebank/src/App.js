import {Route, Switch, Redirect} from 'react-router-dom'

import './App.css'

import Home from './Components/Home'

import NotFound from './Components/NotFound'

import LoginForm from './Components/LoginForm'

// Replace your code here
const App = () => (
  <>
    <Switch>
      <Route exact path="/ebank/login" component={LoginForm} />
      <Route exact path="/" component={Home} />
      <Route path="/bad-path" component={NotFound} />
    </Switch>
  </>
)

export default App
