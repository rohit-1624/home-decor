'use client'
import Image from 'next/image'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const Home = () => {
  return (
    <main className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="flex flex-col py-[100px] min-h-screen bg-cover bg-center bg-[url('/images/hero-bg.png')] justify-center items-center gap-5 text-center px-4">
        <h1 className="text-[40px] md:text-6xl font-bold text-white leading-tight">
          <span className="text-[#51828D]">Simplify</span> Your Space,<br />
          Beautify Your <span className="text-[#51828D]">Life</span>.
        </h1>
        <p className="text-white text-lg md:text-2xl">
          Unique Home Decor Collections at unbeatable prices. <br /> Shop stylish, live beautifully.
        </p>
        <i className="ri-search-line text-[30px] md:text-[40px] text-white"></i>
        <button className="mt-4 px-6 py-3 bg-[#8CA8AF] text-black rounded-lg text-lg font-semibold">
          Shop Now
        </button>

        {/* Features Card */}
        <div className="relative z-10 py-10 px-6 sm:px-8 md:px-[49px] mx-auto bg-[#EAE7E1] max-w-6xl flex flex-col md:flex-row gap-6 md:gap-[34px] text-[#51828D] justify-around items-center rounded-md mt-10">
          {[
            ['Free Shipping', 'Free shipping on orders above ₹999'],
            ['24/7 Customer Support', 'We care about our customers anytime'],
            ['Quality Products', 'Premium designs with long-lasting quality'],
          ].map(([title, desc], index) => (
            <div key={index} className="flex flex-col gap-2 items-center text-center">
              <h1 className="text-lg font-bold">{title}</h1>
              <p className="text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Best Selling Products */}
      <section className="w-full max-w-7xl mx-auto py-12 px-4 bg-white text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="col-span-1 sm:col-span-2 md:col-span-1 flex flex-col items-center gap-4">
            <h2 className="text-[#51828D] text-2xl font-bold leading-tight">
              Best Selling<br /><span className="text-black">Products</span>
            </h2>
            <p className="text-gray-700 text-sm max-w-xs">
              Discover our most-loved decor pieces—where elegance meets comfort.
            </p>
            <button className="mt-2 px-4 py-2 bg-gray-300 text-black rounded-lg text-sm font-semibold">
              Explore Now
            </button>
          </div>

          {/* Product Cards */}
          {[
            { src: "/images/product.png", title: "Wooden Accent Chair", price: "₹3,999" },
            { src: "/images/412670393_fbcb5734-2019-4045-9a34-6c17c4a3741e1.png", title: "Bohemian Wall Shelf", price: "₹1,299" },
            { src: "/images/midcentury-modern-walnut-wood-cabinet-with-books-decor1.png", title: "Mid-century Walnut Cabinet", price: "₹7,499" },
          ].map((product, idx) => (
            <div key={idx} className="flex flex-col items-center text-center gap-2">
              <Image src={product.src} alt={product.title} width={120} height={120} className="object-contain" />
              <h1 className="font-medium">{product.title}</h1>
              <label className="text-gray-600">{product.price}</label>
            </div>
          ))}
        </div>
      </section>

      {/* Room Types */}
      <section className="py-16 px-4 text-center bg-white">
        <h2 className="text-3xl font-semibold mb-2">Your Dream Space, <span className="text-[#51828D]">Just a Click Away</span></h2>
        <p className="text-gray-600 max-w-xl mx-auto text-sm md:text-base">
          Explore curated room styles that match your vibe—modern minimalism, rustic charm, or bold luxury.
        </p>
        <div className="grid sm:grid-cols-2 gap-6 mt-8 max-w-6xl mx-auto">
          {[
            "/images/Property1=Default.png",
            "/images/Property1=Default-2.png",
            "/images/Property1=Default-3.png",
            "/images/Property1=Default-1.png",
          ].map((src, i) => (
            <Image key={i} src={src} alt="Room Type" width={800} height={600} className="w-full rounded-md" />
          ))}
        </div>
      </section>

      {/* Product Highlight Section */}
      <section className="bg-gray-300 py-12 text-[#51828D] px-4 text-center">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-6">
            <div className="text-left">
              <h2 className="text-xl font-semibold">Chairs</h2>
              <p className="text-gray-600 mt-2 text-sm">Comfort meets style with our handcrafted accent chairs.</p>
              <button className="mt-2 text-blue-600 font-medium hover:underline">View More</button>
            </div>
            <Image
              src="/images/velvet-interior-classic-cushion-relax1.png"
              alt="Chairs"
              width={1200}
              height={500}
              className="rounded-lg w-full"
            />
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-red-600 mb-2">25% Off</h3>
              <h4 className="text-xl font-semibold mb-2">Sofas & Chairs</h4>
              <p className="text-gray-700 mb-4">Refresh your space for less</p>
              <button className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600">Get Discount</button>
            </div>
          </div>
          <div>
            <div className="text-left">
              <h2 className="text-xl font-semibold">Sofas</h2>
              <p className="text-gray-600 mt-2 text-sm">From sleek modern styles to plush classics, find your perfect sofa.</p>
              <button className="mt-2 text-blue-600 font-medium hover:underline">View More</button>
            </div>
            <Image
              src="/images/grey-comfortable-armchair-isolated-white-background-removebg-preview.png"
              alt="Sofas"
              width={800}
              height={500}
              className="rounded-lg w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        loop
        pagination={{ clickable: true }}
        className="text-center"
      >
        {[
          { name: "Taylor Koepp", img: "/images/Mask-group.png", review: "The wall shelf and table I ordered arrived on time and look fantastic in my living room. Great quality!" },
          { name: "Jane Doe", img: "/images/person-2.png", review: "Absolutely loved the collection. The chair I bought is so comfy and elegant. Highly recommend!" },
          { name: "Michael Smith", img: "/images/person-3.png", review: "Fast delivery and the product quality is beyond expectations. Will definitely order again." },
          { name: "Olivia Brown", img: "/images/person-4.png", review: "Beautiful products and very friendly support. My new home finally feels complete!" },
        ].map((item, index) => (
          <SwiperSlide key={index}>
            <section className="py-16 px-6 text-center bg-gray-100">
              <h2 className="text-3xl font-semibold mb-4">Hear From Our Customers</h2>
              <div className="flex justify-center">
                <Image
                  src={item.img}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="rounded-full"
                />
              </div>
              <p className="max-w-2xl mx-auto text-gray-600 mt-4">{item.review}</p>
              <p className="mt-4 font-semibold">- {item.name}</p>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  )
}

export default Home
