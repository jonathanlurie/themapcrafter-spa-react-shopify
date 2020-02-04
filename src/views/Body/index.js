import React from 'react'
import shopifyCollectionWrapper from '../../core/ShopifyCollectionWrapper'
import Menu from '../Menu'
import Header from '../Header'
import Collection from '../Collection'
import Footer from '../Footer'
import './style.css'


class Body extends React.Component {
  constructor() {
    super()
    this.state = {}
  }


  render(){

    let collections = shopifyCollectionWrapper.getCollections()
      .map(c => <Collection collectionInstance={c} key={c.id}/>)

    return (
      <div className="app-body">
        <Menu/>
        <Header/>
        {collections}
        <Footer/>
      </div>
    )
  }

}

export default Body
