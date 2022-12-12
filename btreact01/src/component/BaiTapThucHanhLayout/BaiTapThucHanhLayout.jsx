import React, { Component } from 'react'
import Header from "./Header.jsx"
import Body from './Body.jsx'
import Footer from './Footer.jsx'
export default class BaiTapThucHanhLayout extends Component {
  render() {
    return (
      <div>
        <h2>BaiTapThucHanhLayout</h2>
        <div className='row'>
            <div className='col-12'>
                <Header />
            </div>
            <div className='col-12'>
                <Body />
            </div>
            <div className='col-12'>
                <Footer />
            </div>
        </div>
      </div>
    )
  }
}
