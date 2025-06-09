
import { useState } from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      title: 'E-agenda',
      category: 'mobile',
      description: 'School schedule website and mobile application helping students organize their academic schedule and transition from traditional paper schedules to a digital environment.',
      image: '/placeholder.svg',
      technologies: ['Android Studio', 'Web Development', 'Database', 'Mobile App'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'Car Insurance Database Application',
      category: 'web',
      description: 'Design and development of a web application in Oracle Apex for a car insurance company with comprehensive database development in SQL Data Modeler.',
      image: '/placeholder.svg',
      technologies: ['Oracle Apex', 'SQL', 'Database Design', 'Web Application'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'Stock Replacement Application',
      category: 'desktop',
      description: 'A C# application connected to a company\'s inventory database to speed up the stock replacement process through barcode reader integration.',
      image: '/placeholder.svg',
      technologies: ['C#', '.NET', 'SQL Server', 'Barcode Scanner', 'Inventory Management'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'Expense Tracker',
      category: 'web',
      description: 'Enterprise application built with ASP.NET Core using SyncFusion Component Library for comprehensive expense tracking and management.',
      image: '/placeholder.svg',
      technologies: ['ASP.NET Core', 'C#', 'SyncFusion', 'Enterprise Application'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'Personal Portfolio',
      category: 'web',
      description: 'My personal portfolio website showcasing my projects, skills, and professional journey as a software developer.',
      image: '/placeholder.svg',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
      liveUrl: 'https://dinisfigueiras.com',
      githubUrl: 'https://github.com/DinisFigueiras/portfolio',
      featured: true
    }
  ];

  const categories = ['all', 'web', 'mobile', 'desktop'];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my experience in software development, from web applications to mobile apps and enterprise solutions.
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
