import React from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Banner from '../components/Banner'
import About from '../components/About'
import Products from '../components/Products'
import Footer from '../components/Footer'
import Cover from '../components/Cover'

export default function Home() {
  return (
    <Layout>
      <Header />
      <Banner />
      <About />
      <Products />
      <Cover />
      <Footer />
    </Layout>
  )
}

