import React from 'react';
import Product from '../Product'
import './style.css'


class Collection extends React.Component {
  constructor() {
    super()
    this.state = {}
  }


  render(){
    let collection = this.props.collectionInstance
    console.log('collection', collection)

    let products = collection.products.map(p => <Product key={p.id} product={p}/>)

    return (
      <div className="app-collection">

        <div className="collection-title">
          {collection.title}
        </div>


        <div className="product-display">
          {products}
        </div>

      </div>
    )
  }

}

export default Collection
