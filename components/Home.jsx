{/* Best Selling Products */}
<section className="w-full max-w-7xl mx-auto py-12 px-4 bg-white text-center">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
    <div className="col-span-1 sm:col-span-2 md:col-span-1 flex flex-col items-center gap-4">
      <h2 className="text-[#51828D] text-2xl font-bold leading-tight">
        Best Selling<br /><span className="text-black">Products</span>
      </h2>
      <p className="text-gray-700 text-sm max-w-xs">
        Discover our most-loved pieces—blending elegance, functionality, and comfort in every corner of your home.
      </p>
      <button className="mt-2 px-4 py-2 bg-gray-300 text-black rounded-lg text-sm font-semibold">
        Explore Now
      </button>
    </div>

    {/* Product Cards */}
    {[
      { src: "/images/product.png", title: "Chair", price: "₹3,999" },
      { src: "/images/412670393_fbcb5734-2019-4045-9a34-6c17c4a3741e1.png", title: "Sofa", price: "₹1,299" },
      { src: "/images/midcentury-modern-walnut-wood-cabinet-with-books-decor1.png", title: "Wooden Accent Table", price: "₹7,499" },
    ].map((product, idx) => (
      <div key={idx} className="flex flex-col items-center text-center gap-2">
        <Image src={product.src} alt={product.title} width={120} height={120} className="object-contain" />
        <h1 className="font-medium">{product.title}</h1>
        <label className="text-gray-600">{product.price}</label>
      </div>
    ))}
  </div>
</section>
