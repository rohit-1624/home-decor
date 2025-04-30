'use client'
import Image from 'next/image'
import { Navigation, Pagination} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Home = () => {
  return (
    <main className="font-sans text-gray-800 mx-0">
      {/* Hero Section */}
      <section className="flex flex-col py-[100px] min-h-screen bg-cover bg-center bg-[url('/images/hero-bg.png')] justify-center items-center gap-[20px] text-center">
        <div>
          <h1 className="text-[54px] md:text-7xl font-bold text-white">
            <p><span className='text-[#51828D]'>Simplify</span> Your Space,</p>
            <p>Beautify Your <span className='text-[#51828D]'>Life</span>. </p>
          </h1>
        </div>
        <div className="flex flex-col gap-[13px]">
          <p className="text-white mt-4 text-lg md:text-2xl">
            Unique Home Decor Collection are available at best prices. <br /> Enjoy your shopping !
          </p>
          <i className="ri-search-line text-[40px]"></i>
          <button className="mt-6 mx-auto px-6 py-3 bg-[#8CA8AF] text-black rounded-lg text-lg font-semibold">
            Shop Now
          </button>
        </div>


        <div className='mt-45'>
          <div className='relative z-10 py-[40px] px-[49px] mx-auto bg-[#EAE7E1] w-[1189px] flex gap-[34px] text-[#51828D] justify-around items-center rounded-md'>
            <div className='flex space-x-10 items-center justify-around'>
              <div className='flex flex-col gap-2 justify-center items-center'>
                <h1 className='text-lg font-bold'>Free Shipping</h1>
                <p>Free shipping on the order above ₹999</p>
              </div>
              <div className="h-16 w-px bg-[#51828D]"></div>
            </div>

            <div className='flex space-x-10 items-center justify-center'>
              <div className='flex flex-col gap-2 justify-center items-center'>
                <h1 className='text-lg font-bold'>24/7 Customer Support</h1>
                <p>We care about our customers</p>
              </div>
              <div className="h-16 w-px bg-[#51828D]"></div>
            </div>

            <div className='flex items-center'>
              <div className='flex flex-col gap-2 justify-center items-center'>
                <h1 className='text-lg font-bold'>Quality Products</h1>
                <p>We provide best quality products</p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* section-2 */}

      <div className='p-5 w-[1285px] h-[294px] flex justify-center items-center mx-auto grid grid-cols-4 bg-white'>
        <div className="flex flex-col justify-center items-center gap-3">
          <h1 className="text-[#51828D] text-[30px] font-bold text-center]">Best Selling <br /> <span className='text-black mt-1 text-center'>Products</span></h1>
          <p className="text-gray-900 text-[12px] font-bold px-17 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laboriosam aliquid, sit soluta officia tempore </p>
          <button className="mt-6 mx-auto px-4 py-2 bg-gray-300 text-black rounded-lg text-lg font-semibold">
            Explore Now
          </button>
        </div>
        <div>
          <Image
            src="/images/product.png"
            alt='image'
            width={120}
            height={120}

          />
          <h1>Product name</h1>
          <label>Price</label>
        </div>
        <div>
          <Image
            src="/images/412670393_fbcb5734-2019-4045-9a34-6c17c4a3741e1.png"
            alt='image'
            width={120}
            height={120}

          />
          <h1>Product name</h1>
          <label>Price</label>
        </div>
        <div>
          <Image
            src="/images/midcentury-modern-walnut-wood-cabinet-with-books-decor1.png"
            alt='image'
            width={120}
            height={120}
          />
          <h1>Product name</h1>
          <label>Price</label>
        </div>
      </div>

      {/* Room Types */}
      <section className="py-16 px-6 text-center bg-white">
        <h2 className="text-3xl font-semibold mb-4">Your Dream Space, <span className='text-[#51828D]'>Just a Click Away</span></h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Lorem ipsum dolor sit amet consectetur. Eu et urna at egestas egestas. Auctor adipiscing egestas eget rhoncus nunc.
        </p>
        <div className="flex justify-center grid md:grid-cols-2 gap-6 mt-8 text-sm">
          <Image
            src="/images/Property1=Default.png"
            alt='image'
            width={1200}
            height={600}
            // className='w-[50%] h-auto'
          />

          <Image
            src="/images/Property1=Default-2.png"
            alt='image'
            width={1200}
            height={600}
          />

          <Image
            src="/images/Property1=Default-3.png"
            alt='image'
            width={1200}
            height={600}
          />

          <Image
            src="/images/Property1=Default-1.png"
            alt='image'
            width={1200}
            height={600}
          />
        </div>
      </section>

       <section className="bg-gray-300 py-12 text-[#51828D] px-4 text-center">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        <div className='flex flex-col gap-2'>
        {/* Chairs Card */}
        <div className="flex flex-col items-center text-left">
          <h2 className="text-xl font-semibold mt-4">Chairs</h2>
          <p className="text-gray-600 mt-2">
            Lorem ipsum dolor sit amet <br />
            consectetur. Aliquam praesent <br />
            et arcu sed metus fusce eu.
          </p>
          <button className="mt-4 text-blue-600 font-medium hover:underline">
            View More
          </button>
          <div className="w-full">
            <Image
              src="/images/velvet-interior-classic-cushion-relax1.png" // Add image src
              alt="Chairs"
              width={1200}
              height={500}
              // sizes="100vw"
              className=" rounded-lg object-cover"
            />
          </div>
        </div>
        {/* Offer Card */}
        <div className="flex flex-col items-center justify-center bg-gray-100 p-8 mt-0 rounded-lg">
          <h3 className="text-2xl font-bold mb-2 text-red-600">25% Offer on</h3>
          <h4 className="text-xl font-semibold mb-4">Sofa & Chairs</h4>
          <p className="mb-6 text-gray-700">Get Discount</p>
          <button className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600">
            Get Discount
          </button>
        </div>
        </div>

        


        {/* Sofas Card */}
        <div className="flex  flex-col items-center text-left">
           <h2 className="text-xl font-semibold mt-4">Sofas</h2>
          <p className="text-gray-600 mt-2">
            Lorem ipsum dolor sit amet consectetur. <br />
            Aliquam praesent et arcu sed metus fusce eu.
          </p>
          <button className="mt-4 text-blue-600 font-medium hover:underline">
            View More
          </button>
          {/* <div className="w-full"> */}
            <Image
              src="/images/grey-comfortable-armchair-isolated-white-background-removebg-preview.png" // Add image src
              alt="Sofas"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto rounded-lg object-cover"
            />
          {/* </div> */}
        </div>

        
      </div>
    </section>



      {/* Customer Testimonial */}

       <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      loop
      pagination={{ clickable: true }}
      className='text-center'
    >
      <SwiperSlide>
      <section className="py-16 px-6 text-center bg-gray-100 ">
        <h2 className="text-3xl font-semibold mb-4">Hear From Our Customers</h2>
        <Image     
          src="/images/Mask-group.png"
          alt='image'
          width={100}
          height={100}
          className='rounded-full ml-[46%]'
        />
        <p className="max-w-2xl mx-auto text-gray-600">
          Lorem ipsum dolor sit amet consectetur. Eu et urna at egestas egestas. Dolor sed mi pharetra at at. Lectus sapien non viverra urna ac quam.
        </p>
        <p className="mt-4 font-semibold">- Taylor Koepp</p>
      </section>
      </SwiperSlide>

      <SwiperSlide>
        <section className="py-16 px-6 text-center bg-gray-100">
        <h2 className="text-3xl font-semibold mb-4">Hear From Our Customers</h2>
        <Image  
          src="/images/person-2.png"
          alt='image'
          width={100}
          height={100}
          className='rounded-full ml-[46%]'
        />
        <p className="max-w-2xl mx-auto text-gray-600">
          Lorem ipsum dolor sit amet consectetur. Eu et urna at egestas egestas. Dolor sed mi pharetra at at. Lectus sapien non viverra urna ac quam.
        </p>
        <p className="mt-4 font-semibold">- Taylor Koepp</p>
      </section>
      </SwiperSlide>

      <SwiperSlide>
      <section className="py-16 px-6 text-center bg-gray-100">
        <h2 className="text-3xl font-semibold mb-4">Hear From Our Customers</h2>
        <Image 
          src="/images/person-3.png"
          alt='image'
          width={100}
          height={100}
          className='rounded-full ml-[46%]'
        />
        <p className="max-w-2xl mx-auto text-gray-600">
          Lorem ipsum dolor sit amet consectetur. Eu et urna at egestas egestas. Dolor sed mi pharetra at at. Lectus sapien non viverra urna ac quam.
        </p>
        <p className="mt-4 font-semibold">- Taylor Koepp</p>
      </section>
      </SwiperSlide>
          
      <SwiperSlide>
      <section className="py-16 px-6 text-center bg-gray-100">
        <h2 className="text-3xl font-semibold mb-4">Hear From Our Customers</h2>
        <Image 
          src="/images/person-4.png"
          alt='image'
          width={100}
          height={100}
          className='rounded-full ml-[46%]'
        />
        <p className="max-w-2xl mx-auto text-gray-600">
          Lorem ipsum dolor sit amet consectetur. Eu et urna at egestas egestas. Dolor sed mi pharetra at at. Lectus sapien non viverra urna ac quam.
        </p>
        <p className="mt-4 font-semibold">- Taylor Koepp</p>
      </section>
      </SwiperSlide>
    </Swiper>

     



      
    </main>
  );
}

export default Home
