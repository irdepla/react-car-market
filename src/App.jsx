import { useState } from 'react'
import './App.css'
import './index.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Rentcar from './components/Rentcar';
import Card from './components/Card';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Navbar />
      <main className=' bg-[#F6F7F9] pt-[31px]'>
      <Hero />
      <Rentcar />
      <Card />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App;
