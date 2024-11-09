// components/Contact.tsx
import React from 'react';

const Contact = () => {
 return (
 <section id="contact" className="py-20 bg-gray-800">
 <div className="max-w-4xl mx-auto text-center">
 <h2 className="text-4xl font-bold mb-6 text-white">Contact Me</h2>
 <p className="text-lg text-gray-300 mb-8">
 If you would like to get in touch, please fill out the form below.
 </p>
 <form className="space-y-4">
 <input
 type="text"
 placeholder="Your Name"
 className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-600"
 required
 />
 <input
 type="email"
 placeholder="Your Email"
 className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-600"
 required
 />
 <textarea
 placeholder="Your Message"
 className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-600"
 rows={4}
 required
 />
 <button type="submit" className="w-full bg-green-600 hover:bg-green-500 text-white py-3 rounded shadow-lg">
 Send Message
 </button>
 </form>
 </div>
 </section>
 );
};

export default Contact;