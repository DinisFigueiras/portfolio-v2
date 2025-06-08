
import { useState } from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'web',
      description: 'Modern e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.',
      image: '/placeholder.svg',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'Task Management App',
      category: 'web',
      description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '/placeholder.svg',
      technologies: ['React', 'TypeScript', 'Socket.io', 'MongoDB'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'Analytics Dashboard',
      category: 'web',
      description: 'Data visualization dashboard for business analytics with interactive charts, real-time data updates, and custom reporting.',
      image: '/placeholder.svg',
      technologies: ['React', 'D3.js', 'Python', 'FastAPI'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'Mobile Banking App',
      category: 'mobile',
      description: 'Secure mobile banking application with biometric authentication, transaction history, and budget tracking features.',
      image: '/placeholder.svg',
      technologies: ['React Native', 'Redux', 'Firebase', 'Biometric Auth'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    }
  ];

  const categories = ['all', 'web', 'mobile', 'api'];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my expertise in modern web development and innovative solutions.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="capitalize"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className="group bg-card rounded-lg border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <Button size="sm" variant="secondary" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <Eye size={16} />
                    </a>
                  </Button>
                  <Button size="sm" variant="secondary" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github size={16} />
                    </a>
                  </Button>
                </div>
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                    Featured
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-2 py-1 text-xs bg-primary/10 text-primary rounded border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-4">
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                      <ExternalLink size={14} />
                      <span>Live Demo</span>
                    </a>
                  </Button>
                  <Button size="sm" variant="ghost" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github size={14} />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
