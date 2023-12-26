import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Banner from './components/Banner'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Testemonials from './components/Testemonials'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='App bg-[#f2efe8] h-screen overflow-y-scroll'>
      <Header />
      <Hero />
      <Banner />
      <Services />
      <Portfolio />
      <Testemonials />
      <Footer />
    </div>
  )
}

export default App
