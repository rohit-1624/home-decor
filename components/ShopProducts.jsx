'use client'
import Image from 'next/image'
import { useProductContext } from '@/Context/ProductContext'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const ShopProducts = () => {
  const { selectedProduct } = useProductContext()
  const router = useRouter()

  useEffect(() => {
    if (!selectedProduct) router.push('/') // redirect if no product selected
  }, [selectedProduct, router])

  if (!selectedProduct) return null

  return (
    <div className="p-8 max-w-6xl mx-auto bg-[#C5C1BD] w-full grid grid-cols-1 md:grid-cols-2 gap-10 mt-[77px]">
      {/* Image */}
      <Image
        src={selectedProduct.path}
        alt={selectedProduct.name}
        width={500}
        height={500}
        className="w-full h-auto rounded-lg"
      />

      {/* Details */}
      <div>
        <h1 className="text-3xl font-bold mb-2">{selectedProduct.name}</h1>
        <p className="text-gray-600 mb-4">{selectedProduct.type}</p>
        <p className="text-2xl font-semibold text-[#51828D] mb-4">{selectedProduct.price}</p>

        {/* Color Picker Placeholder */}
        <div className="mb-4">
          <p className="font-semibold mb-1">Colors</p>
          <div className="flex gap-2">[Color Swatches Here]</div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mb-6">
          <button className="px-6 py-2 bg-[#8CA8AF] text-black font-medium rounded-md">Add to Cart</button>
          <button className="px-6 py-2 bg-[#51828D] text-white font-medium rounded-md">Buy Now</button>
        </div>

        {/* Description */}
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">Description</h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet consectetur. Volutpat id etiam feugiat sed augue et volutpat massa ornare...
          </p>
        </div>

        {/* Ratings */}
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Customer Reviews</h2>
          <div className="text-sm text-gray-700">
            ★ 4.7 (100 Reviews) — See full reviews below
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShopProducts
