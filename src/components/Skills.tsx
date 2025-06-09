
import { Code, Database, Settings, Palette } from 'lucide-react';
import { useState } from 'react';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend',
      skills: ['JavaScript', 'React', 'HTML5', 'CSS3', 'TypeScript'],
      color: 'from-blue-400 to-purple-500'
    },
    {
      icon: Database,
      title: 'Backend',
      skills: ['Node.js', 'Express', 'MongoDB', 'REST APIs', 'SQL'],
      color: 'from-green-400 to-blue-500'
    },
    {
      icon: Settings,
      title: 'Tools',
      skills: ['Git', 'VS Code', 'Webpack', 'NPM', 'Chrome DevTools'],
      color: 'from-orange-400 to-red-500'
    },
    {
      icon: Palette,
      title: 'Design',
      skills: ['Responsive Design', 'CSS Grid', 'Flexbox', 'Bootstrap', 'Figma'],
      color: 'from-pink-400 to-purple-500'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-card/30 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-up">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="group relative animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glowing background effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-10 rounded-lg blur transition-all duration-500`}></div>
              
              <div className="bg-card/80 backdrop-blur-sm p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-primary/10 group-hover:-translate-y-1 relative">
                <div className="flex items-center mb-6">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} mr-3`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                </div>

                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skill} 
                      className="relative overflow-hidden bg-secondary/30 px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-all duration-300 cursor-pointer group/skill"
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover/skill:opacity-20 transition-opacity duration-300`}></div>
                      <span className="relative z-10">{skill}</span>
                      
                      {/* Animated progress bar */}
                      <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-blue-400 transform scale-x-0 group-hover/skill:scale-x-100 transition-transform duration-500 origin-left"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced learning section */}
        <div className="mt-16 text-center">
          <div className="relative bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-2xl border border-primary/20 backdrop-blur-sm overflow-hidden">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 animate-pulse"></div>
            </div>
            
            <h3 className="text-2xl font-bold mb-4 relative z-10">Always Learning</h3>
            <p className="text-lg text-muted-foreground mb-6 relative z-10">
              I'm constantly expanding my skillset and staying up-to-date with the latest 
              technologies and best practices in web development.
            </p>
            <div className="flex flex-wrap justify-center gap-3 relative z-10">
              {['Python', 'Docker', 'AWS', 'Vue.js', 'GraphQL', 'Next.js'].map((tech, index) => (
                <span 
                  key={tech}
                  className="px-4 py-2 text-sm bg-accent/10 text-accent rounded-full border border-accent/20 hover:bg-accent/20 hover:scale-105 transition-all duration-300 cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
