import React, { Component } from 'react'
import logo from '../logo.svg'
import HeadNav from '../components/HeadNav'
import HomeHeader from '../components/HomeHeader'
import ClubList from '../components/ClubList'
import OneLineNotice from '../components/OneLineNotice'
import './Home.css'

class Home extends Component {
  render () {
    return (
      <div className="App">
        <HeadNav/>
        <HomeHeader/>
        <OneLineNotice/>
        <p className="App-intro">
          i213
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ClubList/>
      </div>
    )
  }
}

export default Home
