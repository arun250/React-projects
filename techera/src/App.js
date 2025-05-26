import {React, Switch, Route} from 'react-router-dom'

import CourseItemDetail from './components/CourseItemDetail'

import Home from './components/Home'

import Header from './components/Header'

import NotFound from './components/NotFound'

import './App.css'

// Replace your code here
const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/courses/:id" component={CourseItemDetail} />
      <Route path="/bad-path" component={NotFound} />
    </Switch>
  </>
)

export default App
