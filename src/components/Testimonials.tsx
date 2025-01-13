'use client'

import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/translations'
import Image from 'next/image'

export default function Testimonials() {
  const { language } = useLanguage()
  const t = translations[language]

  const testimonialImages = [
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3'
  ]

  return (
    <section className="py-20 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-600 dark:from-white dark:to-gray-400 mb-4">
            {t.testimonials.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-black to-gray-600 dark:from-white dark:to-gray-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.testimonials.items.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500"
            >
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5 dark:opacity-10">
                <div className="absolute inset-0 bg-gradient-to-br from-black to-transparent"></div>
                <div className="h-full w-full bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.1)_0%,transparent_50%)]"></div>
              </div>

              <div className="relative p-8">
                {/* Quote icon */}
                <div className="absolute top-4 right-4 text-4xl opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  "
                </div>

                {/* Author image */}
                <div className="relative">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-black/5 dark:ring-white/5 transform group-hover:scale-105 transition duration-300">
                    <Image
                      src={testimonialImages[index]}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-600 dark:text-gray-300 italic mb-6 relative">
                  "{testimonial.quote}"
                </p>

                {/* Author info */}
                <div className="text-center">
                  <p className="font-semibold text-gray-900 dark:text-white text-lg">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.position}
                  </p>
                </div>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/0 to-black/0 group-hover:from-black/5 group-hover:to-black/10 dark:group-hover:from-white/5 dark:group-hover:to-white/10 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 