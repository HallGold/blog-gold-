import { lazy } from 'react'
import { Redirect } from 'react-router-dom'
/**
 * 第一级路由负责最外层的路由渲染
 * path 路由
 * component 组件 lazy懒加载的形势
 */

const routes = [
  {
    path: '/',
    name: 'home',
    component: lazy(() => import('../layout')),
    children: [
      // 默认显示首页
      {
        path: '/',
        exact: true,
        render: () => {
          return <Redirect to={'/index'}></Redirect>
        },
      },
      {
        path: '/index',
        name: 'home',
        component: lazy(() => import('../pages/Home')),
      },
      {
        path: '/about',
        name: 'about',
        component: lazy(() => import('../pages/About')),
      },
      {
        path: '/archive',
        name: 'archive',
        component: lazy(() => import('../pages/Archive')),
      },
      {
        path: '*',
        name: '404',
        auth: false,
        component: lazy(() => import('../pages/404')),
      },
    ],
  },
]

export default routes
