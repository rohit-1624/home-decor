'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useAuth } from '@/Context/AuthContext'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const Layout = ({ children }) => {
  const { user, logout } = useAuth()
  const router = useRouter()
  const [menuOpen, setMenuOpen] = useState(false)

  const handleLogout = async () => {
    await logout()
    router.push('/')
  }

  const menus = [
    { label: 'Home', link: '/' },
    { label: 'AboutUs', link: '/about' },
    { label: 'Products', link: '/products' },
    { label: 'ContactUs', link: '/contact-us' },
  ]

  return (
    <div>
      <div className="relative w-full h-full overflow-hidden">
        <Image
          src="/images/hero-bg.png"
          alt="Background"
          layout="fill"
          style={{ objectFit: 'cover' }}
          quality={100}
          className="z-0"
        />

        {/* Navbar */}
        <div className="relative">
          <nav className="fixed top-0 left-0 right-0 py-4 px-4 md:px-24 z-10 w-full h-[77px] flex justify-between items-center bg-white bg-opacity-90 backdrop-blur-md shadow-sm">
            <h1 className="text-[#51828D] text-2xl md:text-3xl font-semibold">Home Decor</h1>

            {/* Mobile Hamburger */}
            <div className="md:hidden">
              <button onClick={() => setMenuOpen(!menuOpen)}>
                <i className="ri-menu-line text-2xl text-[#51828D]"></i>
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-10 text-sm font-medium">
              {menus.map((item, i) => (
                <Link key={i} href={item.link} className="text-[#588791] hover:underline">
                  {item.label}
                </Link>
              ))}

              {user ? (
                <div className="flex items-center gap-4 ml-4">
                  <Link href="/wishlist">
                    <i className="ri-heart-line text-xl text-[#51828D] hover:text-[#3d6f7b]"></i>
                  </Link>
                  <Link href="/cart">
                    <i className="ri-shopping-cart-2-line text-xl text-[#51828D] hover:text-[#3d6f7b]"></i>
                  </Link>
                  <div className="relative group">
                    <i className="ri-user-3-line text-xl text-[#51828D] cursor-pointer"></i>
                    <div className="absolute hidden group-hover:block bg-white text-black mt-2 p-2 shadow-md right-0 rounded">
                      <button onClick={handleLogout} className="text-sm text-red-500">Logout</button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-x-3 ml-4">
                  <Link href="/login" className="text-[#588791]">Login</Link>
                  <Link href="/signup" className="bg-[#51828D] text-white px-4 py-2 rounded">Signup</Link>
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Sidebar */}
          {menuOpen && (
            <div className="fixed top-[77px] left-0 w-full bg-white shadow-md z-20 p-4 md:hidden">
              <div className="flex flex-col gap-4 text-[#588791] font-medium">
                {menus.map((item, i) => (
                  <Link key={i} href={item.link} onClick={() => setMenuOpen(false)}>
                    {item.label}
                  </Link>
                ))}
                {user ? (
                  <>
                    <Link href="/wishlist">
                      <i className="ri-heart-line text-xl"></i> Wishlist
                    </Link>
                    <Link href="/cart">
                      <i className="ri-shopping-cart-2-line text-xl"></i> Cart
                    </Link>
                    <button onClick={handleLogout} className="text-red-500">Logout</button>
                  </>
                ) : (
                  <>
                    <Link href="/login">Login</Link>
                    <Link href="/signup">Signup</Link>
                  </>
                )}
              </div>
            </div>
          )}

          {/* Page Content */}
          <div className="pt-[77px]">{children}</div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#EAE7E1] py-16">
        <div className="w-10/12 mx-auto grid md:grid-cols-2 gap-16">
          <div className="pr-8">
            <h1 className="text-[#51828D] font-semibold text-3xl mb-3">Home Decor</h1>
            <p className="text-gray-900 mb-6 text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nulla numquam illo fugiat tenetur earum itaque at sit magni.
            </p>
            <div className="flex text-[30px] text-[#51828D]">
              <ul className="flex gap-6">
                <li><i className="ri-facebook-circle-fill"></i></li>
                <li><i className="ri-instagram-line"></i></li>
                <li><i className="ri-twitter-x-line"></i></li>
              </ul>
            </div>
          </div>

          <div className="max-w-7xl text-[#51828D] mx-auto grid md:grid-cols-4 gap-6">
            <div>
              <h5 className="font-bold mb-2">Company</h5>
              <ul>
                <li>About Us</li>
                <li>Career</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-2">My Account</h5>
              <ul>
                <li>Track Order</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-2">Service</h5>
              <ul>
                <li>Privacy</li>
                <li>Terms & Conditions</li>
                <li>Return Policy</li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-2">Contact Info</h5>
              <p>746-955-8883</p>
              <p>furniture@gmail.com</p>
              <p>234 Kozey Orchard, Adolphusport 81177</p>
              <p>https://furniture.info</p>
            </div>
          </div>
        </div>

        <p className="px-6 py-3 bg-gradient-to-r from-[#51828D] to-[#184D59] text-center text-white mt-0">
          © 2025 Furniture. All Rights Reserved.
        </p>
      </footer>
    </div>
  )
}

export default Layout
