import React from 'react'
import { Col, Row } from 'react-flexbox-grid'

import books from "./img/books.svg"

import "./Banner.css"

const Banner = () => (
  <section id="banner">
    <Row middle="xs">
      <Col xs={12} sm={12} md={6} lg={6}>
        <div className="title">
          <h1>Un autre oeil sur l’univers des -thèques</h1>

          <p>Veille, lecture, numérique, et partage, découvrez ce qui se passe
            dans ces tiers-lieux en pleine mutation.</p>

          {/* <a className="btn-send-invite" href="#">demander une invitation</a> */}
        </div>
      </Col>

      <Col xs={12} sm={12} md={6} lg={6}>
        <div className="illustration">
          <img src={books} alt="Illustration de Theke.fr"/>
        </div>
      </Col>
    </Row>
  </section>
)

export default Banner
