import Image from 'next/image'

const About = () => {
  return (
    <section className='h-[85%] w-full md:h-1/2' id='about-section'>
      <div className='container mx-auto h-full max-w-7xl py-24'>
        <div className='grid h-full grid-rows-2 md:grid-cols-3'>
          <div className='row-span-2 h-full md:col-span-2'>
            <div className='flex h-full items-center'>
              <div className='flex flex-col items-start'>
                <div className='mb-6 space-y-2'>
                  <span className='font-semibold text-gray-300'>ABOUT</span>
                  <h2 className='text-3xl text-zinc-900 md:text-4xl'>
                    We Are RPL Laboratorium <br /> Community in UNESA
                  </h2>
                </div>
                <p className='w-full text-sm text-muted-foreground md:w-[56vw] md:text-base lg:w-[40vw]'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
              </div>
            </div>
          </div>
          <div className='row-span-2'>
            <div className='flex h-full items-center'>
              <Image
                src='/assets/about_img2.jpg'
                alt='About Image'
                width={400}
                priority
                quality={100}
                height={400}
                className='h-[85%] w-full rounded-xl object-cover md:h-full lg:h-[80%]'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
