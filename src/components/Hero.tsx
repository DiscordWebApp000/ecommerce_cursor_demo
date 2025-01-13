'use client'

import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/translations'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Hero() {
  const { language } = useLanguage()
  const t = translations[language]
  const [currentSlide, setCurrentSlide] = useState(0)

  const slideImages = [
    'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3'
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Slides */}
      {t.hero.slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={slideImages[index]}
              alt={slide.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 transform translate-y-[-20px] opacity-0 animate-slideUp">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 mb-8 transform translate-y-[-20px] opacity-0 animate-slideUp animation-delay-200">
                  {slide.subtitle}
                </p>
                <div className="flex gap-4 transform translate-y-[-20px] opacity-0 animate-slideUp animation-delay-400">
                  <button className="px-8 py-4 bg-white text-black font-semibold rounded hover:bg-gray-100 transition duration-300">
                    {t.cta.shop}
                  </button>
                  <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded hover:bg-white/10 transition duration-300">
                    {t.cta.collection}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slide Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
        {t.hero.slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-white w-8' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  )
} 