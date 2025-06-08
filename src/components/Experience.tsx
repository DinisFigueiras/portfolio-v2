
import { useState, useEffect, useRef } from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const [visibleExperiences, setVisibleExperiences] = useState([0]);
  const experienceRefs = useRef<(HTMLDivElement | null)[]>([]);

  const experiences = [
    {
      title: 'Senior Technical Lead',
      company: 'Current Position',
      location: 'Remote',
      period: '2020 - Present',
      description: 'Leading cross-functional teams in developing scalable web applications. Responsible for technical architecture decisions, code reviews, and mentoring junior developers.',
      technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker'],
      highlights: [
        'Led team of 8 developers on enterprise-level projects',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
        'Architected microservices infrastructure serving 1M+ users'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'Tech Innovation Hub',
      location: 'Portugal',
      period: '2015 - 2020',
      description: 'Developed and maintained multiple web applications using modern JavaScript frameworks. Collaborated with design and product teams to deliver exceptional user experiences.',
      technologies: ['JavaScript', 'React', 'Python', 'PostgreSQL', 'Redis'],
      highlights: [
        'Built 15+ production applications from concept to deployment',
        'Reduced page load times by 40% through optimization',
        'Mentored 5 junior developers transitioning to senior roles'
      ]
    },
    {
      title: 'Web Developer',
      company: 'Digital Solutions Agency',
      location: 'Portugal',
      period: '2010 - 2015',
      description: 'Created responsive websites and web applications for diverse clients. Specialized in front-end development and user interface design.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL'],
      highlights: [
        'Delivered 50+ client projects with 98% satisfaction rate',
        'Pioneered responsive design adoption in the agency',
        'Established coding standards and best practices'
      ]
    },
    {
      title: 'Junior Developer',
      company: 'Web Development Studio',
      location: 'Portugal',
      period: '2016 - 2020',
      description: 'Started my journey in web development, learning foundational technologies and gaining experience in software development lifecycle.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'ASP.NET', 'SQL Server'],
      highlights: [
        'Rapidly progressed from intern to full-time developer',
        'Contributed to early e-commerce platform development',
        'Built foundation in software engineering principles'
      ]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      experienceRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          
          // Check if the element is in the viewport
          if (rect.top <= windowHeight * 0.75 && rect.bottom >= 0) {
            setVisibleExperiences(prev => {
              if (!prev.includes(index)) {
                return [...prev, index].sort((a, b) => a - b);
              }
              return prev;
            });
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Years of growth, innovation, and continuous learning in software development.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20"></div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                ref={el => experienceRefs.current[index] = el}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:space-x-8 transition-all duration-700 ${
                  visibleExperiences.includes(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
              >
                {/* Timeline dot */}
                <div className={`absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-background z-10 transition-all duration-500 ${
                  visibleExperiences.includes(index) 
                    ? 'bg-primary scale-100' 
                    : 'bg-muted scale-75'
                }`}></div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 group">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      <ExternalLink className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-foreground mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start">
                            <span className="text-primary mr-2">•</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
