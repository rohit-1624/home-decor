'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useProductContext } from '@/Context/ProductContext'

const products = [
  { path: "/images/412670393_fbcb5734-2019-4045-9a34-6c17c4a3741e1.png", name: 'Product Name', type: 'Product Type', price: 'Price', inStock: true },
  { path: "/images/409090715_0a83e7fa-4172-436b-b814-ed4abefff2391.png", name: 'Product Name', type: 'Product Type', price: 'Price', inStock: false },
  { path: "/images/midcentury-modern-walnut-wood-cabinet-with-books-decor1.png", name: 'Product Name', type: 'Product Type', price: 'Price', inStock: false },
  { path: "/images/412670393_fbcb5734-2019-4045-9a34-6c17c4a3741e1.png", name: 'Product Name', type: 'Product Type', price: 'Price', inStock: true },
  { path: "/images/grey-comfortable-armchair-isolated-white-background-removebg-preview.png", name: 'Product Name', type: 'Product Type', price: 'Price', inStock: false },
  { path: "/images/product.png", name: 'Product Name', type: 'Product Type', price: 'Price', inStock: false },
  { path: "/images/midcentury-modern-walnut-wood-cabinet-with-books-decor1.png", name: 'Product Name', type: 'Product Type', price: 'Price', inStock: true },
  { path: "/images/product.png", name: 'Product Name', type: 'Product Type', price: 'Price', inStock: false },
  { path: "/images/409090715_0a83e7fa-4172-436b-b814-ed4abefff2391.png", name: 'Product Name', type: 'Product Type', price: 'Price', inStock: false },
  { path: "/images/product.png", name: 'Product Name', type: 'Product Type', price: 'Price', inStock: true },
  { path: "/images/grey-comfortable-armchair-isolated-white-background-removebg-preview.png", name: 'Product Name', type: 'Product Type', price: 'Price', inStock: false },
  { path: "/images/midcentury-modern-walnut-wood-cabinet-with-books-decor1.png", name: 'Product Name', type: 'Product Type', price: 'Price', inStock: false },
]

export default function ProductPage() {
  const { setSelectedProduct } = useProductContext()

  const renderCheckbox = (label) => (
    <label key={label} className="flex items-center space-x-2 text-gray-700">
      <input type="checkbox" className="accent-blue-600" />
      <span>{label}</span>
    </label>
  )

  return (
    <main className="bg-gray-100 bg-[#51828D] pb-20">
      {/* Hero Section */}
      <section className="flex flex-col py-[100px] min-h-screen bg-cover bg-center bg-[url('/images/hero-bg.png')] justify-center items-center gap-[20px] text-center">
        <h1 className="text-[54px] md:text-7xl font-bold text-white leading-snug">
          <span className="text-[#51828D]">Simplify</span> Your Space,<br />
          Beautify Your <span className="text-[#51828D]">Life</span>.
        </h1>
        <p className="text-white mt-4 text-lg md:text-2xl">
          Unique Home Decor Collection are available at best prices. <br /> Enjoy your shopping!
        </p>
        <i className="ri-search-line text-[40px]"></i>
        <button className="mt-6 px-6 py-3 bg-[#8CA8AF] text-black rounded-lg text-lg font-semibold">
          Shop Now
        </button>

        {/* Highlights */}
        <div className="mt-12">
          <div className="relative z-10 py-[40px] px-[49px] bg-[#EAE7E1] w-[1189px] flex flex-wrap justify-around items-center gap-[34px] rounded-md text-[#51828D]">
            {[
              { title: 'Free Shipping', desc: 'Free shipping on orders above ₹999' },
              { title: '24/7 Customer Support', desc: 'We care about our customers' },
              { title: 'Quality Products', desc: 'We provide best quality products' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-2 justify-center items-center text-center">
                <h1 className="text-lg font-bold">{item.title}</h1>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="flex flex-col lg:flex-row px-6 gap-6">
        {/* Filters */}
        <aside className="w-full lg:w-1/4 bg-white p-6 shadow rounded-lg space-y-6 mt-10">
          <div>
            <h2 className="text-lg font-semibold mb-3">Category</h2>
            <div className="space-y-2">
              {['All', 'Bed Room', 'Dining Room', 'Living Room', 'Study Room'].map(renderCheckbox)}
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-3">Product</h2>
            <div className="space-y-2">
              {['All', 'Sofa', 'Chair', 'Tv Unit', 'Cabinets', 'Center Table', 'Bed', 'Wardrobes', 'Dressing Table', 'Bedside Table', 'Crockery Unit', 'Book Shelves', 'PC Table'].map(renderCheckbox)}
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-3">Availability</h2>
            <div className="space-y-2">
              {['In Stock', 'Out of Stock'].map(renderCheckbox)}
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-3">Material</h2>
            <div className="space-y-2">
              {['Wood', 'Metal', 'Plastic', 'Glass'].map(renderCheckbox)}
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="w-full lg:w-3/4 grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">
          {products.map((product, index) => (
            <Link
              href="/product-details"
              key={index}
              onClickCapture={() => setSelectedProduct(product)} // ensures context is set before route change
            >
              <div className="bg-white shadow rounded-lg overflow-hidden flex flex-col cursor-pointer hover:shadow-lg transition">
                <Image
                  src={product.path}
                  alt={product.name}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 space-y-1">
                  <h2 className="text-lg font-semibold">{product.name}</h2>
                  <p className="text-gray-500 text-sm">{product.type}</p>
                  <p className="text-gray-800 font-medium">{product.price}</p>
                  <div className="flex items-center gap-2 text-sm mt-1">
                    <span className="text-yellow-500">★ 5.0</span>
                    <span className="text-gray-500">(10 Reviews)</span>
                    <span
                      className={`ml-auto px-2 py-0.5 rounded text-xs font-medium ${
                        product.inStock
                          ? 'bg-green-100 text-green-600'
                          : 'bg-red-100 text-red-600'
                      }`}
                    >
                      {product.inStock ? 'In Stock' : 'Out of Stock'}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
