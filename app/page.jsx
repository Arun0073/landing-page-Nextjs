import Navbar from '@/Components/Navbar'
import Header from '@/Components/Header'
import React from 'react'
import Main from '@/Components/Main'
import Project from '@/Components/Project'
import Discuss from '@/Components/Discuss'
import Application from '@/Components/Application'
import Team from '@/Components/Team'
import FAQ from '@/Components/FAQ'
import Footer from '@/Components/Footer'

const page = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Main/>
      <Project/>
      <Discuss/>
      <Application/>
      <Team/>
      <FAQ/>
      <Footer/>
    </div>
  )
}

export default page
