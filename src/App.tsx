import './styles/main.sass'
import HeaderMKS from './components/HeaderMKS'
import FooterMKS from './components/FooterMKS'
import Product from './components/Product'
import ShoppingCart from './components/ShoppingCart'
import { useState } from 'react'

function App() {



  return (
    <div className="App">
      <HeaderMKS />
      <div className="box-product-grid">
        <Product caminhoImagem="../public/apple-watch.png" nomeProduto="Apple Watch Series 4 GPS" precoProduto={399} />

        <Product caminhoImagem="../public/jbl-speaker.png" nomeProduto="JBL Speaker" precoProduto={199} />

        <Product caminhoImagem="../public/iphone-x.png" nomeProduto="Apple iPhone X 128GB" precoProduto={899} />

        <Product caminhoImagem="../public/beats-headphones.png" nomeProduto="Beats Headphones" precoProduto={459} />

        <Product caminhoImagem="../public/macbook-pro.png" nomeProduto="Apple Macbook Pro" precoProduto={2.499} />

        <Product caminhoImagem="../public/ipad-pro.png" nomeProduto="Apple iPad Pro 64GB" precoProduto={899} />

        <Product caminhoImagem="../public/homepod.png" nomeProduto="Apple Homepod" precoProduto={399} />

        <Product caminhoImagem="../public/jlab-audio-wireless.png" nomeProduto="JBuds Air Wireless" precoProduto={249} />
      </div>
      <FooterMKS />
      <ShoppingCart />

    </div>
  )
}

export default App
