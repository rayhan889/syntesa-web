'use client'

import { useInView } from 'react-intersection-observer'

import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Member from '@/components/sections/Member'
import Navbar from '@/components/Navbar'

export default function Home() {
  const [heroRef, heroRefInView] = useInView({ threshold: 0.5 })

  return (
    <>
      <Navbar isInViewRef={heroRefInView} />
      <div className='h-[100vh] overflow-y-auto overflow-x-hidden'>
        <Hero ref={heroRef} />

        <About />

        <Member />
      </div>
    </>
  )
}
