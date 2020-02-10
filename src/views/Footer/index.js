import React from 'react'
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
        this is the footer component
      </div>
    )
  }

}

export default Footer
