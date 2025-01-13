'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaPinterest, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { SiVisa, SiMastercard, SiPaypal, SiApplepay } from 'react-icons/si'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/translations'

export default function Footer() {
  const [copySuccess, setCopySuccess] = useState<string | null>(null)
  const { language } = useLanguage()
  const t = translations[language]

  const contactInfo = {
    phone: '+90 (555) 123 4567',
    email: 'contact@urbanstyle.com',
    address: '123 Fashion Street, Istanbul, Turkey'
  }

  const handleCopy = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopySuccess(type)
      setTimeout(() => setCopySuccess(null), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <footer className="bg-white dark:bg-gray-900">
      {/* Contact Quick Access */}
      <div className="border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <button
              onClick={() => handleCopy(contactInfo.phone, 'phone')}
              className="group relative flex items-center justify-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300"
            >
              <FaPhone className="text-blue-600 dark:text-blue-400 text-xl" />
              <span className="text-gray-700 dark:text-gray-200">{contactInfo.phone}</span>
              <span
                className={`absolute -top-2 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-blue-600 text-white text-sm rounded-full transition-opacity duration-300 ${
                  copySuccess === 'phone' ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {t.footer.copied}
              </span>
            </button>

            <button
              onClick={() => handleCopy(contactInfo.email, 'email')}
              className="group relative flex items-center justify-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300"
            >
              <FaEnvelope className="text-blue-600 dark:text-blue-400 text-xl" />
              <span className="text-gray-700 dark:text-gray-200">{contactInfo.email}</span>
              <span
                className={`absolute -top-2 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-blue-600 text-white text-sm rounded-full transition-opacity duration-300 ${
                  copySuccess === 'email' ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {t.footer.copied}
              </span>
            </button>

            <button
              onClick={() => handleCopy(contactInfo.address, 'address')}
              className="group relative flex items-center justify-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300"
            >
              <FaMapMarkerAlt className="text-blue-600 dark:text-blue-400 text-xl" />
              <span className="text-gray-700 dark:text-gray-200">{contactInfo.address}</span>
              <span
                className={`absolute -top-2 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-blue-600 text-white text-sm rounded-full transition-opacity duration-300 ${
                  copySuccess === 'address' ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {t.footer.copied}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-gray-900 dark:text-white text-2xl font-bold mb-3">
              {t.footer.newsletter.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-200 mb-6">
              {t.footer.newsletter.description}
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder={t.footer.newsletter.placeholder}
                className="flex-1 px-6 py-3 rounded-full border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              />
              <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors duration-300">
                {t.footer.newsletter.button}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="space-y-4">
              <h4 className="text-gray-900 dark:text-white text-lg font-bold mb-4">Urban Style</h4>
              <p className="text-gray-700 dark:text-gray-200">
                {t.aboutText}
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                  <FaFacebook size={24} />
                </a>
                <a href="#" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                  <FaTwitter size={24} />
                </a>
                <a href="#" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                  <FaInstagram size={24} />
                </a>
                <a href="#" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                  <FaYoutube size={24} />
                </a>
                <a href="#" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                  <FaPinterest size={24} />
                </a>
              </div>
            </div>

            {/* Shop */}
            <div>
              <h4 className="text-gray-900 dark:text-white text-lg font-bold mb-4">{t.footer.sections.shop}</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/collections" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                    {t.footer.links.collections}
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                    {t.footer.links.allProducts}
                  </Link>
                </li>
                <li>
                  <Link href="/products?category=Hoodies" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                    {t.footer.links.hoodies}
                  </Link>
                </li>
                <li>
                  <Link href="/products?category=Crewnecks" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                    {t.footer.links.crewnecks}
                  </Link>
                </li>
                <li>
                  <Link href="/products?isNew=true" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                    {t.footer.links.newArrivals}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Help */}
            <div>
              <h4 className="text-gray-900 dark:text-white text-lg font-bold mb-4">{t.footer.sections.help}</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/contact" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                    {t.footer.links.contactUs}
                  </Link>
                </li>
                <li>
                  <Link href="/shipping" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                    {t.footer.links.shipping}
                  </Link>
                </li>
                <li>
                  <Link href="/returns" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                    {t.footer.links.returns}
                  </Link>
                </li>
                <li>
                  <Link href="/size-guide" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                    {t.footer.links.sizeGuide}
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                    {t.footer.links.faq}
                  </Link>
                </li>
              </ul>
            </div>

            {/* About */}
            <div>
              <h4 className="text-gray-900 dark:text-white text-lg font-bold mb-4">{t.footer.sections.about}</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                    {t.footer.links.ourStory}
                  </Link>
                </li>
                <li>
                  <Link href="/sustainability" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                    {t.footer.links.sustainability}
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                    {t.footer.links.careers}
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                    {t.footer.privacy}
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                    {t.footer.terms}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-700 dark:text-gray-200 text-sm">
              © 2024 Urban Style. {t.footer.rights}
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <SiVisa className="h-8 w-8 text-gray-700 dark:text-gray-200" />
              <SiMastercard className="h-8 w-8 text-gray-700 dark:text-gray-200" />
              <SiPaypal className="h-8 w-8 text-gray-700 dark:text-gray-200" />
              <SiApplepay className="h-8 w-8 text-gray-700 dark:text-gray-200" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 