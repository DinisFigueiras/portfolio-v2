
import { Code, Database, Settings, Cloud } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Programming Languages',
      skills: ['C#', '.NET', 'JavaScript', 'Java', 'Python', 'PHP']
    },
    {
      icon: Database,
      title: 'Databases',
      skills: ['SQL Server', 'Azure SQL', 'MySQL', 'MongoDB', 'Oracle SQL Developer', 'Oracle Apex']
    },
    {
      icon: Cloud,
      title: 'Cloud & Azure',
      skills: ['Microsoft Azure', 'Azure DevOps', 'Azure Functions', 'Azure SQL Database', 'Cloud Computing']
    },
    {
      icon: Settings,
      title: 'Development Tools',
      skills: ['Visual Studio', 'VS Code', 'Git', 'Android Studio', 'Swift', 'Agile Methodologies']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to build scalable software solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <category.icon className="w-8 h-8 text-primary mr-3 group-hover:scale-110 transition-transform duration-200" />
                <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill} 
                    className="bg-secondary/50 px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-lg border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">Continuous Learning</h3>
            <p className="text-lg text-muted-foreground mb-6">
              I'm constantly expanding my skillset and staying current with emerging technologies
              and industry best practices in software development.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['React', 'Node.js', 'Docker', 'Kubernetes', 'TypeScript', 'Microservices'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 text-sm bg-accent/10 text-accent rounded-full border border-accent/20 hover:bg-accent/20 transition-colors"
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
