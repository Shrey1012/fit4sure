import React from 'react'
import {Hero, Features, Stories, Steps, Qna, Download, Faq, Queries, Milestone, Blogs, Navbar, Footer} from '../components'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Features/>
    <Qna/>
    <Steps/>
    <Milestone/>
    <Download/>
    <Stories/>
    <Blogs/>
    <Faq/>
    <Queries/>
    <Footer/>
    </>
  )
}

export default Home