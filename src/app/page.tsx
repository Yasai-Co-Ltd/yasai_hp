import Image from 'next/image'
import Hero from '@/components/sections/Hero'
import Intro from '@/components/sections/Intro'
import Services from '@/components/sections/Services'
import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Services />
      <About />
      <Contact />
    </>
  )
}
