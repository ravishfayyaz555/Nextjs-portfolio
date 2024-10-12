import { FaLinkedin, FaBehance, FaTwitter } from 'react-icons/fa';
import Image from 'next/image';

export default function Home() {
 return (
 <div className="bg-black min-h-screen text-white">
 {/* Navigation Bar */}
 <nav className="flex justify-between items-center px-8 py-4 bg-gray-900 shadow-md">
 <ul className="flex-1 flex justify-center space-x-8">
 <li className="hover:text-gray-400">
 <a href="hashtaghashtaghashtag#home">Home</a>
 </li>
 <li className="hover:text-gray-400">
 <a href="hashtaghashtaghashtag#case-studies">Case Studies</a>
 </li>
 <li className="hover:text-gray-400">
 <a href="hashtaghashtaghashtag#testimonials">Testimonials</a>
 </li>
 <li className="hover:text-gray-400">
 <a href="hashtaghashtaghashtag#work">Recent Work</a>
 </li>
 <li className="hover:text-gray-400">
 <a href="hashtaghashtaghashtag#contact">Get In Touch</a>
 </li>
 </ul>
 <div className="flex space-x-4">
 <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white">
 <FaLinkedin size={20} />
 </a>
 <a href="#" aria-label="Behance" className="text-gray-400 hover:text-white">
 <FaBehance size={20} />
 </a>
 <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white">
 <FaTwitter size={20} />
 </a>
 </div>
 </nav>

 {/* Hero Section */}
 <section className="flex flex-col md:flex-row items-center justify-center py-16 space-y-8 md:space-y-0 md:space-x-16">
 <div className="text-center md:text-left">
 <h1 className="text-4xl font-bold">Your Name Here</h1>
 <p className="mt-4 max-w-md text-gray-400">
 Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
 </p>
 <button className="mt-6 bg-green-600 hover:bg-green-500 text-white py-2 px-6 rounded shadow-lg">
 Let&apos;s get started
 </button>
 </div>
 <div className="rounded-full overflow-hidden w-48 h-48 md:w-56 md:h-56">
 <Image
 src="/image1.jpg"
 alt="Profile"
 width={224}
 height={224}
 className="object-cover w-full h-full"
 />
 </div>
 </section>

 {/* Partners Section */}
 <section className="py-8">
 <h3 className="text-center text-gray-400">Worked with</h3>
 <div className="flex justify-center space-x-6 mt-4">
 <div className="bg-gray-800 p-2 rounded shadow-md">ClickUp</div>
 <div className="bg-gray-800 p-2 rounded shadow-md">Dropbox</div>
 <div className="bg-gray-800 p-2 rounded shadow-md">PAYCHEX</div>
 <div className="bg-gray-800 p-2 rounded shadow-md">Elastic</div>
 <div className="bg-gray-800 p-2 rounded shadow-md">Stripe</div>
 </div>
 </section>
 </div>
 );
}