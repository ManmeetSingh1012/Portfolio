import { useState } from 'react'

import './App.css'
import Header from './components/header'
import Hero from './components/hero'
import About from './components/about'
import Skills from './components/skills'
import Project from './components/Projects'
import Contact from './components/contact'
import Footer from './components/footer'


import { BrowserRouter } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div className='w-full font-Inter px-20 py-7 text-base mx-auto'>


        <Header />

        <section id='hero'>
          <Hero />
        </section>


        <section id='about'>
          <About />
        </section>




        <section id='skills'>
          <Skills />
        </section>



        <section id='project'>
          <Project />
        </section>



        <section id='contact'>
          <Contact />
        </section>


        <Footer />



      </div>
    </BrowserRouter>
  )
}

export default App
