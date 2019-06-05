import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Menu } from 'antd'

@withRouter
class Navigator extends Component {
  state = {
    currentPage: '/'
  }

  componentDidMount () {
    const { props: { routes, route404, history } } = this
    const { pathname } = history.location
    if ( pathname === route404.path || !routes.some(route => route.path === pathname)) {
      this.setState({ currentPage: route404.path })
      history.push(route404.path)
    } else {
      this.setState({ currentPage: pathname })
    }
  }

  setSelectedMenu = ({ key }) => {
    this.setState({ currentPage: key })
    this.props.history.push(key)
  }

  render () {
    const {
      props: { routes, route404 },
      state: { currentPage }
    } = this
    return (
      <Menu
        onClick={this.setSelectedMenu}
        selectedKeys={[currentPage]}
        mode='horizontal'
      >
        {
          routes.map((route) => (
            <Menu.Item key={route.path}>
              {route.name}
            </Menu.Item>
          ))
        }
        <Menu.Item key={route404.path}>
          404 Not Found
        </Menu.Item>
      </Menu>
    )
  }
}

export default Navigator
