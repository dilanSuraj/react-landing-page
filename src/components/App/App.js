import React from 'react'
import { Grid } from 'react-flexbox-grid'

import Header from "../Header/Header"
import Banner from "../Banner/Banner"
import Footer from "../Footer/Footer"

import "./App.css"

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Grid fluid>

          <Header />

          <Banner />

          <Footer />

        </Grid>
      </div>
    )
  }
}

export default App
