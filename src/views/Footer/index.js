import React from 'react'
import SocialBar from '../SocialBar'
import Storage from '../../core/Storage'
import './style.css'


class Footer extends React.Component {
  constructor() {
    super()
    this.state = {}
  }


  render(){
    return (
      <div
        className="app-footer"
        style={{
          background: Storage.gradient
        }}
      >
        this is the footer component....

        <SocialBar
          style={{
            filter: 'invert(1)'
          }}
          opacity={0.8}
        />
      </div>
    )
  }

}

export default Footer
