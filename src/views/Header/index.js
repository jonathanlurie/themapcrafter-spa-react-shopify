import React from 'react'
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
          className="top-line"
          style={{
            background: Storage.gradient
          }}
        />

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

        <div
          className="separator"
          style={{
            background: Storage.gradient
          }}
        />

      </div>
    )
  }

}

export default Header
