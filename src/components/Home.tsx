import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import Text from './textNamepage';
const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            {/* Hi, I'm <span className="text-indigo-400">Ubaidullah</span> */}
           <Text/>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Full Stack Developer 
          </p>
          <div className="flex justify-center space-x-4 mb-12">
            <a href="https://github.com" target="https://github.com/ubaidullah-code" rel="noopener noreferrer" 
               className="p-2 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors backdrop-blur-sm">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="https://www.linkedin.com/in/ubaidullah-siddique-31b91a288/" rel="noopener noreferrer"
               className="p-2 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors backdrop-blur-sm">
              <Linkedin size={24} />
            </a>
            <a href="mailto:ubaidullahsiddique142005@gmail.com"
               className="p-2 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors backdrop-blur-sm">
              <Mail size={24} />
            </a>
          </div>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition-colors backdrop-blur-sm"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;