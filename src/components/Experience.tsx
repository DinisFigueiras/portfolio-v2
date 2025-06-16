
import { useState, useEffect, useRef } from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const [visibleExperiences, setVisibleExperiences] = useState<number[]>([]);
  const [timelineProgress, setTimelineProgress] = useState(0);
  const experienceRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const experiences = [
    {
      title: 'Software Engineer',
      company: 'Hitachi Vantara',
      location: 'Portugal',
      period: '2023 - Present',
      description: 'At Hitachi Vantara, I work on building scalable microservices and REST APIs for enterprise-grade solutions. My responsibilities include integrating cloud services in Microsoft Azure, managing CI/CD pipelines, and writing unit-tested backend logic in Agile environments.',
      technologies: ['C#', 'Azure', 'Postman', '.NET', 'SQL', 'Azure Devops'],
      highlights: [
        'Designed and implemented RESTful APIs using C#',
        'Built and maintained CI/CD workflows with Azure DevOps',
        'Worked with Azure DataFactory and Databricks for data automation',
        'Followed GitHub Flow for collaborative development'
      ]
    },
    {
      title: 'Software Engineer',
      company: 'Capgemini Portugal',
      location: 'Portugal',
      period: '2022',
      description: 'At Capgemini, I was part of international projects developing backend components, performing data integration with Oracle tools, and creating business dashboards. I also expanded my skills with Azure certifications and internal Java/.NET training.',
      technologies: ['C#', '.NET', 'Oracle SQL', 'ODI 12c', 'Power BI', 'Azure', 'Java'],
      highlights: [
        'Implemented ETL processes using Oracle Data Integrator (ODI) 12c',
        'Developed data reports with Power BI',
        'Contributed to backend development using Java and .NET',
        'Gained certifications in Microsoft Azure'
      ]
    },
    {
      title: 'Software Engineer',
      company: 'Datazone Lda',
      location: 'Portugal',
      period: '2021',
      description: 'During my internship, I developed a complete insurance web application using Oracle Apex and supported several internal tools with C# and ASP.NET. I also worked on backend integration using SQL and MailKit for email automation.',
      technologies: ['C#', 'Oracle Apex','.NET', 'SQL Server', 'PL/SQL', 'MailKit'],
      highlights: [
        'Built a fully functional web app using Oracle Apex and SQL Data Modeler',
        'Created C# tools integrated with SQL Server and Azure services',
        'Implemented backend logic in PL/SQL, ASP.NET, and JavaScript',
        'Automated email operations using MailKit'
      ]
    },
    {
      title: 'Computer Technical Assistance',
      company: 'City Council',
      location: 'Portugal',
      period: '2018',
      description: 'I supported the IT department in maintaining hardware and configuring infrastructure across multiple municipal facilities. I helped restructure internal networks and ensured smooth operations in different city council departments.',
      technologies: ['Windows', 'System Support','Hardware Setup', 'Networking'],
      highlights: [
        'Managed the setup and maintenance of workstations and servers',
        'Assisted in the restructuring of internal network systems',
        'Supported IT logistics across various public offices'
      ]
    },
    {
      title: 'Computer Technical Assistance',
      company: 'CNJ-Informatica',
      location: 'Portugal',
      period: '2017',
      description: 'In my first internship, I developed internal tools for barcode validation and supplier management. I worked on automating internal operations and improving data workflows through C# and MySQL.',
      technologies: ['Winforms', 'Desktop App Development', 'C#', 'SQL'],
      highlights: [
        'Built barcode validation software using C# and MySQL',
        'Automated supplier data verification processes',
        'Strengthened programming fundamentals in early career stage'
      ]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Calculate timeline progress
      if (sectionRef.current) {
        const sectionRect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const sectionHeight = sectionRef.current.offsetHeight;

        // Calculate how much of the section has been scrolled through
        const scrollProgress = Math.max(0, Math.min(1,
          (windowHeight - sectionRect.top) / (windowHeight + sectionHeight)
        ));
        setTimelineProgress(scrollProgress);
      }

      // Check visibility of each experience item
      experienceRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          // More sensitive trigger point for smoother animations
          if (rect.top <= windowHeight * 0.8 && rect.bottom >= windowHeight * 0.2) {
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

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledHandleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, []);

  return (
    <section id="experience" className="py-20" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Years of growth, innovation, and continuous learning in software development.
          </p>
        </div>

        <div className="relative">
          {/* Animated Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-muted/30"></div>
          <div
            className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary transition-all duration-1000 ease-out"
            style={{
              height: `${timelineProgress * 100}%`,
              boxShadow: timelineProgress > 0 ? '0 0 20px rgba(var(--primary), 0.5)' : 'none'
            }}
          ></div>

          <div className="space-y-16">
            {experiences.map((exp, index) => {
              const isVisible = visibleExperiences.includes(index);
              const animationDelay = index * 200; // Staggered animation delay

              return (
                <div
                  key={index}
                  ref={el => experienceRefs.current[index] = el}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col md:space-x-8 transition-all duration-700 ease-out ${
                    isVisible
                      ? 'opacity-100 translate-y-0 scale-100'
                      : 'opacity-0 translate-y-12 scale-95'
                  }`}
                  style={{
                    transitionDelay: isVisible ? `${animationDelay}ms` : '0ms'
                  }}
                >
                  {/* Enhanced Timeline dot with pulse animation */}
                  <div className={`absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-background z-10 transition-all duration-700 ${
                    isVisible
                      ? 'bg-primary scale-100 shadow-lg shadow-primary/50'
                      : 'bg-muted scale-75'
                  }`}>

                  </div>

                  {/* Enhanced Content with staggered animations */}
                  <div className={`w-full md:w-1/2 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className={`bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-500 group hover:shadow-xl hover:shadow-primary/10 ${
                      isVisible ? 'hover:scale-105' : ''
                    }`}>
                      <div className={`flex items-start justify-between mb-4 transition-all duration-500 ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                      }`}
                      style={{
                        transitionDelay: isVisible ? `${animationDelay + 100}ms` : '0ms'
                      }}>
                        <div>
                          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                            {exp.title}
                          </h3>
                          <p className="text-primary font-medium">{exp.company}</p>
                        </div>
                        <ExternalLink className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:rotate-12" />
                      </div>

                      <div className={`flex items-center space-x-4 text-sm text-muted-foreground mb-4 transition-all duration-500 ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                      }`}
                      style={{
                        transitionDelay: isVisible ? `${animationDelay + 200}ms` : '0ms'
                      }}>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <p className={`text-muted-foreground mb-4 leading-relaxed transition-all duration-500 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                      }`}
                      style={{
                        transitionDelay: isVisible ? `${animationDelay + 300}ms` : '0ms'
                      }}>
                        {exp.description}
                      </p>

                      <div className={`mb-4 transition-all duration-500 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                      }`}
                      style={{
                        transitionDelay: isVisible ? `${animationDelay + 400}ms` : '0ms'
                      }}>
                        <h4 className="text-sm font-medium text-foreground mb-2">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {exp.highlights.map((highlight, i) => (
                            <li
                              key={i}
                              className={`text-sm text-muted-foreground flex items-start transition-all duration-300 ${
                                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
                              }`}
                              style={{
                                transitionDelay: isVisible ? `${animationDelay + 500 + (i * 100)}ms` : '0ms'
                              }}
                            >
                              <span className="text-primary mr-2 transition-colors duration-300">•</span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className={`flex flex-wrap gap-2 transition-all duration-500 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                      }`}
                      style={{
                        transitionDelay: isVisible ? `${animationDelay + 600}ms` : '0ms'
                      }}>
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className={`px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20 transition-all duration-300 hover:bg-primary/20 hover:scale-105 ${
                              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                            }`}
                            style={{
                              transitionDelay: isVisible ? `${animationDelay + 700 + (i * 50)}ms` : '0ms'
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
