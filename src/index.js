import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import shopifyCollectionWrapper from './core/ShopifyCollectionWrapper'
import Storage from './core/Storage'
import fancyCssGradient from './views/Tools/fancyCssGradient'


// console.log('process.env.', process.env)

async function init(){
  Storage.gradient = fancyCssGradient()
  await shopifyCollectionWrapper.fetchCollections()

  ReactDOM.render(<App />, document.getElementById('root'))
}

init()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
