import React from 'react';
import AnimatedSection from './AnimatedSection';
import { Code2, Layout, Database,  Gauge, Network, GitBranch, Library } from 'lucide-react';

const SkillCard = ({ icon: Icon, title, description }) => (
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
      icon: Network,
      title: 'API Integration',
      description: 'I specialize in REST API development and integration, enabling seamless data exchange between applications.'
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Working with Firebase databases.'
    },
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and well-documented code following best practices.'
    },
    {
      icon: GitBranch,
      title: 'Version Control',
      description: 'I use Git for version control and GitHub for collaboration, ensuring clean, efficient code management.'
    },
    {
      icon: Gauge,
      title: 'Performance Optimization',
      description: 'Optimizing applications for maximum speed and scalability.'
    }
    ,{
      icon: Library,
      title: ' Design',
      description: 'I specialize in building responsive and modern UIs using Bootstrap and Tailwind CSS for sleek, scalable designs.Optimizing applications for maximum speed and scalability.'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-700">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Skills & Expertise
          </h2>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <AnimatedSection key={index}>
              <SkillCard width="100%" {...skill} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;