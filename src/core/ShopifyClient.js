import ShopifyBuy from '@shopify/buy-button-js'
import ComponentDefault from '@shopify/buy-button-js/src/defaults/components.js'
import Storage from './Storage'

console.log("ComponentDefault", ComponentDefault)

const ShopifyClient = ShopifyBuy.buildClient({
  domain: process.env.REACT_APP_SHOPIFY_DOMAIN,
  storefrontAccessToken: process.env.REACT_APP_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
})

const ShopifyUi = ShopifyBuy.UI.init(ShopifyClient)


// check all the default values at:
// https://github.com/Shopify/buy-button-js/blob/master/src/defaults/components.js
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


  modalProduct: {
    width: '1500px',
    contents: {
      imgWithCarousel: true,
      img: false
    }
  },

  product: {
    buttonDestination: 'modal', // opens a modal with full description

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
