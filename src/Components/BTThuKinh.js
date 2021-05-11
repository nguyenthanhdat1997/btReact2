import React, { Component } from 'react'
import BTContent from './BTContent'
import BTHeader from './BTHeader'
import '../StyleBTKinh/style.css'

export default class BTThuKinh extends Component {
    render() {
        return (
                <div>
                    <BTHeader />
                    <BTContent /> 
                </div>
                
           
        )
    }
}
