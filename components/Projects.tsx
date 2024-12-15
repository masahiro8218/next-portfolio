'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    title: 'Mesluz Portfolio',
    description: 'This is the source code for this portfolio.',
    technologies: ['Next.js', 'TailwindCSS', 'TypeScript', 'Framer Motion'],
    github: 'https://github.com/masahiro8218/next-portfolio',
    live: 'https://next-portfolio-two-inky.vercel.app/',
  },
  {
    title: 'portfolio_2',
    description: 'A brief description of Project 2',
    technologies: ['Vue.js', 'Express', 'PostgreSQL'],
    github: 'https://github.com/yourusername/project2',
    live: 'https://project2.com',
  },
  {
    title: 'portfolio_3',
    description: 'A brief description of Project 2',
    technologies: ['Vue.js', 'Express', 'PostgreSQL'],
    github: 'https://github.com/yourusername/project2',
    live: 'https://project2.com',
  },
  {
    title: 'portfolio_4',
    description: 'A brief description of Project 2',
    technologies: ['Vue.js', 'Express', 'PostgreSQL'],
    github: 'https://github.com/yourusername/project2',
    live: 'https://project2.com',
  },
  {
    title: 'portfolio_5',
    description: 'A brief description of Project 2',
    technologies: ['Vue.js', 'Express', 'PostgreSQL'],
    github: 'https://github.com/yourusername/project2',
    live: 'https://project2.com',
  },
  {
    title: 'portfolio_6',
    description: 'A brief description of Project 2',
    technologies: ['Vue.js', 'Express', 'PostgreSQL'],
    github: 'https://github.com/yourusername/project2',
    live: 'https://project2.com',
  },
  {
    title: 'portfolio_7',
    description: 'A brief description of Project 2',
    technologies: ['Vue.js', 'Express', 'PostgreSQL'],
    github: 'https://github.com/yourusername/project2',
    live: 'https://project2.com',
  },
  {
    title: 'portfolio_8',
    description: 'A brief description of Project 2',
    technologies: ['Vue.js', 'Express', 'PostgreSQL'],
    github: 'https://github.com/yourusername/project2',
    live: 'https://project2.com',
  },
  {
    title: 'portfolio_9',
    description: 'A brief description of Project 2',
    technologies: ['Vue.js', 'Express', 'PostgreSQL'],
    github: 'https://github.com/yourusername/project2',
    live: 'https://project2.com',
  },
  // Add more projects as needed
];

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 4;

  // ページごとのプロジェクトを取得
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const totalPages = Math.ceil(projects.length / projectsPerPage);

  return (
    <section id='projects' className='py-20 bg-gray-100'>
      <div className='container mx-auto px-4'>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='text-3xl font-bold text-center text-gray-800 mb-8'
        >
          My Projects
        </motion.h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'>
          {currentProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className='bg-white rounded-lg shadow-md overflow-hidden'
            >
              <div className='p-6'>
                <h3 className='text-xl font-semibold text-gray-800 mb-2'>
                  {project.title}
                </h3>
                <p className='text-gray-600 mb-4'>{project.description}</p>
                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className='px-2 py-1 bg-gray-200 text-gray-800 rounded text-sm'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className='flex justify-between'>
                  <a
                    href={project.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center text-blue-600 hover:text-blue-800'
                  >
                    <Github className='w-5 h-5 mr-1' />
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center text-blue-600 hover:text-blue-800'
                  >
                    <ExternalLink className='w-5 h-5 mr-1' />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className='flex justify-center mt-4'>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => setCurrentPage(index + 1)}
              className={`mx-1 px-4 py-2 rounded ${
                currentPage === index + 1
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-800'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
