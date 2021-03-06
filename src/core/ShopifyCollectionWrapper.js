import { ShopifyClient } from './ShopifyClient'

class ShopifyCollectionWrapper {

  constructor(shopifyCollectionId){
    this._collectionIds = process.env.REACT_APP_SHOPIFY_COLLECTIONS
      .trim()
      .split(',')
      .map(shortId => {
        let cleanShortId = shortId.trim()

        // those are numbers
        if(isNaN(parseInt(cleanShortId))){
          return null
        }

        return `gid://shopify/Collection/${cleanShortId}`
      })
      .filter(id => id != null)

    this._collections = []
  }


  /**
   * Fetch the collections listed in the env var REACT_APP_SHOPIFY_COLLECTIONS
   * in the same order.
   * @return {Promise} the result is stored in this._collections
   */
  async fetchCollections(){
    let allCollections = await ShopifyClient.collection.fetchAllWithProducts()
    let collectionMap = {}

    allCollections.forEach(collection => {
      collectionMap[atob(collection.id)] = collection
    })

    this._collections = this._collectionIds
      .map(id => collectionMap[id])
      .filter(collection => collection !== undefined)
  }


  getNumberOfCollections(){
    return this._collections.length
  }

  getCollections(){
    return this._collections
  }

}

let shopifyCollectionWrapper = new ShopifyCollectionWrapper()
export default shopifyCollectionWrapper
