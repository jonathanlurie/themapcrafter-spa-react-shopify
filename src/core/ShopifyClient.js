import ShopifyBuy from '@shopify/buy-button-js'
import Storage from './Storage'

const ShopifyClient = ShopifyBuy.buildClient({
  domain: process.env.REACT_APP_SHOPIFY_DOMAIN,
  storefrontAccessToken: process.env.REACT_APP_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
})

const ShopifyUi = ShopifyBuy.UI.init(ShopifyClient)


Storage.shopifyDisplayOptions = {

  "toggle": {
    styles: {
      toggle: {
        'background': '#000',
        'color': '#ffffff',
        'font-size': '1.5em',
        ':hover': {
          'background': '#525252'
        },
        ':focus': {
          'background': '#525252'
        }
      }
    },
  },

  "cart": {
    styles: {
      button: {
        'background': '#000',
        'color': '#ffffff',
        'font-size': '1.5em',
        ':hover': {
          'background': '#525252'
        },
        ':focus': {
          'background': '#525252'
        }
      }
    },
  },





  product: {
    // iframe: false,
    buttonDestination: 'modal', // opens a modal with full description

    // the order of things
    // order : [
    //   'title',
    //   'variantTitle',
    //   'img',
    //   'price',
    //   'options',
    //   'description',
    //   'quantity',
    //   'button',
    // ],

    // the display or hiding of things
    contents: {
      options: false,
    },

    // the text
    text: {
      button: 'Show product'
    },

    // custom style
    styles: {
      title: {
        color: '#adadad',
        "font-family": "'Helvetica Neue', sans-serif",
        "font-weight": "200",
        "text-transform": "uppercase",
        "font-style": "italic",
        "letter-spacing": "0.2em",
      },
      button: {
        'background': '#000',
        'color': '#ffffff',
        'font-size': '1.5em',
        ':hover': {
          'background': '#525252'
        },
        ':focus': {
          'background': '#525252'
        }
      }
    },


  },
}


export { ShopifyClient, ShopifyUi }
