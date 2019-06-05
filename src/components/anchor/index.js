import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Affix, Popover, Button, Row } from 'antd'

@withRouter
class AnchorButton extends Component {
  state = {
    current: 'fire'
  }

  componentDidMount () {
    const { props: { routes, route404, history } } = this
    const { pathname } = history.location
    if (pathname === route404.path || !routes.some(route => route.path === pathname)) {
      this.setState({ current: route404.icon })
      history.push(route404.path)
    } else {
      this.setState({ current: routes.filter(route => route.path === pathname)[0].icon })
    }
  }

  render () {
    const {
      props: { routes, route404, history },
      state: { current }
    } = this
    return (
      <Affix style={{...cssModule.affix}}>
        <Popover
          placement='topRight'
          content={(
            <>
              {
                routes.map((route, index) => (
                  <Row key={index.toString()} style={{...cssModule.popoverRow}}>
                    <Button
                      block
                      icon={route.icon}
                      onClick={() => {
                        this.setState({ current: route.icon })
                        history.push(route.path)
                      }}
                    >
                      {route.name}
                    </Button>
                  </Row>
                ))
              }
              <Row style={{...cssModule.popoverRow}}>
                <Button
                  type='danger'
                  block
                  icon={route404.icon}
                  onClick={() => {
                    this.setState({ current: route404.icon })
                    history.push(route404.path)
                  }}
                >
                  {route404.name}
                </Button>
              </Row>
            </>
          )}
        >
          <Button type={current !== 'frown' ? 'primary' : 'danger'} icon={current} />
        </Popover>
      </Affix>
    )
  }
}

const cssModule = {
  affix: {
    position: 'absolute',
    bottom: 10,
    right: 10
  },
  popoverRow: {
    margin: '3px 0'
  }
}

export default AnchorButton