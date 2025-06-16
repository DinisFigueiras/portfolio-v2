
import { useState, useRef, useEffect } from 'react';
import { ExternalLink, Github, Eye, Star, GitFork, Images, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  const projects = [
    {
      title: 'E-agenda',
      category: 'mobile',
      description: 'School schedule website and mobile application helping students organize their academic schedule and transition from traditional paper schedules to a digital environment.',
      image: '/images/projects/e-agenda.png',
      technologies: ['Android Studio', 'Web Development', 'Database', 'Mobile App'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      stats: { stars: 15, forks: 4 },
      buttonType: 'pictures',
      modalContent: {
        images: ['/images/projects/e-agenda.png', '/images/projects/e-agenda.png', '/images/projects/e-agenda.png'],
        detailedDescription: 'E-agenda was developed to help students transition from traditional paper schedules to a digital environment. The application includes features like schedule management, notifications, and cross-platform synchronization.',
        features: ['Schedule Management', 'Push Notifications', 'Cross-platform Sync', 'Offline Support']
      }
    },
    {
      title: 'Car Insurance Database Application',
      category: 'web',
      description: 'Design and development of a web application in Oracle Apex for a car insurance company with comprehensive database development in SQL Data Modeler.',
      image: '/images/projects/car.png',
      technologies: ['Oracle Apex', 'SQL', 'Database Design', 'Web Application'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      stats: { stars: 10, forks: 3 },
      buttonType: 'demo',
      modalContent: {
        images: ['/images/projects/car.png', '/images/projects/car.png'],
        detailedDescription: 'A comprehensive web application built with Oracle Apex for managing car insurance data. Features include policy management, claims processing, and comprehensive reporting.',
        features: ['Policy Management', 'Claims Processing', 'Reporting Dashboard', 'Data Analytics']
      }
    },
    {
      title: 'Stock Replacement Application',
      category: 'desktop',
      description: 'A C# application connected to a company\'s inventory database to speed up the stock replacement process through barcode reader integration.',
      image: '/images/projects/stock.png',
      technologies: ['C#', '.NET', 'SQL Server', 'Barcode Scanner', 'Inventory Management'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      stats: { stars: 8, forks: 2 },
      buttonType: 'pictures',
      modalContent: {
        images: ['/images/projects/stock.png', '/images/projects/stock.png', '/images/projects/stock.png'],
        detailedDescription: 'Desktop application built with C# and .NET for inventory management. Integrates with barcode scanners to streamline the stock replacement process and reduce manual errors.',
        features: ['Barcode Integration', 'Real-time Inventory Updates', 'Automated Reports', 'Database Synchronization']
      }
    },
    {
      title: 'Expense Tracker',
      category: 'web',
      description: 'Enterprise application built with ASP.NET Core using SyncFusion Component Library for comprehensive expense tracking and management.',
      image: '/images/projects/tracker.png',
      technologies: ['ASP.NET Core', 'C#', 'SyncFusion', 'Enterprise Application'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      stats: { stars: 6, forks: 1 },
      buttonType: 'live',
      modalContent: null
    },
    {
      title: 'Personal Portfolio',
      category: 'web',
      description: 'My personal portfolio website showcasing my projects, skills, and professional journey as a software developer.',
      image: '/images/icons/coding-icon.svg',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
      liveUrl: 'https://dinisfigueiras.pt',
      githubUrl: 'https://github.com/DinisFigueiras/portfolio',
      featured: true,
      stats: { stars: 15, forks: 4 },
      buttonType: 'live',
      modalContent: null
    }
  ];

  const categories = ['all', 'web', 'mobile', 'desktop'];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const openModal = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const getButtonText = (buttonType: string) => {
    switch (buttonType) {
      case 'pictures': return 'Pictures';
      case 'demo': return 'Demo';
      case 'live': return 'Live Demo';
      default: return 'View';
    }
  };

  const getButtonIcon = (buttonType: string) => {
    switch (buttonType) {
      case 'pictures': return Images;
      case 'demo': return Eye;
      case 'live': return ExternalLink;
      default: return Eye;
    }
  };

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
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-up">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            A collection of projects that showcase my experience in software development, from web applications to mobile apps and enterprise solutions.
          </p>
        </div>

        {/* Enhanced Category Filter */}
        <div className="flex justify-center mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="flex flex-wrap gap-2 p-2 bg-card/50 backdrop-blur-sm rounded-full border border-border">
            {categories.map((category) => (
              <Button
                key={category}
                variant="ghost"
                onClick={() => setSelectedCategory(category)}
                className={`capitalize transition-all duration-300 rounded-full ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90'
                    : 'hover:shadow-md hover:shadow-primary/10 hover:bg-primary/10'
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
              className={`group bg-card/80 backdrop-blur-sm rounded-lg border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 ${
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
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
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
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full font-medium">
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
                  {project.buttonType === 'live' ? (
                    <Button size="sm" variant="outline" asChild className="flex-1 group/btn">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2">
                        <ExternalLink size={14} className="group-hover/btn:rotate-45 transition-transform" />
                        <span>{getButtonText(project.buttonType)}</span>
                      </a>
                    </Button>
                  ) : (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => openModal(project)}
                      className="flex-1 group/btn flex items-center justify-center space-x-2"
                    >
                      {(() => {
                        const IconComponent = getButtonIcon(project.buttonType);
                        return <IconComponent size={14} className="group-hover/btn:scale-110 transition-transform" />;
                      })()}
                      <span>{getButtonText(project.buttonType)}</span>
                    </Button>
                  )}
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

      {/* Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-card border border-border rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-card border-b border-border p-4 flex items-center justify-between">
              <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
              <Button variant="ghost" size="sm" onClick={closeModal}>
                <X size={20} />
              </Button>
            </div>

            <div className="p-6">
              {selectedProject.modalContent && (
                <>
                  {/* Image Gallery */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                    {selectedProject.modalContent.images.map((image: string, index: number) => (
                      <div key={index} className="aspect-video bg-muted rounded-lg overflow-hidden">
                        <img
                          src={image}
                          alt={`${selectedProject.title} screenshot ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Detailed Description */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3">About this project</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedProject.modalContent.detailedDescription}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3">Key Features</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {selectedProject.modalContent.features.map((feature: string, index: number) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech: string, index: number) => (
                        <span
                          key={index}
                          className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
