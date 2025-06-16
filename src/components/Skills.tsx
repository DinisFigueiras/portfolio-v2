
import { Code, Database, Settings, Cloud } from 'lucide-react';
import { useState } from 'react';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      icon: Code,
      title: 'Programming Languages',
      skills: ['C#', '.NET', 'JavaScript', 'Java', 'Python', 'PHP'],
      color: 'from-blue-400 to-purple-500'
    },
    {
      icon: Database,
      title: 'Databases',
      skills: ['SQL Server', 'Azure SQL', 'MySQL', 'MongoDB', 'Oracle SQL Developer', 'Oracle Apex'],
      color: 'from-green-400 to-blue-500'
    },
    {
      icon: Cloud,
      title: 'Cloud & Azure',
      skills: ['Microsoft Azure', 'Azure DevOps', 'Azure Functions', 'Azure SQL Database', 'Cloud Computing'],
      color: 'from-cyan-400 to-blue-500'
    },
    {
      icon: Settings,
      title: 'Development Tools',
      skills: ['Visual Studio', 'VS Code', 'Git', 'Android Studio', 'Swift', 'Agile Methodologies'],
      color: 'from-orange-400 to-red-500'
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
            Technologies and tools I use to build scalable software solutions.
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
              
              <div className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/10 group-hover:-translate-y-1 relative">
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

        
      </div>
    </section>
  );
};

export default Skills;
