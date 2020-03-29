import React from 'react'
import { Col } from 'react-flexbox-grid'

import logo from "./img/logo.svg"

import "./Header.css"

class Header extends React.Component {
  render() {
    return (
      <header>
        <Col xs={12} sm={12} md={12} lg={12}>
          <div className="header-logo">
            <a href="/">
              <img src={logo} width="60" alt="Logo Theke.fr"/>
            </a>
          </div>

          <div className="social-network">
            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/theke_fr">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </Col>
			</header>
    )
  }
}

export default Header
