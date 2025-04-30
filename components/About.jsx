'use client'

import Image from 'next/image'

export default function About() {
  return (
    <main className="bg-[#C5C1BD] text-white">
      {/* Hero Section */}
      <section className="py-[50px] min-h-[60vh] flex flex-col items-center justify-center text-center">
        <h1 className="text-[54px] md:text-6xl font-bold leading-tight">
          <span className="text-[#8CA8AF]">About</span> Us
        </h1>
        <p className="text-lg md:text-2xl mt-4">
          Your home, your story — beautifully told.
        </p>
      </section>

      {/* About Section */}
      <section className="bg-white text-black px-6 md:px-16 py-20 max-w-7xl mx-auto space-y-16 rounded-t-lg">
        {/* Our Story */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/2">
            <Image
              src="/images/Rectangle925.png" 
              alt="Our Story"
              width={800}
              height={500}
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold text-[#51828D] mb-4">Our Story</h2>
            <p className="text-gray-700 leading-relaxed">
              At Home Decor, we believe a beautiful home is more than furniture —
              it's about stories, memories, and a space that reflects who you are.
              What started as a small boutique in Bengaluru has grown into a platform
              for curated, high-quality decor and furniture that blends aesthetics with purpose.
            </p>
          </div>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            {
              icon: 'ri-truck-line',
              title: 'Fast Delivery',
              desc: 'Reliable shipping across India within 3-5 business days.',
            },
            {
              icon: 'ri-shield-check-line',
              title: 'Trusted Quality',
              desc: 'Premium materials that last. All products hand-inspected.',
            },
            {
              icon: 'ri-customer-service-2-line',
              title: 'Customer First',
              desc: 'Our team is always here to help you 24/7.',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#EAE7E1] p-6 rounded-lg text-[#51828D] flex flex-col items-center"
            >
              <i className={`${item.icon} text-4xl mb-4`}></i>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-700 text-center">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="text-center max-w-3xl mx-auto mt-16">
          <h2 className="text-3xl font-bold text-[#51828D] mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            We aim to make thoughtful design accessible. Whether you’re refreshing a room
            or furnishing a new home, our mission is to inspire and guide you with
            timeless pieces that balance form, function, and sustainability.
          </p>
        </div>
      </section>
    </main>
  )
}
