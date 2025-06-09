
import { useState, useRef, useEffect } from 'react';
import { ExternalLink, Github, Eye, Star, GitFork } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  const projects = [
    {
      title: 'Movie Explorer',
      category: 'web',
      description: 'A React-based movie discovery application that allows users to search, filter, and explore movies with detailed information and ratings.',
      image: '/placeholder.svg',
      technologies: ['React', 'JavaScript', 'CSS', 'Movie API'],
      liveUrl: 'https://dinisfigueiras.github.io/movie-explorer/',
      githubUrl: 'https://github.com/DinisFigueiras/movie-explorer',
      featured: true,
      stats: { stars: 12, forks: 3 }
    },
    {
      title: 'Task Management System',
      category: 'web',
      description: 'A comprehensive task management application built with modern web technologies for organizing and tracking personal and team projects.',
      image: '/placeholder.svg',
      technologies: ['React', 'TypeScript', 'Local Storage', 'CSS'],
      liveUrl: '#',
      githubUrl: 'https://github.com/DinisFigueiras/task-manager',
      featured: true,
      stats: { stars: 8, forks: 2 }
    },
    {
      title: 'Weather Dashboard',
      category: 'web',
      description: 'A responsive weather application that provides current weather conditions and forecasts with a clean, intuitive interface.',
      image: '/placeholder.svg',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Weather API'],
      liveUrl: '#',
      githubUrl: 'https://github.com/DinisFigueiras/weather-app',
      featured: false,
      stats: { stars: 5, forks: 1 }
    },
    {
      title: 'Personal Website',
      category: 'web',
      description: 'My personal portfolio website showcasing my projects, skills, and professional journey as a software developer.',
      image: '/placeholder.svg',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
      liveUrl: 'https://dinisfigueiras.com',
      githubUrl: 'https://github.com/DinisFigueiras/portfolio',
      featured: true,
      stats: { stars: 15, forks: 4 }
    }
  ];

  const categories = ['all', 'web', 'mobile'];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  useEffect(() => {
    const handleScroll = () => {
      projectRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          
          if (rect.top <= windowHeight * 0.8 && rect.bottom >= 0) {
            setVisibleProjects(prev => {
              if (!prev.includes(index)) {
                return [...prev, index];
              }
              return prev;
            });
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [filteredProjects]);

  return (
    <section id="portfolio" className="py-20 relative">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-up">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            A collection of projects that showcase my learning journey and growing expertise in web development.
          </p>
        </div>

        {/* Enhanced Category Filter */}
        <div className="flex justify-center mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="flex flex-wrap gap-2 p-2 bg-card/50 backdrop-blur-sm rounded-full border border-border">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "ghost"}
                onClick={() => setSelectedCategory(category)}
                className={`capitalize transition-all duration-300 ${
                  selectedCategory === category 
                    ? 'shadow-lg shadow-primary/25' 
                    : 'hover:shadow-md hover:shadow-primary/10'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Enhanced Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              ref={el => projectRefs.current[index] = el}
              className={`group bg-card/80 backdrop-blur-sm rounded-lg border border-border overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 ${
                visibleProjects.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay with buttons */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center space-x-4">
                  <Button size="sm" variant="secondary" asChild className="backdrop-blur-sm">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <Eye size={16} />
                    </a>
                  </Button>
                  <Button size="sm" variant="secondary" asChild className="backdrop-blur-sm">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github size={16} />
                    </a>
                  </Button>
                </div>
                
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-primary to-blue-400 text-primary-foreground text-xs px-3 py-1 rounded-full font-medium animate-pulse">
                    Featured
                  </div>
                )}

                {/* Project stats */}
                <div className="absolute top-4 left-4 flex space-x-2">
                  <div className="flex items-center space-x-1 bg-background/80 backdrop-blur-sm px-2 py-1 rounded-full text-xs">
                    <Star size={12} className="text-yellow-500" />
                    <span>{project.stats.stars}</span>
                  </div>
                  <div className="flex items-center space-x-1 bg-background/80 backdrop-blur-sm px-2 py-1 rounded-full text-xs">
                    <GitFork size={12} className="text-blue-400" />
                    <span>{project.stats.forks}</span>
                  </div>
                </div>
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
                      className="px-2 py-1 text-xs bg-primary/10 text-primary rounded border border-primary/20 hover:bg-primary/20 transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-4">
                  <Button size="sm" variant="outline" asChild className="flex-1 group/btn">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2">
                      <ExternalLink size={14} className="group-hover/btn:rotate-45 transition-transform" />
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
