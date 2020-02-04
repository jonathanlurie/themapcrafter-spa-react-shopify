import ShopifyBuy from '@shopify/buy-button-js'

const ShopifyClient = ShopifyBuy.buildClient({
  domain: process.env.REACT_APP_SHOPIFY_DOMAIN,
  storefrontAccessToken: process.env.REACT_APP_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
})

const ShopifyUi = ShopifyBuy.UI.init(ShopifyClient)

console.log('ShopifyClient', ShopifyClient);
console.log('ShopifyUi', ShopifyUi);

export { ShopifyClient, ShopifyUi }
