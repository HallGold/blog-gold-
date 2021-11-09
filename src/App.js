import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Loading from '@/components/Loading'
import { renderRoutes } from 'react-router-config'
import './App.css'
import routes from './routes'

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Switch>{renderRoutes(routes)}</Switch>
      </Router>
    </Suspense>
  )
}

export default App
