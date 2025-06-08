
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Computer Science',
      institution: 'University of Porto',
      location: 'Porto, Portugal',
      period: '2018 - 2022',
      description: 'Comprehensive study of computer science fundamentals including algorithms, data structures, software engineering, and web development.',
      highlights: [
        'Graduated with honors',
        'Specialized in Web Development',
        'Final project focused on full-stack web applications'
      ]
    },
    {
      degree: 'Web Development Bootcamp',
      institution: 'FreeCodeCamp',
      location: 'Online',
      period: '2021',
      description: 'Intensive program covering modern web development technologies and practices.',
      highlights: [
        'Full-Stack Web Development Certificate',
        'Responsive Web Design Certificate',
        'JavaScript Algorithms and Data Structures'
      ]
    }
  ];

  const certifications = [
    'JavaScript ES6+ Certification',
    'React Development Certificate',
    'Responsive Web Design Certificate',
    'Git & GitHub Fundamentals'
  ];

  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My academic journey and continuous learning in software development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Formal Education */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <GraduationCap className="w-6 h-6 mr-3 text-primary" />
              Formal Education
            </h3>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div 
                  key={index}
                  className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <h4 className="text-xl font-bold text-foreground mb-2">{edu.degree}</h4>
                  <p className="text-primary font-medium mb-4">{edu.institution}</p>
                  
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{edu.location}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {edu.description}
                  </p>

                  <div>
                    <h5 className="text-sm font-medium text-foreground mb-2">Key Achievements:</h5>
                    <ul className="space-y-1">
                      {edu.highlights.map((highlight, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start">
                          <span className="text-primary mr-2">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <Award className="w-6 h-6 mr-3 text-primary" />
              Certifications
            </h3>
            
            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div 
                    key={index}
                    className="flex items-center p-4 bg-primary/5 rounded-lg border border-primary/20 hover:bg-primary/10 transition-colors"
                  >
                    <Award className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    <span className="font-medium text-foreground">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-lg border border-primary/20">
              <h4 className="text-lg font-bold mb-3">Continuous Learning</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                I believe in lifelong learning and regularly participate in online courses, 
                workshops, and developer communities to stay current with emerging technologies 
                and industry best practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
