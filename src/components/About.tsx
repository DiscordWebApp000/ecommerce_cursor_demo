'use client'

import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/translations'
import Image from 'next/image'

export default function About() {
  const { language } = useLanguage()
  const t = translations[language]

  const features = [
    { icon: '💡', title: t.feature1 },
    { icon: '♻️', title: t.feature2 },
    { icon: '👕', title: t.feature3 },
    { icon: '🎨', title: t.feature4 },
  ]

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-black dark:text-white mb-12">
          Our Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg text-center"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-800 dark:text-gray-300">
                {t.featureDescriptions[index]}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative h-[600px] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3"
              alt="Sustainable Manufacturing"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-black dark:text-white">
              {t.about}
            </h2>
            <p className="text-xl text-gray-800 dark:text-gray-300">
              {t.aboutText}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="text-3xl font-bold text-black dark:text-white mb-2">10K+</div>
            <p className="text-gray-800 dark:text-gray-300">{t.stats.clients}</p>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-black dark:text-white mb-2">25+</div>
            <p className="text-gray-800 dark:text-gray-300">{t.stats.countries}</p>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-black dark:text-white mb-2">98%</div>
            <p className="text-gray-800 dark:text-gray-300">{t.stats.satisfaction}</p>
          </div>
        </div>
      </div>
    </section>
  )
} 