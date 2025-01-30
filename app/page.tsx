import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Member from '@/components/sections/Member'

export default function Home() {
  return (
    <div className='h-[100vh] overflow-y-auto overflow-x-hidden'>
      <Hero />

      <About />

      <Member />
    </div>
  )
}
