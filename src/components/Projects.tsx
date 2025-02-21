import React from 'react';
import AnimatedSection from './AnimatedSection';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
}

const projects: Project[] = [
  {
    title: "Zomato Responsive",
    description: "A modern and responsive restaurant website built with React and Bootstrap, featuring an elegant design, menu showcase, online reservations, and a seamless user experience for food lovers.",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8fDA%3D",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    githubUrl: "https://github.com/ubaidullah-code/zomato-responsive",
    liveUrl: "https://ubaidullah-code.github.io/zomato-responsive/"
  },
  {
    title: "Quiz App",
    description: "A responsive and interactive quiz platform built with React and Bootstrap, featuring multiple categories, real-time score tracking, and a clean, modern UI for an engaging user experience.",
    image: "https://media.istockphoto.com/id/1398462038/photo/online-exam-or-test.jpg?s=1024x1024&w=is&k=20&c=vWUnpuaoOhP--xc0MdCCiT7GyzSjW1Mk7vuegnE9Oh0=",
    technologies: ["React", "Firebase", "Material-UI"],
    githubUrl: "https://github.com/ubaidullah-code/quizz-web",
    liveUrl: "https://quizz-web1.web.app/"
  },
  {
    title: "Social Media Dashboard",
    description: "A comprehensive dashboard for managing social media accounts and analytics.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["React",  "Node.js", "Firebase Database"],
    githubUrl: "https://github.com/ubaidullah-code/sakamoto-login1",
    liveUrl: "https://sakamoto-login1.web.app/"
  }
];

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="bg-slate-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
    <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, index) => (
          <span key={index} className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex space-x-4">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-gray-700 hover:text-indigo-600 transition-colors"
        >
          <Github size={20} className="mr-2" />
          Code
        </a>
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-gray-700 hover:text-indigo-600 transition-colors"
        >
          <ExternalLink size={20} className="mr-2" />
          Live Demo
        </a>
      </div>
    </div>
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-slate-100">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-4xl font-bold h-10 text-center text-gray-800 mb-16">
            Featured Projects
          </h2>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 h-full  md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={index}>
              <ProjectCard   project={project} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;