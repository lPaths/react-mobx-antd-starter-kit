import App from '../components/App'
import UserManagement from '../components/UserManagement'

export const routes = [
  {
    path: '/',
    exact: true,
    component: App
  },
  {
    path: '/users',
    exact: true,
    component: UserManagement
  }
]