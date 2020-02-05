import React from 'react';
import './style.css'


class Product extends React.Component {
  constructor() {
    super()
    this.state = {}
    this.mountingDiv = null
  }

  componentDidMount() {

  }

  render(){
    return (
      <div
        className="app-product"
        ref={el => this.mountingDiv = el}
      >
        this is the product component
      </div>
    )
  }

}

export default Product
