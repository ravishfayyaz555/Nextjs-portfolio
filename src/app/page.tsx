import { FaLinkedin, FaBehance, FaTwitter } from 'react-icons/fa';
import Image from 'next/image';
import About from "./components/about";
import Contact from './components/contact';
import Footer from './components/footer';

export default function Home() {
  return (
    <div className="bg-black min-h-screen text-white">
      {/* Navigation Bar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-gray-900 shadow-md">
        <ul className="flex-1 flex justify-center space-x-8">
          <li className="hover:text-gray-400">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-gray-400">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-gray-400">
            <a href="#contact">Contact Me</a>
          </li>
          <li className="hover:text-gray-400">
            <a href="#skills">Skills</a> {/* Corrected href */}
          </li>
          <li className="hover:text-gray-400">
            <a href="#projects">Projects</a> {/* Corrected href */}
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
      <section id="home" className="flex flex-col md:flex-row items-center justify-center py-16 space-y-8 md:space-y-0 md:space-x-16">
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold">Hello, I am Ravish Fayyaz</h1> {/* Changed ' to , for consistency */}
          <p className="mt-4 max-w-md text-gray-400">
            &quot;I have recently completed my master&apos;s in Economics from Karachi University 
            and I am expanding my knowledge in the IT sector.&quot;
          </p>
          <button className="mt-6 bg-green-600 hover:bg-green-500 text-white py-2 px-6 rounded shadow-lg">
            Let&apos;s get started
          </button>
        </div>
        <div className="rounded-full overflow-hidden w-48 h-48 md:w-56 md:h-56">
          <Image
            src="/444.jpg"
            alt="Profile"
            width={224}
            height={224}
            className="object-cover w-full h-full"
          />
        </div>
      </section>

      {/* About Section */}
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
