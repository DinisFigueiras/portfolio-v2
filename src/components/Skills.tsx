
import { Code, Database, Cloud, Settings, Users, Palette } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend Development',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'Vue.js', level: 80 },
        { name: 'HTML/CSS', level: 95 }
      ]
    },
    {
      icon: Database,
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'PostgreSQL', level: 88 },
        { name: 'MongoDB', level: 82 },
        { name: 'REST APIs', level: 92 }
      ]
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      skills: [
        { name: 'AWS', level: 85 },
        { name: 'Docker', level: 88 },
        { name: 'Kubernetes', level: 75 },
        { name: 'CI/CD', level: 90 },
        { name: 'Terraform', level: 70 }
      ]
    },
    {
      icon: Settings,
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git', level: 95 },
        { name: 'Webpack', level: 85 },
        { name: 'Jest', level: 88 },
        { name: 'Redis', level: 80 },
        { name: 'GraphQL', level: 75 }
      ]
    },
    {
      icon: Users,
      title: 'Leadership & Soft Skills',
      skills: [
        { name: 'Team Leadership', level: 92 },
        { name: 'Mentoring', level: 90 },
        { name: 'Agile/Scrum', level: 88 },
        { name: 'Code Review', level: 95 },
        { name: 'Architecture Design', level: 85 }
      ]
    },
    {
      icon: Palette,
      title: 'Design & UX',
      skills: [
        { name: 'UI/UX Design', level: 80 },
        { name: 'Responsive Design', level: 92 },
        { name: 'Figma', level: 75 },
        { name: 'Accessibility', level: 85 },
        { name: 'Design Systems', level: 82 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit built over 24 years of hands-on development experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
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

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s`
                        }}
                      ></div>
                    </div>
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
              Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, 
              methodologies, and best practices to stay at the forefront of software development.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Machine Learning', 'Web3', 'Rust', 'Go', 'Microservices', 'JAMstack'].map((tech) => (
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
