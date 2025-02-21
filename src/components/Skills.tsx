import React from 'react';
import AnimatedSection from './AnimatedSection';
import { Code2, Layout, Database, Server, Palette, Gauge } from 'lucide-react';

const SkillCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
    <div className="flex items-center mb-4">
      <Icon className="w-8 h-8 text-indigo-400" />
      <h3 className="text-xl font-semibold ml-3 text-white">{title}</h3>
    </div>
    <p className="text-gray-300">{description}</p>
  </div>
);

const Skills = () => {
  const skills = [
    {
      icon: Layout,
      title: 'Frontend Development',
      description: 'Creating responsive and interactive UIs with React, HTML5, CSS3, and modern JavaScript.'
    },
    {
      icon: Server,
      title: 'Backend Development',
      description: 'Building robust server-side applications with Node.js, Express, and RESTful APIs.'
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Working with SQL and NoSQL databases including PostgreSQL, MongoDB, and Redis.'
    },
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and well-documented code following best practices.'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Designing intuitive user interfaces and seamless user experiences.'
    },
    {
      icon: Gauge,
      title: 'Performance Optimization',
      description: 'Optimizing applications for maximum speed and scalability.'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Skills & Expertise
          </h2>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <AnimatedSection key={index}>
              <SkillCard {...skill} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;