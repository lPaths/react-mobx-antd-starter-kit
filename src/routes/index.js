import App from '../components/App'
import UserManagement from '../components/UserManagement'
import NotFound from '../components/404/index'

export const routes = [
  {
    name: 'Main Page',
    icon: 'control',
    path: '/',
    exact: true,
    component: App
  },
  {
    name: 'User Management',
    icon: 'container',
    path: '/users',
    exact: true,
    component: UserManagement
  }
]

export const route404 = {
  name: '404',
  icon: 'frown',
  path: '/invalidPath',
  component: NotFound
}