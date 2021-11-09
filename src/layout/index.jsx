import React from 'react'
import Header from './Header'
import { renderRoutes } from 'react-router-config'

const Layout = (props) => {
  const { children } = props.route
  return (
    <>
      <Header></Header>
      {/* 子级路由 */}
      {renderRoutes(children, { content: '@@@' })}
    </>
  )
}

export default Layout
