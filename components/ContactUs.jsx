'use client'

const ContactUs = () => {
  return (
    <main className="bg-[#C5C1BD] text-white">
      {/* Hero Section */}
      <section className="py-[100px] min-h-[60vh] flex flex-col items-center justify-center text-center">
        <h1 className="text-[54px] md:text-6xl font-bold leading-tight">
          <span className="text-[#8CA8AF]">Contact</span> Us
        </h1>
        <p className="text-lg md:text-2xl mt-4">
          We'd love to hear from you — reach out to us anytime.
        </p>
      </section>

      {/* Main Content */}
      <section className="bg-white text-black p-8 md:p-16 flex flex-col lg:flex-row gap-10 max-w-7xl mx-auto mt-[-50px] rounded-lg shadow-lg">
        {/* Contact Form */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h2 className="text-2xl font-bold text-[#51828D]">Send Us a Message</h2>
          <form className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-[#51828D] outline-none"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-[#51828D] outline-none"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                rows="5"
                placeholder="Type your message..."
                className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-[#51828D] outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#8CA8AF] text-black px-6 py-2 rounded-lg font-semibold hover:bg-[#7c979e]"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Map and Contact Info */}
        <div className="w-full lg:w-1/2 space-y-6">
          {/* Map Embed */}
          <div className="w-full aspect-video">
            <iframe
              title="Google Map"
              className="w-full h-full rounded-md"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.168961723494!2d144.95605441531693!3d-37.81720997975151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43e18103bb%3A0xcca85de34d3904fc!2sMelbourne%20Central!5e0!3m2!1sen!2sau!4v1613997462389!5m2!1sen!2sau"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          {/* Address & Info */}
          <div className="bg-[#EAE7E1] p-4 rounded-md space-y-3 text-[#51828D]">
            <div>
              <h3 className="font-semibold">Our Address</h3>
              <p>123 Home Decor Street, Bengaluru, India</p>
            </div>
            <div>
              <h3 className="font-semibold">Business Hours</h3>
              <p>Mon - Sat: 9:00 AM – 8:00 PM</p>
              <p>Sun: Closed</p>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-4">
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-green-600"
              >
                <i className="ri-whatsapp-line text-xl"></i> WhatsApp
              </a>
              <a
                href="tel:+919999999999"
                className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-blue-600"
              >
                <i className="ri-phone-line text-xl"></i> Call Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ContactUs
