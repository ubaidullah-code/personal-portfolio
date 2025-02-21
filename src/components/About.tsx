import React from 'react';
import SplitText from "./AnotherText";
import AnimatedSection from './AnimatedSection';
import DecryptedText from './Paragraph';

const About = () => {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };
  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-4xl font-bold text-center mb-16">
          <SplitText 
  text="About Me"
  className="text-4xl font-bold text-center"
  delay={150}
  animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
  animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
  easing="easeOutCubic"
  threshold={0.2}
  rootMargin="-50px"
  onLetterAnimationComplete={handleAnimationComplete}
/>
          </h2>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 gap-12 items-center ">
          <AnimatedSection>
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Developer working"
              className=" rounded-lg shadow-lg w-full"
              style={{ borderRadius: '27% 73% 40% 60% / 63% 38% 62% 37% ' }}
            />
          </AnimatedSection>
          
          <AnimatedSection>
            <div className="space-y-6">
            <DecryptedText
            text="I'm a passionate Full Stack Developer with a keen eye for creating beautiful and functional web applications. With years of experience in modern web technologies, I bring ideas to life through clean code and intuitive design."
            animateOn="view"
            revealDirection="center"
          />
             
              <div style={{ marginTop: '4rem' }}>
          <DecryptedText
            text="My journey in web development started with a curiosity for creating interactive experiences. Today, I specialize in building responsive web applications using cutting-edge technologies like React, Node.js, and modern CSS frameworks."
            animateOn="view"
            revealDirection="center"
          />
</div>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-indigo-900/50 text-indigo-300 rounded-full">Problem Solver</span>
                <span className="px-4 py-2 bg-indigo-900/50 text-indigo-300 rounded-full">Team Player</span>
                <span className="px-4 py-2 bg-indigo-900/50 text-indigo-300 rounded-full">Creative Thinker</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;