'use client'

import Image from 'next/image'

const stats = [
  { label: 'Years of Experience', value: '5+' },
  { label: 'Products Sold', value: '50K+' },
  { label: 'Happy Customers', value: '10K+' },
  { label: 'Countries Reached', value: '25+' }
]

const team = [
  {
    name: 'John Smith',
    position: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3',
    bio: 'Fashion enthusiast with 10+ years of industry experience'
  },
  {
    name: 'Sarah Johnson',
    position: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3',
    bio: 'Award-winning designer passionate about sustainable fashion'
  },
  {
    name: 'David Chen',
    position: 'Head of Production',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3',
    bio: 'Expert in sustainable manufacturing processes'
  }
]

const values = [
  {
    title: 'Quality',
    description: 'We use only the finest materials and craftsmanship',
    icon: '✨'
  },
  {
    title: 'Sustainability',
    description: 'Committed to eco-friendly practices and materials',
    icon: '🌱'
  },
  {
    title: 'Innovation',
    description: 'Constantly evolving and improving our designs',
    icon: '💡'
  },
  {
    title: 'Community',
    description: 'Building strong relationships with our customers',
    icon: '🤝'
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      {/* Hero Section */}
      <div className="relative h-[50vh] bg-black">
        <Image
          src="https://images.unsplash.com/photo-1606787364406-a3cdf06c6d0c?ixlib=rb-4.0.3"
          alt="About Us"
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center max-w-3xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Story</h1>
            <p className="text-xl text-gray-200">
              Creating premium sweatshirts with a focus on quality, comfort, and style since 2019
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Story Section */}
      <div className="bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3"
                alt="Our Workshop"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Our Journey</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Started in a small workshop with a passion for creating the perfect sweatshirt, 
                we've grown into a brand that represents quality, comfort, and style. Our commitment 
                to sustainable practices and premium materials has earned us the trust of customers worldwide.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Every piece we create is a testament to our dedication to craftsmanship and attention 
                to detail. We believe in creating products that not only look good but feel good to wear 
                and are good for the planet.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold mb-2">{value.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-blue-600 mb-2">{member.position}</p>
                <p className="text-gray-600 dark:text-gray-300">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 