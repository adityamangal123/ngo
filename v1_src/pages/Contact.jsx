import React from 'react'

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="section-heading">Contact Us</h1>
      <p className="text-gray-600 mt-2">Get in touch for partnerships, training inquiries, or volunteering.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <form className="bg-white p-6 rounded-lg shadow-sm space-y-4" onSubmit={(e)=>e.preventDefault()}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input required className="mt-1 block w-full border rounded-md px-3 py-2 text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" required className="mt-1 block w-full border rounded-md px-3 py-2 text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea rows="4" required className="mt-1 block w-full border rounded-md px-3 py-2 text-sm"></textarea>
          </div>
          <div>
            <button type="submit" className="px-4 py-2 bg-primary text-white rounded-md">Send Message</button>
          </div>
        </form>

        <aside className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="card-heading">Office</h3>
          <address className="mt-2 not-italic text-sm text-gray-700">
            Near City Center,<br/>District, Rajasthan<br/>
            Phone: <a href="tel:+911234567890" className="text-primary">+91 12345 67890</a><br/>
            Email: <a href="mailto:info@adarsh.org" className="text-primary">info@adarsh.org</a>
          </address>

          <div className="mt-6">
            <h4 className="font-medium">Working Hours</h4>
            <p className="text-sm text-gray-600 mt-1">Mon - Sat: 9:00 AM – 6:00 PM</p>
          </div>

          <div className="mt-6">
            <h4 className="font-medium">Location</h4>
            <div className="mt-2 w-full h-48 bg-gray-100 rounded-md overflow-hidden">
              {/* Replace the src with real Google Maps embed */}
              <iframe title="Office location" className="w-full h-full border-0" src="https://maps.google.com/maps?q=jaipur&t=&z=13&ie=UTF8&iwloc=&output=embed" aria-hidden="false"></iframe>
            </div>
          </div>
        </aside>
      </div>

      {/* WhatsApp floating button */}
      <a href="https://wa.me/911234567890" aria-label="Chat on WhatsApp" className="fixed bottom-6 right-6 bg-accent text-dark p-4 rounded-full shadow-lg">
        WhatsApp
      </a>
    </div>
  )
}