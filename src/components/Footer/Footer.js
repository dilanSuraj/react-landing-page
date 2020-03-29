import React from 'react'
import { Col } from 'react-flexbox-grid'

import "./Footer.css"

const Footer = () => (
  <footer>
    <Col xs={12} sm={12} md={12} lg={12}>
      <div className="footer-logo">
        <p>© 2018</p>
      </div>

      <div className="footer-team">
        <p>Réalisé par l'équipe <span>Theke.</span></p>
      </div>
    </Col>
  </footer>
)

export default Footer
