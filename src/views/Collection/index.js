import React from 'react';
import './style.css'


class Collection extends React.Component {
  constructor() {
    super()
    this.state = {}
  }


  render(){
    let collection = this.props.collectionInstance
    return (
      <div className="app-collection">
        {collection.title}
      </div>
    )
  }

}

export default Collection
