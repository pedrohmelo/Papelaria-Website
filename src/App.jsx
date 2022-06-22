import React from 'react'
import Header from './components/header/Header'
import Navigation from './components/navigation/Navigation'
import ImageBar from './components/imageBar/ImageBar'
import MaisVendidos from './components/maisVendidos/MaisVendidos'
import NovosProdutos from './components/novosProdutos/NovosProdutos'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
      <Header/>
      <Navigation/>
      <ImageBar/>
      <MaisVendidos/>
      <NovosProdutos/>
      <Footer/>
    </>
  )
}

export default App