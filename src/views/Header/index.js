import React from 'react'
import fancyCssGradient from '../Tools/fancyCssGradient'
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
        style={{
          background: fancyCssGradient()
        }}
      >
        <div className="title">
        the<br/>
        map<br/>
        crafter

        </div>
      </div>
    )
  }

}

export default Header
