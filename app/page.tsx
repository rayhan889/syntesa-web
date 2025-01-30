import Hero from '@/components/sections/Hero'

export default function Home() {
  return (
    <div className='h-[100vh] overflow-y-auto overflow-x-hidden'>
      <Hero />

      <section className='h-1/2 w-full border-b border-b-muted-foreground bg-red-200'>
        <div className='container mx-auto h-full max-w-7xl py-24'>
          Another Section
        </div>
      </section>

      <section className='h-1/2 w-full border-b border-b-muted-foreground bg-red-200'>
        <div className='container mx-auto h-full max-w-7xl py-24'>
          Another Section
        </div>
      </section>
    </div>
  )
}
