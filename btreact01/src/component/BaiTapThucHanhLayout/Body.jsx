import React, { Component } from 'react'
import Banner from './Banner.jsx'
import Item from './Item.jsx'

export default class Body extends Component {
    render() {
        return (
            <div className='row'>
                <div className='col-12'>    
                    <Banner />
                </div>
                <div className='container px-lg-5'>
                    <Item />
                </div>
            </div>

        )
    }
}
