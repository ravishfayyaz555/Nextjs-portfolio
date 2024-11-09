import React from 'react';
import Image from 'next/image';

const About = () => {
 return (
 <section id="about" className="py-20 bg-gray-800 flex flex-col md:flex-row items-center max-w-6xl mx-auto">
 <div className="flex-1">
 <Image
 src="/444.jpg" // Apni image ka path yahaan daalein
 alt="About Me"
 width={400}
 height={400}
 className="rounded-lg shadow-md"
 />
 </div>
 <div className="flex-1 text-center md:text-left md:ml-10">
 <h2 className="text-4xl font-bold mb-6 text-white">About Me</h2>
 
 <p className="text-lg text-gray-300">
 "I am a passionate beginner web developer with a strong interest in creating responsive and visually appealing websites.
  I am currently learning essential skills in HTML, CSS, and typeScript, and I am excited to expand my knowledge 
  in frameworks like Next.js and tools like Tailwind CSS.
  My goal is to develop user-friendly websites that provide an engaging experience for visitors."
 </p>
 </div>
 </section>
 );
};

export default About;