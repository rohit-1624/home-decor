'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/firebase/firebase'
import Image from 'next/image'

const Signup = () => {
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSignup = async (e) => {
    e.preventDefault()
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      router.push('/')
    } catch (err) {
      setError('Signup failed. Please check your credentials or try again.')
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center mt-[77px] px-4">
      <div className="bg-[#7A7771] shadow-xl rounded-xl flex flex-col md:flex-row overflow-hidden max-w-4xl w-full">
        {/* Form Side */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-2 text-white">Create Account</h1>
          <p className="text-gray-200 mb-6">Join us and start decorating your dream space</p>

          <form className="space-y-4" onSubmit={handleSignup}>
            <div>
              <label htmlFor="email" className="block mb-1 text-sm font-medium text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block mb-1 text-sm font-medium text-white">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter a strong password"
                required
              />
            </div>

            {error && <p className="text-sm text-red-400">{error}</p>}

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              SIGN UP
            </button>
          </form>

          <div className="mt-6 text-center text-white">Signup with Others</div>

          <div className="flex flex-col gap-4 mt-4">
            <button className="flex items-center justify-center gap-2 border border-gray-300 py-2 rounded hover:bg-gray-50 hover:text-black">
              <i className="ri-google-fill"></i>
              Sign up with Google
            </button>

            <button className="flex items-center justify-center gap-2 border border-gray-300 py-2 rounded hover:bg-gray-50 hover:text-black">
              <i className="ri-facebook-fill"></i>
              Sign up with Facebook
            </button>
          </div>
        </div>

        {/* Image Side */}
        <div className="hidden md:block md:w-9/12">
          <Image
            src="/images/Rectangle925.png"
            alt="Signup illustration"
            width={600}
            height={300}
            sizes="100vw"
            className="px-3 py-3"
          />
        </div>
      </div>
    </section>
  )
}

export default Signup
