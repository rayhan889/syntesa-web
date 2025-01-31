'use client'

import { useState, useEffect } from 'react'

import Image from 'next/image'

const About = () => {
  const images = [
    {
      id: 1,
      src: 'about_img1.jpg'
    },
    {
      id: 2,
      src: 'about_img2.jpg'
    }
  ]

  const [imageIndex, setImageIndex] = useState<number>(0)
  const [isFading, setIsFading] = useState<boolean>(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true)

      setTimeout(() => {
        setImageIndex(prevIndex => (prevIndex + 1) % images.length)
        setIsFading(false)
      }, 500)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className='h-[85%] w-full md:h-1/2' id='about-section'>
      <div className='container mx-auto h-full max-w-7xl py-24'>
        <div className='grid h-full grid-rows-2 md:grid-cols-3'>
          <div className='row-span-2 h-full md:col-span-2'>
            <div className='flex h-full items-center justify-center'>
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
            <div className='flex h-full flex-col items-center justify-center space-y-3'>
              <Image
                src={`/assets/${images[imageIndex].src}`}
                alt='About Image'
                width={400}
                priority
                quality={100}
                height={400}
                className={`h-[65%] w-full rounded-xl object-cover transition-opacity duration-500 ease-in-out ${
                  isFading ? 'opacity-0' : 'opacity-100'
                } md:h-full lg:h-[80%]`}
              />
              <div className='flex w-full items-center justify-center gap-x-2'>
                {images.map(img => (
                  <span
                    key={img.id}
                    className={`h-2 w-2 rounded-full ${imageIndex === img.id - 1 ? 'bg-gray-500' : 'bg-gray-300'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
