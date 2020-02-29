import React from 'react'
import SocialBar from '../SocialBar'
import Storage from '../../core/Storage'
import './style.css'


class Header extends React.Component {
  constructor() {
    super()
    this.state = {}
  }


  render(){
    return (
      <div
        className="app-header"
      >
        <div
          className="title"
          style={{
            background: Storage.gradient
          }}
        >
        the<br/>
        map<br/>
        crafter
        </div>
        <SocialBar
          style={{
            padding: '10px',
            left: 0,
            right: 0,
            margin: 'auto'
          }}
          opacity={0.2}
        />
      </div>
    )
  }

}

export default Header
