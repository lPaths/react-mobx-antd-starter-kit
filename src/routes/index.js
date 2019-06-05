import App from '../components/App'
import UserManagement from '../components/UserManagement'
import NotFound from '../components/404'

export const routes = [
  {
    name: 'Main Page',
    path: '/',
    exact: true,
    component: App
  },
  {
    name: 'User Management',
    path: '/users',
    exact: true,
    component: UserManagement
  }
]

export const route404 = {
  name: '404',
  path: '/invalidPath',
  component: NotFound
}